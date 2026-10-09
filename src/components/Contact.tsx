import { Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import { CopyEmail } from "./CopyEmail";
import { FluidBackdrop } from "./FluidBackdrop";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { MagneticLink } from "./Magnetic";
import { Reveal } from "./Reveal";

const socialClass =
  "btn-organic focus-organic glass inline-flex min-h-12 items-center gap-2 border border-[var(--border-soft)] px-5 text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-flow relative overflow-hidden">
      <FluidBackdrop variant="shore" />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-medium tracking-[0.18em] text-[var(--accent)] uppercase">Contact</p>
            <h2
              id="contact-heading"
              className="mt-3 max-w-2xl font-display text-3xl font-medium tracking-tight text-[var(--text)] sm:text-4xl lg:text-5xl"
            >
              Let&apos;s talk about a role
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-[var(--text-muted)]">
              Open to full-stack and front-end roles. Email me about a role — I usually reply within a day.
            </p>

            <div className="mt-10 flex w-full justify-center">
              <CopyEmail email={profile.email} />
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <MagneticLink
                href={`mailto:${profile.email}?subject=${encodeURIComponent("Role conversation")}`}
                className="btn-organic focus-organic inline-flex min-h-12 items-center gap-2 bg-[var(--accent)] px-6 text-sm font-semibold text-white"
              >
                <Mail className="size-4" aria-hidden="true" />
                Email me about roles
              </MagneticLink>
              <MagneticLink
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <LinkedInIcon className="size-4" />
                LinkedIn
              </MagneticLink>
              <MagneticLink
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={socialClass}
              >
                <GitHubIcon className="size-4" />
                GitHub
              </MagneticLink>
              <MagneticLink href={profile.resume} download className={socialClass}>
                <Download className="size-4" aria-hidden="true" />
                Resume
              </MagneticLink>
            </div>

            <p className="mt-10 inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
              <MapPin className="size-4 text-[var(--accent)]" aria-hidden="true" />
              Based in {profile.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
