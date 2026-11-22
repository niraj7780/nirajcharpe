'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Github,
  ArrowUpRight,
  ChevronRight,
  Filter,
  Search,
  CheckCircle2,
  Cpu,
  Layers,
  ArrowRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { projectsData, Project } from '@/data/projects';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const categories = ['All', 'AI & Machine Learning', 'SaaS & Automation', 'Fintech & Cloud'];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="purple" className="font-mono text-xs uppercase tracking-wider">
            Verified Engineering Portfolio
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Real Full-Stack & AI Systems
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Honest, verified case studies demonstrating scalable Python backends, Next.js web applications, and AI integrations. No fake client metrics or exaggerated claims.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center justify-center gap-4">
            <span>• 8 Documented Projects</span>
            <span>• 100% Real Codebases</span>
            <span>• Inspectable GitHub Repositories</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="py-8 border-b border-neutral-200/80 dark:border-neutral-800/80 sticky top-16 md:top-20 z-30 bg-white/90 dark:bg-[#090A0F]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#0066FF] text-white font-semibold shadow-sm'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by tech or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900 text-xs text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center text-neutral-500 space-y-2">
              <p className="text-base font-semibold">No projects match your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs text-[#0066FF] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Header & Category Badge */}
                  <div className="p-6 border-b border-neutral-100 dark:border-neutral-800 bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-[#131622] dark:to-[#0E1017]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                        {project.category}
                      </span>
                      <Badge variant={project.status === 'Production' ? 'success' : 'electric'}>
                        {project.status}
                      </Badge>
                    </div>

                    <h2 className="text-2xl font-bold text-neutral-950 dark:text-white">
                      {project.name}
                    </h2>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1">
                    {/* The Problem */}
                    <div>
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                        The Challenge
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    {/* The Solution */}
                    <div>
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                        Engineered Solution
                      </h3>
                      <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Architecture Brief */}
                    <div className="p-3 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/60 dark:border-neutral-800/60 text-xs">
                      <span className="font-mono text-[10px] text-neutral-400 uppercase block font-semibold mb-0.5">
                        System Architecture:
                      </span>
                      <p className="text-[11px] text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {project.architecture}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action Links */}
                  <div className="p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between mt-auto">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] dark:text-blue-400 hover:underline"
                    >
                      <span>Read Deep Case Study</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        title="GitHub Repository"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-blue-200 dark:border-blue-900 bg-blue-50/50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 hover:bg-blue-100"
                          title="Open Live Deployment"
                        >
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-16 bg-neutral-50 dark:bg-[#0B0C12] border-t border-neutral-200/80 dark:border-neutral-800/80 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 dark:text-white">
            Have a Complex Full-Stack or AI Project in Mind?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            Let&apos;s evaluate your requirements, design the technical architecture, and establish a milestone schedule.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-semibold text-xs shadow-md"
            >
              <span>Schedule an Engineering Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
