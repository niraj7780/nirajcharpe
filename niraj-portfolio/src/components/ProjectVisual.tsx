import type { ProjectCategory } from "@/lib/projects";

const categoryMarks: Record<ProjectCategory, string> = {
  ai: "AI",
  fullstack: "WEB",
  backend: "API",
  frontend: "UI",
  automation: "AUTO",
  tools: "DEV",
  education: "EDU",
};

export function ProjectVisual({
  id,
  category,
}: {
  id: string;
  category: ProjectCategory;
}) {
  return (
    <div
      className="relative h-44 overflow-hidden border-b border-border bg-bg-elevated"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,15,15,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,15,15,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="absolute left-4 top-4 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-fg-subtle">
        UI preview
      </div>
      <div className="absolute right-4 top-4 rounded border border-border bg-bg/85 px-2 py-0.5 font-mono text-[10px] font-medium tracking-wider text-fg-muted">
        {categoryMarks[category]}
      </div>
      <div className="absolute inset-x-5 bottom-4 top-11">{renderVisual(id)}</div>
    </div>
  );
}

function renderVisual(id: string) {
  switch (id) {
    case "careerlens":
      return (
        <div className="flex h-full items-stretch gap-3">
          <div className="flex w-[46%] flex-col rounded border border-border bg-white p-3 shadow-sm">
            <div className="mb-2 h-2 w-16 rounded-sm bg-fg/70" />
            <div className="space-y-1.5">
              <div className="h-1 w-full rounded bg-border-strong" />
              <div className="h-1 w-5/6 rounded bg-border" />
              <div className="h-1 w-4/6 rounded bg-border" />
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {["Python", "SQL", "React"].map((label) => (
                <span
                  key={label}
                  className="rounded border border-accent-border bg-accent-subtle px-1.5 py-0.5 font-mono text-[8px] text-accent-strong"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center gap-1 border-t border-border pt-2">
              <div className="h-1 flex-1 rounded bg-border" />
              <div className="h-4 w-9 rounded-sm bg-accent" />
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2">
            {["Backend developer", "Data analyst", "AI engineer"].map(
              (label, index) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded border border-border bg-bg px-2 py-1.5"
                >
                  <span className="flex h-4 w-4 items-center justify-center rounded-sm bg-accent-subtle font-mono text-[8px] text-accent-strong">
                    {index + 1}
                  </span>
                  <span className="text-[9px] font-medium text-fg-muted">
                    {label}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      );
    case "minigpt":
      return (
        <div className="flex h-full flex-col rounded border border-border bg-[#0f0f0f] p-3 shadow-sm">
          <div className="mb-2 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            <span className="ml-1 font-mono text-[8px] text-white/40">
              train.py
            </span>
          </div>
          <div className="space-y-1 font-mono text-[8px] leading-relaxed text-white/70">
            <p>
              <span className="text-accent">step</span> 1200 | loss 1.842
            </p>
            <p>
              <span className="text-accent">step</span> 1400 | loss 1.607
            </p>
            <p>
              <span className="text-accent">step</span> 1600 | loss 1.455
            </p>
          </div>
          <div className="mt-auto flex items-end gap-1">
            {[28, 40, 34, 52, 46, 61, 58, 70, 66, 78].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-sm bg-accent/70"
                style={{ height: `${height * 0.45}px` }}
              />
            ))}
          </div>
        </div>
      );
    case "devcode":
      return (
        <div className="grid h-full grid-cols-[1.4fr_0.9fr] gap-2">
          <div className="flex flex-col rounded border border-border bg-[#0f0f0f] p-3 shadow-sm">
            <div className="mb-2 flex items-center gap-1.5 border-b border-white/10 pb-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
              <span className="ml-1 font-mono text-[8px] text-white/40">
                main.py
              </span>
            </div>
            <div className="space-y-1 font-mono text-[8px] leading-relaxed">
              <p className="text-white/70">
                <span className="text-blue-300">def</span>{" "}
                <span className="text-accent">solve</span>():
              </p>
              <p className="pl-2 text-white/60">print(&quot;hello&quot;)</p>
              <p className="pl-2 text-white/40">return 0</p>
            </div>
            <div className="mt-auto flex items-center gap-1">
              <span className="rounded-sm bg-accent px-1.5 py-0.5 font-mono text-[7px] font-semibold text-fg">
                RUN
              </span>
              <span className="font-mono text-[7px] text-white/35">
                python 3.12
              </span>
            </div>
          </div>
          <div className="flex flex-col rounded border border-border bg-bg p-2.5">
            <span className="font-mono text-[7px] uppercase tracking-wider text-fg-subtle">
              Output
            </span>
            <div className="mt-2 space-y-1 font-mono text-[8px] text-fg-muted">
              <p>hello</p>
              <p className="text-accent-strong">Process exited 0</p>
            </div>
            <div className="mt-auto h-1 rounded bg-border" />
          </div>
        </div>
      );
    case "medai":
      return (
        <div className="flex h-full flex-col justify-end gap-2 rounded border border-border bg-bg p-3 shadow-sm">
          <div className="max-w-[82%] rounded border border-border bg-white px-2.5 py-2 text-[9px] leading-snug text-fg-muted">
            What are common causes of a persistent headache?
          </div>
          <div className="ml-auto max-w-[88%] rounded border border-accent-border bg-accent-subtle px-2.5 py-2 text-[9px] leading-snug text-fg">
            Common causes include stress, dehydration, and sleep changes. Seek
            urgent care for sudden severe pain or neurological symptoms.
          </div>
          <div className="flex items-center gap-1.5">
            <div className="h-6 flex-1 rounded border border-border bg-white px-2 font-mono text-[8px] leading-6 text-fg-subtle">
              Ask a question...
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded bg-accent">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-fg"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      );
    case "nirajversant":
      return (
        <div className="grid h-full grid-cols-[0.8fr_1.2fr] gap-2">
          <div className="flex flex-col items-center justify-center rounded border border-border bg-[#0f0f0f] p-2 text-center">
            <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full border-4 border-accent/80">
              <span className="text-lg font-bold leading-none text-white">
                72
              </span>
              <span className="font-mono text-[7px] text-white/50">/ 80</span>
            </div>
            <span className="mt-2 font-mono text-[7px] uppercase tracking-wider text-white/45">
              Practice score
            </span>
          </div>
          <div className="flex flex-col rounded border border-border bg-white p-3">
            <span className="font-mono text-[7px] uppercase tracking-wider text-fg-subtle">
              Part B · Sentence builds
            </span>
            <p className="mt-2 text-[9px] font-medium leading-snug text-fg">
              Arrange the words into a complete sentence.
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {["the", "report", "reviewed", "team"].map((word) => (
                <span
                  key={word}
                  className="rounded border border-border bg-bg px-1.5 py-0.5 font-mono text-[8px] text-fg-muted"
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-border pt-2">
              <span className="font-mono text-[7px] text-fg-subtle">
                14:02 remaining
              </span>
              <span className="rounded-sm bg-accent px-1.5 py-0.5 font-mono text-[7px] font-semibold text-fg">
                NEXT
              </span>
            </div>
          </div>
        </div>
      );
    case "ecom":
      return (
        <div className="flex h-full flex-col gap-2">
          <div className="grid flex-1 grid-cols-3 gap-2">
            {[0, 1, 2].map((item) => (
              <div
                key={item}
                className="flex flex-col rounded border border-border bg-white p-2"
              >
                <div className="flex-1 rounded-sm bg-border" />
                <div className="mt-1.5 h-1 w-4/5 rounded bg-fg/50" />
                <div className="mt-1 h-1 w-2/5 rounded bg-border-strong" />
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between rounded border border-border bg-bg px-2.5 py-1.5">
            <span className="font-mono text-[8px] text-fg-muted">
              3 items · cart
            </span>
            <span className="rounded-sm bg-accent px-2 py-0.5 font-mono text-[8px] font-semibold text-fg">
              Checkout
            </span>
          </div>
        </div>
      );
    default:
      return (
        <div className="flex h-full items-center justify-center rounded border border-border bg-bg">
          <div className="h-8 w-8 rounded border border-accent-border bg-accent-subtle" />
        </div>
      );
  }
}
