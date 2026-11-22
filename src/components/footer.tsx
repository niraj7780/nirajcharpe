import * as React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#050505] text-neutral-600 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 bg-black dark:bg-[#A3F527] flex items-center justify-center font-mono font-bold text-white dark:text-black text-sm">
                N
              </div>
              <span className="font-bold text-base tracking-tight font-mono text-neutral-950 dark:text-white">
                NIRAJ<span className="text-[#A3F527]">.DEV</span>
              </span>
            </Link>

            <p className="text-xs font-mono leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-sm">
              &ldquo;I Build Digital Experiences That Grow Businesses.&rdquo; 3 Core Capabilities: High-Performance Website Development, Custom AI Tools, and Resilient Automation Pipelines.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://github.com/niraj7780"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0A0A0A] hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/niraj-charpe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0A0A0A] hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nirajcharpe48@gmail.com"
                className="p-2 border border-neutral-300 dark:border-neutral-800 bg-neutral-50 dark:bg-[#0A0A0A] hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[#A3F527]"></span>
              <span>100% Direct Developer Partnership • Zero Agency Markup • 100% IP Ownership</span>
            </div>
          </div>

          {/* Column 2: 3 Core Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white font-mono">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/websites" className="hover:text-[#A3F527] transition-colors flex items-center justify-between">
                  <span>Website Development</span>
                  <span className="text-[10px] text-[#A3F527] font-bold">20</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="hover:text-[#A3F527] transition-colors">
                  Custom AI Tools & RAG
                </Link>
              </li>
              <li>
                <Link href="/automation" className="hover:text-[#A3F527] transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-[#A3F527] transition-colors">
                  6-Step Methodology
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Automated Pipeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white font-mono">
              Delivery Pipeline
            </h4>
            <ul className="space-y-2 text-xs font-mono text-neutral-500">
              <li className="flex items-center gap-1.5">
                <span className="text-[#A3F527]">✓</span> Next.js 14 & Python
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#A3F527]">✓</span> Auto GitHub Push
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#A3F527]">✓</span> 1-Click Vercel Deploy
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-[#A3F527]">✓</span> Sub-Second Global CDN
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-950 dark:text-white font-mono">
              Initiate Project
            </h4>
            <p className="text-[11px] font-mono text-neutral-500 leading-relaxed">
              Accepting client projects for Q1/Q2. Reach out directly for architecture evaluation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#A3F527] hover:underline"
            >
              <span>Submit Project Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <div className="pt-1 text-[11px] font-mono">
              <span className="block text-neutral-500">Direct Developer Email:</span>
              <a
                href="mailto:nirajcharpe48@gmail.com"
                className="text-neutral-900 dark:text-white hover:text-[#A3F527] select-all"
              >
                nirajcharpe48@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <p>© {currentYear} NIRAJ.DEV — Niraj Charpe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Location: India</span>
            <span>Worldwide Remote Delivery</span>
            <span className="text-[#A3F527]">Engineered with Minimal Square Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
