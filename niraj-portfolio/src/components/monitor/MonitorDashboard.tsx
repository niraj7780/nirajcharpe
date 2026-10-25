"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Badge, Button } from "@/components/ui";
import { formatUtc } from "@/lib/monitor/client";
import type { MonitorEvent, VisitorEventType } from "@/lib/monitor/types";

type ConnectionState = "connecting" | "live" | "retrying" | "offline";

const EVENT_LABELS: Record<VisitorEventType, string> = {
  session_start: "Session started",
  page_view: "Page viewed",
  project_click: "Project click",
  camera_activated: "Camera started",
  camera_stopped: "Camera stopped",
  photo_submitted: "Photo submitted",
  audio_submitted: "Audio submitted",
  video_submitted: "Video submitted",
  location_shared: "Location shared",
  location_live: "Live location",
};

function eventVariant(
  type: VisitorEventType
): "accent" | "blue" | "default" {
  if (
    type === "session_start" ||
    type === "photo_submitted" ||
    type === "audio_submitted" ||
    type === "video_submitted" ||
    type === "location_shared"
  ) {
    return "accent";
  }
  if (
    type === "project_click" ||
    type === "camera_activated" ||
    type === "camera_stopped" ||
    type === "location_live"
  ) {
    return "blue";
  }
  return "default";
}

function networkLabel(event: MonitorEvent): string | null {
  if (!event.network) {
    return null;
  }
  const parts = [
    event.network.city,
    event.network.region,
    event.network.country,
  ].filter((value): value is string => Boolean(value));
  if (parts.length === 0) {
    return null;
  }
  const coordinates =
    typeof event.network.latitude === "number" &&
    typeof event.network.longitude === "number"
      ? ` (${event.network.latitude.toFixed(2)}, ${event.network.longitude.toFixed(2)})`
      : "";
  return `${parts.join(", ")}${coordinates}`;
}

