import { LinkButton, Tag } from "@/components/ui";

const projectIndex = [
  { name: "CareerLens AI", category: "AI" },
  { name: "MiniGPT", category: "AI" },
  { name: "DevCode", category: "Tools" },
  { name: "MedAI", category: "AI" },
  { name: "NirajVersant", category: "Education" },
  { name: "Django E-Commerce", category: "Full stack" },
];

const focusAreas = ["Backend", "Databases", "Web", "AI"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16 md:pt-20"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,15,15,0.055) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.055) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at 60% 30%, black 10%, transparent 72%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="max-w-2xl">
            <span className="mb-6 inline-flex items-center gap-2 border border-border bg-bg-elevated px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-fg-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Software Engineer · HCLTech
            </span>

            <h1
              id="hero-title"
              className="mb-6 text-4xl font-bold leading-[1.04] tracking-tight text-fg md:text-5xl lg:text-6xl xl:text-7xl"
            >
              Building useful things{" "}
              <span className="text-accent-strong">with code.</span>
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
              I&apos;m Niraj Charpe, a software engineer at HCLTech, building
              practical software across backend development, databases, web
              technologies, and AI.
            </p>

            <div className="mb-10 flex flex-wrap gap-3">
              <Tag
                href="https://github.com/niraj7780"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <GitHubIcon />
                GitHub
              </Tag>
              <Tag
                href="https://www.linkedin.com/in/niraj-charpe-7a2655355/"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                <LinkedInIcon />
                LinkedIn
              </Tag>
              <Tag href="mailto:nirajcharpe48@gmail.com" variant="outline">
                <MailIcon />
                Email
              </Tag>
            </div>

            <div className="flex flex-wrap gap-3">
              <LinkButton href="#projects" size="lg">
                View projects
                <ArrowIcon />
              </LinkButton>
              <LinkButton
                href="/resume.pdf"
                variant="secondary"
                size="lg"
                download="Niraj-Charpe-Resume.pdf"
              >
                <DownloadIcon />
                Download resume
              </LinkButton>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mx-0">
            <div className="relative border border-border bg-bg-elevated">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle">
                  Selected work
                </span>
                <span className="font-mono text-[10px] text-fg-subtle">
                  Portfolio
                </span>
              </div>

              <div className="px-5 py-4">
                <div className="flex items-end justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-5xl font-bold leading-none tracking-tight text-fg">
                      06
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                      Featured projects
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-fg-subtle">
                      Focus
                    </p>
                    <p className="mt-1 text-sm font-medium text-fg-muted">
                      {focusAreas.join(" · ")}
                    </p>
                  </div>
                </div>

                <ol className="divide-y divide-border">
                  {projectIndex.map((project, index) => (
                    <li
                      key={project.name}
                      className="flex items-center gap-3 py-2.5"
                    >
                      <span className="font-mono text-[10px] text-fg-subtle">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-medium text-fg">
                        {project.name}
                      </span>
                      <span className="ml-auto font-mono text-[10px] text-fg-subtle">
                        {project.category}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-border bg-bg px-5 py-3">
                <p className="font-mono text-[10px] text-fg-subtle">
                  <span className="text-accent-strong">$</span> open source ·
                  documented · built to learn
                </p>
              </div>
            </div>

            <div
              className="absolute -bottom-3 -right-3 -z-10 h-full w-full border border-border"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-subtle transition-colors hover:text-fg md:inline-flex"
        aria-label="Scroll to about section"
      >
        Scroll
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </section>
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

function LinkedInIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="mr-1.5"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon() {
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
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mr-2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
