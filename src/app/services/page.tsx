'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  Clock,
  HelpCircle
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { servicesData } from '@/data/services';
import { calculatorOptions } from '@/data/pricing';

export default function ServicesPage() {
  // Interactive Scope Calculator State
  const [selectedType, setSelectedType] = React.useState(calculatorOptions.types[1].id);
  const [selectedAddons, setSelectedAddons] = React.useState<string[]>(['cms', 'seo-pro']);
  const [currency, setCurrency] = React.useState<'INR' | 'USD'>('INR');
  const [deliverySpeed, setDeliverySpeed] = React.useState<'standard' | 'priority'>('standard');

  const currentType = calculatorOptions.types.find((t) => t.id === selectedType) || calculatorOptions.types[0];
  const speedObj = calculatorOptions.delivery.find((d) => d.id === deliverySpeed) || calculatorOptions.delivery[0];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateEstimate = () => {
    let base = currency === 'INR' ? currentType.baseINR : currentType.baseUSD;
    selectedAddons.forEach((addonId) => {
      const addon = calculatorOptions.addons.find((a) => a.id === addonId);
      if (addon) {
        base += currency === 'INR' ? addon.baseINR : addon.baseUSD;
      }
    });
    return Math.round(base * speedObj.multiplier);
  };

  const estimatedTotal = calculateEstimate();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
            Web & Full-Stack Solutions
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            High-Impact Development Services
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            From conversion-engineered business websites to high-throughput Python backends and AI-powered web applications. Transparent milestones with zero agency bloat.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <a
              href="#calculator"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-semibold hover:opacity-90 transition-opacity"
            >
              <Calculator className="w-4 h-4" />
              <span>Interactive Scope & Cost Estimator</span>
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-700 text-xs font-semibold hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>View Fixed Milestone Packages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12 Detailed Services Grid */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="p-8 lg:p-10 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm hover:border-blue-500/40 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-[#0066FF] flex items-center justify-center font-mono font-bold text-xs">
                      {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <Badge variant={service.popular ? 'electric' : 'outline'} className="text-[11px]">
                      {service.popular ? 'High In-Demand' : 'Specialized Engineering'}
                    </Badge>
                  </div>

                  <h2 className="text-2xl lg:text-3xl font-bold text-neutral-950 dark:text-white">
                    {service.title}
                  </h2>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="p-3.5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs space-y-1.5">
                    <span className="font-semibold text-neutral-900 dark:text-white font-mono uppercase tracking-wider text-[10px]">
                      Who Needs This:
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {service.targetAudience}
                    </p>
                  </div>

                  {/* Pricing and Timeline Badge */}
                  <div className="pt-2 flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-neutral-400 block text-[10px]">INDICATIVE ESTIMATE</span>
                      <span className="font-bold text-base text-[#0066FF] dark:text-blue-400">
                        {service.indicativeStartingPriceINR} <span className="text-xs text-neutral-400">({service.indicativeStartingPriceUSD})</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-neutral-400 block text-[10px]">ESTIMATED TIMELINE</span>
                      <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                        {service.estimatedTimeline}
                      </span>
                    </div>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-semibold text-xs transition-all shadow-md shadow-blue-500/20"
                  >
                    <span>Request a Quote for {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Right Columns: Deliverables & Benefits */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
                  {/* Deliverables */}
                  <div className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-white font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                      <span>What Is Included:</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Business Benefits */}
                  <div className="p-5 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-neutral-900 dark:text-white font-bold flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-purple-500" />
                      <span>Business Value:</span>
                    </h3>
                    <ul className="space-y-2 text-xs text-neutral-600 dark:text-neutral-300">
                      {service.businessBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] shrink-0 mt-1.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="pt-3 border-t border-neutral-200/60 dark:border-neutral-800">
                      <p className="text-[10px] font-mono text-neutral-400 uppercase mb-1.5">Primary Tech Stack:</p>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Scope & Cost Estimator */}
      <section id="calculator" className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <Badge variant="purple" className="font-mono text-xs uppercase tracking-wider">
              Instant Estimation
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Interactive Project Scope & Cost Estimator
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-xl mx-auto">
              Select your desired project type, functional add-ons, and delivery pace to get an indicative milestone price estimate.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] shadow-lg space-y-6">
            {/* Currency Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-neutral-800">
              <span className="text-xs font-mono font-medium text-neutral-500">Select Display Currency</span>
              <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-900 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold ${
                    currency === 'INR' ? 'bg-white dark:bg-neutral-800 text-[#0066FF] shadow-sm' : 'text-neutral-400'
                  }`}
                >
                  ₹ INR
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-3 py-1 rounded text-xs font-mono font-semibold ${
                    currency === 'USD' ? 'bg-white dark:bg-neutral-800 text-[#0066FF] shadow-sm' : 'text-neutral-400'
                  }`}
                >
                  $ USD
                </button>
              </div>
            </div>

            {/* Step 1: Project Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {calculatorOptions.types.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedType === type.id
                        ? 'border-[#0066FF] bg-blue-50/40 dark:bg-blue-950/30 ring-1 ring-blue-500'
                        : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                    }`}
                  >
                    <p className="font-semibold text-xs text-neutral-900 dark:text-white">{type.label}</p>
                    <span className="font-mono text-xs text-neutral-500">
                      Base: {currency === 'INR' ? `₹${type.baseINR.toLocaleString('en-IN')}` : `$${type.baseUSD}`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Feature Add-ons */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                2. Select Functional Add-ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {calculatorOptions.addons.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                        isChecked
                          ? 'border-blue-500 bg-blue-50/30 dark:bg-blue-950/20'
                          : 'border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900'
                      }`}
                    >
                      <div className="pr-2">
                        <p className="font-medium text-xs text-neutral-900 dark:text-white leading-tight">
                          {addon.label}
                        </p>
                        <span className="font-mono text-[11px] text-neutral-500">
                          +{currency === 'INR' ? `₹${addon.baseINR.toLocaleString('en-IN')}` : `$${addon.baseUSD}`}
                        </span>
                      </div>
                      <div
                        className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-[#0066FF] border-[#0066FF] text-white' : 'border-neutral-300 dark:border-neutral-700'
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Delivery Speed */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2">
                3. Delivery Timeline
              </label>
              <div className="grid grid-cols-2 gap-2">
                {calculatorOptions.delivery.map((deliv) => (
                  <button
                    key={deliv.id}
                    onClick={() => setDeliverySpeed(deliv.id as any)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      deliverySpeed === deliv.id
                        ? 'border-[#0066FF] bg-blue-50/40 dark:bg-blue-950/30 font-semibold text-neutral-900 dark:text-white'
                        : 'border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400'
                    }`}
                  >
                    <span className="text-xs">{deliv.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Estimated Total Display */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50/80 to-purple-50/80 dark:from-blue-950/40 dark:to-purple-950/40 border border-blue-200 dark:border-blue-900 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-neutral-500">
                  Indicative Project Estimate
                </p>
                <p className="text-3xl font-extrabold font-mono text-[#0066FF] dark:text-blue-400">
                  {currency === 'INR' ? `₹${estimatedTotal.toLocaleString('en-IN')}` : `$${estimatedTotal.toLocaleString('en-US')}`}
                </p>
                <p className="text-[11px] text-neutral-500 mt-0.5">
                  Based on {currentType.label} with {selectedAddons.length} selected add-on modules.
                </p>
              </div>

              <Link
                href={`/contact?type=${encodeURIComponent(currentType.label)}&budget=${currency === 'INR' ? `₹${estimatedTotal.toLocaleString('en-IN')}` : `$${estimatedTotal}`}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-xs shadow-md"
              >
                <span>Discuss This Scope With Niraj</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Client Questions */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Frequently Asked Client Questions
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500">
              Clear answers regarding payments, timelines, code ownership, and hosting.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How are project payments structured?',
                a: 'Standard projects follow a transparent milestone schedule: 40% upfront deposit to secure the sprint calendar, 30% upon approval of the interactive staging prototype, and the remaining 30% upon final production deployment and code transfer.'
              },
              {
                q: 'Do I own the source code upon project completion?',
                a: 'Yes, 100%. Upon final milestone settlement, the complete GitHub repository, documentation, design tokens, and deployment credentials are fully transferred to your organization with zero vendor lock-in.'
              },
              {
                q: 'What happens after the website launches?',
                a: 'Every project includes a complimentary 30-day post-launch warranty covering bug fixes, performance monitoring, and minor tweaks. Ongoing monthly maintenance and feature expansion retainers are also available.'
              },
              {
                q: 'Where will my website or backend be hosted?',
                a: 'I configure high-performance modern edge infrastructure—Next.js frontend on Vercel, Python FastAPI backends on Render/Docker, and databases on Supabase or Neon PostgreSQL. I ensure hosting accounts are set up in your name for total data ownership.'
              }
            ].map((faq) => (
              <div
                key={faq.q}
                className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-1.5"
              >
                <h3 className="font-bold text-sm text-neutral-950 dark:text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#0066FF]" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
