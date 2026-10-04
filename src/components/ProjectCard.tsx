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
    className: "border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-300",
  },
  "open-source": {
    text: "Open source",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300",
  },
  "on-request": {
    text: "Personal project",
    className: "border-sky-200 bg-sky-50 text-sky-800 dark:border-sky-900 dark:bg-sky-950/60 dark:text-sky-300",
  },
};

const linkClass =
  "inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500";

export function ProjectCard({ project }: { project: Project }) {
  const badge = badges[project.badge];

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-indigo-700">
      <div className="flex flex-wrap items-center gap-2">
        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badge.className}`}>
          {badge.text}
        </span>
        {project.featured && (
          <span className="inline-flex items-center rounded-full bg-indigo-600 px-2.5 py-0.5 text-xs font-semibold text-white dark:bg-indigo-500">
            Featured
          </span>
        )}
      </div>

      <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl dark:text-zinc-50">
        {project.title}
      </h3>

      <dl className={`mt-6 grid gap-4 ${project.featured ? "md:grid-cols-2 md:gap-x-8" : ""}`}>
        {starLabels.map(({ key, letter, label }) => (
          <div key={key} className="flex gap-3">
            <dt className="shrink-0">
              <span
                className={`grid size-7 place-items-center rounded-md text-xs font-bold ${
                  key === "r"
                    ? "bg-indigo-600 text-white dark:bg-indigo-500"
                    : "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                }`}
                aria-hidden="true"
              >
                {letter}
              </span>
              <span className="sr-only">{label}</span>
            </dt>
            <dd className="text-[0.95rem] leading-relaxed text-zinc-600 dark:text-zinc-400">
              <RichText text={project.star[key]} />
            </dd>
          </div>
        ))}
      </dl>

      <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech stack">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300"
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
            className={`${linkClass} bg-zinc-900 text-white hover:bg-indigo-600 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-indigo-400`}
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
            className={`${linkClass} border border-zinc-300 text-zinc-900 hover:border-indigo-400 hover:text-indigo-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:text-indigo-300`}
          >
            Live demo
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
        )}
        {project.badge === "internal" && (
          <p className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
            <Lock className="size-4" aria-hidden="true" />
            Proprietary code. Happy to walk through it in an interview.
          </p>
        )}
        {project.badge === "on-request" && (
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(`Code request: ${project.title}`)}`}
            className={`${linkClass} border border-zinc-300 text-zinc-900 hover:border-indigo-400 hover:text-indigo-700 dark:border-zinc-700 dark:text-zinc-100 dark:hover:text-indigo-300`}
          >
            <Mail className="size-4" aria-hidden="true" />
            Code available on request
          </a>
        )}
      </div>
    </article>
  );
}
