import { Home } from "lucide-react";
import Link from "next/link";
import { FluidBackdrop } from "@/components/FluidBackdrop";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[75svh] items-center justify-center overflow-hidden px-4 py-20 text-center">
      <FluidBackdrop variant="hero" />

      <div
        className="surface-petal relative z-10 mx-auto max-w-lg border border-[var(--border-soft)] p-8 shadow-xl sm:p-12"
        style={{ borderRadius: "2.5rem 1.75rem 2.25rem 2rem" }}
      >
        <span className="chip-organic bg-[color-mix(in_oklab,var(--color-bloom)_20%,var(--surface))] px-3 py-1 text-xs font-semibold text-[var(--accent-warm)]">
          404 · Page Not Found
        </span>

        <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-[var(--text)] sm:text-5xl">
          Off the beaten path
        </h1>

        <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
          The page or asset you are looking for has been moved, removed, or never existed in this garden.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-organic focus-organic inline-flex items-center gap-2 bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm"
          >
            <Home className="size-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
