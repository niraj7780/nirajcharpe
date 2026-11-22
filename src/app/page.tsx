import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Code2,
  Cpu,
  Workflow,
  Globe,
  Terminal,
  ChevronRight
} from 'lucide-react';
import { HeroScene } from '@/components/3d/hero-scene';
import { AnimatedSkills } from '@/components/animated-skills';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { websiteExamples } from '@/data/website-examples';
import { aiToolsServices } from '@/data/ai-tools';
import { automationPipelines } from '@/data/automation';
import { developmentProcess } from '@/data/process';
import { testimonialsData, collaborationPrinciples } from '@/data/testimonials';
import { InteractiveDemoViewer } from '@/components/demos/interactive-demos';

export default function HomePage() {
  const topWebsiteExamples = websiteExamples.slice(0, 4);
  const topAiTools = aiToolsServices.slice(0, 4);
  const topAutomations = automationPipelines.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100 selection:bg-[#A3F527] selection:text-black">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION - MINIMAL SQUARE DESIGN */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-neutral-200 dark:border-neutral-800 bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Availability & Positioning Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#A3F527]/50 bg-[#A3F527]/10 text-neutral-900 dark:text-white text-xs font-mono font-medium">
                <span className="w-2 h-2 bg-[#A3F527] animate-pulse"></span>
                <span>NIRAJ CHARPE • FULL-STACK, AI & AUTOMATION DEVELOPER</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase font-mono text-neutral-950 dark:text-white leading-[1.08]">
                I Build Digital Experiences That{' '}
                <span className="text-[#A3F527] underline decoration-[#A3F527]/40 underline-offset-8">
                  Grow Businesses.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                From stunning business websites to powerful e-commerce platforms and AI-powered applications, I turn ideas into functional digital experiences.
              </p>

              {/* 3 Core Services Indicator */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                <div className="flex items-center gap-2 p-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
                  <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                  <span>1. Website Dev</span>
                </div>
                <div className="flex items-center gap-2 p-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
                  <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                  <span>2. Custom AI Tools</span>
                </div>
                <div className="flex items-center gap-2 p-2 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
                  <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                  <span>3. Python Automation</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#A3F527] hover:bg-[#8AE40E] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(163,245,39,0.3)] hover:shadow-[0_0_22px_rgba(163,245,39,0.5)] active:translate-y-0.5"
                >
                  <span>Initiate Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/websites"
                  className="inline-flex items-center gap-2 px-5 py-3.5 border border-black dark:border-white bg-white dark:bg-[#0A0A0A] text-black dark:text-white text-xs font-mono font-bold uppercase tracking-wider hover:border-[#A3F527] hover:text-[#A3F527] transition-all"
                >
                  <span>Explore 20 Websites</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Minimal Square Counters */}
              <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-3 gap-6 font-mono">
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-[#A3F527]">20</p>
                  <p className="text-[11px] text-neutral-500 uppercase mt-0.5">Website Categories</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-neutral-900 dark:text-white">&lt; 0.8s</p>
                  <p className="text-[11px] text-neutral-500 uppercase mt-0.5">Edge LCP Speed</p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold text-neutral-900 dark:text-white">100%</p>
                  <p className="text-[11px] text-neutral-500 uppercase mt-0.5">IP Ownership</p>
                </div>
              </div>
            </div>

            {/* Right Interactive 3D Canvas Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-[480px] aspect-square border border-neutral-300 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#0A0A0A] p-2 relative overflow-hidden">
                <HeroScene />

                {/* Minimal Square Technical HUD */}
                <div className="absolute top-3 left-3 p-2.5 border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-[#0A0A0A]/90 text-[10px] font-mono space-y-0.5">
                  <div className="flex items-center gap-1.5 font-bold text-neutral-900 dark:text-white">
                    <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
                    <span>PIPELINE_STATUS: ACTIVE</span>
                  </div>
                  <p className="text-neutral-500">Auto GitHub Sync • 1-Click Vercel Deploy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* ANIMATED SKILLS TICKER & TECHNICAL MATRIX */}
      {/* ------------------------------------------------------------- */}
      <section className="py-12 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold flex items-center gap-2">
              <Code2 className="w-4 h-4 text-[#A3F527]" />
              <span>Full-Stack Engineering Competencies</span>
            </span>
            <span className="text-xs font-mono text-[#A3F527] font-bold">
              60 FPS Transform & Hardware Acceleration
            </span>
          </div>

          <AnimatedSkills />
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICE 1: WEBSITE DEVELOPMENT (20 WEBSITES SHOWCASE) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="lime" className="uppercase font-mono text-xs">
                CORE CAPABILITY 01
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono text-neutral-950 dark:text-white">
                Website Development (20 Examples)
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-xl">
                I build and automatically push to GitHub repositories with 1-click zero-downtime deployment to Vercel edge networks.
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topWebsiteExamples.map((site) => (
              <div
                key={site.id}
                className="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] hover:border-[#A3F527] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
                    <span className="font-mono font-bold text-lg text-neutral-900 dark:text-white group-hover:text-[#A3F527]">
                      {site.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-500">
                      {site.techStack[0]}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-neutral-950 dark:text-white group-hover:text-[#A3F527] transition-colors">
                    {site.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {site.shortDesc}
                  </p>

                  <div className="p-2 border border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-[#060606] text-[10px] font-mono text-neutral-500">
                    <span className="text-[#A3F527] font-bold">✓</span> Auto GitHub Push → Vercel Deploy
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                  <Link
                    href="/websites"
                    className="text-xs font-mono font-bold text-[#A3F527] hover:underline"
                  >
                    View Details →
                  </Link>
                  <Link
                    href={`/contact?websiteCategory=${encodeURIComponent(site.title)}`}
                    className="text-[11px] font-mono uppercase font-bold text-neutral-700 dark:text-neutral-300 hover:text-white"
                  >
                    Order Build
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICE 2: CUSTOM AI TOOLS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="lime" className="uppercase font-mono text-xs">
                CORE CAPABILITY 02
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono text-neutral-950 dark:text-white">
                Custom AI Tools for Business
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-xl">
                Domain-grounded RAG, autonomous data agents, and intake assistants built with strict schemas and zero hallucination.
              </p>
            </div>

            <Link
              href="/ai-tools"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>Explore All AI Tool Architectures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topAiTools.map((tool) => (
              <div
                key={tool.id}
                className="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] hover:border-[#A3F527] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
                    <span className="font-mono font-bold text-lg text-neutral-900 dark:text-white group-hover:text-[#A3F527]">
                      {tool.number}
                    </span>
                    <Badge variant="lime" className="text-[9px]">
                      AI System
                    </Badge>
                  </div>

                  <h3 className="font-bold text-base text-neutral-950 dark:text-white group-hover:text-[#A3F527] transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {tool.shortDesc}
                  </p>

                  <div className="p-2 border border-[#A3F527]/30 bg-[#A3F527]/5 text-[10px] font-mono text-neutral-800 dark:text-neutral-300">
                    <span className="text-[#A3F527] font-bold">ROI:</span> {tool.businessRoi}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                  <Link
                    href="/ai-tools"
                    className="text-xs font-mono font-bold text-[#A3F527] hover:underline"
                  >
                    View Architecture →
                  </Link>
                  <Link
                    href={`/contact?aiTool=${encodeURIComponent(tool.title)}`}
                    className="text-[11px] font-mono uppercase font-bold text-neutral-700 dark:text-neutral-300 hover:text-white"
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
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <Badge variant="lime" className="uppercase font-mono text-xs">
                CORE CAPABILITY 03
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase font-mono text-neutral-950 dark:text-white">
                Business Automation Pipelines
              </h2>
              <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-xl">
                B2B lead scrapers, CRM sync, SRE alerts, accounting double-entry, and scheduled headless crawlers in Python.
              </p>
            </div>

            <Link
              href="/automation"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>Explore All Automation Pipelines</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topAutomations.map((pipe) => (
              <div
                key={pipe.id}
                className="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] hover:border-[#A3F527] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-100 dark:border-neutral-900 pb-2">
                    <span className="font-mono font-bold text-lg text-neutral-900 dark:text-white group-hover:text-[#A3F527]">
                      {pipe.number}
                    </span>
                    <span className="text-[10px] font-mono text-neutral-400">
                      {pipe.triggerType}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-neutral-950 dark:text-white group-hover:text-[#A3F527] transition-colors">
                    {pipe.title}
                  </h3>

                  <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 line-clamp-2">
                    {pipe.shortDesc}
                  </p>

                  <div className="p-2 border border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-[#060606] text-[10px] font-mono text-neutral-500">
                    <span className="text-[#A3F527] font-bold">SAVED:</span> {pipe.timeSaved}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between">
                  <Link
                    href="/automation"
                    className="text-xs font-mono font-bold text-[#A3F527] hover:underline"
                  >
                    View Pipeline →
                  </Link>
                  <Link
                    href={`/contact?automationPipeline=${encodeURIComponent(pipe.title)}`}
                    className="text-[11px] font-mono uppercase font-bold text-neutral-700 dark:text-neutral-300 hover:text-white"
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
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <Badge variant="lime" className="uppercase font-mono text-xs">
              Methodical Execution
            </Badge>
            <h2 className="text-3xl font-extrabold uppercase font-mono text-neutral-950 dark:text-white">
              The 6-Step Development Process
            </h2>
            <p className="text-xs sm:text-sm font-mono text-neutral-500">
              Weekly private staging previews, continuous GitHub commits, and zero ambiguity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {developmentProcess.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] space-y-2"
              >
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[#A3F527] font-bold">0{step.stepNumber}</span>
                  <span className="text-neutral-500 text-[10px]">{step.duration}</span>
                </div>
                <h3 className="font-bold text-xs uppercase font-mono text-neutral-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-[11px] font-mono text-neutral-500 leading-relaxed">
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
      <section className="py-20 lg:py-28 bg-black text-white relative border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <Badge variant="lime" className="font-mono text-xs">
            Direct Developer Partnership
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold uppercase font-mono tracking-tight leading-tight">
            Have a Website, AI Tool, or Automation to Build?
          </h2>

          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Get in touch directly with Niraj. Review architecture feasibility, receive an accurate milestone schedule, and initiate your project.
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
              className="inline-flex items-center gap-2 px-6 py-4 border border-white hover:border-[#A3F527] text-white hover:text-[#A3F527] font-mono font-bold text-xs uppercase tracking-wider transition-all"
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
