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
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100">
      {/* Header Banner */}
      <section className="pt-16 pb-20 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12] bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="purple" className="font-mono text-xs uppercase tracking-wider">
            Technical Architecture
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-950 dark:text-white">
            Technologies & Engineering Stack
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Curated tools, languages, and frameworks selected for high throughput, sub-second execution speeds, strict type safety, and real-world stability.
          </p>

          <div className="pt-2 text-xs font-mono text-neutral-500 flex items-center justify-center gap-4">
            <span>• Zero Arbitrary Percentages</span>
            <span>• Production-Tested Toolchains</span>
            <span>• Full-Stack Competency</span>
          </div>
        </div>
      </section>

      {/* Skills Groupings */}
      <section className="py-20 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {skillsData.map((group) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div key={group.category} className="space-y-6">
                <div className="flex items-center gap-3 pb-3 border-b border-neutral-200 dark:border-neutral-800">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 text-[#0066FF] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white">
                      {group.category}
                    </h2>
                    <p className="text-xs text-neutral-500 mt-0.5">{group.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-5 rounded-xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm hover:border-blue-500/40 transition-all flex flex-col justify-between"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-sm text-neutral-950 dark:text-white">
                            {skill.name}
                          </h3>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950 text-[#0066FF] font-semibold border border-blue-200 dark:border-blue-900">
                            {skill.level}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {skill.highlights}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-neutral-100 dark:border-neutral-800 flex flex-wrap gap-1">
                        {skill.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
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
      <section className="py-16 bg-neutral-50/50 dark:bg-[#0B0C12] text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <Badge variant="electric" className="font-mono text-xs">
            Tool Selection Philosophy
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-950 dark:text-white">
            Choosing the Right Architecture for Your Business
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto leading-relaxed">
            I don’t follow hype cycles blindly. Every tool is selected because it delivers maximum conversion velocity, bulletproof type safety, and painless long-term maintainability for your team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-xs shadow-md"
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
