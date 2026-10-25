"use client";

import type {
  MediaKind,
  PublicMonitorConfig,
  VisitorEventType,
} from "@/lib/monitor/types";

const CONSENT_KEY = "nc-monitor-consent";
const SESSION_KEY = "nc-monitor-session";
const STARTED_KEY = "nc-monitor-started";

let memorySessionId: string | null = null;

export type AnalyticsConsent = "granted" | "declined";

export interface DeviceInfo {
  device: "desktop" | "tablet" | "mobile";
  browser?: string;
  os?: string;
}

export async function fetchMonitorConfig(): Promise<PublicMonitorConfig> {
  const response = await fetch("/api/monitor/config", {
    cache: "no-store",
    credentials: "same-origin",
  });
  if (!response.ok) {
    throw new Error("Monitor configuration is unavailable.");
  }
  return (await response.json()) as PublicMonitorConfig;
}

export function getAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = window.sessionStorage.getItem(CONSENT_KEY);
    return value === "granted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
}

export function setAnalyticsConsent(value: AnalyticsConsent) {
  try {
    window.sessionStorage.setItem(CONSENT_KEY, value);
  } catch {
    return;
  }
}

function randomId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
    const bytes = new Uint8Array(16);
    (crypto as Crypto).getRandomValues(bytes);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

export function getOrCreateSessionId(): string {
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing && /^[0-9a-f-]{16,64}$/i.test(existing)) {
      return existing;
    }
    const created = randomId();
    window.sessionStorage.setItem(SESSION_KEY, created);
    return created;
  } catch {
    if (!memorySessionId) {
      memorySessionId = randomId();
    }
    return memorySessionId;
  }
}

export function markSessionStarted(sessionId: string): boolean {
  try {
    const key = `${STARTED_KEY}:${sessionId}`;
    if (window.sessionStorage.getItem(key)) {
      return false;
    }
    window.sessionStorage.setItem(key, "1");
    return true;
  } catch {
    return true;
  }
}

function detectBrowser(userAgent: string): string | undefined {
  const rules: Array<[RegExp, string]> = [
    [/Edg\/(\d+)/, "Edge"],
    [/OPR\/(\d+)/, "Opera"],
    [/SamsungBrowser\/(\d+)/, "Samsung Internet"],
    [/Firefox\/(\d+)/, "Firefox"],
    [/CriOS\/(\d+)/, "Chrome"],
    [/FxiOS\/(\d+)/, "Firefox"],
    [/Chrome\/(\d+)/, "Chrome"],
    [/Version\/(\d+).*Safari/, "Safari"],
    [/Safari\/(\d+)/, "Safari"],
  ];

  for (const [pattern, name] of rules) {
    const match = userAgent.match(pattern);
    if (match?.[1]) {
      return `${name} ${match[1]}`;
    }
  }
  return undefined;
}

function detectOs(userAgent: string, platform: string): string | undefined {
  const android = userAgent.match(/Android\s+([\d.]+)/);
  if (android?.[1]) {
    return `Android ${android[1].split(".")[0]}`;
  }
  const ios = userAgent.match(/(?:iPhone OS|CPU OS)\s+([\d_]+)/);
  if (ios?.[1]) {
    return `iOS ${ios[1].replace(/_/g, ".").split(".")[0]}`;
  }
  if (/Windows NT/.test(userAgent) || /^Win/.test(platform)) {
    return "Windows";
  }
  if (/Mac OS X/.test(userAgent) || /^Mac/.test(platform)) {
    return "macOS";
  }
  if (/CrOS/.test(userAgent)) {
    return "ChromeOS";
  }
  if (/Linux/.test(userAgent) || /^Linux/.test(platform)) {
    return "Linux";
  }
  return platform ? platform.slice(0, 40) : undefined;
}

export function collectDeviceInfo(): DeviceInfo {
  if (typeof navigator === "undefined") {
    return { device: "desktop" };
  }

  const userAgent = navigator.userAgent;
  const navigatorWithHints = navigator as Navigator & {
    userAgentData?: { platform?: string; mobile?: boolean };
    platform?: string;
  };
  const platform =
    navigatorWithHints.userAgentData?.platform ??
    navigatorWithHints.platform ??
    "";
  const touchMac =
    /Macintosh/.test(userAgent) && navigator.maxTouchPoints > 1;
  const tablet = /iPad|Tablet|PlayBook|Silk/i.test(userAgent) || touchMac;
  const mobile =
    !tablet &&
    (navigatorWithHints.userAgentData?.mobile === true ||
      /Mobi|Android|iPhone|iPod/i.test(userAgent));

  return {
    device: tablet ? "tablet" : mobile ? "mobile" : "desktop",
    browser: detectBrowser(userAgent),
    os: detectOs(userAgent, platform),
  };
}

