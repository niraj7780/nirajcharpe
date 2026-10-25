import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { VisitorMonitor } from "@/components/monitor/VisitorMonitor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://nirajcharpe.is-a.dev";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Niraj Charpe",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: "Software Engineer",
  description:
    "Software engineer at HCLTech, building practical software across backend development, databases, web technologies, and AI.",
  email: "mailto:nirajcharpe48@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "HCLTech",
  },
  sameAs: [
    "https://github.com/niraj7780",
    "https://www.linkedin.com/in/niraj-charpe-7a2655355/",
  ],
  knowsAbout: [
    "Python",
    "JavaScript",
    "TypeScript",
    "SQL",
    "FastAPI",
    "Flask",
    "Django",
    "React",
    "Next.js",
    "Docker",
    "Google Gemini API",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Niraj Charpe | Software Engineer at HCLTech",
  description:
    "Explore Niraj Charpe's software projects, technical skills, GitHub repositories, and journey in backend development, databases, web technologies, and AI.",
  keywords: [
    "Niraj Charpe",
    "Software Engineer",
    "IT Professional",
    "HCLTech",
    "Software Engineer",
    "Portfolio",
    "Backend Developer",
    "AI Projects",
    "Full Stack Developer",
    "Noida",
  ],
  authors: [{ name: "Niraj Charpe", url: "https://github.com/niraj7780" }],
  creator: "Niraj Charpe",
  publisher: "Niraj Charpe",
  category: "technology",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Niraj Charpe | Software Engineer at HCLTech",
    description:
      "Explore Niraj Charpe's software projects, technical skills, GitHub repositories, and journey in backend development, databases, web technologies, and AI.",
    siteName: "Niraj Charpe Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Niraj Charpe — Software Engineer at HCLTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj Charpe | Software Engineer at HCLTech",
    description:
      "Explore Niraj Charpe's software projects, technical skills, GitHub repositories, and journey in backend development, databases, web technologies, and AI.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg" id="top">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-24 border border-border bg-bg-elevated px-4 py-2 text-sm font-medium text-fg shadow-md transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <VisitorMonitor />
      </body>
    </html>
  );
}
