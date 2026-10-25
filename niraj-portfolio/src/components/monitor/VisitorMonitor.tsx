"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import {
  fetchMonitorConfig,
  getAnalyticsConsent,
  getOrCreateSessionId,
  markSessionStarted,
  sendMonitorEvent,
  setAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/monitor/client";
import type { PublicMonitorConfig } from "@/lib/monitor/types";

export function VisitorMonitor() {
  const pathname = usePathname();
  const [config, setConfig] = useState<PublicMonitorConfig | null>(null);
  const [consent, setConsent] = useState<AnalyticsConsent | null>(
    () => getAnalyticsConsent()
  );
  const lastPageRef = useRef<string | null>(null);

  useEffect(() => {
    let active = true;

    fetchMonitorConfig()
      .then((value) => {
        if (active) {
          setConfig(value);
        }
      })
      .catch(() => {
        return;
      });

    return () => {
      active = false;
    };
  }, []);

  const analyticsActive = Boolean(
    config?.analyticsEnabled &&
      !pathname.startsWith("/monitor") &&
      (consent === "granted" ||
        (consent === null && !config.analyticsConsentRequired))
  );

  useEffect(() => {
    if (!analyticsActive) {
      return;
    }

    const sessionId = getOrCreateSessionId();
    if (markSessionStarted(sessionId)) {
      void sendMonitorEvent({ type: "session_start" }).catch(() => {
        return;
      });
    }

    if (lastPageRef.current !== pathname) {
      lastPageRef.current = pathname;
      void sendMonitorEvent({ type: "page_view" }).catch(() => {
        return;
      });
    }
  }, [analyticsActive, pathname]);

  useEffect(() => {
    if (!analyticsActive) {
      return;
    }

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }
      const link = target.closest<HTMLAnchorElement>(
        "a[data-monitor-project]"
      );
      if (!link) {
        return;
      }
      const project = link.getAttribute("data-monitor-project");
      if (!project) {
        return;
      }
      void sendMonitorEvent({
        type: "project_click",
        project: project.slice(0, 80),
      }).catch(() => {
        return;
      });
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [analyticsActive]);

  if (!config?.analyticsEnabled) {
    return null;
  }

  if (config.analyticsConsentRequired && consent === null) {
    return (
      <ConsentBanner
        config={config}
        onAllow={() => {
          setAnalyticsConsent("granted");
          setConsent("granted");
        }}
        onDecline={() => {
          setAnalyticsConsent("declined");
          setConsent("declined");
        }}
      />
    );
  }

  return null;
}

function ConsentBanner({
  config,
  onAllow,
  onDecline,
}: {
  config: PublicMonitorConfig;
  onAllow: () => void;
  onDecline: () => void;
}) {
  return (
    <div
      role="region"
      aria-label="Session analytics notice"
      className="fixed inset-x-4 bottom-4 z-[95] mx-auto max-w-xl border border-border bg-bg-elevated p-4 shadow-lg animate-slide-up"
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
        Session analytics demo
      </p>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        This site can send a temporary session ID, page path, referrer
        hostname, and coarse browser/device information to the owner&apos;s
        Telegram chat. Camera, microphone, and precise location are never used
        unless you start those features.
        {config.ipMetadataEnabled
          ? " A truncated IP address may also be included because the owner enabled IP metadata."
          : " No IP address is included."}
        {config.approximateLocationEnabled
          ? " An approximate network location may be included because the owner enabled IP geolocation."
          : ""}{" "}
        <Link href="/privacy" className="underline hover:text-fg">
          Privacy details
        </Link>
        .
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" onClick={onAllow}>
          Allow session analytics
        </Button>
        <Button size="sm" variant="secondary" onClick={onDecline}>
          Decline
        </Button>
      </div>
    </div>
  );
}
