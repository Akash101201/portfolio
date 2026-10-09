import { profile } from "@/data/resume";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border-soft)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--color-tide),var(--color-bloom),transparent)] opacity-60"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-[var(--text-muted)] sm:flex-row sm:px-6">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} {profile.name}. Crafted with care.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="focus-organic inline-flex size-11 items-center justify-center transition-colors hover:text-[var(--accent)]"
            style={{ borderRadius: "40%" }}
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="focus-organic inline-flex size-11 items-center justify-center transition-colors hover:text-[var(--accent)]"
            style={{ borderRadius: "40%" }}
          >
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
