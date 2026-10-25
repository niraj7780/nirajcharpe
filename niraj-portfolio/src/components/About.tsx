import { SectionHeader, Divider, Card } from "@/components/ui";

const focusAreas = [
  {
    title: "Backend engineering",
    description: "APIs, request handling, validation, and server-side logic.",
  },
  {
    title: "Databases",
    description: "Schema design, CRUD operations, joins, and SQL fundamentals.",
  },
  {
    title: "AI integration",
    description: "Practical use of model APIs, prompts, and structured output.",
  },
  {
    title: "Full-stack development",
    description: "Connecting interfaces, APIs, and data into working products.",
  },
  {
    title: "Enterprise foundations",
    description: "Training in enterprise systems, cloud concepts, and Git workflows.",
  },
  {
    title: "Secure development",
    description: "Input handling, sandboxing, and clear limits on untrusted code.",
  },
];

const principles = [
  "Learn by building something that can be tested.",
  "Document what works, what does not, and why.",
  "Keep the scope honest; do not overstate the result.",
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-bg py-20 md:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="About Me"
          title="A foundation built by doing."
          description="I am direct about where I am. My background is professional experience at HCLTech, self-directed practice, and projects that can be inspected."
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-fg-muted">
              I completed Class 12 and joined HCLTech as a software engineer. It
              gave me a structured environment to build programming, database,
              and enterprise-IT foundations while I continued learning on my
              own.
            </p>
            <p className="text-lg leading-relaxed text-fg-muted">
              I learn best by building. I have implemented a transformer language
              model from scratch, an online compiler with Docker-sandboxed
              execution, an AI-assisted resume analyzer, a Django e-commerce
              application, and several smaller utilities. Each project started
              with something I did not fully understand and ended with a working
              implementation I could inspect.
            </p>
            <p className="text-lg leading-relaxed text-fg-muted">
              I am most interested in backend engineering, database systems, AI
              applications, and enterprise technologies. I am at the beginning of
              my career, so I keep the scope honest: document the decisions,
              state the limitations, and improve the next version.
            </p>

            <div className="border-l-2 border-accent pl-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
                How I work
              </p>
              <ul className="mt-3 space-y-2">
                {principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-2 text-sm text-fg-muted"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-accent" />
                    {principle}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
              Current focus
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {focusAreas.map((area) => (
                <Card key={area.title} className="p-4">
                  <h4 className="text-sm font-semibold text-fg">{area.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-fg-muted">
                    {area.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Divider className="mt-16" />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-border bg-bg-elevated p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
              Education
            </p>
            <p className="mt-3 text-sm font-semibold text-fg">
              Class 12 completed
            </p>
            <p className="mt-1 text-sm leading-relaxed text-fg-muted">
              School, board, grades, and dates are intentionally not listed.
            </p>
          </div>
          <div className="border border-border bg-bg-elevated p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
              Experience
            </p>
            <p className="mt-3 text-sm font-semibold text-fg">
              Software Engineer at HCLTech
            </p>
            <p className="mt-1 text-sm leading-relaxed text-fg-muted">
              Working across programming, databases, and enterprise fundamentals.
            </p>
          </div>
          <div className="border border-border bg-bg-elevated p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-fg-subtle">
              Based in
            </p>
            <p className="mt-3 text-sm font-semibold text-fg">Noida, India</p>
            <p className="mt-1 text-sm leading-relaxed text-fg-muted">
              Open to software engineering and IT opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
