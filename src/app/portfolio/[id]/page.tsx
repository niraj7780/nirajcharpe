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
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Top Breadcrumb Header */}
      <div className="border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-[#A3F527] transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Back to All Projects</span>
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#A3F527] uppercase tracking-wider font-bold">
                  {project.category}
                </span>
                <Badge variant="lime">
                  {project.status}
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase">
                {project.name}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-neutral-700 bg-neutral-900 text-xs font-mono font-bold text-white uppercase hover:border-[#A3F527] hover:text-[#A3F527] transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {(project.liveDemoUrl || project.liveUrl) && (
                <a
                  href={project.liveDemoUrl || project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#A3F527] bg-[#A3F527] text-black text-xs font-mono font-bold uppercase hover:bg-[#8AE40E] transition-colors"
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Executive Summary Card */}
        <div className="p-6 sm:p-8 border border-neutral-800 bg-neutral-950 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-[#A3F527] font-bold">
            Executive Summary
          </h2>
          <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-mono">
            {project.tagline}
          </p>
          <p className="text-xs text-neutral-400 font-mono">
            Highlighted Achievement: {project.highlight}
          </p>
        </div>

        {/* Problem vs Solution Split */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>The Problem Statement</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-3">
            <div className="flex items-center gap-2 text-[#A3F527] font-mono text-xs font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4" />
              <span>The Engineered Solution</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Architecture & Engineering Decisions */}
        <div className="p-6 sm:p-8 border border-neutral-800 bg-neutral-950 space-y-4">
          <h2 className="text-lg font-bold font-mono text-white uppercase flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#A3F527]" />
            <span>System Architecture & Engineering Decisions</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {project.architecture}
          </p>

          {/* Architecture Flow Representation */}
          <div className="mt-4 p-4 border border-neutral-800 bg-black font-mono text-xs text-neutral-400 space-y-2">
            <p className="font-semibold text-white">Component Flow Hierarchy:</p>
            <div className="flex flex-wrap items-center gap-2 text-[11px]">
              <span className="p-1.5 bg-neutral-900 border border-neutral-700 text-white">Client UI (Next.js / React)</span>
              <span className="text-[#A3F527]">→</span>
              <span className="p-1.5 bg-neutral-900 border border-neutral-700 text-white">API Gateway / FastAPI Async</span>
              <span className="text-[#A3F527]">→</span>
              <span className="p-1.5 bg-neutral-900 border border-neutral-700 text-white">Database (PostgreSQL ACID)</span>
              <span className="text-[#A3F527]">→</span>
              <span className="p-1.5 bg-neutral-900 border border-neutral-700 text-white">AI LLM Pipeline (Gemini)</span>
            </div>
          </div>
        </div>

        {/* Key Features List */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold font-mono text-white uppercase">
            Core Features & Functional Deliverables
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="p-4 border border-neutral-800 bg-neutral-950 flex items-start gap-2.5 text-xs text-neutral-300"
              >
                <CheckCircle2 className="w-4 h-4 text-[#A3F527] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Matrix */}
        <div className="p-6 border border-neutral-800 bg-neutral-950 space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
            Technologies & Libraries Employed
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-neutral-900 border border-neutral-700 text-neutral-200 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA to Discuss Similar Project */}
        <div className="p-8 border border-neutral-800 bg-neutral-950 text-center space-y-4">
          <h3 className="text-2xl font-black font-mono text-white uppercase">
            Need a similar system engineered for your business?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg mx-auto">
            I can architect and build a bespoke solution tailored to your operational specifications.
          </p>
          <div className="pt-2">
            <Link
              href={`/contact?projectRef=${encodeURIComponent(project.name)}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
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
