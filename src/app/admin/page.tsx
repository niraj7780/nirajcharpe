'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  ShieldAlert,
  KeyRound,
  Inbox,
  FolderGit2,
  DollarSign,
  UserCheck,
  RefreshCw,
  Clock,
  CheckCircle2,
  Mail,
  Building2,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ClientInquiry } from '@/app/api/inquiries/route';
import { projectsData } from '@/data/projects';
import { servicesData } from '@/data/services';
import { pricingPackages } from '@/data/pricing';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [passcode, setPasscode] = React.useState('');
  const [authError, setAuthError] = React.useState(false);

  const [inquiries, setInquiries] = React.useState<ClientInquiry[]>([]);
  const [loadingInquiries, setLoadingInquiries] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'inquiries' | 'projects' | 'services' | 'pricing'>('inquiries');

  const DEMO_PASSCODE = 'niraj2025';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === DEMO_PASSCODE || passcode.trim() === 'admin') {
      setIsAuthenticated(true);
      setAuthError(false);
      fetchInquiries();
    } else {
      setAuthError(true);
    }
  };

  const fetchInquiries = async () => {
    setLoadingInquiries(true);
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.success && data.inquiries) {
        setInquiries(data.inquiries);
      }
    } catch (err) {
      console.error('Error fetching inquiries:', err);
    } finally {
      setLoadingInquiries(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Top Banner */}
      <section className="pt-12 pb-16 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="purple" className="font-mono text-xs">
                Protected Portal
              </Badge>
              <span className="text-xs font-mono text-neutral-500">
                NIRAJ.DEV Central Operations
              </span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
              Freelance Admin & Inquiries Command Center
            </h1>
          </div>

          {isAuthenticated && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAuthenticated(false)}
              className="text-xs font-mono self-start"
            >
              Lock Dashboard
            </Button>
          )}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            /* Authentication Passkey Modal */
            <div className="max-w-md mx-auto p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-xl text-center space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#0066FF] flex items-center justify-center mx-auto">
                <KeyRound className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h2 className="text-xl font-bold text-neutral-950 dark:text-white">
                  Admin Passkey Required
                </h2>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Enter your administrative passcode to review client inquiries and manage website configuration.
                </p>
              </div>

              {/* Demo Hint */}
              <div className="p-2.5 rounded-lg bg-blue-50/50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900 text-xs font-mono text-neutral-600 dark:text-neutral-400">
                Demo Evaluation Passkey: <span className="text-[#0066FF] font-bold">niraj2025</span>
              </div>

              {authError && (
                <p className="text-xs font-semibold text-rose-500">
                  Invalid passcode. Try &ldquo;niraj2025&rdquo; for portfolio evaluation.
                </p>
              )}

              <form onSubmit={handleLogin} className="space-y-3 pt-2">
                <input
                  type="password"
                  placeholder="Enter Passkey"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-xs text-center font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <Button variant="electric" size="sm" type="submit" className="w-full text-xs font-bold py-2.5">
                  Access Admin Center
                </Button>
              </form>
            </div>
          ) : (
            /* Logged-in Dashboard Interface */
            <div className="space-y-8">
              {/* Stat Counters Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B]">
                  <p className="text-[11px] font-mono text-neutral-500">Client Inquiries</p>
                  <p className="text-2xl font-bold font-mono text-[#0066FF] mt-1">{inquiries.length}</p>
                </div>
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B]">
                  <p className="text-[11px] font-mono text-neutral-500">Active Case Studies</p>
                  <p className="text-2xl font-bold font-mono text-emerald-500 mt-1">{projectsData.length}</p>
                </div>
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B]">
                  <p className="text-[11px] font-mono text-neutral-500">Published Services</p>
                  <p className="text-2xl font-bold font-mono text-purple-500 mt-1">{servicesData.length}</p>
                </div>
                <div className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B]">
                  <p className="text-[11px] font-mono text-neutral-500">Pricing Packages</p>
                  <p className="text-2xl font-bold font-mono text-amber-500 mt-1">{pricingPackages.length}</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-neutral-200 dark:border-neutral-800 pb-3">
                {[
                  { id: 'inquiries', label: `Inquiries (${inquiries.length})`, icon: Inbox },
                  { id: 'projects', label: `Projects (${projectsData.length})`, icon: FolderGit2 },
                  { id: 'services', label: `Services (${servicesData.length})`, icon: UserCheck },
                  { id: 'pricing', label: `Pricing Packages (${pricingPackages.length})`, icon: DollarSign },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                        activeTab === t.id
                          ? 'bg-[#0066FF] text-white'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}

                <button
                  onClick={fetchInquiries}
                  className="ml-auto p-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-500 hover:text-neutral-900"
                  title="Refresh Inquiries"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${loadingInquiries ? 'animate-spin' : ''}`} />
                </button>
              </div>

              {/* Tab 1: Inquiries List */}
              {activeTab === 'inquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase">
                      Client Project Inquiries
                    </h3>
                    <span className="text-xs text-neutral-400 font-mono">
                      Stored in secure backend API database
                    </span>
                  </div>

                  {inquiries.length === 0 ? (
                    <div className="p-8 text-center text-xs text-neutral-500">
                      No inquiries found. Submit one via the Contact page to see it appear here!
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-3"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 dark:border-neutral-800/60 pb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-mono font-bold text-xs text-[#0066FF]">
                                {inq.id}
                              </span>
                              <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                                {inq.name}
                              </h4>
                              {inq.company && (
                                <span className="text-xs text-neutral-500 font-mono">
                                  ({inq.company})
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-xs font-mono">
                              <Badge variant="electric" className="text-[10px]">
                                {inq.websiteType}
                              </Badge>
                              <span className="text-neutral-400 text-[10px]">
                                {new Date(inq.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                            <div>
                              <span className="text-neutral-400 text-[10px] block">CLIENT EMAIL:</span>
                              <a href={`mailto:${inq.email}`} className="text-[#0066FF] hover:underline">
                                {inq.email}
                              </a>
                            </div>
                            <div>
                              <span className="text-neutral-400 text-[10px] block">INDICATIVE BUDGET:</span>
                              <span className="text-neutral-800 dark:text-neutral-200 font-semibold">{inq.budget}</span>
                            </div>
                            <div>
                              <span className="text-neutral-400 text-[10px] block">EXPECTED TIMELINE:</span>
                              <span className="text-neutral-800 dark:text-neutral-200">{inq.timeline}</span>
                            </div>
                          </div>

                          <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
                            <span className="font-mono text-[10px] text-neutral-400 uppercase block font-semibold mb-0.5">
                              Scope Description:
                            </span>
                            {inq.details}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: Projects Overview */}
              {activeTab === 'projects' && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase">
                    Configured Projects ({projectsData.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectsData.map((p) => (
                      <div
                        key={p.id}
                        className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] text-xs space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{p.name}</h4>
                          <Badge variant="outline" className="text-[10px]">{p.status}</Badge>
                        </div>
                        <p className="text-neutral-500 line-clamp-2">{p.tagline}</p>
                        <p className="font-mono text-[10px] text-[#0066FF]">{p.techStack.join(' • ')}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: Services Overview */}
              {activeTab === 'services' && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase">
                    Configured Services ({servicesData.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {servicesData.map((s) => (
                      <div
                        key={s.id}
                        className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] text-xs space-y-1"
                      >
                        <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{s.title}</h4>
                        <p className="font-mono text-[#0066FF] font-semibold">{s.indicativeStartingPriceINR}</p>
                        <p className="text-neutral-500 text-[11px]">{s.estimatedTimeline}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Pricing Packages */}
              {activeTab === 'pricing' && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold font-mono text-neutral-500 uppercase">
                    Configured Pricing Packages ({pricingPackages.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                    {pricingPackages.map((pkg) => (
                      <div
                        key={pkg.id}
                        className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] text-xs space-y-1"
                      >
                        <span className="text-[10px] font-mono text-neutral-400">{pkg.badge}</span>
                        <h4 className="font-bold text-sm text-neutral-900 dark:text-white">{pkg.name}</h4>
                        <p className="text-base font-bold font-mono text-[#0066FF]">{pkg.priceFormattedINR}</p>
                        <p className="text-neutral-500 text-[11px]">{pkg.deliveryTime}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
