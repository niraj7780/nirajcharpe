import { connection } from "next/server";
import {
  getMonitorConfig,
  getPublicMonitorConfig,
} from "@/lib/monitor/config";

export async function GET() {
  await connection();
  return Response.json(getPublicMonitorConfig(getMonitorConfig()), {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}
