import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { getMonitorConfig } from "@/lib/monitor/config";

export const OWNER_COOKIE_NAME = "nc_monitor_owner";
export const OWNER_SESSION_MAX_AGE_SECONDS = 12 * 60 * 60;

const COOKIE_PURPOSE = "nc-owner-session-v1";

function safeEqual(left: string, right: string): boolean {
  const leftDigest = createHash("sha256").update(left).digest();
  const rightDigest = createHash("sha256").update(right).digest();
  return timingSafeEqual(leftDigest, rightDigest);
}

function sign(issuedAt: number, token: string): string {
  return createHmac("sha256", token)
    .update(`${COOKIE_PURPOSE}.${issuedAt}`)
    .digest("base64url");
}

export function verifyOwnerToken(candidate: string): boolean {
  const config = getMonitorConfig();
  if (!config.ownerPanelEnabled || !candidate) {
    return false;
  }
  return safeEqual(candidate, config.ownerPanelToken);
}

export function createOwnerCookieValue(): string | null {
  const config = getMonitorConfig();
  if (!config.ownerPanelEnabled) {
    return null;
  }
  const issuedAt = Date.now();
  return `v1.${issuedAt}.${sign(issuedAt, config.ownerPanelToken)}`;
}

export function verifyOwnerCookieValue(value: string | undefined): boolean {
  const config = getMonitorConfig();
  if (!config.ownerPanelEnabled || !value) {
    return false;
  }

  const parts = value.split(".");
  if (parts.length !== 3 || parts[0] !== "v1") {
    return false;
  }

  const issuedAt = Number.parseInt(parts[1], 10);
  if (!Number.isFinite(issuedAt)) {
    return false;
  }

  const age = Date.now() - issuedAt;
  if (age < -5 * 60 * 1000 || age > OWNER_SESSION_MAX_AGE_SECONDS * 1000) {
    return false;
  }

  return safeEqual(parts[2], sign(issuedAt, config.ownerPanelToken));
}

export function getOwnerCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: OWNER_SESSION_MAX_AGE_SECONDS,
  };
}
