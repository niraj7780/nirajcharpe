"use client";

export function stopMediaStream(stream: MediaStream | null) {
  stream?.getTracks().forEach((track) => track.stop());
}

export function friendlyMediaError(error: unknown): string {
  if (error instanceof DOMException) {
    if (error.name === "NotAllowedError" || error.name === "SecurityError") {
      return "Permission was not granted. The site remains usable and will not ask again automatically.";
    }
    if (error.name === "NotFoundError" || error.name === "OverconstrainedError") {
      return "No matching camera or microphone was found on this device.";
    }
    if (error.name === "NotReadableError") {
      return "The camera or microphone is already in use by another application.";
    }
    if (error.name === "AbortError") {
      return "The media operation was interrupted.";
    }
  }
  return "The browser could not access the requested device.";
}

export function pickRecorderMime(candidates: string[]): string | undefined {
  if (typeof MediaRecorder === "undefined") {
    return undefined;
  }
  return candidates.find((candidate) =>
    MediaRecorder.isTypeSupported(candidate)
  );
}

export function mediaDevicesAvailable(): boolean {
  return (
    typeof navigator !== "undefined" &&
    Boolean(navigator.mediaDevices?.getUserMedia)
  );
}

export function secureContextAvailable(): boolean {
  return typeof window !== "undefined" && window.isSecureContext;
}
