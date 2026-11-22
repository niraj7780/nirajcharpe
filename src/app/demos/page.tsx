'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  CheckCircle2,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { conceptDemos, InteractiveDemo } from '@/data/demos';
import { InteractiveDemoViewer } from '@/components/demos/interactive-demos';

export default function DemosPage() {
  const [activeDemoId, setActiveDemoId] = React.useState<string>(conceptDemos[0].id);

  const activeDemo = conceptDemos.find((d) => d.id === activeDemoId) || conceptDemos[0];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-50/50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Concept Gallery</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Live Interactive Concept Demos
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Experience my technical execution firsthand through 8 working in-browser prototypes. Test WebGL 3D configurators, reactive shopping carts, mortgage calculators, and live SaaS telemetry.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="max-w-xl mx-auto p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-700 dark:text-amber-400 text-xs flex items-center justify-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>
              <strong>Transparency Disclosure:</strong> These are functional concept demonstrations built to prove engineering depth, never misrepresented as paid client work.
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Demo Workbench */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Demo Switcher Navigation */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2 font-semibold">
                Select Interactive Prototype ({conceptDemos.length} Available)
              </span>

              {conceptDemos.map((demo, idx) => {
                const isActive = demo.id === activeDemoId;
                return (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemoId(demo.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 ${
                      isActive
                        ? 'border-[#0066FF] bg-blue-50/40 dark:bg-blue-950/30 shadow-md ring-1 ring-blue-500'
                        : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] hover:bg-neutral-50 dark:hover:bg-neutral-900'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 ${
                        isActive
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-500'
                      }`}
                    >
                      {idx + 1}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                          {demo.category}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        )}
                      </div>
                      <h3
                        className={`text-xs sm:text-sm font-semibold truncate ${
                          isActive
                            ? 'text-[#0066FF] dark:text-blue-400 font-bold'
                            : 'text-neutral-900 dark:text-white'
                        }`}
                      >
                        {demo.title}
                      </h3>
                      <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5">
                        {demo.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Working Demo Canvas */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-xl space-y-6">
                {/* Active Demo Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-200 dark:border-neutral-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                        {activeDemo.category}
                      </span>
                      <Badge variant="electric" className="text-[10px]">
                        Live Interactive Sandbox
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
                      {activeDemo.title}
                    </h2>
                  </div>

                  <Link
                    href={`/contact?inquiryType=CustomDemo&demoRef=${encodeURIComponent(activeDemo.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 text-xs font-semibold whitespace-nowrap"
                  >
                    <span>Build This For My Brand</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* The Real Interactive Component */}
                <div className="p-4 sm:p-6 rounded-xl border border-neutral-200/70 dark:border-neutral-800/70 bg-neutral-50/50 dark:bg-neutral-950/50">
                  <InteractiveDemoViewer demoId={activeDemo.id} />
                </div>

                {/* Demo Technical Architecture Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      Key Technical Capabilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-600 dark:text-neutral-300">
                      {activeDemo.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      Tech Stack Behind This Demo:
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeDemo.techStack.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-neutral-500 pt-2 leading-relaxed">
                      {activeDemo.previewDescription}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Conversion Prompt */}
      <section className="py-16 bg-neutral-50 dark:bg-[#0B0C12] border-t border-neutral-200/80 dark:border-neutral-800/80 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Need an Interactive Web Experience for Your Product?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Elevate your digital presence with custom WebGL elements, interactive calculators, or client onboarding workflows.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-semibold text-xs shadow-md"
            >
              <span>Request a Custom Interactive Demo Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
