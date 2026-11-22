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
  Building2,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

function ContactFormContent() {
  const searchParams = useSearchParams();
  const prefilledService = searchParams.get('service') || searchParams.get('package') || '';
  const prefilledBudget = searchParams.get('budget') || '';

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    websiteType: prefilledService || 'Business Website Development',
    budget: prefilledBudget || '₹35,000 – ₹60,000',
    details: '',
    timeline: '2 – 4 weeks',
    website_url_honeypot: '', // anti-spam honeypot
  });

  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);
  const [submittedId, setSubmittedId] = React.useState<string | null>(null);

  const websiteTypes = [
    'Business Website Development',
    'E-commerce Website Development',
    'Custom Web Application Development',
    'SaaS MVP Development',
    'AI-Powered Application Development',
    'Portfolio Website Development',
    'Landing Page Development',
    '3D Interactive Website Development',
    'Python Backend & Automation',
    'Executive Dashboard Development',
    'Website Redesign & Retainer',
    'Other Custom Scope'
  ];

  const budgetRanges = [
    '₹18,000 – ₹35,000 ($240 – $450)',
    '₹35,000 – ₹60,000 ($450 – $800)',
    '₹60,000 – ₹1,20,000 ($800 – $1,500)',
    '₹1,20,000+ ($1,500+)',
    'To be scoped after technical review'
  ];

  const timelineOptions = [
    'Urgent (Under 2 weeks)',
    '2 – 4 weeks (Standard)',
    '1 – 2 months (Complex Scope)',
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
        body: JSON.stringify(formData),
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
    <div className="p-8 sm:p-10 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-xl">
      {submittedId ? (
        <div className="py-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <Badge variant="success" className="font-mono text-xs">
              Inquiry Reference: {submittedId}
            </Badge>
            <h3 className="text-2xl font-bold text-neutral-950 dark:text-white">
              Project Inquiry Received!
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto leading-relaxed">
              Thank you for reaching out. Niraj will review your project details and respond with preliminary technical architecture suggestions and availability within 24 hours.
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
                  websiteType: 'Business Website Development',
                  budget: '₹35,000 – ₹60,000',
                  details: '',
                  timeline: '2 – 4 weeks',
                  website_url_honeypot: '',
                });
              }}
              className="px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              Submit Another Inquiry
            </button>
            <Link
              href="/portfolio"
              className="px-5 py-2.5 rounded-xl bg-[#0066FF] text-white text-xs font-semibold hover:bg-[#0052db]"
            >
              Explore More Case Studies
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
              Project Scope & Inquiry Form
            </h3>
            <p className="text-xs text-neutral-500 mt-1">
              Please provide as much context as possible to receive an accurate milestone estimate.
            </p>
          </div>

          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Anti-Spam Honeypot (hidden from human users) */}
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

          {/* Row 1: Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rahul Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="rahul@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Row 2: Company / Organization */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
              Company or Brand Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. NextGen Therapeutics or Independent"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Row 3: Website Type & Budget */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                Project Service Category *
              </label>
              <select
                value={formData.websiteType}
                onChange={(e) =>
                  setFormData({ ...formData, websiteType: e.target.value })
                }
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {websiteTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
                Indicative Budget Range *
              </label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
              Expected Delivery Timeline *
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {timelineOptions.map((tl) => (
                <option key={tl} value={tl}>
                  {tl}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Detailed Project Description */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-1.5">
              Project Details & Core Objectives *
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tell me about your product, your target clients, key technical requirements (e.g. Stripe checkout, CMS, user auth, 3D elements), or reference websites you admire..."
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50/50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 leading-relaxed"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="electric"
            size="lg"
            disabled={loading}
            className="w-full text-xs font-bold py-3.5"
          >
            {loading ? (
              <span>Validating & Submitting Scope...</span>
            ) : (
              <div className="flex items-center gap-2">
                <span>Submit Project Inquiry</span>
                <Send className="w-4 h-4" />
              </div>
            )}
          </Button>

          <p className="text-[11px] text-neutral-500 text-center font-mono">
            🔒 Guaranteed response within 24 hours • Non-Disclosure Agreement on demand
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
            Start A Conversation
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Let&apos;s Build Your Website
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Have an upcoming project, redesign, or custom application in mind? Submit your scope details below and I will respond with a technical review and milestone estimate within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Direct Info & Trust Badges */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider block">
                  DIRECT DEVELOPER CONTACT
                </span>
                <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
                  Direct Inquiries & Rapid Consultation
                </h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Every message goes directly to Niraj. I evaluate project feasibility, architecture stack recommendations, and timeline fit personally.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-[#0066FF] flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">DIRECT EMAIL</span>
                    <a
                      href="mailto:nirajcharpe48@gmail.com"
                      className="font-bold text-neutral-900 dark:text-white hover:text-blue-500 select-all"
                    >
                      nirajcharpe48@gmail.com
                    </a>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-600 flex items-center justify-center">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">RESPONSE WINDOW</span>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      Within 24 business hours
                    </span>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-600 flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-neutral-400 block text-[10px]">LOCATION</span>
                    <span className="font-bold text-neutral-900 dark:text-white">
                      India • Global Remote Delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block">
                  Verify Credentials & Code:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/niraj7780"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub (@niraj7780)</span>
                  </a>

                  <a
                    href="https://linkedin.com/in/niraj-charpe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Linkedin className="w-4 h-4 text-[#0066FF]" />
                    <span>LinkedIn (Niraj Charpe)</span>
                  </a>
                </div>
              </div>

              {/* Guarantees Callout */}
              <div className="p-5 rounded-xl border border-emerald-500/20 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-emerald-700 dark:text-emerald-400">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Client Privacy & Milestone Commitment</span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Your project specifications, proprietary concepts, and contact information are kept strictly confidential. Non-Disclosure Agreements (NDAs) signed upon request.
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Inquiry Form wrapped in Suspense */}
            <div className="lg:col-span-7">
              <React.Suspense
                fallback={
                  <div className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] text-center text-xs text-neutral-400 animate-pulse">
                    Loading inquiry form...
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
