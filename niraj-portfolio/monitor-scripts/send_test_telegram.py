"""Optional local helper: send a test Telegram message to validate config."""
from __future__ import annotations

import os
import sys
import urllib.parse
import urllib.request
import urllib.error


def main() -> int:
    token = os.environ.get("TELEGRAM_BOT_TOKEN", "").strip()
    chat_id = os.environ.get("TELEGRAM_CHAT_ID", "").strip()
    if not token or not chat_id:
        print("Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID.", file=sys.stderr)
        return 2
    text = "Test message from the Niraj Charpe portfolio monitoring helper."
    url = f"https://api.telegram.org/bot{token}/sendMessage"
    data = urllib.parse.urlencode({"chat_id": chat_id, "text": text, "disable_web_page_preview": "true"}).encode()
    try:
        with urllib.request.urlopen(url, data=data, timeout=15) as response:
            body = response.read().decode("utf-8", "replace")
            print(body)
            return 0 if body and "ok" in body else 1
    except urllib.error.URLError as exc:
        print(f"Telegram request failed: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
