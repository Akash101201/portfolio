import { ArrowRight, Download, Layers, MapPin, Sparkles, type LucideIcon } from "lucide-react";
import Image from "next/image";
import { metrics, profile } from "@/data/resume";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { RichText } from "./RichText";

type CapabilityRowProps = {
  icon: LucideIcon;
  label: string;
  items: string[];
  className: string;
  iconClassName: string;
};

function CapabilityRow({ icon: Icon, label, items, className, iconClassName }: CapabilityRowProps) {
  return (
    <p
      className={`inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl border px-4 py-2 text-sm sm:rounded-full ${className}`}
    >
      <span className="inline-flex w-full items-center justify-center gap-1.5 font-semibold sm:w-auto">
        <Icon className={`size-4 ${iconClassName}`} aria-hidden="true" />
        {label}
      </span>
      <span aria-hidden="true" className="hidden opacity-40 sm:inline">
        |
      </span>
      <span>{items.join(" · ")}</span>
    </p>
  );
}

function Avatar() {
  return (
    <div className="relative mx-auto size-40 sm:size-48 lg:size-64">
      <div
        aria-hidden="true"
        className="absolute -inset-3 rounded-full bg-linear-to-br from-indigo-500/30 to-violet-500/30 blur-2xl"
      />
      {profile.avatar ? (
        <Image
          src={profile.avatar}
          alt={`Portrait of ${profile.name}`}
          fill
          priority
          sizes="(min-width: 1024px) 256px, 192px"
          className="relative rounded-full object-cover object-[50%_22%] ring-4 ring-white dark:ring-zinc-900"
        />
      ) : (
        <div
          role="img"
          aria-label={`${profile.name} initials avatar`}
          className="relative grid size-full place-items-center rounded-full bg-linear-to-br from-indigo-500 to-violet-600 text-5xl font-bold tracking-tight text-white ring-4 ring-white sm:text-6xl lg:text-7xl dark:ring-zinc-900"
        >
          {profile.initials}
        </div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--color-indigo-100),transparent_60%)] dark:bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-indigo-500)_15%,transparent),transparent_60%)]"
      />
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-12 sm:px-6 sm:pt-20 lg:pb-24 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-16">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            {profile.openToWork && (
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950/60 dark:text-emerald-300">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:animate-none" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                Open to new opportunities
              </p>
            )}

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
              Hi, I&apos;m {profile.name}.
              <span className="mt-2 block bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text pb-1 text-transparent dark:from-indigo-400 dark:via-violet-400 dark:to-fuchsia-400">
                {profile.heroTitle}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-balance text-lg font-medium text-zinc-800 sm:text-xl lg:mx-0 dark:text-zinc-200">
              {profile.headline}
            </p>
            <p className="mx-auto mt-3 max-w-3xl text-pretty text-base text-zinc-600 sm:text-lg lg:mx-0 dark:text-zinc-400">
              <RichText text={profile.tagline} />
            </p>

            <div className="mx-auto mt-6 flex max-w-3xl flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center lg:mx-0 lg:justify-start">
              <CapabilityRow
                icon={Layers}
                label="Full-Stack"
                items={profile.capabilities.fullStack}
                className="border-indigo-200 bg-indigo-50/80 text-indigo-900 dark:border-indigo-900 dark:bg-indigo-950/50 dark:text-indigo-200"
                iconClassName="text-indigo-600 dark:text-indigo-400"
              />
              <CapabilityRow
                icon={Sparkles}
                label="AI"
                items={profile.capabilities.ai}
                className="border-fuchsia-200 bg-fuchsia-50/80 text-fuchsia-900 dark:border-fuchsia-900 dark:bg-fuchsia-950/40 dark:text-fuchsia-200"
                iconClassName="text-fuchsia-600 dark:text-fuchsia-400"
              />
            </div>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/25 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-600/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
              >
                View Projects
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <a
                href={profile.resume}
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-900 transition-all hover:-translate-y-0.5 hover:border-zinc-400 hover:bg-zinc-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-zinc-500 dark:hover:bg-zinc-800"
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-zinc-600 lg:justify-start dark:text-zinc-400">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4" aria-hidden="true" />
                {profile.location}
              </span>
              <span aria-hidden="true" className="h-4 w-px bg-zinc-300 dark:bg-zinc-700" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                <GitHubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Avatar />
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-20 lg:grid-cols-4 dark:border-zinc-800 dark:bg-zinc-800">
          {metrics.map((m) => (
            <div key={m.label} className="flex flex-col-reverse bg-white p-5 text-center sm:p-6 dark:bg-zinc-950">
              <dt className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{m.label}</dt>
              <dd className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
                {m.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
