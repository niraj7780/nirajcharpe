interface DedupeStore {
  entries: Map<string, number>;
}

function getStore(): DedupeStore {
  const globalStore = globalThis as typeof globalThis & {
    __nirajMonitorDedupeV1?: DedupeStore;
  };
  if (!globalStore.__nirajMonitorDedupeV1) {
    globalStore.__nirajMonitorDedupeV1 = {
      entries: new Map(),
    };
  }
  return globalStore.__nirajMonitorDedupeV1;
}

export function claimSubmissionOnce(key: string, ttlMs: number): boolean {
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
  if (expiresAt !== undefined && expiresAt > now) {
    return false;
  }

  store.entries.set(key, now + ttlMs);
  return true;
}
