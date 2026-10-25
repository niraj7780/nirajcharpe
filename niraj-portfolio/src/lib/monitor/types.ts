export const VISITOR_EVENT_TYPES = [
  "session_start",
  "page_view",
  "project_click",
  "camera_activated",
  "camera_stopped",
  "photo_submitted",
  "audio_submitted",
  "video_submitted",
  "location_shared",
  "location_live",
] as const;

export type VisitorEventType = (typeof VISITOR_EVENT_TYPES)[number];

export type MediaKind = "photo" | "audio" | "video";
export type SubmissionKind = MediaKind | "location";

export interface NetworkLocation {
  country?: string;
  region?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  accuracyKm?: number;
}

export interface MonitorEvent {
  id: string;
  timestamp: string;
  sessionId: string;
  type: VisitorEventType;
  path: string;
  device?: string;
  browser?: string;
  os?: string;
  referrer?: string;
  consent?: string;
  project?: string;
  network?: NetworkLocation | null;
  submission?: {
    kind: SubmissionKind;
    status: "sent" | "failed";
  } | null;
}

export interface PublicMonitorConfig {
  analyticsEnabled: boolean;
  analyticsConsentRequired: boolean;
  telegramEnabled: boolean;
  ipMetadataEnabled: boolean;
  approximateLocationEnabled: boolean;
  mediaEnabled: boolean;
  locationEnabled: boolean;
  liveLocationEnabled: boolean;
  limits: {
    photoMaxBytes: number;
    audioMaxBytes: number;
    videoMaxBytes: number;
    maxAudioDurationMs: number;
    maxVideoDurationMs: number;
    maxLiveLocationMinutes: number;
    liveLocationIntervalMs: number;
  };
}
