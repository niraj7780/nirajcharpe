import * as React from 'react';
import Link from 'next/link';
import {
  Star,
  Quote,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building2,
  Globe
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { testimonialsData, collaborationPrinciples } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="success" className="font-mono text-xs uppercase tracking-wider">
            Verified Client Endorsements
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Client Success & Feedback
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Authentic reviews from company founders, product managers, and engineering leaders who have collaborated directly with Niraj.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center justify-center gap-6">
            <span>• 100% Genuine Client Words</span>
            <span>• Zero Invented Stats</span>
            <span>• Measured Business Outcomes</span>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-8 sm:p-10 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-100 dark:border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {'★'.repeat(test.rating)}
                  </div>
                  <span className="text-xs font-mono text-neutral-500">5.0 / 5.0</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="electric" className="text-[10px] font-mono">
                    {test.projectType}
                  </Badge>
                  <span className="text-xs font-mono text-neutral-400">
                    <Globe className="w-3 h-3 inline mr-1" />
                    {test.location}
                  </span>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed italic">
                &ldquo;{test.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-base text-neutral-950 dark:text-white">
                    {test.author}
                  </h3>
                  <p className="text-xs text-neutral-500">
                    {test.role} at <span className="font-semibold text-neutral-800 dark:text-neutral-200">{test.company}</span>
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs font-semibold">
                  Result: {test.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Principles Recap */}
      <section className="py-20 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              The Principles That Ensure Project Success
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Why clients return for subsequent feature releases and product lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationPrinciples.map((p) => (
              <div
                key={p.title}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2"
              >
                <h3 className="font-bold text-base text-neutral-950 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                  <span>{p.title}</span>
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-6">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-xs shadow-md"
            >
              <span>Work With Niraj on Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
