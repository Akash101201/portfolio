import { Download, Mail, MapPin } from "lucide-react";
import { profile } from "@/data/resume";
import { CopyEmail } from "./CopyEmail";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { Reveal } from "./Reveal";

const socialClass =
  "inline-flex min-h-12 items-center gap-2 rounded-full border border-zinc-300 bg-white px-5 text-sm font-semibold text-zinc-900 transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-indigo-600 dark:hover:text-indigo-300";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <Reveal>
        <div className="flex flex-col items-center text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">Contact</p>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl lg:text-5xl dark:text-zinc-50"
          >
            Let&apos;s build something great together
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            I&apos;m open to full-stack and front-end roles. The fastest way to reach me is email. I usually reply within
            a day.
          </p>

          <div className="mt-10 flex w-full justify-center">
            <CopyEmail email={profile.email} />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className={socialClass}>
              <Mail className="size-4" aria-hidden="true" />
              Send an email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={socialClass}>
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={socialClass}>
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a href={profile.resume} download className={socialClass}>
              <Download className="size-4" aria-hidden="true" />
              Resume
            </a>
          </div>

          <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-zinc-600 dark:text-zinc-400">
            <MapPin className="size-4" aria-hidden="true" />
            Based in {profile.location}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
