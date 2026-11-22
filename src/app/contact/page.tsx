'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import {
  Mail,
  Github,
  Linkedin,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  AlertCircle,
  Send,
  Terminal,
  Zap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledWebsite = searchParams.get('websiteCategory') || '';
  const prefilledAi = searchParams.get('aiTool') || '';
  const prefilledAutomation = searchParams.get('automationPipeline') || '';

  const initialService = prefilledWebsite
    ? `Website Development: ${prefilledWebsite}`
    : prefilledAi
    ? `AI Tool: ${prefilledAi}`
    : prefilledAutomation
    ? `Automation: ${prefilledAutomation}`
    : 'Website Development (Next.js & Vercel)';

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    serviceCategory: initialService,
    budget: '₹35,000 – ₹75,000 ($450 – $950)',
    details: '',
    timeline: '2 – 4 weeks',
    website_url_honeypot: '',
  });

  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [submittedId, setSubmittedId] = React.useState<string | null>(null);

  const serviceCategories = [
    'Website Development (Next.js & Vercel)',
    'Custom AI Tools & LLM Knowledge Grounding (RAG)',
    'Business Automation (Python & API Pipelines)',
    'E-commerce Storefront & Checkout Gateway',
    'Custom SaaS Platform & Web Application',
    'Executive Dashboard & Data Analytics',
    'Other Bespoke Architecture'
  ];

  const budgetRanges = [
    '₹25,000 – ₹45,000 ($320 – $580)',
    '₹45,000 – ₹85,000 ($580 – $1,100)',
    '₹85,000 – ₹1,50,000 ($1,100 – $1,900)',
    '₹1,50,000+ ($1,900+)',
    'To be established during technical discovery'
  ];

  const timelineOptions = [
    'Urgent (Under 2 weeks)',
    '2 – 4 weeks (Standard)',
    '1 – 2 months (Comprehensive Architecture)',
    'Flexible / Milestone-driven'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          websiteType: formData.serviceCategory,
          budget: formData.budget,
          details: formData.details,
          timeline: formData.timeline,
          website_url_honeypot: formData.website_url_honeypot,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSubmittedId(data.inquiryId);
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected network error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 sm:p-10 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A]">
      {submittedId ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-14 h-14 border border-[#A3F527] bg-[#A3F527]/10 text-[#A3F527] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <Badge variant="lime" className="font-mono text-xs">
              INQUIRY_REF: {submittedId}
            </Badge>
            <h3 className="text-2xl font-bold uppercase font-mono text-neutral-950 dark:text-white">
              Project Inquiry Received
            </h3>
            <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
              Thank you. Niraj will review your scope specifications, prepare architectural recommendations, and respond within 24 business hours.
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-3">
            <button
              onClick={() => {
                setSubmittedId(null);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  serviceCategory: 'Website Development (Next.js & Vercel)',
                  budget: '₹35,000 – ₹75,000 ($450 – $950)',
                  details: '',
                  timeline: '2 – 4 weeks',
                  website_url_honeypot: '',
                });
              }}
              className="px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-xs font-mono font-bold uppercase hover:border-[#A3F527]"
            >
              Submit Another Inquiry
            </button>
            <Link
              href="/websites"
              className="px-5 py-2.5 bg-[#A3F527] text-black text-xs font-mono font-bold uppercase hover:bg-[#8AE40E]"
            >
              Explore 20 Websites
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="border-b border-neutral-100 dark:border-neutral-900 pb-3">
            <h3 className="text-xl font-bold uppercase font-mono text-neutral-950 dark:text-white">
              Project Scope & Inquiry Form
            </h3>
            <p className="text-xs font-mono text-neutral-500 mt-1">
              Direct submission to Niraj Charpe. Response guaranteed within 24 hours.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3 border border-red-500 bg-red-500/10 text-red-500 text-xs font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Anti-Spam Honeypot */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_url_honeypot"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website_url_honeypot}
              onChange={(e) =>
                setFormData({ ...formData, website_url_honeypot: e.target.value })
              }
            />
          </div>

          {/* Row 1: Full Name & Business Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vikramaditya Sen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="vikram@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527]"
              />
            </div>
          </div>

          {/* Row 2: Company */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Company or Brand Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Horizon Capital or Independent"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527]"
            />
          </div>

          {/* Row 3: Service Category & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                Core Service Category *
              </label>
              <select
                value={formData.serviceCategory}
                onChange={(e) =>
                  setFormData({ ...formData, serviceCategory: e.target.value })
                }
                className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527]"
              >
                {serviceCategories.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
                Indicative Project Budget *
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527]"
              >
                {budgetRanges.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Timeline */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Expected Delivery Timeline *
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527]"
            >
              {timelineOptions.map((tl) => (
                <option key={tl} value={tl}>
                  {tl}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Detailed Scope Description */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-1">
              Project Description & Functional Deliverables *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe what you need built: e.g. Next.js SaaS landing with Stripe checkout, Python B2B lead scraping pipeline, internal PDF document RAG assistant..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-3.5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-white dark:bg-[#050505] text-xs font-mono text-neutral-900 dark:text-white focus:outline-none focus:border-[#A3F527] leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-[#A3F527] hover:bg-[#8AE40E] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(163,245,39,0.3)] hover:shadow-[0_0_22px_rgba(163,245,39,0.5)] active:translate-y-0.5 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span>Validating & Submitting Scope...</span>
            ) : (
              <>
                <span>Submit Scope to Niraj</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>

          <p className="text-[10px] text-neutral-500 text-center font-mono">
            🔒 Direct developer review • Guaranteed response within 24 business hours
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808] bg-tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="lime" className="uppercase tracking-widest text-[11px]">
            DIRECT COLLABORATION
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase font-mono text-neutral-950 dark:text-white">
            Initiate Project Inquiry
          </h1>
          <p className="text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Have an upcoming website, custom AI tool, or business automation pipeline? Submit your specifications below for direct engineering evaluation.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold text-[#A3F527] uppercase tracking-wider block">
                  COMMUNICATION CHANNELS
                </span>
                <h2 className="text-2xl font-bold uppercase font-mono text-neutral-950 dark:text-white">
                  Direct Inquiries & Technical Review
                </h2>
                <p className="text-xs font-mono text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Every inquiry is handled directly by Niraj. No junior account managers or sales pitches.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-3 text-xs font-mono">
                <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#A3F527] bg-[#A3F527]/10 text-[#A3F527] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold">DIRECT EMAIL</span>
                    <a
                      href="mailto:nirajcharpe48@gmail.com"
                      className="font-bold text-neutral-900 dark:text-white hover:text-[#A3F527] select-all"
                    >
                      nirajcharpe48@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-3">
                  <div className="w-8 h-8 border border-neutral-300 dark:border-neutral-800 text-neutral-400 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#A3F527]" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold">RESPONSE WINDOW</span>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      Within 24 business hours
                    </span>
                  </div>
                </div>

                <div className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] flex items-center gap-3">
                  <div className="w-8 h-8 border border-neutral-300 dark:border-neutral-800 text-neutral-400 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#A3F527]" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px] uppercase font-bold">LOCATION</span>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      India • Worldwide Remote Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Verified Profiles */}
              <div className="space-y-2 pt-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-bold block">
                  Verify Code & Credentials:
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/niraj7780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:border-[#A3F527] hover:text-[#A3F527] transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/niraj-charpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] text-xs font-mono font-bold text-neutral-800 dark:text-neutral-200 hover:border-[#A3F527] hover:text-[#A3F527] transition-colors flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Guarantees */}
              <div className="p-4 border border-[#A3F527]/30 bg-[#A3F527]/5 space-y-1.5 text-xs font-mono">
                <div className="flex items-center gap-1.5 font-bold text-[#A3F527]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality & Milestone Security</span>
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-[11px]">
                  All project briefs, client data, and proprietary workflows remain strictly confidential. Non-Disclosure Agreements (NDAs) signed upon request.
                </p>
              </div>
            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7">
              <React.Suspense
                fallback={
                  <div className="p-8 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] text-center text-xs font-mono text-neutral-400">
                    Loading inquiry terminal...
                  </div>
                }
              >
                <ContactFormContent />
              </React.Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
