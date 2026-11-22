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
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Header Banner */}
      <section className="pt-20 pb-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="lime" className="font-mono text-xs uppercase tracking-wider">
            Interactive Concept Prototypes
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white uppercase">
            Live Interactive <span className="text-[#A3F527]">Prototypes</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Test real in-browser execution across 8 working prototypes: 3D configurators, reactive carts, mortgage calculators, and SaaS telemetry.
          </p>

          {/* Explicit Transparency Notice */}
          <div className="max-w-2xl p-3 border border-amber-500/40 bg-amber-500/10 text-amber-400 text-xs font-mono flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span>
              <strong>Transparency Disclosure:</strong> Functional concept demonstrations built to prove engineering depth, never misrepresented as paid client work.
            </span>
          </div>
        </div>
      </section>

      {/* Main Interactive Demo Workbench */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Demo Switcher Navigation */}
            <div className="lg:col-span-4 space-y-2">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2 font-bold">
                Select Interactive Prototype ({conceptDemos.length} Available)
              </span>

              {conceptDemos.map((demo, idx) => {
                const isActive = demo.id === activeDemoId;
                return (
                  <button
                    key={demo.id}
                    onClick={() => setActiveDemoId(demo.id)}
                    className={`w-full p-4 border text-left transition-all flex items-start gap-3 ${
                      isActive
                        ? 'border-[#A3F527] bg-[#A3F527]/10'
                        : 'border-neutral-800 bg-neutral-950 hover:border-neutral-700'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 border ${
                        isActive
                          ? 'border-[#A3F527] bg-[#A3F527] text-black'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400'
                      }`}
                    >
                      {idx + 1}
                    </span>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                          {demo.category}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 bg-[#A3F527] animate-pulse" />
                        )}
                      </div>
                      <h3
                        className={`text-xs sm:text-sm font-mono font-bold truncate ${
                          isActive
                            ? 'text-[#A3F527]'
                            : 'text-white'
                        }`}
                      >
                        {demo.title}
                      </h3>
                      <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
                        {demo.tagline}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Live Working Demo Canvas */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-6 sm:p-8 border border-neutral-800 bg-neutral-950 space-y-6">
                {/* Active Demo Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                        {activeDemo.category}
                      </span>
                      <Badge variant="lime" className="text-[10px]">
                        Live Interactive Sandbox
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-black font-mono text-white">
                      {activeDemo.title}
                    </h2>
                  </div>

                  <Link
                    href={`/contact?service=InteractiveDemo&demoRef=${encodeURIComponent(activeDemo.title)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors whitespace-nowrap"
                  >
                    <span>Build This For My Brand</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* The Real Interactive Component */}
                <div className="p-4 sm:p-6 border border-neutral-800 bg-black">
                  <InteractiveDemoViewer demoId={activeDemo.id} />
                </div>

                {/* Demo Technical Architecture Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-neutral-800">
                  <div className="space-y-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
                      Key Technical Capabilities:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-300">
                      {activeDemo.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A3F527] shrink-0 mt-0.5" />
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
                          className="px-2.5 py-1 text-xs font-mono bg-neutral-900 text-neutral-300 border border-neutral-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <p className="text-[11px] text-neutral-500 pt-2 leading-relaxed font-mono">
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
      <section className="py-20 bg-neutral-950 border-t border-neutral-800 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="lime" className="text-xs uppercase tracking-widest font-mono">
            Custom Engineering
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black font-mono text-white uppercase">
            Need an Interactive Web Experience for Your Product?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Elevate your digital presence with custom 3D configurators, interactive ROI calculators, or seamless client onboarding workflows.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
            >
              <span>Request Interactive Project Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
