'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Workflow,
  Clock,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  RotateCw,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { automationPipelines } from '@/data/automation';

export default function AutomationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="lime" className="uppercase tracking-widest text-[11px]">
            SERVICE 03 • BUSINESS AUTOMATION
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white uppercase font-mono">
            Python & API Automations
          </h1>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Eliminate repetitive human work. I engineer resilient Python crawlers, background scheduled ETL jobs, webhook event relays, and automated CRM data synchronizations.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3 text-xs font-mono">
            <span className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              24/7 Headless Browser Scraping
            </span>
            <span className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              HubSpot & Pipedrive Bi-Directional Sync
            </span>
            <span className="px-3 py-1.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-2">
              <span className="w-2 h-2 bg-[#A3F527]"></span>
              Zero-Downtime Cron Schedulers
            </span>
          </div>
        </div>
      </section>

      {/* 8 Detailed Automation Pipelines */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-neutral-200 dark:border-neutral-800 pb-3 flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold">
              Production Automation Pipelines (01 – 08)
            </span>
            <span className="text-xs font-mono text-[#A3F527]">
              Engineered with Python 3.11, Playwright & Docker
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {automationPipelines.map((pipe) => (
              <div
                key={pipe.id}
                className="p-6 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] hover:border-[#A3F527] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-3">
                    <span className="font-mono font-bold text-2xl text-neutral-900 dark:text-white group-hover:text-[#A3F527] transition-colors">
                      {pipe.number}
                    </span>
                    <Badge variant="outline" className="text-[10px]">
                      Trigger: {pipe.triggerType}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-neutral-950 dark:text-white group-hover:text-[#A3F527] transition-colors">
                      {pipe.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                      {pipe.shortDesc}
                    </p>
                  </div>

                  {/* Problem & Time Saved Callouts */}
                  <div className="space-y-2 text-xs font-mono">
                    <div className="p-2.5 border border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-[#060606]">
                      <span className="text-neutral-400 text-[10px] uppercase font-bold block">
                        Manual Bottleneck Eliminated:
                      </span>
                      <p className="text-neutral-700 dark:text-neutral-300 mt-0.5">{pipe.problemSolved}</p>
                    </div>

                    <div className="p-2.5 border border-[#A3F527]/30 bg-[#A3F527]/5">
                      <span className="text-[#A3F527] text-[10px] uppercase font-bold block">
                        Operational Velocity Reclaimed:
                      </span>
                      <p className="text-neutral-800 dark:text-neutral-200 mt-0.5">{pipe.timeSaved}</p>
                    </div>
                  </div>

                  {/* Architecture Brief */}
                  <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400">
                    <span className="text-neutral-400 text-[10px] uppercase font-bold block mb-0.5">
                      Technical Architecture:
                    </span>
                    <p className="leading-relaxed">{pipe.architecture}</p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase font-bold block">
                      Pipeline Deliverables:
                    </span>
                    {pipe.deliverables.map((deliv) => (
                      <div key={deliv} className="flex items-start gap-2 text-xs font-mono text-neutral-700 dark:text-neutral-300">
                        <span className="text-[#A3F527] font-bold">›</span>
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {pipe.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-900">
                  <Link
                    href={`/contact?automationPipeline=${encodeURIComponent(pipe.title)}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-black text-white dark:bg-white dark:text-black hover:bg-[#A3F527] hover:text-black dark:hover:bg-[#A3F527] dark:hover:text-black font-mono text-xs font-bold uppercase transition-colors"
                  >
                    <span>Request Automation Pipeline Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#080808] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase font-mono text-neutral-950 dark:text-white">
            Ready to Automate Your Manual Business Operations?
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            I build robust, self-healing Python automation pipelines with comprehensive error alerting and automated retry mechanisms.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8AE40E]"
            >
              <span>Automate Your Workflow</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
