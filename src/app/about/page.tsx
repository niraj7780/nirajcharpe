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
  Layers
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="lime" className="uppercase tracking-widest text-[11px]">
            ENGINEER IDENTITY & PHILOSOPHY
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase font-mono text-neutral-950 dark:text-white">
            About Niraj Charpe
          </h1>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Full-Stack Web Developer, Python Automation Specialist, and AI Application Developer based in India, building digital experiences that grow businesses globally.
          </p>
        </div>
      </section>

      {/* Main Profile & Story Section */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Personal Identity Card - Minimal Square */}
          <div className="p-8 sm:p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Profile Monogram */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="w-32 h-32 border border-[#A3F527] bg-black p-1 shadow-[0_0_20px_rgba(163,245,39,0.25)] flex items-center justify-center font-mono font-extrabold text-[#A3F527] text-4xl">
                  NC
                </div>

                <div>
                  <h2 className="font-bold text-xl font-mono text-neutral-950 dark:text-white">
                    Niraj Charpe
                  </h2>
                  <p className="text-xs text-neutral-500 font-mono mt-0.5 flex items-center justify-center gap-1">
                    <MapPin className="w-3 h-3 text-[#A3F527]" />
                    <span>India • Worldwide Remote</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <a
                    href="https://github.com/niraj7780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-neutral-300 dark:border-neutral-800 hover:border-[#A3F527] hover:text-[#A3F527] text-neutral-600 dark:text-neutral-300 transition-colors"
                    title="GitHub: niraj7780"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://linkedin.com/in/niraj-charpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-neutral-300 dark:border-neutral-800 hover:border-[#A3F527] hover:text-[#A3F527] text-neutral-600 dark:text-neutral-300 transition-colors"
                    title="LinkedIn: Niraj Charpe"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:nirajcharpe48@gmail.com"
                    className="p-2 border border-neutral-300 dark:border-neutral-800 hover:border-[#A3F527] hover:text-[#A3F527] text-neutral-600 dark:text-neutral-300 transition-colors"
                    title="Email: nirajcharpe48@gmail.com"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Bio & Professional Philosophy */}
              <div className="md:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold text-[#A3F527] uppercase tracking-wider block">
                  POSITIONING & PHILOSOPHY
                </span>
                <blockquote className="text-base sm:text-lg font-mono font-bold text-neutral-900 dark:text-white leading-relaxed border-l-2 border-[#A3F527] pl-4">
                  &ldquo;I build intelligent digital experiences, powerful web applications, AI-powered products, and creative websites.&rdquo;
                </blockquote>

                <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  I specialize exclusively in 3 high-impact capabilities: <strong>Website Development</strong> (Next.js 14, Tailwind, automated GitHub push and Vercel edge deployment), <strong>Custom AI Tools</strong> (document RAG pipelines, text-to-SQL data agents, clinical intake assistants), and <strong>Business Automation</strong> (Python crawlers, scheduled ETL jobs, and CRM data sync).
                </p>

                <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Working with me means 100% direct developer partnership: zero agency account managers, zero lost-in-translation requirements, sub-second execution speeds, and complete intellectual property ownership.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="space-y-6">
            <div className="text-center space-y-1">
              <h3 className="text-2xl font-bold uppercase font-mono text-neutral-950 dark:text-white">
                The 3 Core Engineering Pillars
              </h3>
              <p className="text-xs font-mono text-neutral-500">
                Focused technical depth delivering measurable business ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm font-mono uppercase text-neutral-900 dark:text-white">
                  <Code2 className="w-4 h-4 text-[#A3F527]" />
                  <span>1. Website Dev</span>
                </div>
                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  20 production categories built with Next.js 14. Automatically committed to GitHub and deployed to Vercel edge servers.
                </p>
              </div>

              <div className="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm font-mono uppercase text-neutral-900 dark:text-white">
                  <Cpu className="w-4 h-4 text-[#A3F527]" />
                  <span>2. Custom AI Tools</span>
                </div>
                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Enterprise document RAG, natural language SQL query agents, and triage assistants with zero hallucination.
                </p>
              </div>

              <div className="p-5 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm font-mono uppercase text-neutral-900 dark:text-white">
                  <Terminal className="w-4 h-4 text-[#A3F527]" />
                  <span>3. Automation</span>
                </div>
                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  B2B lead scrapers, continuous CRM syncing, SRE incident dispatchers, and automated financial ledgers in Python.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Contact CTA */}
          <div className="p-8 border border-neutral-800 bg-black text-white text-center space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold uppercase font-mono">
              Ready to Initiate a Project?
            </h3>
            <p className="text-xs font-mono text-neutral-400 max-w-lg mx-auto leading-relaxed">
              Accepting client projects for Q1/Q2. Let&apos;s evaluate your technical scope and establish milestone deliverables.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider shadow-md hover:bg-[#8AE40E]"
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
