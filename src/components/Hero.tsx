import { ArrowRight, Download, MapPin } from "lucide-react";
import Image from "next/image";
import { profile } from "@/data/resume";
import { CapabilityCycle } from "./CapabilityCycle";
import { FluidBackdrop } from "./FluidBackdrop";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { MagneticLink } from "./Magnetic";

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        aria-hidden="true"
        className="organic-blob absolute inset-[-8%] bg-[radial-gradient(circle_at_40%_35%,var(--wash-a),var(--wash-b)_55%,transparent_72%)] blur-xl"
      />
      <div
        className="relative aspect-[4/5] overflow-hidden float-soft"
        style={{ borderRadius: "58% 42% 48% 52% / 42% 48% 52% 58%" }}
      >
        {profile.avatar ? (
          <Image
            src={profile.avatar}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 420px, 80vw"
            className="object-cover object-[50%_18%]"
          />
        ) : (
          <div
            role="img"
            aria-label={`${profile.name} initials`}
            className="grid size-full place-items-center bg-[linear-gradient(145deg,var(--color-sea),var(--color-moss),var(--color-bloom))] font-display text-6xl font-medium text-white sm:text-7xl"
          >
            {profile.initials}
          </div>
        )}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,color-mix(in_oklab,var(--surface)_55%,transparent)_100%)]"
        />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative min-h-[min(100svh,56rem)] overflow-hidden"
    >
      <FluidBackdrop variant="hero" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-28 lg:pt-20">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {profile.openToWork && (
            <p className="chip-organic glass inline-flex items-center gap-2 border border-[var(--border-soft)] px-4 py-1.5 text-sm font-medium text-[var(--accent)]">
              <span className="relative flex size-2">
                <span
                  className="absolute inline-flex size-full animate-ping rounded-[inherit] bg-[var(--color-sea)] opacity-60 motion-reduce:animate-none"
                  style={{ borderRadius: "40%" }}
                />
                <span className="relative inline-flex size-2 bg-[var(--color-sea)]" style={{ borderRadius: "40%" }} />
              </span>
              Open to new opportunities
            </p>
          )}

          <p className="mt-6 font-display text-5xl font-medium leading-[1.05] tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            {profile.name}
          </p>

          <h1 className="mt-4 font-display text-2xl font-medium leading-snug text-[var(--accent)] sm:text-3xl lg:text-[2.15rem]">
            {profile.heroTitle}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl lg:mx-0">
            {profile.headline}
          </p>

          <CapabilityCycle />

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <MagneticLink
              href="#projects"
              className="btn-organic focus-organic group inline-flex min-h-12 items-center justify-center gap-2 bg-[var(--accent)] px-7 py-3 text-base font-semibold text-white"
            >
              View my work
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" aria-hidden="true" />
            </MagneticLink>
            <MagneticLink
              href={profile.resume}
              download
              className="btn-organic focus-organic glass inline-flex min-h-12 items-center justify-center gap-2 border border-[var(--border-soft)] px-7 py-3 text-base font-semibold text-[var(--text)]"
            >
              <Download className="size-4" aria-hidden="true" />
              Download resume
            </MagneticLink>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 text-sm text-[var(--text-muted)] lg:justify-start">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4 text-[var(--accent)]" aria-hidden="true" />
              {profile.location}
            </span>
            <span aria-hidden="true" className="h-4 w-px bg-[var(--border-soft)]" />
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="focus-organic inline-flex size-10 items-center justify-center transition-colors hover:text-[var(--accent)]"
              style={{ borderRadius: "40%" }}
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="focus-organic inline-flex size-10 items-center justify-center transition-colors hover:text-[var(--accent)]"
              style={{ borderRadius: "40%" }}
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Portrait />
        </div>
      </div>
    </section>
  );
}
