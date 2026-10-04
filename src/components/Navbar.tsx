"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/80">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 rounded-md font-semibold tracking-tight text-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-zinc-50"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-linear-to-br from-indigo-500 to-violet-600 text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-indigo-400"
          >
            <Download className="size-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-11 items-center justify-center rounded-full text-zinc-700 transition-colors hover:bg-zinc-100 focus-visible:outline-2 focus-visible:outline-indigo-500 dark:text-zinc-300 dark:hover:bg-zinc-800"
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white px-4 pb-6 pt-2 md:hidden dark:border-zinc-800 dark:bg-zinc-950"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume}
            download
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-sm font-medium text-white dark:bg-zinc-50 dark:text-zinc-900"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
