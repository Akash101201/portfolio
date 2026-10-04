import { profile } from "@/data/resume";
import { GitHubIcon, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-600 sm:flex-row sm:px-6 dark:text-zinc-400">
        <p className="text-center sm:text-left">
          &copy; {new Date().getFullYear()} {profile.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex size-11 items-center justify-center rounded-full transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <LinkedInIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
