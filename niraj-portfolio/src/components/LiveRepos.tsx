"use client";

import { useEffect, useMemo, useState } from "react";
import { SectionHeader, Card, CardContent } from "@/components/ui";
import { featuredRepoNames } from "@/lib/projects";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  fork: boolean;
  archived: boolean;
  size: number;
  pushed_at: string;
  homepage: string | null;
  topics?: string[];
}

type RepoCategory =
  | "ai"
  | "web"
  | "backend"
  | "database"
  | "automation"
  | "tools"
  | "other";

const repoCategories: { id: "all" | RepoCategory; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Databases" },
  { id: "automation", label: "Automation" },
  { id: "tools", label: "Tools" },
  { id: "other", label: "Other" },
];

const ignoredRepos = new Set([
  "niraj7780",
  "nirajcharpe",
  "vs-code",
  "git-repo",
  "new-assin",
  "newniraj01",
  "newrepoclone",
  "newdemo05",
  "npm-for-game-",
]);

const featuredSet = new Set(featuredRepoNames);

const languageColors: Record<string, string> = {
  Python: "#3572A5",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  C: "#555555",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  Dart: "#00B4AB",
  Kotlin: "#A97BFF",
};

function classifyRepo(repo: GitHubRepo): RepoCategory {
  const text = [
    repo.name,
    repo.description ?? "",
    repo.language ?? "",
    ...(repo.topics ?? []),
  ]
    .join(" ")
    .toLowerCase();

  if (/(\bai\b|machine learning|\bml\b|gpt|gemini|medical|chat|model|spam)/.test(text)) {
    return "ai";
  }
  if (/(sql|database|inventory|bank|crud)/.test(text)) {
    return "database";
  }
  if (/(alert|weather|automation|scrap|download|convert|reel)/.test(text)) {
    return "automation";
  }
  if (/(api|backend|server|flask|django|fastapi|express)/.test(text)) {
    return "backend";
  }
  if (/(web|html|css|react|next|portfolio|dashboard|lms)/.test(text)) {
    return "web";
  }
  if (/(tool|compiler|qr|game|npm|file|cyber|utility)/.test(text)) {
    return "tools";
  }
  return "other";
}

function relevanceScore(repo: GitHubRepo) {
  let score = 0;
  if (repo.description) score += 3;
  if (repo.homepage) score += 2;
  if (repo.language) score += 1;
  if ((repo.topics?.length ?? 0) > 0) score += 2;
  if (repo.stargazers_count > 0) score += 2;
  if (!ignoredRepos.has(repo.name.toLowerCase())) score += 1;
  const monthsOld =
    (Date.now() - Date.parse(repo.pushed_at)) / (1000 * 60 * 60 * 24 * 30);
  if (monthsOld < 12) score += 1;
  return score;
}

function safeRepoUrl(url: string) {
  return url.startsWith("https://github.com/niraj7780/") ? url : null;
}

