import * as React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Search,
  FileText,
  Layout,
  Code2,
  Rocket,
  HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { developmentProcess } from '@/data/process';

export default function ProcessPage() {
  const stepIcons = [Search, FileText, Layout, Code2, ShieldCheck, Rocket];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="lime" className="uppercase tracking-widest text-[11px]">
            COLLABORATIVE METHODOLOGY
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase font-mono text-neutral-950 dark:text-white">
            The 6-Step Development Process
          </h1>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Predictable delivery, zero ambiguity, and weekly milestone previews. From technical discovery to automated edge deployment.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center justify-center gap-6">
            <span>• Guaranteed Written Scope</span>
            <span>• Private Staging Previews</span>
            <span>• Direct Developer Access</span>
          </div>
        </div>
      </section>

      {/* Process Steps Timeline - Minimal Square */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {developmentProcess.map((step, index) => {
            const Icon = stepIcons[index] || Code2;
            return (
              <div
                key={step.stepNumber}
                className="p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] space-y-6 hover:border-[#A3F527] transition-all group"
              >
                {/* Step Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-900">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#060606] text-[#A3F527] flex items-center justify-center font-mono font-bold text-sm">
                      0{step.stepNumber}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#A3F527] uppercase tracking-widest">
                        PHASE 0{step.stepNumber}
                      </span>
                      <h2 className="text-xl font-bold font-mono uppercase text-neutral-950 dark:text-white group-hover:text-[#A3F527] transition-colors">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-[#060606] text-neutral-600 dark:text-neutral-400">
                      Duration: {step.duration}
                    </span>
                  </div>
                </div>

                {/* Step Narrative & Commitment */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {step.details}
                    </p>

                    <div className="p-3 border border-neutral-200 dark:border-neutral-900 bg-neutral-50 dark:bg-[#060606] text-xs font-mono space-y-1">
                      <span className="font-bold text-neutral-900 dark:text-white uppercase text-[10px]">
                        Client Time Commitment:
                      </span>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {step.clientCommitment}
                      </p>
                    </div>

                    <div className="space-y-1 pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                        Questions We Address:
                      </span>
                      {step.keyQuestions.map((q) => (
                        <div key={q} className="flex items-start gap-2 text-xs font-mono text-neutral-500 italic">
                          <span className="text-[#A3F527]">›</span>
                          <span>&ldquo;{q}&rdquo;</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Column */}
                  <div className="lg:col-span-5 p-5 border border-[#A3F527]/30 bg-[#A3F527]/5 space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#A3F527] flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Phase Deliverables:</span>
                    </h3>
                    <ul className="space-y-2 text-xs font-mono text-neutral-800 dark:text-neutral-200">
                      {step.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2">
                          <span className="text-[#A3F527] font-bold">✓</span>
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-black text-white text-center border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <Badge variant="lime" className="font-mono text-xs">
            Direct Developer Partnership
          </Badge>
          <h2 className="text-3xl font-extrabold uppercase font-mono text-white">
            Experience Transparent, Predictable Execution
          </h2>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Every feature is verified, documented, committed to GitHub, and deployed to live edge staging before final sign-off.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8AE40E]"
            >
              <span>Schedule Project Discovery</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
