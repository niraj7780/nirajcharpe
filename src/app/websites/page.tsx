'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Globe,
  GitBranch,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight,
  Terminal,
  ShieldCheck,
  Check,
  ExternalLink
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { websiteExamples } from '@/data/website-examples';
import { InteractiveDemoViewer } from '@/components/demos/interactive-demos';

export default function WebsitesPage() {
  const [selectedDemo, setSelectedDemo] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Header Banner with Bold Fonts & Cursive Accents */}
      <section className="pt-20 pb-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#A3F527] animate-pulse" />
            <Badge variant="lime" className="uppercase tracking-widest text-xs font-mono">
              SERVICE // 01 • WEBSITE DEVELOPMENT
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase">
            20 Production <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">websites</span> Deployed on Vercel
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed">
            High-converting digital experiences engineered with Next.js 14 and Tailwind CSS. Every build is automatically pushed to GitHub repositories and deployed with zero downtime to Vercel global Edge networks.
          </p>

          {/* Automated Pipeline Indicators */}
          <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
            <span className="px-3 py-1.5 border border-neutral-800 bg-neutral-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Automated GitHub Push
            </span>
            <span className="px-3 py-1.5 border border-neutral-800 bg-neutral-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Zero-Downtime Vercel Edge Deploy
            </span>
            <span className="px-3 py-1.5 border border-neutral-800 bg-neutral-900 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Sub-Second Global Edge CDN (98+ Lighthouse)
            </span>
          </div>
        </div>
      </section>

      {/* Quick Interactive Demo Modal if opened */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-3xl border border-[#A3F527] bg-[#0A0A0A] p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="font-mono text-xs text-[#A3F527] uppercase tracking-wider font-bold">
                Quick Interactive Sandbox Preview
              </span>
              <button
                onClick={() => setSelectedDemo(null)}
                className="font-mono text-xs text-neutral-400 hover:text-white px-2.5 py-1 border border-neutral-800 hover:border-neutral-600"
              >
                Close [ESC]
              </button>
            </div>
            <InteractiveDemoViewer demoId={selectedDemo} />
          </div>
        </div>
      )}

      {/* 20 Website Examples Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-800 pb-4 gap-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              Production Portfolio Index (01 – 20)
            </span>
            <span className="text-xs font-mono text-[#A3F527]">
              Every Format Ready for Bespoke Client Deployment
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websiteExamples.map((site) => (
              <div
                key={site.id}
                className="p-6 border border-neutral-800 bg-neutral-950 hover:border-[#A3F527]/60 transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Category */}
                  <div className="flex items-start justify-between gap-2 border-b border-neutral-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-2xl text-white group-hover:text-[#A3F527] transition-colors">
                        {site.number}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 border border-[#A3F527]/30 bg-[#A3F527]/10 text-[#A3F527] font-bold">
                        {site.category}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono uppercase text-neutral-500 text-right max-w-xs">
                      Target: {site.clientTarget}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="font-bold font-mono text-xl text-white group-hover:text-[#A3F527] transition-colors">
                      {site.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-1 leading-relaxed">
                      {site.shortDesc}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {site.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs font-mono text-neutral-300">
                        <span className="text-[#A3F527] font-bold">›</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vercel Live Deployment Link & Pipeline */}
                  <div className="p-3 border border-neutral-800 bg-black space-y-1.5 text-[11px] font-mono">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-neutral-400 uppercase font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#A3F527]" />
                        Vercel Global Edge:
                      </span>
                      <span className="text-[#A3F527] font-bold">AUTOMATED CI/CD</span>
                    </div>
                    <div className="text-[10px] text-neutral-500 truncate font-mono">
                      {site.vercelLiveUrl}
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {site.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono border border-neutral-800 bg-neutral-900 text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 mt-5 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/websites/${site.slug}`}
                      className="px-3.5 py-2 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors flex items-center gap-1"
                    >
                      <span>Launch Live Website</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => setSelectedDemo(site.demoType)}
                      className="text-xs font-mono text-neutral-400 hover:text-white underline underline-offset-4"
                    >
                      Quick Sandbox
                    </button>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(site.title)}`}
                    className="px-3 py-1.5 border border-neutral-700 bg-transparent text-white font-mono text-[11px] font-bold uppercase hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
                  >
                    Build This For Me
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Banner with Cursive Accent */}
      <section className="py-20 border-t border-neutral-800 bg-neutral-950 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="lime" className="font-mono text-xs uppercase tracking-widest">
            Direct Engineering Delivery
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black font-display uppercase text-white">
            Ready to Build Your Website with <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">automated</span> Edge Deployment?
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Every website is engineered for sub-second page loads, maximum conversion rates, clean GitHub repository handoff, and zero-downtime Vercel hosting.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
            >
              <span>Initiate Website Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
