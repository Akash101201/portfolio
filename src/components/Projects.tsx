import { projects } from "@/data/resume";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import { FluidBackdrop } from "./FluidBackdrop";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-flow relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[color-mix(in_oklab,var(--color-mist)_55%,transparent)] dark:bg-[color-mix(in_oklab,var(--color-pool)_70%,transparent)]"
      />
      <FluidBackdrop variant="section" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading
            id="projects-heading"
            eyebrow="Selected work"
            title="Projects that moved the needle"
            description="A featured case study first, then the rest of the work in Situation, Task, Action, and Result."
          />
        </Reveal>

        {featured && (
          <div className="mb-8">
            <FeaturedCaseStudy project={featured} />
          </div>
        )}

        <ul className="grid gap-6 md:grid-cols-2">
          {rest.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
