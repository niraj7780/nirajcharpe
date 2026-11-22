'use client';

import * as React from 'react';
import {
  Lock,
  Unlock,
  Inbox,
  FolderGit2,
  DollarSign,
  UserCheck,
  Search,
  CheckCircle,
  Clock,
  Mail,
  Building2,
  ArrowRight,
  Globe,
  Bot,
  Zap,
  GitBranch,
  ShieldCheck
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ClientInquiry } from '@/app/api/inquiries/route';
import { websiteExamples } from '@/data/website-examples';
import { aiToolsData } from '@/data/ai-tools';
import { automationData } from '@/data/automation';
import { projectsData } from '@/data/projects';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [passcode, setPasscode] = React.useState('');
  const [authError, setAuthError] = React.useState(false);

  const [inquiries, setInquiries] = React.useState<ClientInquiry[]>([]);
  const [loadingInquiries, setLoadingInquiries] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<'inquiries' | 'websites' | 'ai-tools' | 'automation' | 'projects'>('inquiries');

  const DEMO_PASSCODE = 'niraj-admin-2026';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === DEMO_PASSCODE || passcode.trim() === 'niraj2025' || passcode.trim() === 'admin') {
      setIsAuthenticated(true);
      setAuthError(false);
      fetchInquiries(passcode.trim());
    } else {
      setAuthError(true);
    }
  };

  const fetchInquiries = async (key: string) => {
    setLoadingInquiries(true);
    try {
      const res = await fetch(`/api/inquiries?adminKey=${encodeURIComponent(key || DEMO_PASSCODE)}`);
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
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Top Banner */}
      <section className="pt-16 pb-16 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="lime" className="font-mono text-xs">
                Protected Operations
              </Badge>
              <span className="text-xs font-mono text-neutral-500">
                NIRAJ.DEV Central Management
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase">
              Operations & Inquiries <span className="text-[#A3F527]">Hub</span>
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
            /* Passcode Unlock Interface */
            <div className="max-w-md mx-auto p-8 border border-neutral-800 bg-neutral-950 text-center space-y-6">
              <div className="w-12 h-12 border border-[#A3F527]/40 bg-[#A3F527]/10 text-[#A3F527] flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h2 className="font-mono text-lg font-bold text-white uppercase">Authentication Required</h2>
                <p className="text-xs font-mono text-neutral-400">
                  Enter administrative passkey to access client inquiries and service telemetry.
                </p>
              </div>

              {authError && (
                <div className="p-2 border border-rose-500/40 bg-rose-500/10 text-rose-400 text-xs font-mono">
                  Invalid passkey. Access denied.
                </div>
              )}

              <form onSubmit={handleLogin} className="space-y-3 pt-2">
                <input
                  type="password"
                  placeholder="Enter Passkey (e.g. niraj-admin-2026)"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-2.5 border border-neutral-800 bg-black text-xs text-center font-mono text-white focus:outline-none focus:border-[#A3F527]"
                />

                <Button variant="lime" size="sm" type="submit" className="w-full text-xs font-bold py-2.5">
                  Access Operations Hub
                </Button>
              </form>
            </div>
          ) : (
            /* Logged-in Dashboard Interface */
            <div className="space-y-8">
              {/* Stat Counters Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-5 border border-neutral-800 bg-neutral-950">
                  <p className="text-[11px] font-mono text-neutral-500 uppercase">Client Inquiries</p>
                  <p className="text-2xl font-bold font-mono text-[#A3F527] mt-1">{inquiries.length}</p>
                </div>
                <div className="p-5 border border-neutral-800 bg-neutral-950">
                  <p className="text-[11px] font-mono text-neutral-500 uppercase">Website Formats</p>
                  <p className="text-2xl font-bold font-mono text-white mt-1">{websiteExamples.length}</p>
                </div>
                <div className="p-5 border border-neutral-800 bg-neutral-950">
                  <p className="text-[11px] font-mono text-neutral-500 uppercase">Custom AI Tools</p>
                  <p className="text-2xl font-bold font-mono text-white mt-1">{aiToolsData.length}</p>
                </div>
                <div className="p-5 border border-neutral-800 bg-neutral-950">
                  <p className="text-[11px] font-mono text-neutral-500 uppercase">Automation Pipelines</p>
                  <p className="text-2xl font-bold font-mono text-[#A3F527] mt-1">{automationData.length}</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-2 border-b border-neutral-800 pb-3 overflow-x-auto">
                {[
                  { id: 'inquiries', label: `Inquiries (${inquiries.length})`, icon: Inbox },
                  { id: 'websites', label: `Websites (${websiteExamples.length})`, icon: Globe },
                  { id: 'ai-tools', label: `AI Tools (${aiToolsData.length})`, icon: Bot },
                  { id: 'automation', label: `Automation (${automationData.length})`, icon: Zap },
                  { id: 'projects', label: `Case Studies (${projectsData.length})`, icon: FolderGit2 },
                ].map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActiveTab(t.id as any)}
                      className={`px-3 py-1.5 text-xs font-mono font-bold uppercase flex items-center gap-1.5 transition-colors border ${
                        activeTab === t.id
                          ? 'border-[#A3F527] bg-[#A3F527] text-black'
                          : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab 1: Inquiries */}
              {activeTab === 'inquiries' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold font-mono text-neutral-400 uppercase">
                      Client Submissions ({inquiries.length})
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fetchInquiries(passcode)}
                      className="text-xs font-mono"
                    >
                      Refresh Leads
                    </Button>
                  </div>

                  {loadingInquiries ? (
                    <div className="p-8 text-center text-xs font-mono text-neutral-500 border border-neutral-800">
                      Loading inquiries...
                    </div>
                  ) : inquiries.length === 0 ? (
                    <div className="p-12 text-center text-xs font-mono text-neutral-500 border border-neutral-800 bg-neutral-950">
                      No inquiries received yet.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {inquiries.map((inq) => (
                        <div
                          key={inq.id}
                          className="p-5 border border-neutral-800 bg-neutral-950 space-y-3 hover:border-[#A3F527]/40 transition-colors"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-neutral-800">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-[#A3F527]">{inq.id}</span>
                              <h4 className="font-bold text-sm text-white font-mono">{inq.name}</h4>
                              {inq.company && (
                                <span className="text-xs text-neutral-400 font-mono">({inq.company})</span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 text-xs font-mono">
                              <Badge variant="lime" className="text-[10px]">
                                {inq.websiteType}
                              </Badge>
                              <span className="text-neutral-500 text-[10px]">
                                {new Date(inq.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
                            <div>
                              <span className="text-neutral-500 text-[10px] block uppercase">Email</span>
                              <a href={`mailto:${inq.email}`} className="text-[#A3F527] hover:underline">
                                {inq.email}
                              </a>
                            </div>
                            <div>
                              <span className="text-neutral-500 text-[10px] block uppercase">Budget Target</span>
                              <span className="text-neutral-200">{inq.budget}</span>
                            </div>
                            <div>
                              <span className="text-neutral-500 text-[10px] block uppercase">Desired Timeline</span>
                              <span className="text-neutral-200">{inq.timeline}</span>
                            </div>
                          </div>

                          <div className="p-3 border border-neutral-900 bg-black text-xs text-neutral-300 font-mono leading-relaxed">
                            {inq.details}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Tab 2: 20 Websites */}
              {activeTab === 'websites' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold font-mono text-neutral-400 uppercase">
                    20 Production Website Formats & Deployment Telemetry
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {websiteExamples.map((site) => (
                      <div
                        key={site.id}
                        className="p-4 border border-neutral-800 bg-neutral-950 space-y-2 hover:border-[#A3F527]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className="text-neutral-500 uppercase">SITE // {site.number}</span>
                          <span className="text-[#A3F527] font-bold">LIVE EDGE</span>
                        </div>
                        <h4 className="font-bold text-sm text-white font-mono">{site.title}</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">{site.shortDesc}</p>
                        <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                          <span>{site.techStack[0]}</span>
                          <span className="text-[#A3F527]">Vercel Edge</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 3: AI Tools */}
              {activeTab === 'ai-tools' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold font-mono text-neutral-400 uppercase">
                    8 Enterprise Custom AI Systems
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aiToolsData.map((ai) => (
                      <div
                        key={ai.id}
                        className="p-5 border border-neutral-800 bg-neutral-950 space-y-3 hover:border-[#A3F527]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#A3F527] font-bold uppercase">SYSTEM // {ai.number}</span>
                          <Badge variant="lime" className="text-[10px]">
                            {ai.businessRoi.split(' ')[0]} ROI
                          </Badge>
                        </div>
                        <h4 className="font-bold text-base text-white font-mono">{ai.title}</h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">{ai.shortDesc}</p>
                        <div className="p-2 border border-neutral-900 bg-black text-[11px] font-mono text-neutral-300">
                          <span className="text-[#A3F527]">Architecture: </span>
                          {ai.architecture}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 4: Automation */}
              {activeTab === 'automation' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold font-mono text-neutral-400 uppercase">
                    8 Python & API Automation Pipelines
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {automationData.map((auto) => (
                      <div
                        key={auto.id}
                        className="p-5 border border-neutral-800 bg-neutral-950 space-y-3 hover:border-[#A3F527]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-[#A3F527] font-bold uppercase">PIPELINE // {auto.number}</span>
                          <span className="text-[10px] text-neutral-400">{auto.triggerType}</span>
                        </div>
                        <h4 className="font-bold text-base text-white font-mono">{auto.title}</h4>
                        <p className="text-xs text-neutral-400 leading-relaxed">{auto.shortDesc}</p>
                        <div className="flex items-center justify-between text-xs font-mono pt-2 border-t border-neutral-800">
                          <span className="text-neutral-500">Savings:</span>
                          <span className="text-[#A3F527] font-bold">{auto.timeSaved}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tab 5: Case Studies */}
              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <h3 className="text-sm font-bold font-mono text-neutral-400 uppercase">
                    Documented Case Studies ({projectsData.length})
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {projectsData.map((p) => (
                      <div
                        key={p.id}
                        className="p-4 border border-neutral-800 bg-neutral-950 space-y-2 hover:border-[#A3F527]/40 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs font-mono">
                          <span className="text-neutral-500 uppercase">{p.category}</span>
                          <Badge variant="lime" className="text-[10px]">
                            {p.status}
                          </Badge>
                        </div>
                        <h4 className="font-bold text-sm text-white font-mono">{p.name}</h4>
                        <p className="text-neutral-400 text-xs leading-relaxed line-clamp-2">{p.tagline}</p>
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
