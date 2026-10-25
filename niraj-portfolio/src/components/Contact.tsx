import {
  SectionHeader,
  Divider,
  LinkButton,
  Card,
  CardContent,
  Tag,
} from "@/components/ui";

const contactMethods = [
  {
    label: "Email",
    value: "nirajcharpe48@gmail.com",
    href: "mailto:nirajcharpe48@gmail.com",
    external: false,
    description: "The fastest way to reach me.",
    icon: <MailIcon />,
  },
  {
    label: "GitHub",
    value: "github.com/niraj7780",
    href: "https://github.com/niraj7780",
    external: true,
    description: "Source code and public repositories.",
    icon: <GitHubIcon />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/niraj-charpe",
    href: "https://www.linkedin.com/in/niraj-charpe-7a2655355/",
    external: true,
    description: "Professional background and updates.",
    icon: <LinkedInIcon />,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-bg-elevated py-20 md:py-28"
      aria-labelledby="contact-title"
    >
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          label="Get In Touch"
          title="Let's connect."
          description="If you have a question about a project, a role, or a collaboration, email is the best place to start."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {contactMethods.map((method) => (
            <Card key={method.label}>
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center border border-accent-border bg-accent-subtle text-accent-strong">
                  {method.icon}
                </div>
                <h3 className="font-semibold text-fg">{method.label}</h3>
                <p className="mt-1 text-sm text-fg-muted">
                  {method.description}
                </p>
                <Tag
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                  variant="outline"
                  className="mt-4 w-full justify-center text-sm"
                >
                  {method.value}
                  {method.external && <ExternalIcon />}
                </Tag>
              </CardContent>
            </Card>
          ))}
        </div>

        <Divider className="mt-14" />

        <div className="mt-10 flex flex-col items-start justify-between gap-6 border border-border bg-bg p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h3 className="text-xl font-semibold text-fg">
              Have something worth building?
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-fg-muted">
              I am open to software engineering and IT opportunities, and to
              conversations about practical backend, database, or AI work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <LinkButton href="mailto:nirajcharpe48@gmail.com" size="md">
              <MailIcon />
              Email me
            </LinkButton>
            <LinkButton
              href="/resume.pdf"
              variant="secondary"
              size="md"
              download="Niraj-Charpe-Resume.pdf"
            >
              <DownloadIcon />
              Resume
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="ml-1"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
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
