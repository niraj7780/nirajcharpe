import { createHmac, randomBytes } from "node:crypto";
import { isIP } from "node:net";
import { getMonitorConfig } from "@/lib/monitor/config";

export class MonitorRequestError extends Error {
  status: number;
  code: string;

  constructor(status: number, code: string, message: string) {
    super(message);
    this.name = "MonitorRequestError";
    this.status = status;
    this.code = code;
  }
}

function getHashSecret(): Buffer {
  const globalStore = globalThis as typeof globalThis & {
    __nirajMonitorHashSecretV1?: Buffer;
  };
  if (!globalStore.__nirajMonitorHashSecretV1) {
    globalStore.__nirajMonitorHashSecretV1 = randomBytes(32);
  }
  return globalStore.__nirajMonitorHashSecretV1;
}

function normalizeIp(value: string | null): string | null {
  if (!value) {
    return null;
  }

  let candidate = value.split(",")[0].trim().replace(/^"|"$/g, "");

  if (candidate.startsWith("[")) {
    const closing = candidate.indexOf("]");
    if (closing > 0) {
      candidate = candidate.slice(1, closing);
    }
  } else if (candidate.includes(".") && candidate.includes(":")) {
    candidate = candidate.slice(0, candidate.lastIndexOf(":"));
  }

  if (candidate.toLowerCase().startsWith("::ffff:")) {
    const mapped = candidate.slice(7);
    if (isIP(mapped) === 4) {
      return mapped;
    }
  }

  return isIP(candidate) ? candidate : null;
}

export function getClientIp(request: Request): string | null {
  const headers = request.headers;
  const trustProxy =
    process.env.TRUST_PROXY_HEADERS?.trim().toLowerCase() === "true";

  if (trustProxy) {
    return normalizeIp(
      headers.get("x-forwarded-for") ??
        headers.get("x-real-ip") ??
        headers.get("x-client-ip")
    );
  }

  if (process.env.VERCEL) {
    return normalizeIp(
      headers.get("x-real-ip") ?? headers.get("x-forwarded-for")
    );
  }

  if (process.env.NETLIFY) {
    return normalizeIp(headers.get("x-nf-client-connection-ip"));
  }

  return null;
}

export function hashIp(ip: string): string {
  return createHmac("sha256", getHashSecret())
    .update(ip)
    .digest("hex")
    .slice(0, 32);
}

export function truncateIp(ip: string): string {
  const version = isIP(ip);
  if (version === 4) {
    const parts = ip.split(".");
    return `${parts[0]}.${parts[1]}.${parts[2]}.0/24`;
  }
  if (version === 6) {
    const [head, tail] = ip.split("::");
    const headParts = head ? head.split(":").filter(Boolean) : [];
    const tailParts = tail ? tail.split(":").filter(Boolean) : [];
    if (headParts.some((part) => part.includes("."))) {
      return `${headParts.slice(0, 3).join(":")}::/48`;
    }
    const missing = Math.max(0, 8 - headParts.length - tailParts.length);
    const groups = [
      ...headParts,
      ...Array.from({ length: missing }, () => "0"),
      ...tailParts,
    ];
    return `${groups.slice(0, 3).join(":")}::/48`;
  }
  return "unavailable";
}

export function getRateLimitKey(request: Request): string {
  const ip = getClientIp(request);
  return ip ? `ip:${hashIp(ip)}` : "ip:unavailable";
}

export function isTrustedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");

  if (fetchSite === "cross-site") {
    return false;
  }
  if (!origin) {
    return true;
  }
  if (origin === "null") {
    return false;
  }

  try {
    const parsedOrigin = new URL(origin);
    const requestUrl = new URL(request.url);
    if (parsedOrigin.host === requestUrl.host) {
      return true;
    }
    return parsedOrigin.origin === getMonitorConfig().siteUrl;
  } catch {
    return false;
  }
}

export function cleanString(
  value: unknown,
  maxLength: number
): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  const cleaned = value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) {
    return undefined;
  }
  return cleaned.slice(0, maxLength);
}

export function cleanPath(value: unknown): string {
  const path = cleanString(value, 300) ?? "/";
  const withoutQuery = path.split("?")[0].split("#")[0];
  return withoutQuery.startsWith("/") ? withoutQuery : "/";
}

export function cleanReferrerHost(value: unknown): string | undefined {
  const raw = cleanString(value, 400);
  if (!raw) {
    return undefined;
  }
  try {
    const url = new URL(raw.includes("://") ? raw : `https://${raw}`);
    return url.hostname.toLowerCase().slice(0, 253) || undefined;
  } catch {
    return undefined;
  }
}

export function isValidSessionId(value: unknown): value is string {
  return typeof value === "string" && /^[0-9a-f-]{16,64}$/i.test(value);
}

export async function readJsonBody<T>(
  request: Request,
  maxBytes: number
): Promise<T> {
  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    throw new MonitorRequestError(
      415,
      "unsupported_media_type",
      "Expected an application/json request body."
    );
  }

  const declaredLength = Number.parseInt(
    request.headers.get("content-length") ?? "",
    10
  );
  if (Number.isFinite(declaredLength) && declaredLength > maxBytes) {
    throw new MonitorRequestError(
      413,
      "payload_too_large",
      "Request body is too large."
    );
  }

  const text = await request.text();
  if (Buffer.byteLength(text, "utf8") > maxBytes) {
    throw new MonitorRequestError(
      413,
      "payload_too_large",
      "Request body is too large."
    );
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    throw new MonitorRequestError(
      400,
      "invalid_json",
      "Request body is not valid JSON."
    );
  }

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    throw new MonitorRequestError(
      400,
      "invalid_body",
      "Request body must be a JSON object."
    );
  }

  return parsed as T;
}

export function jsonError(
  status: number,
  code: string,
  message: string,
  headers?: HeadersInit
): Response {
  return Response.json(
    { ok: false, error: code, message },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
        ...headers,
      },
    }
  );
}

export function jsonOk(data: Record<string, unknown> = {}): Response {
  return Response.json(
    { ok: true, ...data },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export function handleRouteError(error: unknown): Response {
  if (error instanceof MonitorRequestError) {
    return jsonError(error.status, error.code, error.message);
  }
  return jsonError(
    500,
    "internal_error",
    "The request could not be processed."
  );
}
