import { ArrowUpRight, Lock, Mail } from "lucide-react";
import { profile, type Project } from "@/data/resume";
import { GitHubIcon } from "./icons";
import { RichText } from "./RichText";

const starLabels = [
  { key: "s", letter: "S", label: "Situation" },
  { key: "t", letter: "T", label: "Task" },
  { key: "a", letter: "A", label: "Action" },
  { key: "r", letter: "R", label: "Result" },
] as const;

const badges = {
  internal: {
    text: "Internal @ Zebra",
    className:
      "border-[color-mix(in_oklab,var(--color-bloom)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-bloom)_18%,var(--surface))] text-[var(--accent-warm)]",
  },
  "open-source": {
    text: "Open source",
    className:
      "border-[color-mix(in_oklab,var(--color-sea)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-tide)_22%,var(--surface))] text-[var(--accent)]",
  },
  "on-request": {
    text: "Personal project",
    className:
      "border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--color-petal)_20%,var(--surface))] text-[var(--text-muted)]",
  },
};

const linkClass =
  "btn-organic focus-organic inline-flex min-h-11 items-center gap-2 px-4 text-sm font-semibold";

export function ProjectCard({ project }: { project: Project }) {
  const badge = badges[project.badge];

  return (
    <article
      className="group surface-pebble flex h-full flex-col p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 sm:p-8"
      style={{ borderRadius: "1.75rem 2.5rem 1.5rem 2.25rem" }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className={`chip-organic inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold ${badge.className}`}>
          {badge.text}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-medium tracking-tight text-[var(--text)] sm:text-2xl">
        {project.title}
      </h3>

      <dl className="mt-6 grid gap-4">
        {starLabels.map(({ key, letter, label }) => (
          <div key={key} className="flex gap-3">
            <dt className="shrink-0">
              <span
                className={`grid size-7 place-items-center text-xs font-bold ${
                  key === "r"
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[color-mix(in_oklab,var(--color-tide)_25%,var(--surface))] text-[var(--text-muted)]"
                }`}
                style={{ borderRadius: "40% 60% 50% 50%" }}
                aria-hidden="true"
              >
                {letter}
              </span>
              <span className="sr-only">{label}</span>
            </dt>
            <dd className="text-[0.95rem] leading-relaxed text-[var(--text-muted)]">
              <RichText text={project.star[key]} />
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.tech.map((t) => (
          <li
            key={t}
            className="chip-organic bg-[color-mix(in_oklab,var(--color-tide)_18%,var(--surface))] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} bg-[var(--color-ink)] text-white hover:bg-[var(--accent)] dark:bg-[var(--text)] dark:text-[var(--color-deep)] dark:hover:bg-[var(--accent)]`}
          >
            <GitHubIcon className="size-4" />
            View code
            <span className="sr-only"> for {project.title} on GitHub</span>
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`${linkClass} border border-[var(--border-soft)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]`}
          >
            Live demo
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
        {project.badge === "internal" && (
          <p className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Lock className="size-4 text-[var(--accent-warm)]" aria-hidden="true" />
            Proprietary code
          </p>
        )}
        {project.badge === "on-request" && (
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(`Code request: ${project.title}`)}`}
            className={`${linkClass} border border-[var(--border-soft)] text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]`}
          >
            <Mail className="size-4" aria-hidden="true" />
            Code available on request
          </a>
        )}
      </div>
    </article>
  );
}
