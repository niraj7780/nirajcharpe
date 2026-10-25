import { recordMonitorEvent } from "@/lib/monitor/buffer";
import { getMonitorConfig } from "@/lib/monitor/config";
import { notifyVisitorEvent } from "@/lib/monitor/notify";
import {
  cleanPath,
  cleanReferrerHost,
  cleanString,
  getClientIp,
  getRateLimitKey,
  handleRouteError,
  hashIp,
  isTrustedOrigin,
  isValidSessionId,
  jsonError,
  jsonOk,
  readJsonBody,
  truncateIp,
} from "@/lib/monitor/request";
import { checkRateLimit } from "@/lib/monitor/rate-limit";
import { lookupNetworkLocation } from "@/lib/monitor/network";
import type { NetworkLocation, VisitorEventType } from "@/lib/monitor/types";

export async function POST(request: Request) {
  if (!isTrustedOrigin(request)) {
    return jsonError(403, "origin_not_allowed", "Request origin is not allowed.");
  }

  const config = getMonitorConfig();
  if (!config.analyticsEnabled) {
    return jsonOk();
  }

  const rateKey = getRateLimitKey(request);
  const limit = checkRateLimit(
    `event:${rateKey}`,
    config.eventRateLimitPerMinute,
    60 * 1000
  );
  if (!limit.allowed) {
    return jsonError(429, "rate_limited", "Too many events.", {
      "Retry-After": String(limit.retryAfterSeconds),
    });
  }

  let body: Record<string, unknown>;
  try {
    body = await readJsonBody<Record<string, unknown>>(request, config.maxJsonBytes);
  } catch (error) {
    return handleRouteError(error);
  }

  const ALLOWED_EVENT_TYPES = new Set<VisitorEventType>([
    "session_start",
    "page_view",
    "project_click",
    "camera_activated",
    "camera_stopped",
  ]);

  if (
    typeof body.type !== "string" ||
    !ALLOWED_EVENT_TYPES.has(body.type as VisitorEventType)
  ) {
    return jsonError(400, "invalid_event", "Unknown event type.");
  }

  if (!isValidSessionId(body.sessionId)) {
    return jsonError(400, "invalid_session", "Invalid session identifier.");
  }

  const consent = cleanString(body.consent, 20);
  if (consent !== "granted") {
    return jsonError(
      403,
      "consent_required",
      "Session analytics consent is required."
    );
  }

  const type = body.type as VisitorEventType;
  const project =
    type === "project_click" ? cleanString(body.project, 80) : undefined;
  if (type === "project_click" && !project) {
    return jsonError(400, "invalid_project", "Project name is required.");
  }

  const device = cleanString(body.device, 20);
  const browser = cleanString(body.browser, 60);
  const os = cleanString(body.os, 60);
  const ip = getClientIp(request);
  const ipHash = ip ? hashIp(ip) : "unavailable";

  let network: NetworkLocation | null = null;
  if (config.approximateLocationEnabled && ip && type === "session_start") {
    network = await lookupNetworkLocation(ip, ipHash);
  }

  const truncatedIp =
    config.ipProcessingEnabled && ip ? truncateIp(ip) : null;

  const event = recordMonitorEvent({
    sessionId: body.sessionId,
    type,
    path: cleanPath(body.path),
    device: device && ["desktop", "tablet", "mobile"].includes(device)
      ? device
      : undefined,
    browser: browser,
    os: os,
    referrer: cleanReferrerHost(body.referrer),
    consent,
    project,
    network,
  });

  const result = await notifyVisitorEvent(event, {
    ipHash,
    truncatedIp,
  });

  return jsonOk({ delivered: result.delivered });
}
