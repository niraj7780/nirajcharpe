import * as React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Shield,
  Layers,
  Code2,
  Cpu,
  BarChart3,
  ShoppingBag,
  Building2,
  Check,
  Star,
  Terminal,
  Github,
  Linkedin,
  Mail,
  ChevronRight
} from 'lucide-react';
import { HeroScene } from '@/components/3d/hero-scene';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { projectsData } from '@/data/projects';
import { servicesData } from '@/data/services';
import { developmentProcess } from '@/data/process';
import { testimonialsData, collaborationPrinciples } from '@/data/testimonials';
import { conceptDemos } from '@/data/demos';
import { InteractiveDemoViewer } from '@/components/demos/interactive-demos';

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const featuredServices = servicesData.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#090A0F] text-neutral-900 dark:text-neutral-100 selection:bg-[#0066FF] selection:text-white">
      {/* ------------------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-grid-pattern">
        {/* Subtle radial glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 dark:bg-purple-600/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Availability & Positioning Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/25 bg-blue-50/50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 text-xs font-mono font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>NIRAJ CHARPE • SENIOR FULL-STACK & AI DEVELOPER</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 dark:text-white leading-[1.1]">
                I Build Digital Experiences That{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#3B82F6] to-[#7C3AED]">
                  Grow Businesses.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
                From stunning business websites to powerful e-commerce platforms and AI-powered applications, I turn ideas into functional digital experiences.
              </p>

              {/* Core Value Props Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                  <span>Direct Developer Partnership</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                  <span>Sub-Second Load Times</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0066FF]" />
                  <span>100% Code Ownership</span>
                </div>
              </div>

              {/* Conversion Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-semibold text-sm transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Let&apos;s Build Your Website</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-600 bg-white dark:bg-neutral-900/60 text-neutral-900 dark:text-white text-sm font-semibold transition-all hover:bg-neutral-50 dark:hover:bg-neutral-800"
                >
                  <span>View Selected Work</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400" />
                </Link>

                <Link
                  href="/demos"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white text-sm font-medium transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>Explore 8+ Live Demos</span>
                </Link>
              </div>

              {/* Trust Metric Counters */}
              <div className="pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80 grid grid-cols-3 gap-6">
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold font-mono text-neutral-950 dark:text-white">
                    8+
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Production Systems Built
                  </p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold font-mono text-[#0066FF]">
                    &lt; 1.0s
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    Core Web Vitals Target
                  </p>
                </div>
                <div>
                  <p className="text-2xl lg:text-3xl font-extrabold font-mono text-emerald-500">
                    100%
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                    On-Time Project Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* Right Interactive 3D Canvas Column */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="w-full max-w-[480px] aspect-square rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-950/50 p-2 shadow-2xl relative overflow-hidden backdrop-blur-sm">
                <HeroScene />

                {/* Floating Tech Badge Overlay */}
                <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/85 dark:bg-[#11131B]/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-xs shadow-lg space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-neutral-900 dark:text-white">
                    <Code2 className="w-3.5 h-3.5 text-[#0066FF]" />
                    <span>Tech Architecture</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 font-mono">
                    Next.js • FastAPI • Gemini API
                  </p>
                </div>

                {/* Floating Availability Card Overlay */}
                <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-white/85 dark:bg-[#11131B]/85 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 text-xs shadow-lg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 dark:text-white text-xs">
                      Available for Hire
                    </p>
                    <p className="text-[11px] text-neutral-500">
                      Fixed-Price Milestones or Retainer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* WHY WORK WITH ME (CLIENT ADVANTAGE) */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
              The Client Advantage
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Why Work With An Independent Senior Developer?
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base">
              Traditional agencies charge enterprise markups to support account managers and layers of bureaucracy. Here is how working directly with me accelerates your project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collaborationPrinciples.map((principle, index) => (
              <Card
                key={principle.title}
                className="hover:border-blue-500/50 hover:shadow-md transition-all group"
              >
                <CardContent className="p-6 space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-[#0066FF] dark:text-blue-400 flex items-center justify-center font-mono font-bold text-sm">
                    0{index + 1}
                  </div>
                  <h3 className="font-bold text-base text-neutral-950 dark:text-white group-hover:text-[#0066FF] transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {principle.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FEATURED PROJECTS SHOWCASE */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <Badge variant="purple" className="font-mono text-xs uppercase tracking-wider">
                Proven Track Record
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Selected Client & SaaS Projects
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-xl">
                Every project solves a concrete technical challenge with clean architecture, verified problem-solving, and measurable results.
              </p>
            </div>

            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] dark:text-blue-400 hover:underline"
            >
              <span>View All 8 Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] overflow-hidden hover:border-blue-500/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Project Header Thumbnail Card */}
                <div className="p-6 border-b border-neutral-100 dark:border-neutral-800/60 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-[#141722] dark:to-[#0E1017]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-medium text-neutral-500 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <Badge variant={project.status === 'Production' ? 'success' : 'electric'}>
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white group-hover:text-[#0066FF] transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem & Solution Snippet */}
                <div className="p-6 space-y-4 flex-1">
                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      The Challenge
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      Engineered Solution
                    </h4>
                    <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 leading-relaxed">
                      {project.solution}
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

                {/* Project Action Links */}
                <div className="p-6 pt-0 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between mt-auto">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] dark:text-blue-400 hover:underline"
                  >
                    <span>Read Full Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      title="Inspect GitHub Source Code"
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
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SERVICES OVERVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/30 dark:bg-[#0B0C12]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
              Specialized Services
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Tailored Web & Software Development
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base">
              Every service is delivered with strict milestones, clean typed code, sub-second performance, and direct developer communication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card
                key={service.id}
                className="hover:border-blue-500/40 hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-[#0066FF] dark:text-blue-400 flex items-center justify-center">
                      <Cpu className="w-5 h-5" />
                    </div>
                    {service.popular && (
                      <Badge variant="electric" className="text-[10px]">
                        Popular
                      </Badge>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-neutral-950 dark:text-white group-hover:text-[#0066FF] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1.5 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-[11px] font-mono text-neutral-400 uppercase">Key Deliverables:</p>
                    {service.deliverables.slice(0, 3).map((deliv) => (
                      <div key={deliv} className="flex items-start gap-1.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{deliv}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-500">From {service.indicativeStartingPriceINR}</span>
                    <span className="text-neutral-400">{service.estimatedTimeline}</span>
                  </div>

                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full mt-2 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-[#0066FF] hover:text-white dark:hover:bg-[#0066FF] text-neutral-800 dark:text-neutral-200 text-xs font-semibold transition-all"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-300 dark:border-neutral-700 text-sm font-semibold hover:border-[#0066FF] transition-colors"
            >
              <span>Explore All 12 Development Services & Scope Calculator</span>
              <ArrowRight className="w-4 h-4 text-[#0066FF]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE WORKING CONCEPT DEMOS PREVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
                  Interactive Concept Demos
                </Badge>
                <span className="text-xs text-neutral-500 font-mono">
                  (Clearly labeled concept prototypes, not paid client work)
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
                Experience My Technical Capabilities Live
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-xl">
                Test working in-browser prototypes showcasing 3D WebGL configurators, reactive e-commerce carts, and SaaS telemetry dashboards.
              </p>
            </div>

            <Link
              href="/demos"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066FF] dark:text-blue-400 hover:underline"
            >
              <span>View All 8+ Interactive Demos</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Demo 1: 3D Configurator */}
            <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="purple" className="text-[10px] mb-1">
                    3D & WebGL Canvas
                  </Badge>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                    3D Spatial Product Configurator
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-500">Live 60 FPS</span>
              </div>
              <InteractiveDemoViewer demoId="3d-configurator" />
            </div>

            {/* Demo 2: E-commerce Storefront */}
            <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-[#11131B] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Badge variant="success" className="text-[10px] mb-1">
                    E-commerce & Checkout
                  </Badge>
                  <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                    Hyper-Fast E-commerce Storefront & Cart
                  </h3>
                </div>
                <span className="text-xs font-mono text-neutral-500">Dynamic Pricing</span>
              </div>
              <InteractiveDemoViewer demoId="ecommerce-cart" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 6-STEP DEVELOPMENT PROCESS OVERVIEW */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-[#0B0C12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="electric" className="font-mono text-xs uppercase tracking-wider">
              Methodical Execution
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              The 6-Step Development Process
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base">
              From our first discovery call to deployment on global edge servers, you receive total visibility, weekly milestone updates, and zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developmentProcess.map((step) => (
              <div
                key={step.stepNumber}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-[#11131B] space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#0066FF] dark:text-blue-400">
                    STEP 0{step.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-400">
                    {step.duration}
                  </span>
                </div>
                <h3 className="font-bold text-base text-neutral-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {step.shortDesc}
                </p>
                <div className="pt-2 text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{step.deliverables[0]}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066FF] dark:text-blue-400 hover:underline"
            >
              <span>Read the detailed milestone breakdown & client checkpoints</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* TESTIMONIALS & CLIENT FEEDBACK */}
      {/* ------------------------------------------------------------- */}
      <section className="py-16 lg:py-24 border-b border-neutral-200/80 dark:border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <Badge variant="success" className="font-mono text-xs uppercase tracking-wider">
              Client Feedback
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-950 dark:text-white">
              Endorsements & Collaborative Results
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-base">
              Honest feedback from founders, product managers, and engineering leaders who have partnered with Niraj.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonialsData.map((test) => (
              <Card
                key={test.id}
                className="hover:border-blue-500/40 hover:shadow-lg transition-all"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-500">
                      {'★'.repeat(test.rating)}
                    </div>
                    <Badge variant="outline" className="text-[10px] font-mono">
                      {test.projectType}
                    </Badge>
                  </div>

                  <blockquote className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic">
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800/60 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sm text-neutral-950 dark:text-white">
                        {test.author}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {test.role}, <span className="font-medium text-neutral-700 dark:text-neutral-300">{test.company}</span>
                      </p>
                    </div>
                    <span className="text-[11px] font-mono text-emerald-500 font-semibold">
                      {test.highlight}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* FINAL CONVERSION CTA BANNER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-neutral-900 to-black dark:from-[#0e1017] dark:to-[#050608] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Currently Accepting Q1/Q2 Client Projects
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Ready to Build a Website That Sets You Apart?
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need a high-converting corporate website, a custom e-commerce platform, or a robust full-stack web application, let&apos;s turn your vision into reality.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0066FF] hover:bg-[#0052db] text-white font-bold text-base transition-all shadow-xl shadow-blue-500/30 hover:scale-105 active:scale-95"
            >
              <span>Start Your Project Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-xl border border-neutral-700 hover:border-neutral-500 bg-neutral-900/80 text-white font-semibold text-sm transition-all hover:bg-neutral-800"
            >
              <span>View Transparent Pricing</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </Link>
          </div>

          <div className="pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-8 text-xs text-neutral-400 font-mono">
            <span>✓ Fixed-Milestone Contracts</span>
            <span>✓ 100% Code Ownership</span>
            <span>✓ 30-Day Post-Launch Warranty</span>
            <span>✓ Direct Slack / WhatsApp Channel</span>
          </div>
        </div>
      </section>
    </div>
  );
}
