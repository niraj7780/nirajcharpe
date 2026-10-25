import { getMonitorConfig } from "@/lib/monitor/config";
import { formatVisitorEvent } from "@/lib/monitor/messages";
import { sendTelegramMessage } from "@/lib/monitor/telegram";
import type { MonitorEvent } from "@/lib/monitor/types";

interface ThrottleStore {
  entries: Map<string, number>;
}

export interface NotifyContext {
  ipHash: string;
  truncatedIp?: string | null;
}

export interface NotifyResult {
  delivered: boolean;
  throttled: boolean;
}

function getStore(): ThrottleStore {
  const globalStore = globalThis as typeof globalThis & {
    __nirajMonitorThrottleV1?: ThrottleStore;
  };
  if (!globalStore.__nirajMonitorThrottleV1) {
    globalStore.__nirajMonitorThrottleV1 = {
      entries: new Map(),
    };
  }
  return globalStore.__nirajMonitorThrottleV1;
}

function isThrottled(key: string, cooldownMs: number): boolean {
  if (cooldownMs <= 0) {
    return false;
  }
  const store = getStore();
  const now = Date.now();

  if (store.entries.size > 5000) {
    for (const [entryKey, expiresAt] of store.entries) {
      if (expiresAt <= now) {
        store.entries.delete(entryKey);
      }
    }
  }

  const expiresAt = store.entries.get(key);
  return expiresAt !== undefined && expiresAt > now;
}

function mark(key: string, cooldownMs: number) {
  if (cooldownMs <= 0) {
    return;
  }
  getStore().entries.set(key, Date.now() + cooldownMs);
}

export async function notifyVisitorEvent(
  event: MonitorEvent,
  context: NotifyContext
): Promise<NotifyResult> {
  const config = getMonitorConfig();
  if (!config.telegramEnabled) {
    return { delivered: false, throttled: false };
  }

  const sessionKey = `session:${event.sessionId}`;

  if (event.type === "session_start") {
    if (isThrottled(sessionKey, 24 * 60 * 60 * 1000)) {
      return { delivered: false, throttled: true };
    }
    mark(sessionKey, 24 * 60 * 60 * 1000);

    const cooldownKey = `session-ip:${context.ipHash}`;
    if (isThrottled(cooldownKey, config.sessionNotifyCooldownSec * 1000)) {
      return { delivered: false, throttled: true };
    }
    mark(cooldownKey, config.sessionNotifyCooldownSec * 1000);
  } else if (event.type === "page_view") {
    const key = `page:${event.sessionId}:${event.path}`;
    if (isThrottled(key, config.pageNotifyCooldownSec * 1000)) {
      return { delivered: false, throttled: true };
    }
    mark(key, config.pageNotifyCooldownSec * 1000);
  } else if (event.type === "project_click") {
    const key = `project:${event.sessionId}:${event.project ?? "unknown"}`;
    if (isThrottled(key, config.projectNotifyCooldownSec * 1000)) {
      return { delivered: false, throttled: true };
    }
    mark(key, config.projectNotifyCooldownSec * 1000);
  } else if (
    event.type === "camera_activated" ||
    event.type === "camera_stopped"
  ) {
    const key = `camera:${event.sessionId}:${event.type}`;
    if (isThrottled(key, config.cameraNotifyCooldownSec * 1000)) {
      return { delivered: false, throttled: true };
    }
    mark(key, config.cameraNotifyCooldownSec * 1000);
  } else {
    return { delivered: false, throttled: false };
  }

  const outcome = await sendTelegramMessage(
    formatVisitorEvent(event, {
      truncatedIp: context.truncatedIp,
      network: event.network,
    })
  );

  return { delivered: outcome.ok, throttled: false };
}
