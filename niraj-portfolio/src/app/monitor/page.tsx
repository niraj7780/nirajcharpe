import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { MonitorDashboard } from "@/components/monitor/MonitorDashboard";
import {
  OWNER_COOKIE_NAME,
  verifyOwnerCookieValue,
} from "@/lib/monitor/auth";
import { getMonitorConfig } from "@/lib/monitor/config";

export const metadata: Metadata = {
  title: "Visitor monitor | Niraj Charpe",
  robots: {
    index: false,
    follow: false,
  },
};

export const instant = false;

export default async function MonitorPage() {
  const config = getMonitorConfig();
  if (!config.ownerPanelEnabled) {
    redirect("/monitor/login");
  }

  const cookieStore = await cookies();
  if (
    !verifyOwnerCookieValue(cookieStore.get(OWNER_COOKIE_NAME)?.value)
  ) {
    redirect("/monitor/login");
  }

  return <MonitorDashboard />;
}
