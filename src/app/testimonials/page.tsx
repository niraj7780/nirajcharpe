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
import { testimonialsData, collaborationPrinciples } from '@/data/testimonials';

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Header Banner */}
      <section className="pt-20 pb-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="lime" className="font-mono text-xs uppercase tracking-wider">
            Verified Client Endorsements
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white uppercase">
            Client Success & <span className="text-[#A3F527]">Feedback</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Authentic reviews from company founders, product managers, and engineering leaders who have collaborated directly with Niraj.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex flex-wrap gap-4">
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• 100% Genuine Client Words</span>
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• Zero Invented Metrics</span>
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• Measured Business Outcomes</span>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {testimonialsData.map((test) => (
            <div
              key={test.id}
              className="p-8 sm:p-10 border border-neutral-800 bg-neutral-950 hover:border-[#A3F527]/50 transition-colors space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#A3F527]">
                    {'★'.repeat(test.rating)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400">5.0 / 5.0</span>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="lime" className="text-[10px] font-mono">
                    {test.projectType}
                  </Badge>
                  <span className="text-xs font-mono text-neutral-500">
                    <Globe className="w-3 h-3 inline mr-1 text-[#A3F527]" />
                    {test.location}
                  </span>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-neutral-200 leading-relaxed italic font-serif">
                &ldquo;{test.quote}&rdquo;
              </blockquote>

              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold font-mono text-base text-white">
                    {test.author}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {test.role} at <span className="font-semibold text-white">{test.company}</span>
                  </p>
                </div>

                <div className="px-3 py-1.5 border border-[#A3F527]/40 bg-[#A3F527]/10 text-[#A3F527] font-mono text-xs font-bold">
                  Result: {test.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Principles Recap */}
      <section className="py-20 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-black font-mono tracking-tight text-white uppercase">
              The Principles That Ensure Project Success
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400">
              Why clients return for subsequent feature releases and product lines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {collaborationPrinciples.map((p) => (
              <div
                key={p.title}
                className="p-6 border border-neutral-800 bg-black space-y-2"
              >
                <h3 className="font-bold font-mono text-base text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#A3F527]" />
                  <span>{p.title}</span>
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed pl-6">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
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
