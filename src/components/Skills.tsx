import { Bot, Braces, Cloud, Database, Monitor, Server, TestTube, type LucideIcon } from "lucide-react";
import { skillGroups, spokenLanguages } from "@/data/resume";
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

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading id="skills-heading" eyebrow="Skills" title="My toolkit" />
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon];
            return (
              <li key={group.title}>
                <Reveal delay={(i % 3) * 80} className="h-full">
                  <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-indigo-300 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-indigo-700">
                    <h3 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                      <Icon className="size-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                      {group.title}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-sm font-medium text-zinc-800 transition-colors hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-indigo-700 dark:hover:bg-indigo-950 dark:hover:text-indigo-300"
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
          <p className="mt-8 text-sm text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Spoken languages:</span>{" "}
            {spokenLanguages.join(", ")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
