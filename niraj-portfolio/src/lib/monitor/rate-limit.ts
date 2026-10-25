interface Bucket {
  count: number;
  resetAt: number;
}

interface RateLimitStore {
  buckets: Map<string, Bucket>;
}

function getStore(): RateLimitStore {
  const globalStore = globalThis as typeof globalThis & {
    __nirajMonitorRateLimitV1?: RateLimitStore;
  };
  if (!globalStore.__nirajMonitorRateLimitV1) {
    globalStore.__nirajMonitorRateLimitV1 = {
      buckets: new Map(),
    };
  }
  return globalStore.__nirajMonitorRateLimitV1;
}

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
}

export function checkRateLimit(
  key: string,
  limit: number,
  windowMs: number
): RateLimitResult {
  const store = getStore();
  const now = Date.now();

  if (store.buckets.size > 5000) {
    for (const [bucketKey, bucket] of store.buckets) {
      if (bucket.resetAt <= now) {
        store.buckets.delete(bucketKey);
      }
    }
  }

  const existing = store.buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    store.buckets.set(key, { count: 1, resetAt: now + windowMs });
    return {
      allowed: true,
      remaining: Math.max(0, limit - 1),
      retryAfterSeconds: 0,
    };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(
        1,
        Math.ceil((existing.resetAt - now) / 1000)
      ),
    };
  }

  existing.count += 1;
  return {
    allowed: true,
    remaining: Math.max(0, limit - existing.count),
    retryAfterSeconds: 0,
  };
}
