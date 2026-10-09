import { Award, Briefcase, GraduationCap } from "lucide-react";
import { certifications, education, experience } from "@/data/resume";
import { FluidBackdrop } from "./FluidBackdrop";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="section-flow relative mx-auto max-w-6xl overflow-hidden px-4 py-20 sm:px-6 lg:py-28"
    >
      <FluidBackdrop variant="section" />

      <Reveal>
        <SectionHeading id="experience-heading" eyebrow="Experience" title="Where I've made an impact" />
      </Reveal>

      <div className="relative grid gap-12 lg:grid-cols-[1.55fr_1fr]">
        <ol className="relative space-y-12 pl-2 sm:pl-4">
          <div
            aria-hidden="true"
            className="absolute bottom-4 left-[11px] top-3 w-px sm:left-[19px]"
            style={{
              background:
                "linear-gradient(180deg, var(--color-tide), var(--color-bloom), var(--color-sea))",
              opacity: 0.55,
            }}
          />
          {experience.map((job) => (
            <li key={job.role} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 size-5 sm:left-2 ${
                  job.current
                    ? "bg-[var(--accent)] tide-pulse"
                    : "bg-[color-mix(in_oklab,var(--color-tide)_55%,var(--surface))]"
                }`}
                style={{ borderRadius: "45% 55% 50% 50%" }}
              />
              <Reveal>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-display text-xl font-medium tracking-tight text-[var(--text)]">
                    {job.role}
                    <span className="text-[var(--accent)]"> · {job.company}</span>
                  </h3>
                  <p className="shrink-0 text-sm font-medium text-[var(--text-muted)]">
                    {job.period}
                    {job.current && (
                      <span className="chip-organic ml-2 bg-[color-mix(in_oklab,var(--color-tide)_25%,var(--surface))] px-2 py-0.5 text-xs font-semibold text-[var(--accent)]">
                        Current
                      </span>
                    )}
                  </p>
                </div>
                <ul className="mt-4 space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 32)} className="flex gap-3 leading-relaxed text-[var(--text-muted)]">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 bg-[var(--accent-warm)]"
                        style={{ borderRadius: "40%" }}
                      />
                      <span>
                        <RichText text={b} />
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="space-y-5">
          <Reveal>
            <div className="surface-pebble p-6" style={{ borderRadius: "2rem 1.5rem 2.25rem 1.75rem" }}>
              <h3 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--text)]">
                <GraduationCap className="size-5 text-[var(--accent)]" aria-hidden="true" />
                Education
              </h3>
              {education.map((e) => (
                <div key={e.degree} className="mt-4">
                  <p className="font-medium text-[var(--text)]">{e.degree}</p>
                  <p className="text-sm text-[var(--text-muted)]">
                    {e.school} · {e.period}
                  </p>
                  <p className="mt-2 text-sm text-[var(--text-muted)]">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="surface-pebble p-6" style={{ borderRadius: "1.5rem 2.25rem 1.75rem 2rem" }}>
              <h3 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--text)]">
                <Award className="size-5 text-[var(--accent)]" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-muted)]">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div
              className="border border-[var(--border-soft)] p-6"
              style={{
                borderRadius: "2.25rem 1.5rem 2.5rem 1.75rem",
                background:
                  "linear-gradient(145deg, color-mix(in oklab, var(--color-tide) 28%, var(--surface)), color-mix(in oklab, var(--color-bloom) 18%, var(--surface)))",
              }}
            >
              <h3 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--text)]">
                <Briefcase className="size-5 text-[var(--accent-warm)]" aria-hidden="true" />
                Career highlight
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
                Promoted from intern to full-time Software Engineer within 6 months on the strength of measurable
                full-stack delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
