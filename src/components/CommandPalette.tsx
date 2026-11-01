"use client";

import {
  Briefcase,
  Check,
  Code2,
  Copy,
  Download,
  FileText,
  Home,
  Mail,
  Moon,
  Search,
  Sun,
  User,
  Wrench,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "@/data/resume";
import { GitHubIcon, LinkedInIcon } from "./icons";

type ActionItem = {
  id: string;
  title: string;
  subtitle?: string;
  category: "Navigation" | "Actions" | "Social";
  icon: React.ReactNode;
  perform: () => void;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const { theme, setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };

    const handleCustomOpen = () => setOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
        setQuery("");
        setSelectedIndex(0);
      }, 50);
    }
  }, [open]);

  const scrollTo = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const actions: ActionItem[] = useMemo(() => [
    {
      id: "nav-home",
      title: "Top / Hero",
      subtitle: "Back to top",
      category: "Navigation",
      icon: <Home className="size-4" />,
      perform: () => scrollTo("top"),
    },
    {
      id: "nav-about",
      title: "About",
      subtitle: "Bio, metrics & engineering background",
      category: "Navigation",
      icon: <User className="size-4" />,
      perform: () => scrollTo("about"),
    },
    {
      id: "nav-projects",
      title: "Projects",
      subtitle: "Case studies & selected work",
      category: "Navigation",
      icon: <Code2 className="size-4" />,
      perform: () => scrollTo("projects"),
    },
    {
      id: "nav-experience",
      title: "Experience",
      subtitle: "Zebra Technologies & track record",
      category: "Navigation",
      icon: <Briefcase className="size-4" />,
      perform: () => scrollTo("experience"),
    },
    {
      id: "nav-skills",
      title: "Skills & Toolkit",
      subtitle: "Languages, frameworks, databases, and AI",
      category: "Navigation",
      icon: <Wrench className="size-4" />,
      perform: () => scrollTo("skills"),
    },
    {
      id: "nav-contact",
      title: "Contact",
      subtitle: "Email & role conversations",
      category: "Navigation",
      icon: <Mail className="size-4" />,
      perform: () => scrollTo("contact"),
    },
    {
      id: "action-copy-email",
      title: "Copy Email Address",
      subtitle: profile.email,
      category: "Actions",
      icon: copied ? <Check className="size-4 text-emerald-500" /> : <Copy className="size-4" />,
      perform: () => {
        navigator.clipboard.writeText(profile.email);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
          setOpen(false);
        }, 1000);
      },
    },
    {
      id: "action-view-resume",
      title: "View Resume in New Tab",
      subtitle: "Open PDF in browser",
      category: "Actions",
      icon: <FileText className="size-4" />,
      perform: () => {
        setOpen(false);
        window.open(profile.resume, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "action-download-resume",
      title: "Download Resume PDF",
      subtitle: "Direct download",
      category: "Actions",
      icon: <Download className="size-4" />,
      perform: () => {
        setOpen(false);
        const link = document.createElement("a");
        link.href = profile.resume;
        link.download = "Akash_Shankar_Resume.pdf";
        link.click();
      },
    },
    {
      id: "action-toggle-theme",
      title: "Toggle Light / Dark Mode",
      subtitle: `Current: ${theme === "dark" ? "Dark" : "Light"}`,
      category: "Actions",
      icon: theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />,
      perform: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setOpen(false);
      },
    },
    {
      id: "social-github",
      title: "GitHub Profile",
      subtitle: "github.com/Akash101201",
      category: "Social",
      icon: <GitHubIcon className="size-4" />,
      perform: () => {
        setOpen(false);
        window.open(profile.github, "_blank", "noopener,noreferrer");
      },
    },
    {
      id: "social-linkedin",
      title: "LinkedIn Profile",
      subtitle: "Connect on LinkedIn",
      category: "Social",
      icon: <LinkedInIcon className="size-4" />,
      perform: () => {
        setOpen(false);
        window.open(profile.linkedin, "_blank", "noopener,noreferrer");
      },
    },
  ], [copied, theme, setTheme]);

  const filtered = useMemo(() => {
    if (!query.trim()) return actions;
    const q = query.toLowerCase();
    return actions.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.subtitle?.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q),
    );
  }, [actions, query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filtered.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % Math.max(1, filtered.length));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].perform();
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      className="fixed inset-0 z-[120] flex items-start justify-center p-4 pt-16 sm:pt-24"
    >
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Palette Container */}
      <div
        className="surface-petal relative w-full max-w-xl overflow-hidden border border-[var(--border-soft)] shadow-2xl"
        style={{ borderRadius: "2rem" }}
      >
        {/* Search Input */}
        <div className="flex items-center gap-3 border-b border-[var(--border-soft)] px-5 py-4">
          <Search className="size-5 text-[var(--accent)]" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-base text-[var(--text)] outline-none placeholder:text-[var(--text-muted)]"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close command palette"
            className="rounded-full p-1 text-[var(--text-muted)] hover:bg-[color-mix(in_oklab,var(--surface-alt)_70%,transparent)] hover:text-[var(--text)]"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-sm text-[var(--text-muted)]">
              No matching commands or destinations found.
            </div>
          ) : (
            <ul className="space-y-1">
              {filtered.map((item, index) => {
                const active = index === selectedIndex;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => item.perform()}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex w-full items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-left text-sm transition-colors ${
                        active
                          ? "bg-[var(--accent)] text-white shadow-sm"
                          : "text-[var(--text)] hover:bg-[color-mix(in_oklab,var(--surface-alt)_60%,transparent)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span
                          className={`grid size-7 shrink-0 place-items-center rounded-lg ${
                            active
                              ? "bg-white/20 text-white"
                              : "bg-[color-mix(in_oklab,var(--color-tide)_20%,var(--surface))] text-[var(--accent)]"
                          }`}
                        >
                          {item.icon}
                        </span>
                        <div className="min-w-0">
                          <p className="font-medium truncate">{item.title}</p>
                          {item.subtitle && (
                            <p
                              className={`text-xs truncate ${
                                active ? "text-white/80" : "text-[var(--text-muted)]"
                              }`}
                            >
                              {item.subtitle}
                            </p>
                          )}
                        </div>
                      </div>

                      <span
                        className={`text-[11px] font-semibold tracking-wider uppercase shrink-0 ${
                          active ? "text-white/70" : "text-[var(--text-muted)]"
                        }`}
                      >
                        {item.category}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex items-center justify-between border-t border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface)_85%,transparent)] px-5 py-2.5 text-xs text-[var(--text-muted)]">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="rounded border border-[var(--border-soft)] bg-[var(--surface)] px-1.5 py-0.5 font-mono">
                ↑↓
              </kbd>{" "}
              navigate
            </span>
            <span>
              <kbd className="rounded border border-[var(--border-soft)] bg-[var(--surface)] px-1.5 py-0.5 font-mono">
                ↵
              </kbd>{" "}
              select
            </span>
            <span>
              <kbd className="rounded border border-[var(--border-soft)] bg-[var(--surface)] px-1.5 py-0.5 font-mono">
                esc
              </kbd>{" "}
              close
            </span>
          </div>
          <span className="hidden sm:inline">Press Cmd+K anytime</span>
        </div>
      </div>
    </div>
  );
}
