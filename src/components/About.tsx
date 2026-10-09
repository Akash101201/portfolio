import { about, ai, metrics } from "@/data/resume";
import { FluidBackdrop } from "./FluidBackdrop";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-flow relative overflow-hidden">
      <FluidBackdrop variant="section" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading
            id="about-heading"
            eyebrow="About"
            title="Craft you can feel in every interaction"
          />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal className="space-y-5 text-lg leading-relaxed text-[var(--text-muted)]">
            {about.bio.map((p) => (
              <p key={p.slice(0, 24)} className="text-pretty">
                {p}
              </p>
            ))}
            <div className="pt-2">
              <h3 className="font-display text-lg font-medium text-[var(--text)]">How I work</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {about.softSkills.map((s) => (
                  <li
                    key={s}
                    className="chip-organic border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_75%,var(--color-tide))] px-3.5 py-1.5 text-sm font-medium text-[var(--text)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-4">
              {metrics.map((m, i) => (
                <li
                  key={m.label}
                  className="surface-pebble p-5 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                  style={{
                    borderRadius:
                      i % 2 === 0
                        ? "1.75rem 2.5rem 1.5rem 2.25rem"
                        : "2.25rem 1.5rem 2.5rem 1.75rem",
                  }}
                >
                  <p className="font-display text-3xl font-medium text-[var(--accent)] sm:text-4xl">{m.value}</p>
                  <p className="mt-2 text-sm leading-snug text-[var(--text-muted)]">{m.label}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative mt-16 overflow-hidden surface-petal px-6 py-10 sm:px-10 lg:px-12">
            <div
              aria-hidden="true"
              className="liquid-gradient absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(120deg, var(--wash-a), var(--wash-b), var(--wash-d), var(--wash-a))",
              }}
            />
            <div className="relative">
              <p className="text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">AI at work</p>
              <h3 className="mt-3 max-w-2xl font-display text-2xl font-medium text-[var(--text)] sm:text-3xl">
                Shipping LLM tools that save real engineering hours
              </h3>
              <p className="mt-3 max-w-2xl text-pretty text-[var(--text-muted)]">{ai.intro}</p>

              <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {ai.highlights.map((h) => (
                  <li key={h.label} className="min-w-0">
                    <p className="font-display text-3xl font-medium text-[var(--accent-warm)]">{h.value}</p>
                    <p className="mt-1 font-medium text-[var(--text)]">{h.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">{h.context}</p>
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-2" aria-label="AI stack">
                {ai.stack.map((s) => (
                  <li
                    key={s}
                    className="chip-organic border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_80%,transparent)] px-3 py-1 text-xs font-semibold text-[var(--accent)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
