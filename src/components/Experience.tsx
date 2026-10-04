import { Award, Briefcase, GraduationCap } from "lucide-react";
import { certifications, education, experience } from "@/data/resume";
import { Reveal } from "./Reveal";
import { RichText } from "./RichText";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <SectionHeading id="experience-heading" eyebrow="Experience" title="Where I've made an impact" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <ol className="relative space-y-10 border-l-2 border-zinc-200 pl-6 sm:pl-8 dark:border-zinc-800">
          {experience.map((job) => (
            <li key={job.role} className="relative">
              <span
                aria-hidden="true"
                className={`absolute -left-[33px] top-1 grid size-4 place-items-center rounded-full ring-4 ring-white sm:-left-[41px] dark:ring-zinc-950 ${
                  job.current ? "bg-indigo-600 dark:bg-indigo-400" : "bg-zinc-300 dark:bg-zinc-600"
                }`}
              />
              <Reveal>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                    {job.role}
                    <span className="font-medium text-indigo-600 dark:text-indigo-400"> · {job.company}</span>
                  </h3>
                  <p className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {job.period}
                    {job.current && (
                      <span className="ml-2 rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-semibold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                        Current
                      </span>
                    )}
                  </p>
                </div>
                <ul className="mt-4 space-y-3">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 32)} className="flex gap-3 leading-relaxed text-zinc-600 dark:text-zinc-400">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-indigo-500" />
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

        <div className="space-y-6">
          <Reveal>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                <GraduationCap className="size-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                Education
              </h3>
              {education.map((e) => (
                <div key={e.degree} className="mt-4">
                  <p className="font-medium text-zinc-900 dark:text-zinc-100">{e.degree}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {e.school} · {e.period}
                  </p>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{e.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
              <h3 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                <Award className="size-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6 dark:border-indigo-900 dark:bg-indigo-950/40">
              <h3 className="flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50">
                <Briefcase className="size-5 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
                Career highlight
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                Promoted from intern to full-time Software Engineer within 6 months on the strength of measurable full-stack
                delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
