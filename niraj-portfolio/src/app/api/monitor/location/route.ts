import { recordMonitorEvent } from "@/lib/monitor/buffer";
import { getMonitorConfig } from "@/lib/monitor/config";
import { claimSubmissionOnce } from "@/lib/monitor/dedupe";
import { formatLocationMessage } from "@/lib/monitor/messages";
import {
  cleanPath,
  getRateLimitKey,
  handleRouteError,
  isTrustedOrigin,
  isValidSessionId,
  jsonError,
  jsonOk,
  readJsonBody,
} from "@/lib/monitor/request";
import { checkRateLimit } from "@/lib/monitor/rate-limit";
import { sendTelegramMessage } from "@/lib/monitor/telegram";

export async function POST(request: Request) {
  if (!isTrustedOrigin(request)) {
    return jsonError(403, "origin_not_allowed", "Request origin is not allowed.");
  }

  const config = getMonitorConfig();
  if (!config.locationEnabled) {
    return jsonError(
      403,
      "location_disabled",
      "Location sharing is not enabled on this deployment."
    );
  }

  const limit = checkRateLimit(
    `location:${getRateLimitKey(request)}`,
    config.locationRateLimitPerMinute,
    60 * 1000
  );
  if (!limit.allowed) {
    return jsonError(429, "rate_limited", "Too many location updates.", {
      "Retry-After": String(limit.retryAfterSeconds),
    });
  }

  let body: {
    latitude?: unknown;
    longitude?: unknown;
    accuracy?: unknown;
    sessionId?: unknown;
    submissionId?: unknown;
    confirmed?: unknown;
    live?: unknown;
    path?: unknown;
  };
  try {
    body = await readJsonBody(request, config.maxJsonBytes);
  } catch (error) {
    return handleRouteError(error);
  }

  if (body.confirmed !== true) {
    return jsonError(
      400,
      "confirmation_required",
      "Explicit confirmation is required."
    );
  }

  const live = body.live === true;
  if (live && !config.liveLocationEnabled) {
    return jsonError(
      403,
      "live_location_disabled",
      "Live location tracking is not enabled."
    );
  }

  if (!isValidSessionId(body.sessionId)) {
    return jsonError(400, "invalid_session", "Invalid session identifier.");
  }

  if (!isValidSessionId(body.submissionId)) {
    return jsonError(
      400,
      "invalid_submission",
      "Invalid submission identifier."
    );
  }

  const latitude = body.latitude;
  const longitude = body.longitude;
  if (
    typeof latitude !== "number" ||
    !Number.isFinite(latitude) ||
    latitude < -90 ||
    latitude > 90 ||
    typeof longitude !== "number" ||
    !Number.isFinite(longitude) ||
    longitude < -180 ||
    longitude > 180
  ) {
    return jsonError(
      400,
      "invalid_coordinates",
      "Valid latitude and longitude are required."
    );
  }

  let accuracyM: number | null = null;
  if (body.accuracy !== undefined && body.accuracy !== null) {
    if (
      typeof body.accuracy !== "number" ||
      !Number.isFinite(body.accuracy) ||
      body.accuracy < 0 ||
      body.accuracy > 100000
    ) {
      return jsonError(400, "invalid_accuracy", "Invalid accuracy value.");
    }
    accuracyM = body.accuracy;
  }

  if (
    !claimSubmissionOnce(`location:${body.submissionId}`, 10 * 60 * 1000)
  ) {
    return jsonOk({ deduplicated: true });
  }

  const timestamp = new Date().toISOString();
  const outcome = await sendTelegramMessage(
    formatLocationMessage({
      latitude,
      longitude,
      accuracyM,
      timestamp,
      sessionId: body.sessionId,
      live,
    })
  );

  recordMonitorEvent({
    sessionId: body.sessionId,
    type: live ? "location_live" : "location_shared",
    path: cleanPath(body.path),
    submission: {
      kind: "location",
      status: outcome.ok ? "sent" : "failed",
    },
  });

  if (!outcome.ok) {
    await sendTelegramMessage(
      [
        live ? "LIVE LOCATION DELIVERY FAILED" : "LOCATION DELIVERY FAILED",
        "",
        `Session: ${body.sessionId}`,
        `Timestamp (UTC): ${timestamp}`,
        "The location payload was discarded and was not stored.",
      ].join("\n")
    );
    return jsonError(
      502,
      "delivery_failed",
      "Telegram delivery failed. The location was discarded."
    );
  }

  return jsonOk();
}
