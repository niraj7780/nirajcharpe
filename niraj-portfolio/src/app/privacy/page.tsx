import type { Metadata } from "next";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy notice | Niraj Charpe",
  description:
    "What the consent-based visitor demo collects, why it is collected, how it is transmitted, and how to decline optional features.",
  alternates: {
    canonical: "/privacy",
  },
};

const sections = [
  {
    title: "Session analytics",
    body: [
      "If session analytics is enabled and you choose Allow, the site sends a random, temporary session ID, the page path, the referrer hostname when available, a UTC timestamp, coarse device category, browser name and version, operating-system name, and your consent state.",
      "The session ID is stored in your browser's session storage. It is not derived from your device and is discarded when the tab closes. No cookie is used for analytics.",
      "Session events are sent to the website owner's configured Telegram chat. The site keeps only a small in-memory feed for the owner panel; it is not written to a database or persistent file.",
    ],
  },
  {
    title: "IP address and network location",
    body: [
      "IP processing is disabled by default. If the owner enables it, the server may derive a truncated IP address from the hosting platform's trusted request context and include that truncated value in notifications. Full IP addresses are not stored in the event feed.",
      "Approximate network location is a separate feature and is disabled by default. When both IP processing and approximate location are enabled, the server may send the full IP address to a configured third-party geolocation provider. That result is approximate and is never treated as GPS or an exact address.",
      "GPS coordinates are only obtained through the browser Geolocation API after you click Share My Location.",
    ],
  },
  {
    title: "Camera, microphone, and video",
    body: [
      "Camera and microphone access starts only after you click a start control on the demo page. The page shows a visible active indicator. A photo or recording stays in your browser for review until you press a separate send button.",
      "If you send media, it goes directly to the website owner's configured Telegram chat. The site does not write media to disk or a database, and it discards its in-memory copy after the request finishes, whether delivery succeeds or fails.",
      "Switching tabs stops an active camera preview or recording. Leaving the demo page stops active media tracks.",
    ],
  },
  {
    title: "GPS and live location",
    body: [
      "One-time location is requested only after you click Share My Location. Coordinates, reported accuracy, and a timestamp are shown to you before you choose Send to Telegram.",
      "Live location sharing is disabled by default. If enabled, it requires a separate confirmation, sends periodic updates, shows an active indicator, and stops immediately when you press Stop sharing or the configured time limit is reached.",
    ],
  },
  {
    title: "Retention and third parties",
    body: [
      "The application keeps no database, visitor-history table, media archive, or persistent queue. The in-memory event feed expires automatically and clears when the server process restarts.",
      "Telegram may retain delivered messages and media in the configured chat. The hosting provider may retain operational logs. The site cannot guarantee deletion from those services.",
      "If IP geolocation is enabled, the configured provider receives the IP address at lookup time. The owner must review that provider's data-sharing and retention terms before enabling the feature.",
    ],
  },
  {
    title: "Your choices",
    body: [
      "Session analytics requires an Allow action. Camera, microphone, video, GPS, and live tracking each require a deliberate start action, and media or GPS transmission requires separate confirmation.",
      "Declining or cancelling never blocks the portfolio. Denied permissions are not requested again automatically. You can use the manual retry control if you change your mind.",
      "You can close the tab to end a session and clear the temporary session ID. Use Stop sharing to end live location immediately.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main id="main-content" className="flex-1 pt-16">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <span className="inline-block rounded bg-border px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-fg-muted">
            Privacy
          </span>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-fg md:text-4xl">
            Privacy notice
          </h1>
          <p className="mt-4 text-base leading-relaxed text-fg-muted">
            This notice covers the optional visitor-monitoring demo on this
            site. The portfolio itself remains usable without granting any
            optional permission. Approved submissions go to the website
            owner&apos;s configured Telegram chat.
          </p>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-lg font-semibold text-fg">
                  {section.title}
                </h2>
                <div className="mt-2 space-y-3">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-fg-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <p className="mt-10 border-t border-border pt-6 text-sm leading-relaxed text-fg-muted">
            Questions or deletion requests for content already delivered to
            Telegram should be sent to{" "}
            <a
              href="mailto:nirajcharpe48@gmail.com"
              className="underline hover:text-fg"
            >
              nirajcharpe48@gmail.com
            </a>
            . See the{" "}
            <Link href="/demo" className="underline hover:text-fg">
              demo page
            </Link>{" "}
            for the feature controls.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
