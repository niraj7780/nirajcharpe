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
  Check
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { websiteExamples } from '@/data/website-examples';
import { InteractiveDemoViewer } from '@/components/demos/interactive-demos';

export default function WebsitesPage() {
  const [selectedDemo, setSelectedDemo] = React.useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="lime" className="uppercase tracking-widest text-[11px]">
            SERVICE 01 • WEBSITE DEVELOPMENT
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white uppercase font-mono">
            20 Production Website Types
          </h1>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Engineered with Next.js 14 and Tailwind CSS. Built, automatically pushed to GitHub repositories, and deployed with zero downtime to Vercel edge networks.
          </p>

          {/* Automated Pipeline Indicators */}
          <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Automated GitHub Repo Sync
            </span>
            <span className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Automatic 1-Click Vercel Deploy
            </span>
            <span className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Sub-Second Global Edge CDN
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Demo Modal if opened */}
      {selectedDemo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl border border-[#A3F527] bg-[#0A0A0A] p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
              <span className="font-mono text-xs text-[#A3F527] uppercase tracking-wider font-bold">
                Interactive Working Prototype
              </span>
              <button
                onClick={() => setSelectedDemo(null)}
                className="font-mono text-xs text-neutral-400 hover:text-white px-2 py-1 border border-neutral-800"
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
          <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-800 pb-3">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              Production Portfolio Categories (01 – 20)
            </span>
            <span className="text-xs font-mono text-[#A3F527]">
              All 20 Types Available For Client Customization
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {websiteExamples.map((site) => (
              <div
                key={site.id}
                className="p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] hover:border-[#A3F527] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Target */}
                  <div className="flex items-start justify-between gap-2 border-b border-neutral-100 dark:border-neutral-900 pb-3">
                    <span className="font-mono font-bold text-2xl text-neutral-900 dark:text-white group-hover:text-[#A3F527] transition-colors">
                      {site.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 text-right max-w-xs">
                      Target: {site.clientTarget}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div>
                    <h3 className="font-bold text-lg text-neutral-950 dark:text-white group-hover:text-[#A3F527] transition-colors">
                      {site.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                      {site.shortDesc}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-1.5 pt-1">
                    {site.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                        <span className="text-[#A3F527] font-bold">›</span>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Automated Deployment Pipeline Status */}
                  <div className="p-3 border border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-[#060606] space-y-1 text-[11px] font-mono">
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold">
                      Automated Pipeline & Delivery:
                    </span>
                    <div className="grid grid-cols-2 gap-1 text-neutral-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#A3F527]"></span> Auto GitHub Push
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#A3F527]"></span> 1-Click Vercel Deploy
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#A3F527]"></span> Automated SSL & DNS
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#A3F527]"></span> 100% Code Ownership
                      </span>
                    </div>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {site.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedDemo(site.demoType)}
                    className="text-xs font-mono font-bold text-[#A3F527] hover:underline flex items-center gap-1"
                  >
                    <span>Test Working Demo</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <Link
                    href={`/contact?websiteCategory=${encodeURIComponent(site.title)}`}
                    className="px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black hover:bg-[#A3F527] hover:text-black dark:hover:bg-[#A3F527] dark:hover:text-black font-mono text-[11px] font-bold uppercase transition-colors"
                  >
                    Build This For Me
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Callout Banner */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#080808] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="lime" className="font-mono text-xs">
            Direct Engineering Delivery
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-mono text-neutral-950 dark:text-white">
            Ready to Build Your Website with Automated Deployment?
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Every website is engineered for sub-second page loads, maximum conversion rates, and total IP ownership.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8AE40E]"
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
