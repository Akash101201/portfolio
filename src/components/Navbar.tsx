"use client";

import { Download, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";
import { ThemeToggle } from "./ThemeToggle";

function BrandMark() {
  if (profile.avatar) {
    return (
      <span
        className="relative size-8 overflow-hidden ring-1 ring-[var(--border-soft)]"
        style={{ borderRadius: "45% 55% 50% 50%" }}
      >
        <Image src={profile.avatar} alt="" fill sizes="32px" className="object-cover object-[50%_22%]" />
      </span>
    );
  }

  return (
    <span
      className="grid size-8 place-items-center bg-[linear-gradient(145deg,var(--color-sea),var(--color-moss))] text-xs font-bold text-white"
      style={{ borderRadius: "45% 55% 50% 50%" }}
    >
      {profile.initials}
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="glass sticky top-0 z-50 border-b border-[var(--border-soft)]">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="focus-organic flex items-center gap-2.5 font-display text-lg font-medium tracking-tight text-[var(--text)]"
          style={{ borderRadius: "0.75rem" }}
        >
          <BrandMark />
          <span>{profile.name}</span>
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-organic px-3 py-2 text-sm font-medium text-[var(--text-muted)] transition-colors duration-300 hover:text-[var(--accent)]"
              style={{ borderRadius: "0.85rem 1.1rem" }}
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={profile.resume}
            download
            className="btn-organic focus-organic ml-2 inline-flex items-center gap-2 bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white"
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
            className="focus-organic inline-flex size-11 items-center justify-center text-[var(--text-muted)] transition-colors hover:bg-[color-mix(in_oklab,var(--color-tide)_18%,transparent)] hover:text-[var(--text)]"
            style={{ borderRadius: "40%" }}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-[var(--border-soft)] bg-[var(--surface)] px-4 pb-6 pt-2 md:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-2 py-3 text-base font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
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
            className="btn-organic mt-3 flex items-center justify-center gap-2 bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
