'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Globe,
  Bot,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  GitBranch,
  Terminal,
  Server,
  Layers,
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesPage() {
  const coreServices = [
    {
      id: 'website-development',
      title: 'Full-Stack Website Development',
      badge: '20 Production Formats',
      tagline: 'High-converting, sub-second web platforms engineered for business growth.',
      link: '/websites',
      linkText: 'Explore 20 Production Website Types',
      icon: Globe,
      description:
        'Custom web applications, 3D interactive experiences, B2B SaaS platforms, and headless e-commerce storefronts built with Next.js 14, React 18, and Tailwind CSS. Every build includes an automated GitHub push + Vercel edge deployment pipeline with zero-downtime rollouts.',
      features: [
        'Automated CI/CD: Push to GitHub triggers instant Vercel global edge deployment',
        'Sub-second Core Web Vitals (98+ Lighthouse scores, sub-800ms LCP)',
        'Fluid 60fps animations with Framer Motion, Three.js, and CSS hardware acceleration',
        'Headless CMS, PostgreSQL/Supabase, and Stripe international billing integration',
      ],
      deliverables: [
        'Full TypeScript Next.js codebase with clean architectural patterns',
        'Responsive layouts tested across Desktop, Tablet, and Mobile viewports',
        'Automated GitHub Actions CI/CD workflows and Vercel edge configuration',
        'SEO metadata, dynamic OpenGraph cards, sitemap, and robots.txt',
      ],
      techStack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Vercel Edge'],
    },
    {
      id: 'ai-tools',
      title: 'Custom AI Tools & LLM Agents',
      badge: '8 Enterprise Systems',
      tagline: 'Autonomous AI intelligence layered directly into your existing business workflows.',
      link: '/ai-tools',
      linkText: 'View 8 Enterprise AI Systems & Simulator',
      icon: Bot,
      description:
        'Purpose-built enterprise AI systems that solve real business bottlenecks. From private document RAG pipelines with pgvector to autonomous Text-to-SQL query agents, automated ATS screening, and strict guardrailed customer service copilots.',
      features: [
        'Enterprise Document RAG with pgvector hybrid dense/sparse vector search',
        'Autonomous Text-to-SQL data intelligence agents with schema introspection',
        'Strict deterministic guardrails preventing hallucinations and competitor leaks',
        'Multimodal invoice, contract, and un-structured document extraction pipelines',
      ],
      deliverables: [
        'Production FastAPI / LangChain / LlamaIndex backend endpoints',
        'Streaming SSE chat and completion interfaces with responsive UI',
        'Vector database indexing and semantic chunking pipelines',
        'Evaluation test suite for accuracy, latency, and guardrail verification',
      ],
      techStack: ['OpenAI / Anthropic', 'pgvector', 'FastAPI', 'LangChain', 'LlamaIndex', 'Python'],
    },
    {
      id: 'automation',
      title: 'Python Automation & Backend Pipelines',
      badge: '8 Automated Pipelines',
      tagline: 'Fault-tolerant background automation saving 15-40+ human hours weekly.',
      link: '/automation',
      linkText: 'Inspect 8 Automation Architectures',
      icon: Zap,
      description:
        'Resilient Python scripts, Celery workers, and API integration pipelines that run silently 24/7. Automate lead enrichment, headless market intelligence scrapers, social media cross-posting, SRE incident triage, and financial reconciliation.',
      features: [
        'B2B Lead Enrichment & Multi-CRM sync (HubSpot, Salesforce, Pipedrive)',
        'Resilient headless web scrapers with Playwright, rotating proxies, and anti-ban heuristics',
        'Omnichannel social media auto-publishing across X, LinkedIn, and YouTube',
        'Automated financial double-entry reconciliation and invoice auditing',
      ],
      deliverables: [
        'Idempotent Python automation routines with automated retry backoff',
        'Scheduled cron / Celery background workers containerized with Docker',
        'Real-time alert webhooks via Slack, Discord, or SMS (Twilio)',
        'Complete telemetry logs, error reporting, and audit trails',
      ],
      techStack: ['Python 3.12', 'Playwright', 'Celery / Redis', 'PostgreSQL', 'Docker', 'FastAPI'],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Header Banner */}
      <section className="pt-20 pb-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#A3F527] animate-pulse" />
            <Badge variant="lime" className="text-xs uppercase tracking-widest">
              Core Capabilities
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white uppercase font-mono">
            3 Engineering <span className="text-[#A3F527]">Services</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-400 max-w-3xl leading-relaxed">
            I don’t dilute focus across generic agency bloat. I specialize exclusively in 3 high-impact disciplines: production website development with automated CI/CD, custom enterprise AI tools, and resilient Python business automation.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono text-neutral-400">
            <span className="px-3 py-1.5 border border-neutral-800 bg-neutral-900">
              <strong className="text-[#A3F527]">01.</strong> Website Development (20 Examples)
            </span>
            <span className="px-3 py-1.5 border border-neutral-800 bg-neutral-900">
              <strong className="text-[#A3F527]">02.</strong> Custom AI Tools (8 Systems)
            </span>
            <span className="px-3 py-1.5 border border-neutral-800 bg-neutral-900">
              <strong className="text-[#A3F527]">03.</strong> Business Automation (8 Pipelines)
            </span>
          </div>
        </div>
      </section>

      {/* 3 Core Services Detailed Cards */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {coreServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.id}
                className="border border-neutral-800 bg-neutral-950 p-6 sm:p-10 hover:border-[#A3F527]/50 transition-colors"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Title & Overview */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#A3F527] font-bold">
                          SERVICE // 0{index + 1}
                        </span>
                        <Badge variant="lime" className="text-[10px]">
                          {service.badge}
                        </Badge>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border border-[#A3F527]/40 bg-[#A3F527]/10 text-[#A3F527] flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-white">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-xs font-mono text-[#A3F527]">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <Link
                        href={service.link}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
                      >
                        <span>{service.linkText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-neutral-700 bg-transparent text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
                      >
                        <span>Request Scope Quote</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-4 border-t border-neutral-800">
                      <p className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                        Primary Stack & Infrastructure:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 border border-neutral-800 bg-neutral-900 text-neutral-300 font-mono text-[10px]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Capabilities & Deliverables */}
                  <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0">
                    {/* Core Capabilities */}
                    <div className="p-6 border border-neutral-800 bg-neutral-900/60 space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#A3F527]" />
                        <span>Core Capabilities</span>
                      </h3>
                      <ul className="space-y-3 text-xs text-neutral-400">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 bg-[#A3F527] shrink-0 mt-1.5" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Client Deliverables */}
                    <div className="p-6 border border-neutral-800 bg-neutral-900/60 space-y-4">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-white font-bold flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#A3F527]" />
                        <span>Verified Deliverables</span>
                      </h3>
                      <ul className="space-y-3 text-xs text-neutral-400">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 text-[#A3F527] shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Continuous CI/CD Pipeline Highlight */}
      <section className="py-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <Badge variant="lime" className="text-xs uppercase tracking-widest">
              Deployment Pipeline
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white uppercase">
              Automated Push & Edge Deployment
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Every website I deliver is wired to an automated CI/CD pipeline. Code pushes to GitHub automatically trigger zero-downtime builds deployed across Vercel’s global Edge network.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              {
                step: '01',
                title: 'Clean GitHub Repo',
                desc: 'Structured TypeScript repository with ESLint, Prettier, and branch protection rules.',
              },
              {
                step: '02',
                title: 'Automated CI Checks',
                desc: 'Type checking, unit tests, and bundle analyzers execute on every Pull Request.',
              },
              {
                step: '03',
                title: 'Instant Preview URLs',
                desc: 'Every branch generates a preview URL for rapid stakeholder sign-off prior to merge.',
              },
              {
                step: '04',
                title: 'Vercel Edge Production',
                desc: 'Atomic zero-downtime deployments with instant rollbacks and global CDN caching.',
              },
            ].map((p) => (
              <div key={p.step} className="p-6 border border-neutral-800 bg-black space-y-2">
                <span className="font-mono text-xs text-[#A3F527] font-bold">{p.step} // PIPELINE</span>
                <h4 className="font-mono text-sm font-bold text-white uppercase">{p.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <Badge variant="lime" className="text-xs uppercase tracking-widest">
            Ready to Build?
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase">
            Let’s Engineer Your Next <span className="text-[#A3F527]">Product</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Have a project in mind? Reach out with your requirements and I’ll provide a clear scope breakdown, architecture recommendation, and estimated timeline within 24 hours.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/websites"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-neutral-700 bg-neutral-900 text-white font-mono text-xs font-bold uppercase tracking-wider hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
            >
              <span>Browse 20 Website Examples</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