export function LiveRepos() {
  const [repos, setRepos] = useState<GitHubRepo[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<"all" | RepoCategory>("all");
  const [includeAll, setIncludeAll] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/niraj7780/repos?per_page=100&sort=updated", {
      signal: controller.signal,
      headers: { Accept: "application/vnd.github+json" },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`GitHub API responded with ${response.status}`);
        }
        return response.json() as Promise<GitHubRepo[]>;
      })
      .then((data) => {
        const filtered = data
          .filter((repo) => !featuredSet.has(repo.name.toLowerCase()))
          .filter((repo) => {
            if (includeAll) return true;
            return (
              !repo.fork &&
              !repo.archived &&
              repo.size > 0 &&
              !ignoredRepos.has(repo.name.toLowerCase())
            );
          })
          .sort((a, b) => {
            const relevance = relevanceScore(b) - relevanceScore(a);
            if (relevance !== 0) return relevance;
            return Date.parse(b.pushed_at) - Date.parse(a.pushed_at);
          });
        setRepos(filtered);
      })
      .catch((fetchError: unknown) => {
        if (controller.signal.aborted) return;
        const message =
          fetchError instanceof Error
            ? fetchError.message
            : "The GitHub API request failed.";
        setError(message);
      });

    return () => controller.abort();
  }, [includeAll, reloadKey]);

  const categorized = useMemo(() => {
    if (!repos) return [];
    return repos.map((repo) => ({ repo, category: classifyRepo(repo) }));
  }, [repos]);

  const availableCategories = useMemo(() => {
    const available = new Set(categorized.map((item) => item.category));
    return repoCategories.filter(
      (item) => item.id === "all" || available.has(item.id)
    );
  }, [categorized]);

  const activeCategory: "all" | RepoCategory = availableCategories.some(
    (item) => item.id === category
  )
    ? category
    : "all";

  const visible = useMemo(() => {
    const filtered =
      activeCategory === "all"
        ? categorized
        : categorized.filter((item) => item.category === activeCategory);
    return filtered.map((item) => item.repo);
  }, [categorized, activeCategory]);

  return (
    <section
      id="github"
      className="scroll-mt-20 bg-bg-elevated py-20 md:py-28"
      aria-labelledby="github-title"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          label="Live Repository Data"
          title="More on GitHub"
          description="Fetched from the public GitHub API when the page loads. Featured projects above stay visible even if this feed is unavailable."
        />

        {error && (
          <Card className="border-accent-border">
            <CardContent className="p-6 text-center md:p-8">
              <p className="mb-2 font-medium text-fg">
                Live repository data is unavailable right now.
              </p>
              <p className="mx-auto mb-5 max-w-xl text-sm text-fg-muted">
                The GitHub API may be rate-limiting this network, or the request
                may have failed. You can retry or browse the repositories
                directly.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setError(null);
                    setRepos(null);
                    setReloadKey((value) => value + 1);
                  }}
                  className="rounded border border-border bg-bg px-4 py-2 text-sm font-medium text-fg-muted transition-colors hover:border-border-strong hover:text-fg"
                >
                  Try again
                </button>
                <a
                  href="https://github.com/niraj7780?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-accent-border bg-accent px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-accent-hover"
                >
                  Browse on GitHub
                  <ExternalIcon />
                </a>
              </div>
            </CardContent>
          </Card>
        )}

        {!error && repos === null && (
          <div
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            role="status"
            aria-label="Loading repositories"
          >
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-40 animate-pulse rounded border border-border bg-bg"
              />
            ))}
          </div>
        )}

        {!error && repos !== null && (
          <>
            <div className="mb-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter repositories by category">
              {availableCategories.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCategory(item.id)}
                  aria-pressed={activeCategory === item.id}
                  className={`rounded border px-3 py-1.5 text-xs font-mono transition-colors ${
                    activeCategory === item.id
                      ? "border-accent-border bg-accent text-fg"
                      : "border-border bg-bg text-fg-muted hover:border-border-strong hover:text-fg"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setRepos(null);
                  setIncludeAll((value) => !value);
                }}
                aria-pressed={includeAll}
                className={`ml-auto rounded border px-3 py-1.5 text-xs font-mono transition-colors ${
                  includeAll
                    ? "border-blue-border bg-blue-subtle text-blue"
                    : "border-border bg-bg text-fg-muted hover:border-border-strong hover:text-fg"
                }`}
              >
                {includeAll ? "Showing all" : "Show forks & empty"}
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((repo) => {
                const url = safeRepoUrl(repo.html_url);
                return (
                  <a
                    key={repo.id}
                    href={url ?? "https://github.com/niraj7780?tab=repositories"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded border border-border bg-bg p-5 transition-colors hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    <div className="mb-2 flex items-center justify-between gap-3">
                      <h3 className="truncate font-mono text-sm font-semibold text-fg group-hover:text-accent-strong">
                        {repo.name}
                      </h3>
                      <ExternalIcon />
                    </div>
                    <p className="mb-4 line-clamp-2 min-h-[2.5rem] text-sm leading-relaxed text-fg-muted">
                      {repo.description ?? "No description provided."}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-fg-subtle">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{
                              backgroundColor:
                                languageColors[repo.language] ?? "#a3a3a3",
                            }}
                            aria-hidden="true"
                          />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span>★ {repo.stargazers_count}</span>
                      )}
                      {repo.fork && <span>Fork</span>}
                      {repo.archived && <span>Archived</span>}
                      <span className="ml-auto">
                        {new Date(repo.pushed_at).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>

            {visible.length === 0 && (
              <p className="py-12 text-center text-fg-muted">
                No public repositories match this filter.
              </p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="font-mono text-xs text-fg-subtle" role="status">
                {visible.length} public{" "}
                {visible.length === 1 ? "repository" : "repositories"} ·{" "}
                {includeAll
                  ? "forks and empty repos included"
                  : "forks, archived, and empty repos excluded"}
              </p>
              <a
                href="https://github.com/niraj7780?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-strong hover:text-fg"
              >
                View all on GitHub
                <ExternalIcon />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
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
      className="flex-shrink-0"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
