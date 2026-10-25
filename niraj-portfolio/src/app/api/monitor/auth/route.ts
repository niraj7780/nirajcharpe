import { cookies } from "next/headers";
import { getMonitorConfig } from "@/lib/monitor/config";
import {
  createOwnerCookieValue,
  getOwnerCookieOptions,
  OWNER_COOKIE_NAME,
  verifyOwnerToken,
} from "@/lib/monitor/auth";
import {
  cleanString,
  getRateLimitKey,
  handleRouteError,
  isTrustedOrigin,
  jsonError,
  jsonOk,
  readJsonBody,
} from "@/lib/monitor/request";
import { checkRateLimit } from "@/lib/monitor/rate-limit";

export async function POST(request: Request) {
  if (!isTrustedOrigin(request)) {
    return jsonError(403, "origin_not_allowed", "Request origin is not allowed.");
  }

  const config = getMonitorConfig();
  if (!config.ownerPanelEnabled) {
    return jsonError(404, "not_found", "Not found.");
  }

  const limit = checkRateLimit(
    `login:${getRateLimitKey(request)}`,
    config.loginRateLimit,
    config.loginRateWindowMs
  );
  if (!limit.allowed) {
    return jsonError(429, "rate_limited", "Too many login attempts.", {
      "Retry-After": String(limit.retryAfterSeconds),
    });
  }

  let body: { token?: unknown };
  try {
    body = await readJsonBody(request, config.maxJsonBytes);
  } catch (error) {
    return handleRouteError(error);
  }

  const token = cleanString(body.token, 400);
  if (!token || !verifyOwnerToken(token)) {
    return jsonError(401, "invalid_credentials", "Invalid access token.");
  }

  const cookieValue = createOwnerCookieValue();
  if (!cookieValue) {
    return jsonError(404, "not_found", "Not found.");
  }

  const cookieStore = await cookies();
  cookieStore.set(OWNER_COOKIE_NAME, cookieValue, getOwnerCookieOptions());

  return jsonOk();
}

export async function DELETE(request: Request) {
  if (!isTrustedOrigin(request)) {
    return jsonError(403, "origin_not_allowed", "Request origin is not allowed.");
  }

  const cookieStore = await cookies();
  cookieStore.delete(OWNER_COOKIE_NAME);

  return jsonOk();
}
