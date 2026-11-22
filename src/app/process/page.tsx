import * as React from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  ArrowRight,
  ShieldCheck,
  Video,
  FileText,
  Code2,
  Rocket,
  Search,
  Layout,
  HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { developmentProcess } from '@/data/process';

export default function ProcessPage() {
  const stepIcons = [Search, FileText, Layout, Code2, ShieldCheck, Rocket];

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
            Methodical Collaboration
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            The 6-Step Development Process
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Predictable delivery, zero ambiguity, and weekly milestone demos. Here is exactly how we take your project from raw idea to high-performance launch.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center justify-center gap-6">
            <span>• Guaranteed Written Scope</span>
            <span>• Private Staging Previews</span>
            <span>• Direct Slack/WhatsApp Access</span>
          </div>
        </div>
      </section>

      {/* Process Steps Timeline */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {developmentProcess.map((step, index) => {
            const Icon = stepIcons[index] || Code2;
            return (
              <div
                key={step.stepNumber}
                className="p-8 lg:p-10 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm relative space-y-6"
              >
                {/* Step Top Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#0066FF] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-bold text-[#0066FF] dark:text-blue-400">
                        PHASE 0{step.stepNumber}
                      </span>
                      <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
                        {step.title}
                      </h2>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs font-mono">
                    <div className="px-3 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0066FF]" />
                      <span>{step.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Step Narrative & Commitment */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {step.details}
                    </p>

                    <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs space-y-1">
                      <span className="font-semibold text-neutral-900 dark:text-white font-mono uppercase text-[10px]">
                        Client Time Commitment:
                      </span>
                      <p className="text-neutral-600 dark:text-neutral-400">
                        {step.clientCommitment}
                      </p>
                    </div>

                    <div className="space-y-1.5 pt-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 font-bold block">
                        Strategic Questions We Resolve:
                      </span>
                      {step.keyQuestions.map((q) => (
                        <div key={q} className="flex items-start gap-2 text-xs text-neutral-600 dark:text-neutral-400 italic">
                          <HelpCircle className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                          <span>&ldquo;{q}&rdquo;</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Deliverables Column */}
                  <div className="lg:col-span-5 p-5 rounded-xl border border-blue-500/20 bg-blue-50/20 dark:bg-blue-950/20 space-y-3">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      <span>Phase Deliverables:</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-neutral-700 dark:text-neutral-300">
                      {step.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0 mt-1.5" />
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

      {/* Communication & Staging Guarantee */}
      <section className="py-20 bg-neutral-50/50 dark:bg-[#0B0C12] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <Badge variant="purple" className="font-mono text-xs">
            Client Transparency Standard
          </Badge>
          <h2 className="text-3xl font-bold text-neutral-950 dark:text-white">
            You Are Never Left Guessing About Project Progress
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Clients receive a private staging URL deployed on edge servers. As features are developed each week, you can test and interact with them in real-time.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-xs shadow-md"
            >
              <span>Schedule a Project Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
