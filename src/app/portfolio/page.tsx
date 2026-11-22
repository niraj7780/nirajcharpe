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
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Header Banner */}
      <section className="pt-20 pb-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="lime" className="font-mono text-xs uppercase tracking-wider">
            Verified Engineering Portfolio
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white uppercase">
            Engineering Projects & <span className="text-[#A3F527]">Case Studies</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Documented full-stack codebases, scalable Python backends, and AI pipelines. Built with real code, zero fabricated metrics.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex flex-wrap gap-4">
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• {projectsData.length} Documented Systems</span>
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• 100% Real Codebases</span>
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• Open for Technical Inspection</span>
          </div>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="py-6 border-b border-neutral-800 sticky top-16 md:top-20 z-30 bg-black/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase transition-colors border ${
                  selectedCategory === cat
                    ? 'border-[#A3F527] bg-[#A3F527] text-black'
                    : 'border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 border border-neutral-800 bg-neutral-950 text-xs font-mono text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#A3F527]"
            />
          </div>
        </div>
      </section>

      {/* Projects Showcase Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center text-neutral-500 space-y-2 border border-neutral-800 bg-neutral-950">
              <p className="text-base font-mono font-semibold">No projects match your filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="text-xs font-mono text-[#A3F527] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="border border-neutral-800 bg-neutral-950 hover:border-[#A3F527]/50 transition-colors flex flex-col justify-between"
                >
                  {/* Card Header */}
                  <div className="p-6 border-b border-neutral-800 bg-neutral-900/60">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono text-[#A3F527] uppercase tracking-wider font-bold">
                        {project.category}
                      </span>
                      <Badge variant="lime" className="text-[10px]">
                        {project.status}
                      </Badge>
                    </div>

                    <h2 className="text-2xl font-black font-mono text-white">
                      {project.name}
                    </h2>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1">
                    <div>
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                        The Challenge
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {project.problem}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-1">
                        Engineered Solution
                      </h3>
                      <p className="text-xs text-neutral-300 leading-relaxed">
                        {project.solution}
                      </p>
                    </div>

                    {/* Features list */}
                    <div className="pt-2">
                      <h3 className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 font-semibold mb-2">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-1.5 text-xs text-neutral-400">
                        {project.features.slice(0, 3).map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-[#A3F527] shrink-0 mt-1.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 border-t border-neutral-800 flex flex-wrap gap-1">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 border border-neutral-800 bg-neutral-900 text-neutral-400 text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer CTAs */}
                  <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex items-center justify-between gap-4">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A3F527] hover:underline font-bold"
                    >
                      <span>Read Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </Link>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-neutral-800 bg-neutral-900 text-neutral-400 hover:text-white hover:border-[#A3F527] transition-colors"
                          title="View GitHub Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {(project.liveDemoUrl || project.liveUrl) && (
                        <a
                          href={project.liveDemoUrl || project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 border border-[#A3F527] bg-[#A3F527] text-black hover:bg-[#8AE40E] transition-colors"
                          title="Open Live Deployment"
                        >
                          <ArrowUpRight className="w-4 h-4" />
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
    </div>
  );
}
