import { projects } from "@/data/resume";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Featured work"
            title="Projects that moved the needle"
            description="Each project is broken down by Situation, Task, Action, and Result, so you can see the problem, my role, and the outcome at a glance."
          />
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title} className={project.featured ? "md:col-span-2" : ""}>
              <Reveal delay={(i % 2) * 80} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
