import { Lock } from "lucide-react";
import type { Project } from "@/data/resume";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";

const steps = [
  { key: "s", label: "The problem", tone: "text-[var(--text)]" },
  { key: "t", label: "The brief", tone: "text-[var(--text)]" },
  { key: "a", label: "What I built", tone: "text-[var(--text)]" },
  { key: "r", label: "The outcome", tone: "text-[var(--accent-warm)]" },
] as const;

export function FeaturedCaseStudy({ project }: { project: Project }) {
  return (
    <Reveal>
      <article
        className="surface-petal relative overflow-hidden px-6 py-10 sm:px-10 lg:px-12 lg:py-14"
        style={{ borderRadius: "2.75rem 2rem 3rem 2.25rem" }}
      >
        <div
          aria-hidden="true"
          className="liquid-gradient absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(125deg, var(--wash-a), var(--wash-b), var(--wash-d), var(--wash-a))",
          }}
        />
        <div
          aria-hidden="true"
          className="organic-blob pointer-events-none absolute -right-[10%] -top-[20%] size-[18rem] bg-[radial-gradient(circle,var(--wash-b),transparent_70%)] blur-2xl"
        />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip-organic border border-[color-mix(in_oklab,var(--color-bloom)_45%,transparent)] bg-[color-mix(in_oklab,var(--color-bloom)_18%,var(--surface))] px-2.5 py-0.5 text-xs font-semibold text-[var(--accent-warm)]">
              Internal @ Zebra
            </span>
            <span className="chip-organic bg-[var(--accent)] px-2.5 py-0.5 text-xs font-semibold text-white">
              Case study
            </span>
          </div>

          <h3 className="mt-5 max-w-3xl font-display text-3xl font-medium tracking-tight text-[var(--text)] sm:text-4xl lg:text-[2.75rem]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-lg text-[var(--text-muted)]">
            Built for Zebra front-end teams: a Figma design in, production React and Angular out, with a measured cut in build time.
          </p>

          <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map(({ key, label, tone }, i) => (
              <li key={key} className="relative min-w-0">
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)] uppercase">
                  {String(i + 1).padStart(2, "0")} · {label}
                </p>
                <p className={`mt-3 text-[0.95rem] leading-relaxed ${tone}`}>
                  <RichText text={project.star[key]} />
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-[var(--border-soft)] pt-6">
            <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
              {project.tech.map((t) => (
                <li
                  key={t}
                  className="chip-organic bg-[color-mix(in_oklab,var(--surface)_75%,transparent)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] sm:ml-auto">
              <Lock className="size-4 text-[var(--accent-warm)]" aria-hidden="true" />
              Proprietary code
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
