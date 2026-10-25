import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { DemoFeatures } from "@/components/monitor/DemoFeatures";

export const metadata: Metadata = {
  title: "Consent-based visitor demo | Niraj Charpe",
  description:
    "A small, consent-based demonstration of browser device information, optional camera, microphone, video, and GPS sharing, with Telegram notifications.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DemoPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1 pt-16">
        <section className="border-b border-border bg-bg-elevated py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <span className="inline-block rounded bg-border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-fg-muted">
              Consent demo
            </span>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-fg md:text-5xl">
              Browser capabilities, on your terms.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">
              This page demonstrates what a website can access with normal
              browser APIs and explicit user action. Every optional feature is
              off until you start it, and nothing is transmitted until you
              confirm it.
            </p>
            <p className="mt-4 text-sm text-fg-subtle">
              This is a live technical demo, not a request for your data.{" "}
              <Link href="/privacy" className="underline hover:text-fg">
                Privacy notice
              </Link>
            </p>
          </div>
        </section>

        <DemoFeatures />
      </main>
      <Footer />
    </>
  );
}
