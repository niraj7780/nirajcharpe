import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Globe,
  ArrowLeft,
  ArrowUpRight,
  GitBranch,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Server,
  Zap,
  Laptop,
  Tablet,
  Smartphone,
  ExternalLink,
  Code2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { websiteExamples } from '@/data/website-examples';
import { InteractiveDemoViewer } from '@/components/demos/interactive-demos';

export function generateStaticParams() {
  return websiteExamples.map((site) => ({
    slug: site.slug,
  }));
}

export default function WebsiteDetailPage({ params }: { params: { slug: string } }) {
  const site = websiteExamples.find((s) => s.slug === params.slug);

  if (!site) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Top Telemetry & Viewport Switcher Bar */}
      <header className="sticky top-16 md:top-20 z-40 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-4">
          {/* Left: Back & Title */}
          <div className="flex items-center gap-3">
            <Link
              href="/websites"
              className="p-1.5 border border-neutral-800 hover:border-[#A3F527] text-neutral-400 hover:text-[#A3F527] transition-colors"
              title="Return to 20 Websites Directory"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-[#A3F527]">
                  FORMAT // {site.number}
                </span>
                <span className="text-[10px] font-mono text-neutral-500 uppercase">
                  {site.category}
                </span>
              </div>
              <h1 className="text-sm font-bold font-mono text-white tracking-wide truncate max-w-xs sm:max-w-md">
                {site.title}
              </h1>
            </div>
          </div>

          {/* Middle: Live Vercel Edge Status */}
          <div className="hidden lg:flex items-center gap-3 text-xs font-mono border border-neutral-800 px-3 py-1.5 bg-black">
            <span className="w-2 h-2 bg-[#A3F527] animate-pulse" />
            <span className="text-neutral-300 font-bold">Vercel Edge Global CDN:</span>
            <span className="text-[#A3F527] truncate">niraj-portfolio-pied.vercel.app/websites/{site.slug}</span>
          </div>

          {/* Right: Actions & CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={site.githubRepoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 border border-neutral-800 bg-neutral-900 text-xs font-mono text-neutral-300 hover:text-white hover:border-[#A3F527] transition-colors flex items-center gap-1.5"
            >
              <GitBranch className="w-3.5 h-3.5 text-[#A3F527]" />
              <span className="hidden sm:inline">GitHub Repo</span>
            </a>

            <Link
              href={`/contact?service=${encodeURIComponent(site.title)}`}
              className="px-4 py-1.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
            >
              Build This Website
            </Link>
          </div>
        </div>
      </header>

      {/* Main Interactive Website Workbench */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 w-full">
        {/* Live Interactive Canvas Window */}
        <div className="border border-neutral-800 bg-neutral-950">
          {/* Simulated Browser Chrome Top Header */}
          <div className="p-3 border-b border-neutral-800 bg-neutral-900 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-neutral-700" />
              <span className="w-2.5 h-2.5 bg-neutral-700" />
              <span className="w-2.5 h-2.5 bg-neutral-700" />
              <span className="text-neutral-400 pl-2 text-[11px] truncate">
                https://{site.slug}.production.niraj.dev
              </span>
            </div>

            <div className="flex items-center gap-2 text-[10px] text-neutral-400">
              <span className="text-[#A3F527] font-bold">200 OK</span>
              <span>•</span>
              <span>Edge Cached (sub-20ms)</span>
            </div>
          </div>

          {/* Interactive Working Component Canvas */}
          <div className="p-6 sm:p-10 bg-black min-h-[480px]">
            <InteractiveDemoViewer demoId={site.demoType} />
          </div>
        </div>

        {/* Technical Architecture & Client Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Overview & Target Client */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-3">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#A3F527] font-bold">
                Client Target & Value Proposition
              </h2>
              <p className="text-sm font-mono text-white leading-relaxed">
                <strong>Primary Audience:</strong> {site.clientTarget}
              </p>
              <p className="text-xs font-mono text-neutral-400 leading-relaxed">
                {site.shortDesc}
              </p>
            </div>

            {/* Core Architectural Features */}
            <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-white font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A3F527]" />
                <span>Engineered Specifications & Capabilities</span>
              </h3>
              <ul className="space-y-2.5 text-xs font-mono text-neutral-300">
                {site.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5">
                    <span className="text-[#A3F527] font-bold">›</span>
                    <span className="leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Automated CI/CD & Deployment Stack */}
          <div className="lg:col-span-5 space-y-6">
            {/* Automated Pipeline Card */}
            <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-4">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
                <span className="text-xs font-mono font-bold uppercase text-white">
                  Automated Vercel CI/CD Flow
                </span>
                <Badge variant="lime" className="text-[10px]">
                  Zero Downtime
                </Badge>
              </div>

              <div className="space-y-3 text-xs font-mono text-neutral-300">
                <div className="flex items-center justify-between p-2.5 border border-neutral-800 bg-black">
                  <span className="text-neutral-400">01. GitHub Repository</span>
                  <span className="text-[#A3F527] font-bold">Automated Sync</span>
                </div>
                <div className="flex items-center justify-between p-2.5 border border-neutral-800 bg-black">
                  <span className="text-neutral-400">02. Automated Test & Lint</span>
                  <span className="text-[#A3F527] font-bold">TypeScript Strict</span>
                </div>
                <div className="flex items-center justify-between p-2.5 border border-neutral-800 bg-black">
                  <span className="text-neutral-400">03. Vercel Global Edge</span>
                  <span className="text-[#A3F527] font-bold">Sub-Second Rollout</span>
                </div>
                <div className="flex items-center justify-between p-2.5 border border-neutral-800 bg-black">
                  <span className="text-neutral-400">04. Custom SSL & DNS</span>
                  <span className="text-[#A3F527] font-bold">Auto-Renewed</span>
                </div>
              </div>
            </div>

            {/* Stack Tags */}
            <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block font-bold">
                Tech Stack Architecture:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {site.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 border border-neutral-800 bg-black text-neutral-300 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Order CTA */}
            <div className="p-6 border border-[#A3F527] bg-[#A3F527]/10 space-y-3 text-center">
              <h4 className="text-sm font-bold font-mono text-white uppercase">
                Want this exact architecture for your business?
              </h4>
              <p className="text-xs font-mono text-neutral-300 leading-relaxed">
                I can customize this codebase with your branding, products, and integrations within 5–10 business days.
              </p>
              <Link
                href={`/contact?service=${encodeURIComponent(site.title)}`}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
              >
                <span>Request Custom Project Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
