"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Badge, Card, CardContent, CardHeader } from "@/components/ui";
import {
  collectDeviceInfo,
  fetchMonitorConfig,
  type DeviceInfo,
} from "@/lib/monitor/client";
import type { PublicMonitorConfig } from "@/lib/monitor/types";
import { LocationShare } from "@/components/monitor/LocationShare";

function StatusItem({
  label,
  enabled,
  detail,
}: {
  label: string;
  enabled: boolean;
  detail?: string;
}) {
  return (
    <div className="border border-border bg-bg-elevated p-4">
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-fg">{label}</span>
        <Badge variant={enabled ? "accent" : "default"}>
          {enabled ? "Enabled" : "Disabled"}
        </Badge>
      </div>
      {detail && (
        <p className="mt-2 text-xs leading-relaxed text-fg-subtle">
          {detail}
        </p>
      )}
    </div>
  );
}

function DisabledPanel({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-fg">{title}</h3>
        <Badge>Disabled</Badge>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-fg-muted">{description}</p>
      </CardContent>
    </Card>
  );
}

export function DemoFeatures() {
  const [config, setConfig] = useState<PublicMonitorConfig | null>(null);
  const [failed, setFailed] = useState(false);
  const [device, setDevice] = useState<DeviceInfo | null>(null);
  const [viewport, setViewport] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchMonitorConfig()
      .then((value) => {
        if (active) {
          setConfig(value);
        }
      })
      .catch(() => {
        if (active) {
          setFailed(true);
        }
      });

    const timer = setTimeout(() => {
      if (!active) {
        return;
      }
      setDevice(collectDeviceInfo());
      setViewport(`${window.innerWidth} x ${window.innerHeight}`);
      setLanguage(navigator.language);
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  if (failed) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="border border-blue-border bg-blue-subtle p-5 text-sm text-blue">
          The monitoring module did not respond. The rest of the site is
          unaffected.
        </div>
      </div>
    );
  }

  if (!config) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-12">
        <p className="text-sm text-fg-muted" role="status">
          Reading feature configuration...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-14">
      <section aria-labelledby="status-title">
        <h2
          id="status-title"
          className="text-xl font-bold tracking-tight text-fg"
        >
          Deployment status
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">
          These values come from the server environment. Nothing is simulated:
          a feature marked disabled will not transmit data.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <StatusItem
            label="Session analytics"
            enabled={config.analyticsEnabled}
            detail="Page path, session ID, and coarse device info."
          />
          <StatusItem
            label="Telegram delivery"
            enabled={config.telegramEnabled}
            detail="Events and confirmed media go to a fixed chat."
          />
          <StatusItem
            label="IP metadata"
            enabled={config.ipMetadataEnabled}
            detail="Truncated IP may appear in notifications."
          />
          <StatusItem
            label="Network location"
            enabled={config.approximateLocationEnabled}
            detail="IP-derived and approximate, not GPS."
          />
          <StatusItem
            label="GPS sharing"
            enabled={config.locationEnabled}
            detail="One-time browser location after explicit action."
          />
          <StatusItem
            label="Live GPS tracking"
            enabled={config.liveLocationEnabled}
            detail="Off by default; requires separate confirmation."
          />
        </div>
      </section>

      <section aria-labelledby="device-title">
        <h2
          id="device-title"
          className="text-xl font-bold tracking-tight text-fg"
        >
          What this browser reports locally
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">
          These values are shown in your browser. Browser, OS, and device
          category are sent only if you allow session analytics. Viewport and
          language are not transmitted.
        </p>
        <dl className="mt-5 grid gap-3 border border-border bg-bg-elevated p-4 text-sm sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <dt className="text-xs text-fg-subtle">Device</dt>
            <dd className="mt-1 text-fg">{device?.device ?? "Unknown"}</dd>
          </div>
          <div>
            <dt className="text-xs text-fg-subtle">Browser</dt>
            <dd className="mt-1 text-fg">{device?.browser ?? "Unknown"}</dd>
          </div>
          <div>
            <dt className="text-xs text-fg-subtle">OS</dt>
            <dd className="mt-1 text-fg">{device?.os ?? "Unknown"}</dd>
          </div>
          <div>
            <dt className="text-xs text-fg-subtle">Viewport</dt>
            <dd className="mt-1 text-fg">{viewport ?? "Unknown"}</dd>
          </div>
          <div>
            <dt className="text-xs text-fg-subtle">Language</dt>
            <dd className="mt-1 text-fg">{language ?? "Unknown"}</dd>
          </div>
        </dl>
      </section>

      <section aria-labelledby="location-title">
        <h2
          id="location-title"
          className="text-xl font-bold tracking-tight text-fg"
        >
          Optional GPS demo
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">
          Browser location is distinct from IP-derived network location. It is
          requested only after you click, shown to you first, and sent only
          after confirmation.
        </p>
        <div className="mt-5">
          {config.locationEnabled ? (
            <LocationShare config={config} />
          ) : (
            <DisabledPanel
              title="Location sharing disabled"
              description="Set LOCATION_SHARING_ENABLED=true and configure Telegram to enable this demo. Live tracking additionally requires LIVE_LOCATION_TRACKING_ENABLED=true."
            />
          )}
        </div>
      </section>

      <section
        aria-labelledby="privacy-summary-title"
        className="border-t border-border pt-8"
      >
        <h2
          id="privacy-summary-title"
          className="text-lg font-bold tracking-tight text-fg"
        >
          Privacy summary
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-fg-muted">
          Approved submissions go to the website owner&apos;s configured
          Telegram chat. This site does not use a database, does not keep a
          visitor history, and does not store media after delivery. Telegram and
          the hosting provider may retain delivered content and operational
          logs. Denying any permission never blocks the portfolio.{" "}
          <Link href="/privacy" className="underline hover:text-fg">
            Read the full privacy notice
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
