'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Globe,
  Bot,
  Zap,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  ShieldCheck,
  Check,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { HeroScene } from '@/components/3d/hero-scene';
import { AnimatedSkills } from '@/components/animated-skills';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { websiteExamples } from '@/data/website-examples';
import { aiToolsServices } from '@/data/ai-tools';
import { automationPipelines } from '@/data/automation';
import { developmentProcess } from '@/data/process';

export default function HomePage() {
  // Top 6 flagship websites requested by client (3D, Ecom, Portfolio, Restaurant, Salon, SaaS)
  const topWebsiteExamples = websiteExamples.slice(0, 6);
  const topAiTools = aiToolsServices.slice(0, 4);
  const topAutomations = automationPipelines.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION - BOLD DISPLAY + CURSIVE ACCENT + MINIMAL SQUARE */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Availability & Positioning Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#A3F527]/40 bg-[#A3F527]/10 text-white text-xs font-mono font-medium">
                <span className="w-2 h-2 bg-[#A3F527] animate-pulse"></span>
                <span className="text-[#A3F527] font-bold">NIRAJ CHARPE</span>
                <span className="text-neutral-500">•</span>
                <span>FULL-STACK • AI • AUTOMATION SPECIALIST</span>
              </div>

              {/* Main Headline with Bold Font + Cursive Accent */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase leading-[1.04]">
                I Build <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal text-[1.12em]">intelligent</span> Digital Experiences That Grow <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal text-[1.12em]">businesses.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg font-mono text-neutral-400 leading-relaxed max-w-2xl">
                From high-conversion business websites to scalable e-commerce platforms, custom AI systems, and Python business automation pipelines.
              </p>

              {/* 3 Core Services Indicator */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono font-bold uppercase tracking-wider">
                <Link
                  href="/websites"
                  className="flex items-center gap-2 p-2.5 border border-neutral-800 bg-black hover:border-[#A3F527] transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                  <span>1. Website Dev (20)</span>
                </Link>
                <Link
                  href="/ai-tools"
                  className="flex items-center gap-2 p-2.5 border border-neutral-800 bg-black hover:border-[#A3F527] transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                  <span>2. Custom AI Tools</span>
                </Link>
                <Link
                  href="/automation"
                  className="flex items-center gap-2 p-2.5 border border-neutral-800 bg-black hover:border-[#A3F527] transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                  <span>3. Python Automation</span>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#A3F527] hover:bg-[#8AE40E] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(163,245,39,0.3)] hover:shadow-[0_0_30px_rgba(163,245,39,0.5)] active:translate-y-0.5"
                >
                  <span>Initiate Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/websites"
                  className="inline-flex items-center gap-2 px-6 py-4 border border-neutral-700 bg-neutral-900 text-white text-xs font-mono font-bold uppercase tracking-wider hover:border-[#A3F527] hover:text-[#A3F527] transition-all"
                >
                  <span>Launch 20 Live Websites</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Minimal Square Counters */}
              <div className="pt-6 border-t border-neutral-800 grid grid-cols-3 gap-6 font-mono">
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white">20</span>
                  <p className="text-[11px] text-neutral-500 uppercase mt-0.5">Production Formats</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-[#A3F527]">100%</span>
                  <p className="text-[11px] text-neutral-500 uppercase mt-0.5">Code Ownership</p>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-black text-white">0</span>
                  <p className="text-[11px] text-neutral-500 uppercase mt-0.5">Agency Bloat</p>
                </div>
              </div>
            </div>

            {/* Right Interactive 3D Canvas Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full h-[400px] sm:h-[460px] border border-neutral-800 bg-black relative">
                <HeroScene />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATED SKILLS & BENCHMARK TICKER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 border-b border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSkills />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICE 1: 20 WEBSITES SHOWCASE (3D, ECOM, PORTFOLIO, RESTAURANT, SALON, SAAS) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="lime" className="uppercase font-mono text-xs">
                SERVICE 01 • WEBSITE DEVELOPMENT
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
                20 Production <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">websites</span> Deployed on Vercel
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-2xl leading-relaxed">
                From 3D WebGL experiences and luxury e-commerce to restaurant reservation engines, salon booking platforms, and B2B SaaS dashboards.
              </p>
            </div>

            <Link
              href="/websites"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>View All 20 Website Examples</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topWebsiteExamples.map((site) => (
              <div
                key={site.id}
                className="p-6 border border-neutral-800 bg-black hover:border-[#A3F527]/60 transition-colors flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
                    <span className="font-mono font-black text-xl text-white group-hover:text-[#A3F527]">
                      {site.number}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-[#A3F527]/30 bg-[#A3F527]/10 text-[#A3F527] font-bold">
                      {site.category}
                    </span>
                  </div>

                  <h3 className="font-bold font-mono text-lg text-white group-hover:text-[#A3F527] transition-colors">
                    {site.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-400 line-clamp-2 leading-relaxed">
                    {site.shortDesc}
                  </p>

                  {/* Vercel Live Link Pill */}
                  <div className="p-2.5 border border-neutral-800 bg-neutral-950 space-y-1 text-[10px] font-mono">
                    <div className="flex items-center justify-between text-[#A3F527] font-bold">
                      <span>✓ Vercel Edge CI/CD</span>
                      <span>Sub-Second</span>
                    </div>
                    <div className="text-neutral-500 truncate">
                      {site.vercelLiveUrl}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                  <Link
                    href={`/websites/${site.slug}`}
                    className="px-3 py-1.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors flex items-center gap-1"
                  >
                    <span>Launch Live</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?service=${encodeURIComponent(site.title)}`}
                    className="text-xs font-mono text-neutral-400 hover:text-white uppercase font-bold"
                  >
                    Order Build
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/websites"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-neutral-700 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
            >
              <span>Explore All 20 Website Architectures & Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICE 2: CUSTOM AI TOOLS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="lime" className="uppercase font-mono text-xs">
                SERVICE 02 • CUSTOM AI TOOLS
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
                Autonomous Custom <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">ai tools</span> & LLM Agents
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl">
                Domain-grounded Document RAG (pgvector), autonomous Text-to-SQL data agents, and intake assistants built with strict deterministic schemas.
              </p>
            </div>

            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>Explore All 8 AI Systems</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topAiTools.map((tool) => (
              <div
                key={tool.id}
                className="p-5 border border-neutral-800 bg-neutral-950 hover:border-[#A3F527] transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                    <span className="font-mono font-bold text-lg text-white group-hover:text-[#A3F527]">
                      {tool.number}
                    </span>
                    <Badge variant="lime" className="text-[9px]">
                      AI System
                    </Badge>
                  </div>

                  <h3 className="font-bold font-mono text-base text-white group-hover:text-[#A3F527] transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-400 line-clamp-2">
                    {tool.shortDesc}
                  </p>

                  <div className="p-2 border border-[#A3F527]/30 bg-[#A3F527]/5 text-[10px] font-mono text-neutral-300">
                    <span className="text-[#A3F527] font-bold">ROI:</span> {tool.businessRoi}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    href="/ai-tools"
                    className="text-xs font-mono font-bold text-[#A3F527] hover:underline"
                  >
                    View Architecture →
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(tool.title)}`}
                    className="text-[11px] font-mono uppercase font-bold text-neutral-400 hover:text-white"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICE 3: PYTHON & API AUTOMATION */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="lime" className="uppercase font-mono text-xs">
                SERVICE 03 • BUSINESS AUTOMATION
              </Badge>
              <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
                Resilient Python <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">automation</span> & Backend Pipelines
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl">
                B2B lead scrapers, CRM sync, SRE alerts, accounting reconciliation, and scheduled headless crawlers saving 15-40+ human hours weekly.
              </p>
            </div>

            <Link
              href="/automation"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>Explore All 8 Automation Pipelines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topAutomations.map((pipe) => (
              <div
                key={pipe.id}
                className="p-5 border border-neutral-800 bg-black hover:border-[#A3F527] transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                    <span className="font-mono font-bold text-lg text-white group-hover:text-[#A3F527]">
                      {pipe.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {pipe.triggerType}
                    </span>
                  </div>

                  <h3 className="font-bold font-mono text-base text-white group-hover:text-[#A3F527] transition-colors">
                    {pipe.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-400 line-clamp-2">
                    {pipe.shortDesc}
                  </p>

                  <div className="p-2 border border-neutral-800 bg-neutral-950 text-[10px] font-mono text-neutral-400">
                    <span className="text-[#A3F527] font-bold">SAVED:</span> {pipe.timeSaved}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between">
                  <Link
                    href="/automation"
                    className="text-xs font-mono font-bold text-[#A3F527] hover:underline"
                  >
                    View Pipeline →
                  </Link>
                  <Link
                    href={`/contact?service=${encodeURIComponent(pipe.title)}`}
                    className="text-[11px] font-mono uppercase font-bold text-neutral-400 hover:text-white"
                  >
                    Deploy
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6-STEP METHODOLOGY OVERVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-neutral-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="lime" className="uppercase font-mono text-xs">
              Methodical Execution
            </Badge>
            <h2 className="text-3xl sm:text-5xl font-black font-display uppercase tracking-tight text-white">
              The 6-Step Development <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">process</span>
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-400">
              Weekly private staging previews, continuous GitHub commits, and zero ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {developmentProcess.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 border border-neutral-800 bg-neutral-950 space-y-2 hover:border-[#A3F527]/40 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#A3F527] font-bold">0{step.stepNumber}</span>
                  <span className="text-neutral-500 text-[10px]">{step.duration}</span>
                </div>
                <h3 className="font-bold text-xs uppercase font-mono text-white">
                  {step.title}
                </h3>
                <p className="text-[11px] font-mono text-neutral-400 leading-relaxed">
                  {step.shortDesc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/process"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>Read Full Step-by-Step Client Checkpoints & Deliverables</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* CONVERSION CALL TO ACTION BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-neutral-950 text-white relative border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Badge variant="lime" className="font-mono text-xs uppercase tracking-widest">
            Direct Developer Partnership
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight leading-tight">
            Let’s Build Something <span className="font-cursive italic font-normal text-[#A3F527] lowercase tracking-normal">extraordinary</span> Together
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Get in touch directly with Niraj. Review architecture feasibility, receive an accurate milestone schedule, and initiate your website, AI tool, or automation project.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#A3F527] hover:bg-[#8AE40E] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(163,245,39,0.35)]"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/websites"
              className="inline-flex items-center gap-2 px-6 py-4 border border-neutral-700 bg-neutral-900 hover:border-[#A3F527] text-white hover:text-[#A3F527] font-mono font-bold text-xs uppercase tracking-wider transition-all"
            >
              <span>Review 20 Website Examples</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