export function analyticsEventsAllowed(
  config: PublicMonitorConfig
): boolean {
  if (!config.analyticsEnabled) {
    return false;
  }
  const consent = getAnalyticsConsent();
  return (
    consent === "granted" ||
    (consent === null && !config.analyticsConsentRequired)
  );
}

export interface MonitorEventPayload {
  type: VisitorEventType;
  project?: string;
}

export async function sendOptionalMonitorEvent(
  config: PublicMonitorConfig,
  payload: MonitorEventPayload
): Promise<void> {
  if (!analyticsEventsAllowed(config)) {
    return;
  }
  await sendMonitorEvent(payload);
}

export function buildEventBody(
  payload: MonitorEventPayload
): Record<string, unknown> {
  const device = collectDeviceInfo();
  return {
    type: payload.type,
    sessionId: getOrCreateSessionId(),
    path: window.location.pathname,
    referrer: document.referrer,
    device: device.device,
    browser: device.browser,
    os: device.os,
    consent: "granted",
    ...(payload.project ? { project: payload.project } : {}),
  };
}

export async function sendMonitorEvent(
  payload: MonitorEventPayload
): Promise<void> {
  await fetch("/api/monitor/event", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(buildEventBody(payload)),
    cache: "no-store",
    credentials: "same-origin",
    keepalive: true,
  });
}

function extensionFor(mimeType: string): string {
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "audio/webm": "webm",
    "audio/ogg": "ogg",
    "audio/mp4": "m4a",
    "audio/x-m4a": "m4a",
    "audio/mpeg": "mp3",
    "audio/wav": "wav",
    "audio/aac": "aac",
    "video/webm": "webm",
    "video/mp4": "mp4",
    "video/quicktime": "mov",
  };
  return map[mimeType.split(";")[0].trim().toLowerCase()] ?? "bin";
}

async function responseError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as { message?: string };
    if (typeof data.message === "string" && data.message.trim()) {
      return data.message;
    }
  } catch {
    return `The request failed with status ${response.status}.`;
  }
  return `The request failed with status ${response.status}.`;
}

export async function submitMedia(
  kind: MediaKind,
  blob: Blob,
  durationMs?: number
): Promise<void> {
  const form = new FormData();
  form.append("kind", kind);
  form.append("sessionId", getOrCreateSessionId());
  form.append("submissionId", randomId());
  form.append("confirmed", "true");
  form.append("path", window.location.pathname);
  if (typeof durationMs === "number") {
    form.append("durationMs", String(Math.round(durationMs)));
  }
  form.append(
    "file",
    new File([blob], `visitor-${kind}.${extensionFor(blob.type)}`, {
      type: blob.type,
    })
  );

  const response = await fetch("/api/monitor/media", {
    method: "POST",
    body: form,
    cache: "no-store",
    credentials: "same-origin",
  });

  if (!response.ok) {
    throw new Error(await responseError(response));
  }
}

export interface LocationSubmission {
  latitude: number;
  longitude: number;
  accuracyM: number | null;
  live: boolean;
}

export async function submitLocation(
  location: LocationSubmission,
  signal?: AbortSignal
): Promise<void> {
  const response = await fetch("/api/monitor/location", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      latitude: location.latitude,
      longitude: location.longitude,
      accuracy: location.accuracyM,
      sessionId: getOrCreateSessionId(),
      submissionId: randomId(),
      confirmed: true,
      live: location.live,
      path: window.location.pathname,
    }),
    cache: "no-store",
    credentials: "same-origin",
    signal,
  });

  if (!response.ok) {
    throw new Error(await responseError(response));
  }
}

export function formatBytes(bytes: number): string {
  if (bytes < 1000) return `${bytes} B`;
  if (bytes < 1_000_000) return `${Math.round(bytes / 1000)} KB`;
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}

export function formatDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function formatUtc(value: string | number | Date): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }
  return `${date.toLocaleString("en-GB", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })} UTC`;
}
