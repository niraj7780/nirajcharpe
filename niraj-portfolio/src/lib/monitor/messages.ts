import type {
  MediaKind,
  MonitorEvent,
  NetworkLocation,
  VisitorEventType,
} from "@/lib/monitor/types";

const EVENT_TITLES: Record<VisitorEventType, string> = {
  session_start: "Session started",
  page_view: "Page viewed",
  project_click: "Project link clicked",
  camera_activated: "Camera demo activated",
  camera_stopped: "Camera demo stopped",
  photo_submitted: "Photo submitted",
  audio_submitted: "Audio submitted",
  video_submitted: "Video submitted",
  location_shared: "Location shared",
  location_live: "Live location update",
};

const MEDIA_LABELS: Record<MediaKind, string> = {
  photo: "Photo",
  audio: "Audio",
  video: "Video",
};

function utcTimestamp(value: string): string {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? value : date.toISOString();
}

function formatNetworkLocation(location: NetworkLocation): string | null {
  const parts = [location.city, location.region, location.country].filter(
    (part): part is string => Boolean(part)
  );
  return parts.length > 0 ? parts.join(", ") : null;
}

export interface EventMessageContext {
  truncatedIp?: string | null;
  network?: NetworkLocation | null;
}

export function formatVisitorEvent(
  event: MonitorEvent,
  context: EventMessageContext = {}
): string {
  const lines = [
    "PORTFOLIO VISITOR",
    "",
    `Event: ${EVENT_TITLES[event.type]}`,
    `Timestamp (UTC): ${utcTimestamp(event.timestamp)}`,
    `Page: ${event.path}`,
  ];

  if (event.device) lines.push(`Device: ${event.device}`);
  if (event.browser) lines.push(`Browser: ${event.browser}`);
  if (event.os) lines.push(`OS: ${event.os}`);
  if (event.referrer) lines.push(`Referrer: ${event.referrer}`);
  if (event.project) lines.push(`Project: ${event.project}`);
  if (event.consent) lines.push(`Consent: ${event.consent}`);
  if (event.submission) {
    lines.push(
      `Submission: ${event.submission.kind} (${event.submission.status})`
    );
  }

  const network = context.network ?? event.network;
  if (network) {
    const label = formatNetworkLocation(network);
    if (label) {
      lines.push(`Network location: ${label} (IP-derived, approximate)`);
    }
    if (
      typeof network.latitude === "number" &&
      typeof network.longitude === "number"
    ) {
      lines.push(
        `Approximate coordinates: ${network.latitude.toFixed(3)}, ${network.longitude.toFixed(3)}`
      );
    }
  }

  if (context.truncatedIp) {
    lines.push(`IP: ${context.truncatedIp} (truncated)`);
  }

  lines.push(`Session: ${event.sessionId}`);
  return lines.join("\n");
}

export interface LocationMessageInput {
  latitude: number;
  longitude: number;
  accuracyM: number | null;
  timestamp: string;
  sessionId: string;
  live: boolean;
}

export function formatLocationMessage(input: LocationMessageInput): string {
  const lines = input.live
    ? [
        "LIVE LOCATION UPDATE",
        "",
        "The visitor started live location sharing and can stop it at any time.",
      ]
    : ["LOCATION SHARED — Visitor explicitly confirmed", ""];

  lines.push(
    `Latitude: ${input.latitude}`,
    `Longitude: ${input.longitude}`,
    `Accuracy: ${input.accuracyM === null ? "not reported" : `${Math.round(input.accuracyM)} m`}`,
    `Timestamp (UTC): ${utcTimestamp(input.timestamp)}`,
    `Session: ${input.sessionId}`,
    "Source: Browser Geolocation API"
  );

  return lines.join("\n");
}

export function formatMediaCaption(
  kind: MediaKind,
  sessionId: string,
  timestamp: string,
  durationMs?: number
): string {
  const lines = [
    `${MEDIA_LABELS[kind].toUpperCase()} SUBMITTED — Visitor confirmed`,
    "",
    `Kind: ${MEDIA_LABELS[kind]}`,
    `Session: ${sessionId}`,
    `Timestamp (UTC): ${utcTimestamp(timestamp)}`,
  ];

  if (
    kind !== "photo" &&
    typeof durationMs === "number" &&
    Number.isFinite(durationMs) &&
    durationMs > 0
  ) {
    lines.push(`Duration: ${Math.round(durationMs / 1000)} s`);
  }

  return lines.join("\n");
}

export function formatDeliveryFailure(
  kind: MediaKind,
  sessionId: string
): string {
  return [
    "MEDIA DELIVERY FAILED",
    "",
    `Kind: ${MEDIA_LABELS[kind]}`,
    `Session: ${sessionId}`,
    `Timestamp (UTC): ${new Date().toISOString()}`,
    "The submitted payload was discarded and was not stored.",
  ].join("\n");
}
