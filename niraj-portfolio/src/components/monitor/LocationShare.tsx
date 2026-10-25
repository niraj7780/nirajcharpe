"use client";

import { useEffect, useRef, useState } from "react";
import { Badge, Button, Card, CardContent, CardHeader } from "@/components/ui";
import {
  formatDuration,
  formatUtc,
  submitLocation,
} from "@/lib/monitor/client";
import type { PublicMonitorConfig } from "@/lib/monitor/types";

type Phase =
  | "idle"
  | "requesting"
  | "ready"
  | "sending"
  | "sent"
  | "error";

interface Position {
  latitude: number;
  longitude: number;
  accuracy: number;
  timestamp: number;
}

function geolocationError(error: GeolocationPositionError): string {
  if (error.code === error.PERMISSION_DENIED) {
    return "Location permission was not granted. The site works normally and will not ask again automatically.";
  }
  if (error.code === error.POSITION_UNAVAILABLE) {
    return "The browser could not determine a location. No coordinates were sent.";
  }
  if (error.code === error.TIMEOUT) {
    return "The location request timed out. No coordinates were sent.";
  }
  return "The location request failed. No coordinates were sent.";
}

export function LocationShare({ config }: { config: PublicMonitorConfig }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [position, setPosition] = useState<Position | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);
  const [liveConfirm, setLiveConfirm] = useState(false);
  const [liveActive, setLiveActive] = useState(false);
  const [liveCount, setLiveCount] = useState(0);
  const [liveLastAccuracy, setLiveLastAccuracy] = useState<number | null>(
    null
  );
  const [liveLastAt, setLiveLastAt] = useState<string | null>(null);
  const [liveError, setLiveError] = useState<string | null>(null);
  const liveActiveRef = useRef(false);
  const watchIdRef = useRef<number | null>(null);
  const liveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastSentRef = useRef(0);
  const sendInFlightRef = useRef(false);
  const abortRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      liveActiveRef.current = false;
      if (watchIdRef.current !== null) {
        navigator.geolocation.clearWatch(watchIdRef.current);
        watchIdRef.current = null;
      }
      if (liveTimerRef.current) {
        clearTimeout(liveTimerRef.current);
        liveTimerRef.current = null;
      }
      abortRef.current?.abort();
    };
  }, []);

  function requestLocation() {
    setError(null);
    setNotice(null);

    if (!window.isSecureContext) {
      setError(
        "Location access requires HTTPS or localhost in a supported browser."
      );
      return;
    }
    if (!navigator.geolocation) {
      setError("This browser does not support the Geolocation API.");
      return;
    }

    setPosition(null);
    setPhase("requesting");
    navigator.geolocation.getCurrentPosition(
      (result) => {
        if (!mountedRef.current) {
          return;
        }
        setPosition({
          latitude: result.coords.latitude,
          longitude: result.coords.longitude,
          accuracy: result.coords.accuracy,
          timestamp: result.timestamp,
        });
        setPhase("ready");
      },
      (locationError) => {
        if (!mountedRef.current) {
          return;
        }
        setError(geolocationError(locationError));
        setPhase("error");
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      }
    );
  }

  async function sendLocation() {
    if (!position) {
      return;
    }

    setPhase("sending");
    setError(null);
    setNotice(null);

    try {
      await submitLocation({
        latitude: position.latitude,
        longitude: position.longitude,
        accuracyM: position.accuracy,
        live: false,
      });
      if (!mountedRef.current) {
        return;
      }
      setPosition(null);
      setPhase("sent");
      setNotice(
        "Location sent to the owner's Telegram chat. The page no longer holds a copy."
      );
    } catch (submitError) {
      if (!mountedRef.current) {
        return;
      }
      setPosition(null);
      setPhase("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "The location could not be sent and was discarded."
      );
    }
  }

  function cancelLocation() {
    setPosition(null);
    setPhase("idle");
    setError(null);
    setNotice("Location discarded. Nothing was sent.");
  }

  function stopLive(message?: string) {
    liveActiveRef.current = false;
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    if (liveTimerRef.current) {
      clearTimeout(liveTimerRef.current);
      liveTimerRef.current = null;
    }
    abortRef.current?.abort();
    abortRef.current = null;
    setLiveActive(false);
    setLiveConfirm(false);
    setNotice(message ?? "Live sharing stopped. No more updates will be sent.");
  }

  async function sendLiveUpdate(coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
  }) {
    if (!liveActiveRef.current || sendInFlightRef.current) {
      return;
    }

    sendInFlightRef.current = true;
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      await submitLocation(
        {
          latitude: coords.latitude,
          longitude: coords.longitude,
          accuracyM: coords.accuracy,
          live: true,
        },
        controller.signal
      );
      if (!mountedRef.current || !liveActiveRef.current) {
        return;
      }
      setLiveCount((count) => count + 1);
      setLiveLastAccuracy(coords.accuracy);
      setLiveLastAt(new Date().toISOString());
    } catch (submitError) {
      if (!mountedRef.current || !liveActiveRef.current) {
        return;
      }
      if (submitError instanceof DOMException && submitError.name === "AbortError") {
        return;
      }
      setLiveError(
        submitError instanceof Error
          ? submitError.message
          : "A live location update failed."
      );
      stopLive("Live sharing stopped because an update failed.");
    } finally {
      sendInFlightRef.current = false;
      if (abortRef.current === controller) {
        abortRef.current = null;
      }
    }
  }

  function startLive() {
    setLiveError(null);
    setNotice(null);

    if (!window.isSecureContext) {
      setLiveError("Live location requires HTTPS or localhost.");
      return;
    }
    if (!navigator.geolocation) {
      setLiveError("This browser does not support the Geolocation API.");
      return;
    }

    liveActiveRef.current = true;
    setLiveActive(true);
    setLiveConfirm(false);
    setLiveCount(0);
    setLiveLastAccuracy(null);
    setLiveLastAt(null);
    lastSentRef.current = Date.now();

    if (position) {
      void sendLiveUpdate({
        latitude: position.latitude,
        longitude: position.longitude,
        accuracy: position.accuracy,
      });
    }

    watchIdRef.current = navigator.geolocation.watchPosition(
      (result) => {
        if (!mountedRef.current || !liveActiveRef.current) {
          return;
        }
        const now = Date.now();
        if (now - lastSentRef.current >= config.limits.liveLocationIntervalMs) {
          lastSentRef.current = now;
          void sendLiveUpdate({
            latitude: result.coords.latitude,
            longitude: result.coords.longitude,
            accuracy: result.coords.accuracy,
          });
        }
      },
      (locationError) => {
        if (!mountedRef.current) {
          return;
        }
        setLiveError(geolocationError(locationError));
        stopLive("Live sharing stopped because location access ended.");
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 5000,
      }
    );

    liveTimerRef.current = setTimeout(() => {
      if (liveActiveRef.current) {
        stopLive(
          `Live sharing stopped after the ${config.limits.maxLiveLocationMinutes}-minute limit.`
        );
      }
    }, config.limits.maxLiveLocationMinutes * 60 * 1000);
  }

  const liveIntervalSeconds = Math.round(
    config.limits.liveLocationIntervalMs / 1000
  );

  return (
    <Card>
      <CardHeader className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-semibold text-fg">Share live location</h3>
        <Badge variant="accent">Optional</Badge>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed text-fg-muted">
          This uses the browser Geolocation API, not an IP lookup. Your
          coordinates are shown here first. They are sent to the owner&apos;s
          Telegram chat only after you press Send to Telegram.
        </p>

        {!liveActive && (
          <div className="space-y-4">
            {phase === "idle" && (
              <Button size="sm" onClick={requestLocation}>
                Share My Location
              </Button>
            )}

            {phase === "requesting" && (
              <p className="text-sm text-fg-muted" role="status">
                Waiting for browser location permission...
              </p>
            )}

            {phase === "ready" && position && (
              <div className="space-y-3 border border-border bg-bg p-4">
                <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-xs text-fg-subtle">Latitude</dt>
                    <dd className="font-mono text-fg">{position.latitude}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-fg-subtle">Longitude</dt>
                    <dd className="font-mono text-fg">{position.longitude}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-fg-subtle">Accuracy</dt>
                    <dd className="text-fg-muted">
                      {Math.round(position.accuracy)} m
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs text-fg-subtle">Reported</dt>
                    <dd className="text-fg-muted">
                      {formatUtc(position.timestamp)}
                    </dd>
                  </div>
                </dl>
                <p className="text-xs leading-relaxed text-fg-subtle">
                  This is browser-reported location, not a guarantee of your
                  exact position. Sending is optional.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={sendLocation}>
                    Send to Telegram
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={cancelLocation}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {phase === "sending" && (
              <p className="text-sm text-fg-muted" role="status">
                Sending location...
              </p>
            )}

            {phase === "sent" && (
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-sm text-fg-muted" role="status">
                  Location sent. The page no longer holds a copy.
                </p>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={requestLocation}
                >
                  Share again
                </Button>
              </div>
            )}

            {phase === "error" && (
              <div className="space-y-3">
                <p role="alert" className="text-sm text-red-700">
                  {error}
                </p>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={requestLocation}
                >
                  Try again
                </Button>
              </div>
            )}
          </div>
        )}

        {config.liveLocationEnabled && !liveActive && (
          <div className="border-t border-border pt-4">
            <h4 className="text-sm font-semibold text-fg">
              Live tracking (off by default)
            </h4>
            <p className="mt-1 text-sm leading-relaxed text-fg-muted">
              Live sharing sends a location update every {liveIntervalSeconds}{" "}
              seconds for up to {config.limits.maxLiveLocationMinutes} minutes.
              It requires a separate confirmation and can be stopped at any
              time.
            </p>

            {!liveConfirm && (
              <Button
                size="sm"
                variant="secondary"
                className="mt-3"
                onClick={() => {
                  setLiveConfirm(true);
                  setLiveError(null);
                }}
              >
                Start live sharing
              </Button>
            )}

            {liveConfirm && (
              <div className="mt-3 space-y-3 border border-blue-border bg-blue-subtle p-4">
                <p className="text-sm text-blue">
                  After you confirm, this browser will keep sharing location
                  updates until you press Stop sharing or the{" "}
                  {config.limits.maxLiveLocationMinutes}-minute limit is
                  reached. You can stop at any time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" onClick={startLive}>
                    Confirm and start
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => setLiveConfirm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {liveError && (
              <p role="alert" className="mt-3 text-sm text-red-700">
                {liveError}
              </p>
            )}
          </div>
        )}

        {liveActive && (
          <div className="border border-accent-border bg-accent-subtle p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-red-500" />
                Live sharing active
              </span>
              <Button size="sm" onClick={() => stopLive()}>
                Stop sharing
              </Button>
            </div>
            <p className="mt-2 text-sm text-fg-muted">
              Updates sent: {liveCount}
              {liveLastAccuracy !== null
                ? ` · Last accuracy: ${Math.round(liveLastAccuracy)} m`
                : ""}
              {liveLastAt ? ` · Last update: ${formatUtc(liveLastAt)}` : ""}
            </p>
            <p className="mt-1 text-xs text-fg-subtle">
              The browser will stop sending after{" "}
              {formatDuration(config.limits.maxLiveLocationMinutes * 60 * 1000)}.
            </p>
          </div>
        )}

        {notice && !liveActive && (
          <p role="status" className="text-sm text-fg-muted">
            {notice}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
