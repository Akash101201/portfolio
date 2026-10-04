import { Bot, Monitor, Server, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { about, ai, profile } from "@/data/resume";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  monitor: Monitor,
  server: Server,
  shield: ShieldCheck,
  sparkles: Sparkles,
};

const Key = ({ children }: { children: string }) => <span className="text-sky-300">{children}</span>;
const Str = ({ children }: { children: string }) => <span className="text-emerald-300">&quot;{children}&quot;</span>;
const P = ({ children }: { children: string }) => <span className="text-zinc-500">{children}</span>;

function StrList({ items }: { items: string[] }) {
  return (
    <>
      <P>[</P>
      {items.map((item, i) => (
        <span key={item}>
          <Str>{item}</Str>
          {i < items.length - 1 && <P>, </P>}
        </span>
      ))}
      <P>]</P>
    </>
  );
}

function CodeCard() {
  return (
    <figure className="relative">
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-[2rem] bg-linear-to-br from-indigo-500/25 via-violet-500/20 to-fuchsia-500/25 blur-2xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl shadow-indigo-500/10">
        <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-3">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-emerald-400/80" />
          <figcaption className="ml-3 font-mono text-xs text-zinc-400">akash.ts</figcaption>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-zinc-200 sm:text-sm">
          <code>
            <span className="text-violet-300">const</span> <span className="text-amber-200">akash</span> <P>=</P> <P>{"{"}</P>
            {"\n  "}
            <Key>role</Key>
            <P>: </P>
            <Str>{profile.role}</Str>
            <P>,</P>
            {"\n  "}
            <Key>company</Key>
            <P>: </P>
            <Str>Zebra Technologies</Str>
            <P>,</P>
            {"\n  "}
            <Key>stack</Key>
            <P>: </P>
            <StrList items={["React", "Angular", "Node.js", "GraphQL"]} />
            <P>,</P>
            {"\n  "}
            <Key>ai</Key>
            <P>: </P>
            <StrList items={["LangChain", "RAG", "Agents"]} />
            <P>,</P>
            {"\n  "}
            <Key>shipped</Key>
            <P>: </P>
            <Str>4+ B2B products</Str>
            <P>,</P>
            {"\n  "}
            <Key>openToWork</Key>
            <P>: </P>
            <span className="text-violet-300">true</span>
            <P>,</P>
            {"\n"}
            <P>{"};"}</P>
            <span
              aria-hidden="true"
              className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-indigo-400 motion-safe:animate-pulse"
            />
          </code>
        </pre>
      </div>
    </figure>
  );
}

function AiSpotlight() {
  return (
    <div className="relative mt-16 rounded-3xl bg-linear-to-r from-indigo-500 via-violet-500 to-fuchsia-500 p-px shadow-xl shadow-violet-500/10">
      <div className="relative overflow-hidden rounded-[calc(1.5rem-1px)] bg-white p-6 sm:p-10 dark:bg-zinc-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-violet-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-indigo-600 to-fuchsia-600 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              <Sparkles className="size-3.5" aria-hidden="true" />
              AI at work
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              Shipping LLM tools that save real engineering hours
            </h3>
            <p className="mt-3 text-pretty text-zinc-600 dark:text-zinc-400">{ai.intro}</p>
          </div>
          <ul className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end" aria-label="AI stack">
            {ai.stack.map((s) => (
              <li
                key={s}
                className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-800 dark:border-violet-900 dark:bg-violet-950/60 dark:text-violet-300"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <ul className="relative mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ai.highlights.map((h, i) => (
            <li key={h.label}>
              <Reveal delay={i * 80} className="h-full">
                <div className="group h-full rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white hover:shadow-lg hover:shadow-violet-500/10 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-violet-700 dark:hover:bg-zinc-900">
                  <p className="bg-linear-to-r from-indigo-600 to-fuchsia-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent dark:from-indigo-400 dark:to-fuchsia-400">
                    {h.value}
                  </p>
                  <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-100">{h.label}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <Bot className="mt-0.5 size-4 shrink-0 text-violet-500" aria-hidden="true" />
                    {h.context}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-zinc-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-zinc-200)_1px,transparent_1px)] bg-size-[48px_48px] opacity-40 mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,var(--color-zinc-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-zinc-800)_1px,transparent_1px)]"
      />
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <SectionHeading id="about-heading" eyebrow="About me" title="Engineer who sweats the details users feel" />
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
            {about.bio.map((p) => (
              <p key={p.slice(0, 24)} className="text-pretty">
                {p}
              </p>
            ))}
            <div className="pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                How I work
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {about.softSkills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120} className="min-w-0">
            <CodeCard />
          </Reveal>
        </div>

        <Reveal>
          <AiSpotlight />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.strengths.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title}>
                <Reveal delay={i * 80} className="h-full">
                  <div className="h-full rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg hover:shadow-indigo-500/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-indigo-700">
                    <span className="grid size-10 place-items-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-50">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{s.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
