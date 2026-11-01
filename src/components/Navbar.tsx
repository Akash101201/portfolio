"use client";

import { FileText, Menu, Search, X } from "lucide-react";
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
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const sectionIds = ["top", ...navLinks.map((l) => l.href.replace("#", ""))];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          setActiveSection(visible.target.id === "top" ? "" : visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.3, 0.6] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const triggerPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

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

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={`focus-organic px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[color-mix(in_oklab,var(--color-tide)_20%,var(--surface))] text-[var(--accent)] font-semibold"
                    : "text-[var(--text-muted)] hover:text-[var(--accent)]"
                }`}
                style={{ borderRadius: "0.85rem 1.1rem" }}
              >
                {link.label}
              </a>
            );
          })}

          {/* Quick Command Palette Button */}
          <button
            type="button"
            onClick={triggerPalette}
            className="focus-organic ml-1 inline-flex items-center gap-2 rounded-xl border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_80%,transparent)] px-2.5 py-1.5 text-xs text-[var(--text-muted)] transition-colors hover:border-[var(--accent)] hover:text-[var(--text)]"
            title="Open Command Palette (Cmd + K)"
          >
            <Search className="size-3.5 text-[var(--accent)]" />
            <span className="font-mono text-[10px] bg-[var(--surface)] px-1.5 py-0.5 rounded border border-[var(--border-soft)]">
              ⌘K
            </span>
          </button>

          <ThemeToggle />

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-organic focus-organic ml-2 inline-flex items-center gap-2 bg-[var(--accent)] px-3.5 py-1.5 text-sm font-medium text-white shadow-sm"
          >
            <FileText className="size-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={triggerPalette}
            className="focus-organic inline-flex size-10 items-center justify-center text-[var(--text-muted)]"
            aria-label="Open command search"
          >
            <Search className="size-4 text-[var(--accent)]" />
          </button>
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
          <div className="mt-3 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerPalette();
              }}
              className="btn-organic flex items-center justify-center gap-2 border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_85%,transparent)] px-4 py-2.5 text-sm font-medium text-[var(--text)]"
            >
              <Search className="size-4 text-[var(--accent)]" />
              Quick Command Palette (⌘K)
            </button>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-organic flex items-center justify-center gap-2 bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Resume (PDF)
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
