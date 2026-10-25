import { cookies } from "next/headers";
import {
  listMonitorEvents,
  subscribeToMonitorEvents,
} from "@/lib/monitor/buffer";
import { getMonitorConfig } from "@/lib/monitor/config";
import {
  OWNER_COOKIE_NAME,
  verifyOwnerCookieValue,
} from "@/lib/monitor/auth";
import { jsonError } from "@/lib/monitor/request";

export async function GET(request: Request) {
  const config = getMonitorConfig();
  if (!config.ownerPanelEnabled) {
    return jsonError(404, "not_found", "Not found.");
  }

  const cookieStore = await cookies();
  if (
    !verifyOwnerCookieValue(cookieStore.get(OWNER_COOKIE_NAME)?.value)
  ) {
    return jsonError(401, "unauthorized", "Authentication is required.");
  }

  const encoder = new TextEncoder();
  let unsubscribe: (() => void) | null = null;
  let heartbeat: ReturnType<typeof setInterval> | null = null;
  let lifetime: ReturnType<typeof setTimeout> | null = null;
  let closed = false;

  const cleanup = () => {
    if (heartbeat) {
      clearInterval(heartbeat);
      heartbeat = null;
    }
    if (lifetime) {
      clearTimeout(lifetime);
      lifetime = null;
    }
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }
  };

  const stream = new ReadableStream<Uint8Array>({
    start(controller) {
      const enqueue = (chunk: string) => {
        if (closed) {
          return;
        }
        try {
          controller.enqueue(encoder.encode(chunk));
        } catch {
          closed = true;
          cleanup();
        }
      };

      const send = (event: string, data: unknown) => {
        enqueue(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
      };

      const close = () => {
        if (closed) {
          return;
        }
        closed = true;
        cleanup();
        try {
          controller.close();
        } catch {
          // The stream may already be closed by the runtime.
        }
      };

      send("snapshot", {
        events: listMonitorEvents(),
        generatedAt: new Date().toISOString(),
      });

      unsubscribe = subscribeToMonitorEvents((event) => {
        send("monitor", event);
      });

      heartbeat = setInterval(() => {
        enqueue(`: ping ${Date.now()}\n\n`);
      }, config.sseHeartbeatMs);

      lifetime = setTimeout(() => {
        enqueue(": stream-lifetime-complete\n\n");
        close();
      }, config.sseMaxDurationMs);

      request.signal.addEventListener("abort", close);
    },
    cancel() {
      closed = true;
      cleanup();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
