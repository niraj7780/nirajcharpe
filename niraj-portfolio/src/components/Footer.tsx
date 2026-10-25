import Link from "next/link";
import { CurrentYear } from "@/components/CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold tracking-tight text-fg">NC.</span>
            <span className="text-sm font-medium text-fg-muted">
              Niraj Charpe
            </span>
          </div>

          <nav
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            aria-label="Footer navigation"
          >
            <Link
              href="https://github.com/niraj7780"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/niraj-charpe-7a2655355/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              LinkedIn
            </Link>
            <a
              href="mailto:nirajcharpe48@gmail.com"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Email
            </a>
            <Link
              href="/demo"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Demo
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Privacy
            </Link>
            <a
              href="#top"
              className="text-sm text-fg-muted transition-colors hover:text-fg"
            >
              Back to top
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> Niraj Charpe. Built with Next.js, TypeScript, and
            Tailwind CSS.
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">
            I turn &ldquo;what if?&rdquo; into &ldquo;what&rsquo;s next?&rdquo; fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
