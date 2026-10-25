import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MonitorLogin } from "@/components/monitor/MonitorLogin";
import {
  OWNER_COOKIE_NAME,
  verifyOwnerCookieValue,
} from "@/lib/monitor/auth";
import { getMonitorConfig } from "@/lib/monitor/config";

export const metadata: Metadata = {
  title: "Owner sign-in | Niraj Charpe",
  robots: {
    index: false,
    follow: false,
  },
};

export const instant = false;

export default async function MonitorLoginPage() {
  const config = getMonitorConfig();
  const cookieStore = await cookies();

  if (
    config.ownerPanelEnabled &&
    verifyOwnerCookieValue(cookieStore.get(OWNER_COOKIE_NAME)?.value)
  ) {
    redirect("/monitor");
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <MonitorLogin enabled={config.ownerPanelEnabled} />
    </main>
  );
}
