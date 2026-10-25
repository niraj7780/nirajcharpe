import { randomUUID } from "node:crypto";
import { getMonitorConfig } from "@/lib/monitor/config";
import type { MonitorEvent } from "@/lib/monitor/types";

type NewMonitorEvent = Omit<MonitorEvent, "id" | "timestamp"> & {
  timestamp?: string;
};

type EventSubscriber = (event: MonitorEvent) => void;

interface MonitorStore {
  events: MonitorEvent[];
  subscribers: Set<EventSubscriber>;
}

function getStore(): MonitorStore {
  const globalStore = globalThis as typeof globalThis & {
    __nirajMonitorStoreV1?: MonitorStore;
  };
  if (!globalStore.__nirajMonitorStoreV1) {
    globalStore.__nirajMonitorStoreV1 = {
      events: [],
      subscribers: new Set(),
    };
  }
  return globalStore.__nirajMonitorStoreV1;
}

function trimExpired(events: MonitorEvent[], ttlMs: number): MonitorEvent[] {
  const cutoff = Date.now() - ttlMs;
  return events.filter((event) => Date.parse(event.timestamp) >= cutoff);
}

export function recordMonitorEvent(input: NewMonitorEvent): MonitorEvent {
  const config = getMonitorConfig();
  const store = getStore();
  const event: MonitorEvent = {
    ...input,
    id: randomUUID(),
    timestamp: input.timestamp ?? new Date().toISOString(),
  };

  store.events = trimExpired(store.events, config.eventTtlMs);
  store.events.push(event);

  if (store.events.length > config.eventBufferSize) {
    store.events = store.events.slice(-config.eventBufferSize);
  }

  for (const subscriber of store.subscribers) {
    try {
      subscriber(event);
    } catch {
      store.subscribers.delete(subscriber);
    }
  }

  return event;
}

export function listMonitorEvents(): MonitorEvent[] {
  const config = getMonitorConfig();
  const store = getStore();
  store.events = trimExpired(store.events, config.eventTtlMs);
  return [...store.events].reverse();
}

export function subscribeToMonitorEvents(
  subscriber: EventSubscriber
): () => void {
  const store = getStore();
  store.subscribers.add(subscriber);
  return () => {
    store.subscribers.delete(subscriber);
  };
}
