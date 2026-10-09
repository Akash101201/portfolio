import { Bot, Braces, Cloud, Database, Monitor, Server, TestTube, type LucideIcon } from "lucide-react";
import { skillGroups, spokenLanguages } from "@/data/resume";
import { FluidBackdrop } from "./FluidBackdrop";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  braces: Braces,
  monitor: Monitor,
  server: Server,
  database: Database,
  cloud: Cloud,
  test: TestTube,
  bot: Bot,
};

const pebbleRadii = [
  "1.75rem 2.5rem 1.5rem 2.25rem",
  "2.25rem 1.5rem 2.5rem 1.75rem",
  "1.5rem 2.25rem 1.75rem 2rem",
  "2rem 1.75rem 2.25rem 1.5rem",
  "1.85rem 2.35rem 1.6rem 2.1rem",
  "2.4rem 1.6rem 2.2rem 1.8rem",
  "1.6rem 2.1rem 1.9rem 2.3rem",
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="section-flow relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[color-mix(in_oklab,var(--color-mist)_55%,transparent)] dark:bg-[color-mix(in_oklab,var(--color-pool)_70%,transparent)]"
      />
      <FluidBackdrop variant="section" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading
            id="skills-heading"
            eyebrow="Toolkit"
            title="Skills shaped like river stones"
            description="Languages, frameworks, and practices I reach for when building full-stack and AI-powered products."
          />
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <li key={group.title}>
                <Reveal delay={(i % 3) * 70} className="h-full">
                  <div
                    className="surface-pebble h-full p-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
                    style={{ borderRadius: pebbleRadii[i % pebbleRadii.length] }}
                  >
                    <h3 className="flex items-center gap-2 font-display text-lg font-medium text-[var(--text)]">
                      <Icon className="size-5 text-[var(--accent)]" aria-hidden="true" />
                      {group.title}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="chip-organic border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_80%,transparent)] px-2.5 py-1 text-sm font-medium text-[var(--text)] transition-colors duration-500 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <Reveal>
          <p className="mt-10 text-sm text-[var(--text-muted)]">
            <span className="font-semibold text-[var(--text)]">Spoken languages:</span>{" "}
            {spokenLanguages.join(" · ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
