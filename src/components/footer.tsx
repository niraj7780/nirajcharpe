import * as React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0B0C12] text-neutral-600 dark:text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-neutral-900 dark:bg-white flex items-center justify-center font-mono font-bold text-white dark:text-neutral-950 text-sm">
                N
              </div>
              <span className="font-bold text-lg tracking-tight text-neutral-900 dark:text-white">
                NIRAJ<span className="text-[#0066FF]">.DEV</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 max-w-sm">
              &ldquo;I Build Digital Experiences That Grow Businesses.&rdquo; High-speed corporate websites, custom e-commerce, scalable Python backends, and AI-powered web applications.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/niraj7780"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/niraj-charpe"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:text-blue-600 dark:hover:text-blue-400 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:nirajcharpe48@gmail.com"
                className="p-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-neutral-500 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
              <span>Direct client partnership • Zero agency bloat • 100% IP Ownership</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  About Niraj
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Portfolio Projects
                </Link>
              </li>
              <li>
                <Link href="/demos" className="hover:text-neutral-900 dark:hover:text-white transition-colors flex items-center gap-1">
                  <span>Interactive Demos</span>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">8+</span>
                </Link>
              </li>
              <li>
                <Link href="/technologies" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Tech Stack
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Development Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 font-mono">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#business-websites" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/services#ecommerce-development" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  E-commerce Development
                </Link>
              </li>
              <li>
                <Link href="/services#custom-web-apps" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  Custom Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services#saas-development" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  SaaS MVP Development
                </Link>
              </li>
              <li>
                <Link href="/services#ai-applications" className="hover:text-neutral-900 dark:hover:text-white transition-colors">
                  AI & LLM Integration
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors text-[#0066FF] dark:text-blue-400 font-medium">
                  View Transparent Pricing →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Client Acquisition & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 dark:text-neutral-200 font-mono">
              Start a Project
            </h4>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Have an upcoming website, SaaS product, or automation workflow? Let&apos;s discuss timeline and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] dark:text-blue-400 hover:underline"
            >
              <span>Request a Project Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="pt-2 text-xs">
              <span className="block text-neutral-500">Direct Inquiries:</span>
              <a
                href="mailto:nirajcharpe48@gmail.com"
                className="font-mono text-neutral-800 dark:text-neutral-200 hover:text-blue-600 select-all"
              >
                nirajcharpe48@gmail.com
              </a>
            </div>
            <div className="pt-1">
              <Link
                href="/admin"
                className="text-[11px] text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
              >
                Client Portal / Admin
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-neutral-200/80 dark:border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {currentYear} NIRAJ.DEV — Niraj Charpe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Location: India</span>
            <span>Worldwide Remote Delivery</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-red-500 inline fill-red-500" /> & Next.js
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