export function MonitorDashboard() {
  const router = useRouter();
  const [events, setEvents] = useState<MonitorEvent[]>([]);
  const [connection, setConnection] =
    useState<ConnectionState>("connecting");
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [sourceKey, setSourceKey] = useState(0);
  const retriesRef = useRef(0);

  useEffect(() => {
    retriesRef.current = 0;
    const source = new EventSource("/api/monitor/stream");

    const handleSnapshot = (rawEvent: Event) => {
      const message = rawEvent as MessageEvent<string>;
      try {
        const data = JSON.parse(message.data) as {
          events?: MonitorEvent[];
          generatedAt?: string;
        };
        setEvents(Array.isArray(data.events) ? data.events : []);
        setLastUpdate(data.generatedAt ?? new Date().toISOString());
        setConnection("live");
      } catch {
        return;
      }
    };

    const handleMonitor = (rawEvent: Event) => {
      const message = rawEvent as MessageEvent<string>;
      try {
        const event = JSON.parse(message.data) as MonitorEvent;
        if (!event?.id) {
          return;
        }
        setEvents((current) => {
          if (current.some((item) => item.id === event.id)) {
            return current;
          }
          return [event, ...current].slice(0, 200);
        });
        setLastUpdate(event.timestamp);
        setConnection("live");
      } catch {
        return;
      }
    };

    source.addEventListener("snapshot", handleSnapshot);
    source.addEventListener("monitor", handleMonitor);
    source.onopen = () => {
      retriesRef.current = 0;
      setConnection("live");
    };
    source.onerror = () => {
      retriesRef.current += 1;
      setConnection(retriesRef.current >= 3 ? "offline" : "retrying");
    };

    return () => {
      source.removeEventListener("snapshot", handleSnapshot);
      source.removeEventListener("monitor", handleMonitor);
      source.close();
    };
  }, [sourceKey]);

  async function handleLogout() {
    try {
      await fetch("/api/monitor/auth", {
        method: "DELETE",
        credentials: "same-origin",
        cache: "no-store",
      });
    } catch {
      return;
    } finally {
      router.replace("/monitor/login");
      router.refresh();
    }
  }

  const connectionLabel: Record<ConnectionState, string> = {
    connecting: "Connecting",
    live: "Live",
    retrying: "Reconnecting",
    offline: "Connection lost",
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-10">
      <header className="flex flex-col justify-between gap-6 border-b border-border pb-6 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
            Owner-only
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg md:text-4xl">
            Live visitor monitor
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg-muted">
            Recent events from this server process. The buffer is temporary, is
            not written to a database, and clears on restart. Telegram is the
            notification destination.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Badge variant={connection === "live" ? "accent" : "default"}>
            {connectionLabel[connection]}
          </Badge>
          <span className="font-mono text-xs text-fg-subtle">
            {events.length} buffered
          </span>
          <Button
            size="sm"
            variant="secondary"
            onClick={() => setSourceKey((value) => value + 1)}
          >
            Reconnect
          </Button>
          <Button size="sm" variant="ghost" onClick={handleLogout}>
            Sign out
          </Button>
        </div>
      </header>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-fg-subtle">
        <p>
          {lastUpdate
            ? `Last update: ${formatUtc(lastUpdate)}`
            : "Waiting for the first event."}
        </p>
        <div className="flex gap-4">
          <Link href="/" className="hover:text-fg">
            Portfolio
          </Link>
          <Link href="/privacy" className="hover:text-fg">
            Privacy
          </Link>
        </div>
      </div>

      {connection === "offline" && (
        <div className="mt-4 border border-blue-border bg-blue-subtle p-4 text-sm text-blue">
          The live stream is unavailable. The owner session may have expired.
          <Link href="/monitor/login" className="ml-2 underline">
            Sign in again
          </Link>
        </div>
      )}

      {events.length === 0 ? (
        <div className="mt-8 border border-dashed border-border bg-bg-elevated p-10 text-center">
          <p className="text-sm font-medium text-fg">No events yet.</p>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">
            Visit the portfolio in another tab and allow session analytics. On
            multi-instance serverless hosting, an event may be handled by a
            different process; in that case Telegram remains the reliable
            notification channel.
          </p>
        </div>
      ) : (
        <ul className="mt-8 space-y-3">
          {events.map((event) => {
            const network = networkLabel(event);
            return (
              <li
                key={event.id}
                className="border border-border bg-bg-elevated p-4"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant={eventVariant(event.type)}>
                      {EVENT_LABELS[event.type]}
                    </Badge>
                    <span className="font-mono text-xs text-fg-subtle">
                      {formatUtc(event.timestamp)}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                    Session {event.sessionId.slice(0, 8)}
                  </span>
                </div>

                <p className="mt-3 font-mono text-sm text-fg">{event.path}</p>

                <dl className="mt-3 grid gap-x-6 gap-y-2 text-xs sm:grid-cols-2 lg:grid-cols-3">
                  {event.device && (
                    <div>
                      <dt className="text-fg-subtle">Device</dt>
                      <dd className="text-fg-muted">{event.device}</dd>
                    </div>
                  )}
                  {event.browser && (
                    <div>
                      <dt className="text-fg-subtle">Browser</dt>
                      <dd className="text-fg-muted">{event.browser}</dd>
                    </div>
                  )}
                  {event.os && (
                    <div>
                      <dt className="text-fg-subtle">OS</dt>
                      <dd className="text-fg-muted">{event.os}</dd>
                    </div>
                  )}
                  {event.referrer && (
                    <div>
                      <dt className="text-fg-subtle">Referrer</dt>
                      <dd className="text-fg-muted">{event.referrer}</dd>
                    </div>
                  )}
                  {event.project && (
                    <div>
                      <dt className="text-fg-subtle">Project</dt>
                      <dd className="text-fg-muted">{event.project}</dd>
                    </div>
                  )}
                  {event.consent && (
                    <div>
                      <dt className="text-fg-subtle">Consent</dt>
                      <dd className="text-fg-muted">{event.consent}</dd>
                    </div>
                  )}
                  {event.submission && (
                    <div>
                      <dt className="text-fg-subtle">Submission</dt>
                      <dd className="text-fg-muted">
                        {event.submission.kind} ({event.submission.status})
                      </dd>
                    </div>
                  )}
                  {network && (
                    <div>
                      <dt className="text-fg-subtle">
                        Network location (approximate)
                      </dt>
                      <dd className="text-fg-muted">{network}</dd>
                    </div>
                  )}
                </dl>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
