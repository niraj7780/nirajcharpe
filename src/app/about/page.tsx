import * as React from 'react';
import Link from 'next/link';
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Cpu,
  ArrowRight,
  Code2,
  Layers,
  Heart
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
            Engineer Profile
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            About Niraj Charpe
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Web Developer, Python Automation Specialist, and AI Application Developer based in India, building high-conversion digital experiences for businesses globally.
          </p>
        </div>
      </section>

      {/* Main Profile & Story Section */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Personal Identity Card */}
          <div className="p-8 sm:p-10 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Profile Avatar / Monogram */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#0066FF] to-[#7C3AED] p-1 shadow-xl">
                  <div className="w-full h-full rounded-[14px] bg-neutral-950 flex items-center justify-center font-mono font-extrabold text-white text-4xl">
                    NC
                  </div>
                </div>

                <div>
                  <h2 className="font-bold text-xl text-neutral-950 dark:text-white">
                    Niraj Charpe
                  </h2>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-[#0066FF]" />
                    <span>India • Worldwide Remote</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="https://github.com/niraj7780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    title="GitHub: niraj7780"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/niraj-charpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    title="LinkedIn: Niraj Charpe"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:nirajcharpe48@gmail.com"
                    className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                    title="Email: nirajcharpe48@gmail.com"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bio & Professional Philosophy */}
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider block">
                  POSITIONING & PHILOSOPHY
                </span>
                <blockquote className="text-lg font-semibold text-neutral-900 dark:text-white leading-relaxed italic border-l-2 border-[#0066FF] pl-4">
                  &ldquo;I build intelligent digital experiences, powerful web applications, AI-powered products, and creative websites.&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  I am a full-stack engineer and automation developer who approaches website building from a business-first perspective. I don’t just write markup and styling; I engineer digital touchpoints that convert visitors, automate backend processes, and eliminate manual human overhead.
                </p>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  My technical depth spans typed Next.js frontend applications, scalable Python FastAPI microservices, ACID-compliant PostgreSQL databases, and structured LLM integrations using the Gemini API.
                </p>
              </div>
            </div>
          </div>

          {/* Core Principles */}
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
                How I Work With Clients
              </h3>
              <p className="text-xs text-neutral-500">
                Four core principles that guide every client collaboration.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                  <span>Direct Technical Communication</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  You work directly with me—the senior engineer writing the code. No miscommunications through junior account managers or sales reps.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <Cpu className="w-4 h-4 text-emerald-500" />
                  <span>Performance as a First-Class Feature</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Slow websites kill conversion rates. Every application is optimized for sub-second page loads and 90+ Core Web Vitals scores.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <Code2 className="w-4 h-4 text-purple-500" />
                  <span>Maintainable, Typed Architecture</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Strict TypeScript, modular components, and comprehensive schema contracts ensure your codebase can be easily scaled or audited by any team.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-neutral-900 dark:text-white">
                  <Terminal className="w-4 h-4 text-amber-500" />
                  <span>100% Code & Asset Ownership</span>
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Upon milestone settlement, all Git repositories, deployment configurations, and credentials belong entirely to you with zero licensing traps.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="p-8 rounded-2xl bg-neutral-900 text-white dark:bg-[#11131B] border border-neutral-800 text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Let&apos;s Build Something Impactful Together
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Have an upcoming product launch or want to redesign your company’s online presence? I am available for new freelance and contract engagements.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-xs shadow-md"
              >
                <span>Send a Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
