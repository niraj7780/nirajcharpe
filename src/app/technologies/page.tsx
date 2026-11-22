import * as React from 'react';
import Link from 'next/link';
import {
  Code2,
  Terminal,
  Cpu,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Layers
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { skillsData } from '@/data/skills';

export default function TechnologiesPage() {
  const categoryIcons: Record<string, any> = {
    'Frontend Development': Code2,
    'Backend & APIs': Terminal,
    'AI & Automation Engineering': Cpu,
    'Databases & Storage': Database,
    'Cloud, DevOps & Tooling': Cloud,
  };

  return (
    <div className="flex flex-col min-h-screen bg-black text-white selection:bg-[#A3F527] selection:text-black">
      {/* Header Banner */}
      <section className="pt-20 pb-20 border-b border-neutral-800 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Badge variant="lime" className="font-mono text-xs uppercase tracking-wider">
            Technical Architecture
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-black font-mono tracking-tight text-white uppercase">
            Technologies & Engineering <span className="text-[#A3F527]">Stack</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed">
            Curated tools, languages, and frameworks selected for high throughput, sub-second execution speeds, strict type safety, and real-world stability.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex flex-wrap gap-4">
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• Zero Arbitrary Percentages</span>
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• Production-Tested Toolchains</span>
            <span className="px-3 py-1 border border-neutral-800 bg-neutral-900">• Full-Stack Competency</span>
          </div>
        </div>
      </section>

      {/* Skills Groupings */}
      <section className="py-20 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {skillsData.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-800">
                  <div className="w-10 h-10 border border-[#A3F527]/40 bg-[#A3F527]/10 text-[#A3F527] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold font-mono text-white">
                      {group.category}
                    </h2>
                    <p className="text-xs text-neutral-400 mt-0.5">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 border border-neutral-800 bg-neutral-950 hover:border-[#A3F527]/50 transition-colors flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold font-mono text-sm text-white">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 bg-[#A3F527]/10 text-[#A3F527] border border-[#A3F527]/30 font-bold">
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-400 leading-relaxed">
                          {skill.highlights}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-800 flex flex-wrap gap-1">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 border border-neutral-800 bg-neutral-900 text-neutral-300 font-mono text-[10px]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engineering Philosophy Callout */}
      <section className="py-20 bg-neutral-950 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="lime" className="font-mono text-xs">
            Tool Selection Philosophy
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-black font-mono uppercase text-white">
            Choosing the Right Architecture for Your Business
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed">
            I don’t follow hype cycles blindly. Every tool is selected because it delivers maximum conversion velocity, bulletproof type safety, and painless long-term maintainability for your team.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#A3F527] bg-[#A3F527] text-black font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#8AE40E] transition-colors"
            >
              <span>Discuss Your Application Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
