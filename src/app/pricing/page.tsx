'use client';

import * as React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, ArrowUpRight, ShieldCheck, Zap, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { pricingPackages } from '@/data/pricing';

export default function PricingPage() {
  const [currency, setCurrency] = React.useState<'INR' | 'USD'>('INR');

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
            Transparent Pricing Packages
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Honest Milestone Pricing. Zero Hidden Fees.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Indicative milestone estimates with transparent deliverables. Every project includes clean typed code, sub-second load times, and full IP transfer.
          </p>

          {/* Currency Switcher */}
          <div className="inline-flex items-center gap-1.5 bg-neutral-200 dark:bg-neutral-800 p-1 rounded-xl border border-neutral-300 dark:border-neutral-700 mt-4">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                currency === 'INR'
                  ? 'bg-white dark:bg-neutral-900 text-[#0066FF] shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              ₹ INR (India)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                currency === 'USD'
                  ? 'bg-white dark:bg-neutral-900 text-[#0066FF] shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
              }`}
            >
              $ USD (International)
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {pricingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 relative ${
                  pkg.popular
                    ? 'border-[#0066FF] bg-blue-50/20 dark:bg-blue-950/15 shadow-xl ring-1 ring-blue-500'
                    : 'border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm hover:border-neutral-300 dark:hover:border-neutral-700'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#0066FF] text-white text-[10px] font-mono font-bold tracking-wider uppercase shadow-md">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-neutral-500">{pkg.badge}</span>
                    <span className="text-[11px] font-mono text-neutral-400">{pkg.deliveryTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
                    {pkg.name}
                  </h3>

                  <div className="mt-4 mb-3">
                    <span className="text-xs text-neutral-400 font-mono block">STARTING AT</span>
                    <span className="text-3xl font-extrabold font-mono text-neutral-950 dark:text-white">
                      {currency === 'INR' ? pkg.priceFormattedINR : pkg.priceFormattedUSD}
                    </span>
                    <span className="text-xs text-neutral-500 ml-1">/ project</span>
                  </div>

                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  <div className="p-2.5 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 text-[11px] text-neutral-600 dark:text-neutral-300 mb-4">
                    <span className="font-semibold text-neutral-900 dark:text-white block font-mono text-[10px]">
                      IDEAL FOR:
                    </span>
                    {pkg.idealFor}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-neutral-100 dark:border-neutral-800 text-xs">
                    <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block mb-1">
                      Deliverables Included:
                    </span>
                    {pkg.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2 text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800">
                  <Link
                    href={`/contact?package=${encodeURIComponent(pkg.name)}&budget=${currency === 'INR' ? pkg.priceFormattedINR : pkg.priceFormattedUSD}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs transition-all ${
                      pkg.popular
                        ? 'bg-[#0066FF] hover:bg-[#0052db] text-white shadow-md'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-100'
                    }`}
                  >
                    <span>Request This Package</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/40 text-center max-w-3xl mx-auto space-y-2">
            <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
              Need a Custom Architecture or Enterprise Retainer?
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              If your application involves complex microservices, automated scraping clusters, or multi-tenant database models, we prepare a tailored milestone proposal.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:underline pt-1"
            >
              <span>Discuss a Custom Enterprise Scope</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantee & Code Ownership Banner */}
      <section className="py-16 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
              <ShieldCheck className="w-8 h-8 text-[#0066FF] mx-auto" />
              <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                100% Code Ownership
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Full intellectual property rights transferred upon final milestone completion. Zero vendor lock-in.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
              <Zap className="w-8 h-8 text-amber-500 mx-auto" />
              <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                30-Day Post-Launch Warranty
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Every project includes 30 days of complimentary bug fixing, responsiveness tweaks, and performance monitoring.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-2">
              <Star className="w-8 h-8 text-emerald-500 mx-auto" />
              <h3 className="font-bold text-sm text-neutral-900 dark:text-white">
                Guaranteed Milestone Scope
              </h3>
              <p className="text-xs text-neutral-500 leading-relaxed">
                Written project agreements protect against unexpected scope creep or unexpected invoices.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
