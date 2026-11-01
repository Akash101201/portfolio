"use client";

import { useMemo, useState } from "react";
import { projectCategories, projects, type ProjectCategory } from "@/data/resume";
import { FeaturedCaseStudy } from "./FeaturedCaseStudy";
import { FluidBackdrop } from "./FluidBackdrop";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const categoryCounts = useMemo(() => {
    return {
      all: projects.length,
      ai: projects.filter((p) => p.category === "ai").length,
      fullstack: projects.filter((p) => p.category === "fullstack").length,
      systems: projects.filter((p) => p.category === "systems").length,
    };
  }, []);

  const featured = projects.find((p) => p.featured);

  const filteredRest = useMemo(() => {
    return projects.filter((p) => {
      if (p.featured && (selectedCategory === "all" || selectedCategory === "ai")) {
        return false;
      }
      if (selectedCategory === "all") return !p.featured;
      return p.category === selectedCategory;
    });
  }, [selectedCategory]);

  const showFeatured = featured && (selectedCategory === "all" || selectedCategory === "ai");

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

        {/* Filter categories */}
        <Reveal delay={60}>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            {projectCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              const count = categoryCounts[cat.id];
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`btn-organic focus-organic inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-[var(--accent)] text-white shadow-sm"
                      : "glass border border-[var(--border-soft)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                  }`}
                  style={{ borderRadius: "1.25rem" }}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[11px] ${
                      active
                        ? "bg-white/20 text-white"
                        : "bg-[color-mix(in_oklab,var(--surface)_80%,transparent)] text-[var(--text-muted)]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {showFeatured && (
          <div className="mb-8">
            <FeaturedCaseStudy project={featured} />
          </div>
        )}

        {filteredRest.length > 0 ? (
          <ul className="grid gap-6 md:grid-cols-2">
            {filteredRest.map((project, i) => (
              <li key={project.title}>
                <Reveal delay={(i % 2) * 90} className="h-full">
                  <ProjectCard project={project} />
                </Reveal>
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-3xl border border-[var(--border-soft)] p-12 text-center text-[var(--text-muted)]">
            No projects found in this category.
          </div>
        )}
      </div>
    </section>
  );
}
