import { SectionHeader, Card, CardContent } from "@/components/ui";

const timeline = [
  {
    phase: "Foundation",
    title: "Class 12 completed",
    organisation: "Secondary education",
    description:
      "Completed Class 12 while developing an interest in technology and programming. School, board, grades, and dates are intentionally not listed.",
    tags: ["Curiosity", "Self-learning"],
  },
  {
    phase: "Experience",
    title: "Software Engineer at HCLTech",
    organisation: "HCLTech",
    description:
      "Working at HCLTech and building foundations in programming, databases, enterprise systems, Git workflows, and professional skills.",
    tags: ["Programming", "Databases", "Enterprise systems", "Git"],
  },
  {
    phase: "Practice",
    title: "Self-directed project work",
    organisation: "Independent",
    description:
      "Built and published projects across AI, backend development, web technologies, and automation, including a from-scratch transformer, an online compiler, and a Django e-commerce application.",
    tags: ["Python", "TypeScript", "FastAPI", "Django", "Docker"],
  },
  {
    phase: "Now",
    title: "Deepening engineering foundations",
    organisation: "Current focus",
    description:
      "Strengthening backend engineering, database design, testing, and AI integration. Improving project documentation so the work can be reviewed and reproduced.",
    tags: ["Backend", "SQL", "Testing", "AI integration"],
  },
  {
    phase: "Next",
    title: "Software engineering opportunities",
    organisation: "Looking ahead",
    description:
      "Seeking opportunities to contribute to real software while continuing to learn system design, cloud fundamentals, and secure development practices.",
    tags: ["Software engineering", "System design", "Cloud", "Security"],
  },
];

export function Journey() {
  return (
    <section
      id="journey"
      className="scroll-mt-20 bg-bg py-20 md:py-28"
      aria-labelledby="journey-title"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          label="Journey & Experience"
          title="Where I've been."
          description="A short, verified timeline. Dates are omitted where they cannot be confirmed."
        />

        <ol className="relative space-y-8" aria-label="Career and learning timeline">
          <div
            className="absolute bottom-0 left-4 top-0 w-px bg-border md:left-5"
            aria-hidden="true"
          />
          {timeline.map((item, index) => (
            <li
              key={item.title}
              className="reveal relative pl-12 md:pl-16"
              style={{ transitionDelay: `${index * 70}ms` }}
            >
              <span className="absolute left-0 top-5 flex h-8 w-8 items-center justify-center border border-border bg-bg-elevated md:h-10 md:w-10">
                <span className="h-2 w-2 bg-accent" />
              </span>

              <Card>
                <CardContent className="p-5 md:p-6">
                  <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent-strong">
                      {item.phase}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-fg">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-fg-muted">
                    {item.organisation}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-border bg-bg px-2 py-1 font-mono text-xs text-fg-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-xs leading-relaxed text-fg-subtle">
          Missing details — such as exact employment dates, certifications, or school
          information — are not invented. They can be added once confirmed.
        </p>
      </div>
    </section>
  );
}
