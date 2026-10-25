"use client";

import { useState } from "react";
import {
  SectionHeader,
  Divider,
  Card,
  CardContent,
  CardFooter,
  Badge,
  Tag,
} from "@/components/ui";
import { ProjectVisual } from "@/components/ProjectVisual";
import {
  featuredProjects,
  secondaryProjects,
  categories,
  type Project,
  type ProjectCategory,
} from "@/lib/projects";

const categoryLabels: Record<ProjectCategory, string> = {
  ai: "AI / ML",
  fullstack: "Full Stack",
  backend: "Backend",
  frontend: "Frontend",
  automation: "Automation",
  tools: "Tools",
  education: "Education",
};

const categoryColors: Record<ProjectCategory, "accent" | "blue" | "default"> = {
  ai: "accent",
  fullstack: "blue",
  backend: "blue",
  frontend: "default",
  automation: "blue",
  tools: "default",
  education: "accent",
};

const statusLabels: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In progress",
  maintained: "Maintained",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = featuredProjects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-bg py-20 md:py-28"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Featured Work"
          title="Projects I've built"
          description="Six verified projects with source links. Live demos are shown only where the deployment currently responds."
        />

        <div
          className="mb-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter featured projects by category"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              aria-pressed={activeCategory === category.id}
              className={`rounded border px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "border-accent-border bg-accent text-fg"
                  : "border-border bg-bg-elevated text-fg-muted hover:border-border-strong hover:text-fg"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className="mb-6 text-xs font-mono uppercase tracking-wider text-fg-subtle" role="status">
          Showing {filteredProjects.length} of {featuredProjects.length} projects
        </p>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-12 text-center text-fg-muted">
            No featured projects in this category.
          </div>
        )}

        <Divider />

        <div className="mt-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-fg">Additional Projects</h3>
              <p className="mt-1 text-sm text-fg-muted">
                Smaller utilities and business-logic exercises, kept separate from
                the main case studies.
              </p>
            </div>
            <Tag
              href="https://github.com/niraj7780?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
            >
              <GitHubIcon />
              View all repositories
            </Tag>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {secondaryProjects.map((project, index) => (
              <SecondaryProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card
      className="reveal flex h-full flex-col overflow-hidden"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <ProjectVisual id={project.id} category={project.category} />

      <CardContent className="flex flex-1 flex-col p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant={categoryColors[project.category]}>
            {categoryLabels[project.category]}
          </Badge>
          <span className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
            {statusLabels[project.status]}
          </span>
        </div>

        <h3 className="mb-1 text-xl font-bold text-fg">{project.name}</h3>
        <p className="mb-3 text-sm font-medium text-accent-strong">
          {project.tagline}
        </p>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-fg-muted"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 6 && (
            <span className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-fg-subtle">
              +{project.techStack.length - 6} more
            </span>
          )}
        </div>

        <ul className="space-y-2 text-sm text-fg-muted">
          {project.features.slice(0, 3).map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-fg-subtle">
          <span className="font-mono uppercase tracking-wider">Learned:</span>{" "}
          {project.learned}
        </p>

        {project.statusNote && (
          <p className="mt-2 text-xs leading-relaxed text-fg-subtle">
            {project.statusNote}
          </p>
        )}
      </CardContent>

      <CardFooter className="flex flex-wrap gap-3">
        <Tag
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          className="flex-1 justify-center"
          data-monitor-project={project.name}
        >
          <GitHubIcon />
          Source
        </Tag>
        {project.liveUrl ? (
          <Tag
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="flex-1 justify-center"
            data-monitor-project={project.name}
          >
            <ExternalIcon />
            Live demo
          </Tag>
        ) : (
          <span className="flex flex-1 items-center justify-center rounded border border-dashed border-border px-2.5 py-1 font-mono text-xs text-fg-subtle">
            Demo unavailable
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

function SecondaryProjectCard({
  project,
  index,
}: {
  project: (typeof secondaryProjects)[0];
  index: number;
}) {
  return (
    <Card
      className="reveal hover:border-border-strong"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CardContent className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h4 className="font-semibold text-fg">{project.name}</h4>
          <Badge variant={categoryColors[project.category]} className="text-xs">
            {categoryLabels[project.category]}
          </Badge>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-fg-muted">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border bg-bg px-2 py-0.5 font-mono text-xs text-fg-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="text-xs"
            data-monitor-project={project.name}
          >
            <GitHubIcon />
            Source
          </Tag>
          {project.liveUrl && (
            <Tag
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="text-xs"
              data-monitor-project={project.name}
            >
              <ExternalIcon />
              Live demo
            </Tag>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="mr-1.5"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mr-1.5"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 flex-shrink-0 text-accent"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
