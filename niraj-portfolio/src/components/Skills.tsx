import { SectionHeader, Divider, Badge } from "@/components/ui";

const skillGroups = [
  {
    title: "Used in projects",
    description:
      "Technologies that appear in the source of the projects shown on this site.",
    variant: "accent" as const,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML / CSS",
      "FastAPI",
      "Flask",
      "Django",
      "Node.js / Express",
      "SQLite / PostgreSQL basics",
      "Google Gemini API",
      "PyTorch",
      "Docker",
      "Git / GitHub",
      "Vercel",
      "Monaco Editor",
    ],
  },
  {
    title: "Practising or learning",
    description:
      "Areas I am actively developing through professional work, exercises, or current projects.",
    variant: "blue" as const,
    skills: [
      "Java",
      "C++",
      "SQL Server / MySQL fundamentals",
      "Data structures and algorithms",
      "System design",
      "Testing (Jest, PyTest)",
      "CI/CD pipelines",
      "SAP ABAP fundamentals",
      "Cloud fundamentals",
    ],
  },
  {
    title: "Familiar with fundamentals",
    description:
      "Concepts I can read and work with, without claiming project-level depth.",
    variant: "default" as const,
    skills: [
      "C",
      "Linux / shell basics",
      "REST API design",
      "Web security basics",
      "Agile / Scrum",
      "Technical writing",
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-bg-elevated py-20 md:py-28"
      aria-labelledby="skills-title"
    >
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          label="Technical Skills"
          title="What I actually work with."
          description="Grouped by depth of experience, not by invented proficiency percentages. The first group is backed by project source code."
        />

        <div className="space-y-10">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <div className="mb-4 flex flex-col gap-1 border-b border-border pb-3 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <h3 className="text-lg font-semibold text-fg">{group.title}</h3>
                <p className="max-w-md text-sm text-fg-muted md:text-right">
                  {group.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant={group.variant}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Divider className="mt-14" />

        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-accent" />
            Project source
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-blue" />
            Active learning
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 bg-border-strong" />
            Fundamentals
          </span>
          <span className="ml-auto normal-case tracking-normal">
            No percentage bars. No invented levels.
          </span>
        </div>
      </div>
    </section>
  );
}
