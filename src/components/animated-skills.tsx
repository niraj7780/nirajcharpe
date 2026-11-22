'use client';

import * as React from 'react';
import {
  Code2,
  Terminal,
  Cpu,
  Workflow,
  Rocket,
  Zap,
  CheckCircle2,
  Layers,
  Activity
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface SkillItem {
  name: string;
  category: 'Frontend & 3D' | 'Backend & Python' | 'AI Systems' | 'Automation & Cloud';
  tag: string;
  metrics: string;
}

const allSkills: SkillItem[] = [
  { name: 'Next.js 14 App Router', category: 'Frontend & 3D', tag: 'SSR / Edge', metrics: '<0.8s LCP' },
  { name: 'FastAPI (Python 3.11)', category: 'Backend & Python', tag: 'Async Engine', metrics: '45ms Latency' },
  { name: 'Gemini 1.5 Pro API', category: 'AI Systems', tag: 'RAG / Structured JSON', metrics: 'Zero Hallucination' },
  { name: 'Playwright Automation', category: 'Automation & Cloud', tag: 'Headless Scraper', metrics: '98%+ Deliverability' },
  { name: 'Three.js / WebGL', category: 'Frontend & 3D', tag: '60 FPS Canvas', metrics: 'Hardware Accelerated' },
  { name: 'PostgreSQL & pgvector', category: 'Backend & Python', tag: 'ACID Transactions', metrics: 'Relational & Embeddings' },
  { name: 'Automated GitHub Sync', category: 'Automation & Cloud', tag: 'CI/CD Pipelines', metrics: 'Zero-Downtime Deploy' },
  { name: 'Vercel Edge Network', category: 'Automation & Cloud', tag: 'Global CDN', metrics: '99.99% Uptime' },
  { name: 'Tailwind CSS Modern', category: 'Frontend & 3D', tag: 'Minimal Square UI', metrics: 'Zero Runtime Bloat' },
  { name: 'Docker Microservices', category: 'Backend & Python', tag: 'Container Parity', metrics: 'Isolated Workloads' },
];

export function AnimatedSkills() {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const categories = ['All', 'Frontend & 3D', 'Backend & Python', 'AI Systems', 'Automation & Cloud'];

  const filtered = activeCategory === 'All'
    ? allSkills
    : allSkills.filter((s) => s.category === activeCategory);

  return (
    <div className="space-y-6">
      {/* 60FPS Continuous Marquee Ticker */}
      <div className="w-full overflow-hidden border-y border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-[#080808] py-2.5">
        <div className="flex w-max animate-marquee gap-6 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
          {[...allSkills, ...allSkills].map((skill, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 bg-[#A3F527] inline-block"></span>
              <span className="font-bold text-neutral-900 dark:text-white">{skill.name}</span>
              <span className="text-neutral-400 text-[10px]">[{skill.tag}]</span>
              <span className="text-[#A3F527] text-[10px]">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Category Filter Pills (Minimal Square) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border rounded-none transition-all ${
              activeCategory === cat
                ? 'bg-[#A3F527] text-black border-[#A3F527] shadow-[0_0_12px_rgba(163,245,39,0.3)]'
                : 'border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] text-neutral-600 dark:text-neutral-400 hover:border-neutral-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Square Technical Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {filtered.map((skill) => (
          <div
            key={skill.name}
            className="p-4 border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#0A0A0A] rounded-none hover:border-[#A3F527] transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                  {skill.category}
                </span>
                <span className="w-1.5 h-1.5 bg-[#A3F527] group-hover:scale-150 transition-transform"></span>
              </div>
              <h4 className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-[#A3F527] transition-colors">
                {skill.name}
              </h4>
              <p className="text-xs font-mono text-neutral-500 mt-1">
                {skill.tag}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-900 flex items-center justify-between text-[11px] font-mono">
              <span className="text-neutral-400">Benchmark:</span>
              <span className="text-[#A3F527] font-bold">{skill.metrics}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
