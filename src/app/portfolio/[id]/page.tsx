import * as React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Github,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Calendar,
  Activity,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projectsData } from '@/data/projects';

export function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  {project.category}
                </span>
                <Badge variant={project.status === 'Production' ? 'success' : 'electric'}>
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
                {project.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-xs font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0066FF] hover:bg-[#0052db] text-white text-xs font-semibold shadow-sm"
                >
                  <span>Live Deployment</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Case Study Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Executive Summary Card */}
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/40 dark:bg-[#11131B] space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
            Executive Summary
          </h2>
          <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
            {project.tagline}
          </p>
          <p className="text-xs text-neutral-500 font-mono">
            Highlighted Achievement: {project.highlight}
          </p>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-3">
            <div className="flex items-center gap-2 text-rose-500 font-mono text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>The Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-3">
            <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Engineering Deep Dive */}
        <div className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-4">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#0066FF]" />
            <span>System Architecture & Engineering Decisions</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.architecture}
          </p>

          {/* Architecture Flow Representation */}
          <div className="mt-4 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 font-mono text-xs text-neutral-600 dark:text-neutral-400 space-y-2">
            <p className="font-semibold text-neutral-900 dark:text-white">Component Flow Hierarchy:</p>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="p-1.5 bg-white dark:bg-neutral-800 rounded border border-neutral-300 dark:border-neutral-700">Client UI (Next.js / React)</span>
              <span>→</span>
              <span className="p-1.5 bg-white dark:bg-neutral-800 rounded border border-neutral-300 dark:border-neutral-700">API Gateway / FastAPI Async</span>
              <span>→</span>
              <span className="p-1.5 bg-white dark:bg-neutral-800 rounded border border-neutral-300 dark:border-neutral-700">Database (PostgreSQL ACID)</span>
              <span>→</span>
              <span className="p-1.5 bg-white dark:bg-neutral-800 rounded border border-neutral-300 dark:border-neutral-700">AI LLM Pipeline (Gemini)</span>
            </div>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-neutral-950 dark:text-white">
            Core Features & Functional Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/40 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
            Technologies & Libraries Employed
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Metrics (if present) */}
        {project.metrics && (
          <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-50/20 dark:bg-emerald-950/20 space-y-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              <span>Verified Performance Metrics</span>
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label}>
                  <p className="text-2xl font-bold font-mono text-neutral-900 dark:text-white">
                    {m.value}
                  </p>
                  <p className="text-xs text-neutral-500">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA to Discuss Similar Project */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-900 text-center space-y-3">
          <h3 className="text-xl font-bold text-neutral-950 dark:text-white">
            Need a similar system engineered for your business?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-lg mx-auto">
            I can architect and build a bespoke solution tailored to your operational specifications.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?projectRef=${encodeURIComponent(project.name)}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-xs shadow-md"
            >
              <span>Discuss Building a Similar Solution</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
