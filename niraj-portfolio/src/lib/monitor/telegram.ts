import { getMonitorConfig } from "@/lib/monitor/config";
import type { MediaKind } from "@/lib/monitor/types";

export interface TelegramOutcome {
  ok: boolean;
  status?: number;
  description?: string;
}

interface TelegramApiResponse {
  ok?: boolean;
  description?: string;
}

function sanitizeDescription(value: unknown): string | undefined {
  if (typeof value !== "string") {
    return undefined;
  }
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);
}

async function callTelegram(
  method: string,
  body: FormData,
  timeoutMs: number
): Promise<TelegramOutcome> {
  const config = getMonitorConfig();
  if (!config.telegramEnabled) {
    return {
      ok: false,
      description: "Telegram notifications are disabled or not configured.",
    };
  }

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${config.telegramToken}/${method}`,
      {
        method: "POST",
        body,
        cache: "no-store",
        signal: AbortSignal.timeout(timeoutMs),
      }
    );

    let data: TelegramApiResponse | null = null;
    try {
      data = (await response.json()) as TelegramApiResponse;
    } catch {
      data = null;
    }

    if (!response.ok || !data?.ok) {
      return {
        ok: false,
        status: response.status,
        description:
          sanitizeDescription(data?.description) ??
          "Telegram rejected the request.",
      };
    }

    return { ok: true, status: response.status };
  } catch {
    return {
      ok: false,
      description: "The Telegram request failed or timed out.",
    };
  }
}

export async function sendTelegramMessage(
  text: string
): Promise<TelegramOutcome> {
  const config = getMonitorConfig();
  if (!config.telegramEnabled) {
    return {
      ok: false,
      description: "Telegram notifications are disabled or not configured.",
    };
  }

  const form = new FormData();
  form.append("chat_id", config.telegramChatId);
  form.append("text", text.slice(0, 3900));
  form.append("disable_web_page_preview", "true");

  return callTelegram("sendMessage", form, config.telegramTimeoutMs);
}

export interface TelegramMediaInput {
  kind: MediaKind;
  blob: Blob;
  filename: string;
  caption: string;
  durationMs?: number;
}

function selectMediaMethod(kind: MediaKind, mimeType: string) {
  if (kind === "photo") {
    return { method: "sendPhoto", field: "photo" };
  }

  if (kind === "audio") {
    const inlineAudio = new Set([
      "audio/mpeg",
      "audio/mp3",
      "audio/mp4",
      "audio/x-m4a",
      "audio/aac",
      "audio/ogg",
    ]);
    return inlineAudio.has(mimeType)
      ? { method: "sendAudio", field: "audio" }
      : { method: "sendDocument", field: "document" };
  }

  const inlineVideo = new Set(["video/mp4", "video/quicktime"]);
  return inlineVideo.has(mimeType)
    ? { method: "sendVideo", field: "video" }
    : { method: "sendDocument", field: "document" };
}

export async function sendTelegramMedia(
  input: TelegramMediaInput
): Promise<TelegramOutcome> {
  const config = getMonitorConfig();
  if (!config.telegramEnabled) {
    return {
      ok: false,
      description: "Telegram notifications are disabled or not configured.",
    };
  }

  const mimeType = input.blob.type.split(";")[0].trim().toLowerCase();
  const { method, field } = selectMediaMethod(input.kind, mimeType);
  const form = new FormData();
  form.append("chat_id", config.telegramChatId);
  form.append(field, input.blob, input.filename);

  if (method !== "sendPhoto") {
    form.append("caption", input.caption.slice(0, 1024));
  }

  if (
    (method === "sendAudio" || method === "sendVideo") &&
    typeof input.durationMs === "number" &&
    Number.isFinite(input.durationMs) &&
    input.durationMs > 0
  ) {
    form.append(
      "duration",
      String(Math.min(3600, Math.round(input.durationMs / 1000)))
    );
  }

  return callTelegram(method, form, config.telegramTimeoutMs);
}
