"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export function MonitorLogin({ enabled }: { enabled: boolean }) {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/monitor/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
        credentials: "same-origin",
        cache: "no-store",
      });

      if (!response.ok) {
        let message = "Sign-in failed.";
        try {
          const data = (await response.json()) as { message?: string };
          if (data.message) {
            message = data.message;
          }
        } catch {
          message = `Sign-in failed with status ${response.status}.`;
        }
        setError(message);
        return;
      }

      router.replace("/monitor");
      router.refresh();
    } catch {
      setError("The sign-in request failed. Try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md border border-border bg-bg-elevated p-6 shadow-sm">
      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg-subtle">
        Owner access
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight text-fg">
        Visitor monitor
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-fg-muted">
        Enter the server-configured owner token to open the temporary live
        feed. The feed holds recent events in memory only.
      </p>

      {!enabled ? (
        <div className="mt-5 border border-blue-border bg-blue-subtle p-4 text-sm text-blue">
          The owner panel is not configured on this deployment. Set
          <code className="mx-1 font-mono text-xs">OWNER_PANEL_TOKEN</code>
          to a secret of at least 24 characters.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5 space-y-4">
          <div>
            <label
              htmlFor="owner-token"
              className="mb-1.5 block text-sm font-medium text-fg"
            >
              Owner token
            </label>
            <input
              id="owner-token"
              type="password"
              autoComplete="off"
              required
              value={token}
              onChange={(event) => setToken(event.target.value)}
              className="w-full rounded border border-border bg-bg px-3 py-2 text-sm text-fg outline-none transition-colors focus:border-accent-border"
            />
          </div>

          {error && (
            <p role="alert" className="text-sm text-red-700">
              {error}
            </p>
          )}

          <Button type="submit" disabled={submitting} className="w-full">
            {submitting ? "Signing in..." : "Open monitor"}
          </Button>
        </form>
      )}

      <div className="mt-5 flex items-center justify-between text-xs text-fg-subtle">
        <Link href="/" className="hover:text-fg">
          Back to portfolio
        </Link>
        <Link href="/privacy" className="hover:text-fg">
          Privacy
        </Link>
      </div>
    </div>
  );
}
