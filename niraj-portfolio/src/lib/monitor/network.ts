import { getMonitorConfig } from "@/lib/monitor/config";
import { cleanString } from "@/lib/monitor/request";
import type { NetworkLocation } from "@/lib/monitor/types";

interface CachedLocation {
  value: NetworkLocation | null;
  expiresAt: number;
}

interface LookupStore {
  cache: Map<string, CachedLocation>;
}

const FAILURE_CACHE_MS = 10 * 60 * 1000;

function getStore(): LookupStore {
  const globalStore = globalThis as typeof globalThis & {
    __nirajMonitorGeoCacheV1?: LookupStore;
  };
  if (!globalStore.__nirajMonitorGeoCacheV1) {
    globalStore.__nirajMonitorGeoCacheV1 = {
      cache: new Map(),
    };
  }
  return globalStore.__nirajMonitorGeoCacheV1;
}

function readNumber(value: unknown, minimum: number, maximum: number) {
  const parsed = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(parsed) || parsed < minimum || parsed > maximum) {
    return undefined;
  }
  return parsed;
}

export async function lookupNetworkLocation(
  ip: string,
  ipHash: string
): Promise<NetworkLocation | null> {
  const config = getMonitorConfig();
  if (
    !config.approximateLocationEnabled ||
    !config.geolocationEndpoint ||
    !config.geolocationEndpoint.includes("{ip}")
  ) {
    return null;
  }

  const store = getStore();
  const now = Date.now();
  const cached = store.cache.get(ipHash);
  if (cached && cached.expiresAt > now) {
    return cached.value;
  }

  const endpoint = config.geolocationEndpoint.replace(
    "{ip}",
    encodeURIComponent(ip)
  );

  let value: NetworkLocation | null = null;

  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
      signal: AbortSignal.timeout(config.ipGeoTimeoutMs),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      const data = (await response.json()) as Record<string, unknown>;
      if (data.success !== false) {
        const country = cleanString(
          data.country ?? data.country_name ?? data.country_code,
          80
        );
        const region = cleanString(data.region ?? data.region_name, 80);
        const city = cleanString(data.city, 80);
        const latitude = readNumber(data.latitude, -90, 90);
        const longitude = readNumber(data.longitude, -180, 180);

        if (country || region || city || latitude !== undefined) {
          value = {
            ...(country ? { country } : {}),
            ...(region ? { region } : {}),
            ...(city ? { city } : {}),
            ...(latitude !== undefined ? { latitude } : {}),
            ...(longitude !== undefined ? { longitude } : {}),
          };
        }
      }
    }
  } catch {
    value = null;
  }

  if (store.cache.size > 500) {
    for (const [key, entry] of store.cache) {
      if (entry.expiresAt <= now) {
        store.cache.delete(key);
      }
    }
  }

  store.cache.set(ipHash, {
    value,
    expiresAt:
      now + (value ? config.ipGeoCacheTtlMs : FAILURE_CACHE_MS),
  });

  return value;
}
