import type { PublicMonitorConfig } from "@/lib/monitor/types";

const DEFAULT_SITE_URL = "https://nirajcharpe.is-a.dev";
const TELEGRAM_TOKEN_PATTERN = /^\d{5,}:[A-Za-z0-9_-]{20,}$/;
const TELEGRAM_CHAT_PATTERN = /^(-?\d{1,20}|@[A-Za-z0-9_]{5,64})$/;

function readBoolean(name: string, fallback = false): boolean {
  const value = process.env[name];
  if (value === undefined || value.trim() === "") {
    return fallback;
  }
  return value.trim().toLowerCase() === "true" || value.trim() === "1";
}

function readInteger(
  name: string,
  fallback: number,
  minimum: number,
  maximum: number
): number {
  const value = Number.parseInt(process.env[name] ?? "", 10);
  if (!Number.isFinite(value)) {
    return fallback;
  }
  return Math.min(maximum, Math.max(minimum, value));
}

function readSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) {
    return DEFAULT_SITE_URL;
  }
  try {
    return new URL(value).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function readGeolocationEndpoint(): string | null {
  const value =
    process.env.IP_GEOLOCATION_ENDPOINT?.trim() ||
    "https://ipwho.is/{ip}";
  try {
    const parsed = new URL(value.replace("{ip}", "127.0.0.1"));
    if (parsed.protocol !== "https:") {
      return null;
    }
    return value;
  } catch {
    return null;
  }
}

export interface MonitorConfig {
  siteUrl: string;
  analyticsEnabled: boolean;
  analyticsConsentRequired: boolean;
  telegramToken: string;
  telegramChatId: string;
  telegramConfigured: boolean;
  telegramEnabled: boolean;
  ipProcessingEnabled: boolean;
  approximateLocationEnabled: boolean;
  geolocationEndpoint: string | null;
  mediaEnabled: boolean;
  locationEnabled: boolean;
  liveLocationEnabled: boolean;
  ownerPanelEnabled: boolean;
  ownerPanelToken: string;
  eventBufferSize: number;
  eventTtlMs: number;
  maxJsonBytes: number;
  photoMaxBytes: number;
  audioMaxBytes: number;
  videoMaxBytes: number;
  maxAudioDurationMs: number;
  maxVideoDurationMs: number;
  maxLiveLocationMinutes: number;
  liveLocationIntervalMs: number;
  sessionNotifyCooldownSec: number;
  pageNotifyCooldownSec: number;
  projectNotifyCooldownSec: number;
  cameraNotifyCooldownSec: number;
  eventRateLimitPerMinute: number;
  mediaRateLimitPerMinute: number;
  locationRateLimitPerMinute: number;
  loginRateLimit: number;
  loginRateWindowMs: number;
  sseMaxDurationMs: number;
  sseHeartbeatMs: number;
  telegramTimeoutMs: number;
  ipGeoTimeoutMs: number;
  ipGeoCacheTtlMs: number;
}

export function getMonitorConfig(): MonitorConfig {
  const analyticsEnabled = readBoolean("ANALYTICS_ENABLED");
  const telegramToken = process.env.TELEGRAM_BOT_TOKEN?.trim() ?? "";
  const telegramChatId = process.env.TELEGRAM_CHAT_ID?.trim() ?? "";
  const telegramConfigured =
    TELEGRAM_TOKEN_PATTERN.test(telegramToken) &&
    TELEGRAM_CHAT_PATTERN.test(telegramChatId);
  const telegramEnabled =
    telegramConfigured && readBoolean("TELEGRAM_NOTIFICATIONS_ENABLED");
  const ipProcessingEnabled =
    analyticsEnabled && readBoolean("IP_LOGGING_ENABLED");
  const ownerPanelToken = process.env.OWNER_PANEL_TOKEN?.trim() ?? "";

  return {
    siteUrl: readSiteUrl(),
    analyticsEnabled,
    analyticsConsentRequired: readBoolean(
      "ANALYTICS_CONSENT_REQUIRED",
      true
    ),
    telegramToken,
    telegramChatId,
    telegramConfigured,
    telegramEnabled,
    ipProcessingEnabled,
    approximateLocationEnabled:
      ipProcessingEnabled && readBoolean("APPROX_LOCATION_ENABLED"),
    geolocationEndpoint: readGeolocationEndpoint(),
    mediaEnabled:
      readBoolean("MEDIA_SUBMISSION_ENABLED") && telegramConfigured,
    locationEnabled:
      readBoolean("LOCATION_SHARING_ENABLED") && telegramConfigured,
    liveLocationEnabled:
      readBoolean("LOCATION_SHARING_ENABLED") &&
      readBoolean("LIVE_LOCATION_TRACKING_ENABLED") &&
      telegramConfigured,
    ownerPanelEnabled: ownerPanelToken.length >= 24,
    ownerPanelToken,
    eventBufferSize: readInteger("EVENT_BUFFER_SIZE", 200, 10, 2000),
    eventTtlMs:
      readInteger("EVENT_TTL_SECONDS", 1800, 60, 86400) * 1000,
    maxJsonBytes: readInteger("MAX_JSON_BYTES", 8192, 1024, 65536),
    photoMaxBytes: readInteger(
      "PHOTO_MAX_BYTES",
      5_000_000,
      100_000,
      10_000_000
    ),
    audioMaxBytes: readInteger(
      "AUDIO_MAX_BYTES",
      4_000_000,
      100_000,
      20_000_000
    ),
    videoMaxBytes: readInteger(
      "VIDEO_MAX_BYTES",
      4_000_000,
      100_000,
      20_000_000
    ),
    maxAudioDurationMs:
      readInteger("AUDIO_MAX_DURATION_SECONDS", 30, 5, 120) * 1000,
    maxVideoDurationMs:
      readInteger("VIDEO_MAX_DURATION_SECONDS", 20, 5, 60) * 1000,
    maxLiveLocationMinutes: readInteger(
      "LIVE_LOCATION_MAX_MINUTES",
      5,
      1,
      30
    ),
    liveLocationIntervalMs:
      readInteger("LIVE_LOCATION_INTERVAL_SECONDS", 15, 5, 60) * 1000,
    sessionNotifyCooldownSec: readInteger(
      "SESSION_NOTIFY_COOLDOWN_SECONDS",
      600,
      0,
      86400
    ),
    pageNotifyCooldownSec: readInteger(
      "PAGE_NOTIFY_COOLDOWN_SECONDS",
      120,
      0,
      86400
    ),
    projectNotifyCooldownSec: readInteger(
      "PROJECT_NOTIFY_COOLDOWN_SECONDS",
      600,
      0,
      86400
    ),
    cameraNotifyCooldownSec: readInteger(
      "CAMERA_NOTIFY_COOLDOWN_SECONDS",
      30,
      0,
      3600
    ),
    eventRateLimitPerMinute: readInteger(
      "EVENT_RATE_LIMIT_PER_MINUTE",
      60,
      5,
      600
    ),
    mediaRateLimitPerMinute: readInteger(
      "MEDIA_RATE_LIMIT_PER_MINUTE",
      5,
      1,
      30
    ),
    locationRateLimitPerMinute: readInteger(
      "LOCATION_RATE_LIMIT_PER_MINUTE",
      6,
      1,
      60
    ),
    loginRateLimit: readInteger("LOGIN_RATE_LIMIT", 5, 1, 30),
    loginRateWindowMs: 15 * 60 * 1000,
    sseMaxDurationMs: readInteger(
      "SSE_MAX_DURATION_SECONDS",
      240,
      30,
      3600
    ) * 1000,
    sseHeartbeatMs: readInteger("SSE_HEARTBEAT_SECONDS", 15, 5, 60) * 1000,
    telegramTimeoutMs: readInteger(
      "TELEGRAM_TIMEOUT_MS",
      10000,
      1000,
      30000
    ),
    ipGeoTimeoutMs: readInteger("IP_GEO_TIMEOUT_MS", 3000, 500, 10000),
    ipGeoCacheTtlMs: 60 * 60 * 1000,
  };
}

export function getPublicMonitorConfig(
  config: MonitorConfig = getMonitorConfig()
): PublicMonitorConfig {
  return {
    analyticsEnabled: config.analyticsEnabled,
    analyticsConsentRequired: config.analyticsConsentRequired,
    telegramEnabled: config.telegramEnabled,
    ipMetadataEnabled: config.ipProcessingEnabled,
    approximateLocationEnabled: config.approximateLocationEnabled,
    mediaEnabled: false,
    locationEnabled: config.locationEnabled,
    liveLocationEnabled: config.liveLocationEnabled,
    limits: {
      photoMaxBytes: config.photoMaxBytes,
      audioMaxBytes: config.audioMaxBytes,
      videoMaxBytes: config.videoMaxBytes,
      maxAudioDurationMs: config.maxAudioDurationMs,
      maxVideoDurationMs: config.maxVideoDurationMs,
      maxLiveLocationMinutes: config.maxLiveLocationMinutes,
      liveLocationIntervalMs: config.liveLocationIntervalMs,
    },
  };
}
