"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark mode"
      className="focus-organic inline-flex size-11 items-center justify-center text-[var(--text-muted)] transition-colors hover:bg-[color-mix(in_oklab,var(--color-tide)_18%,transparent)] hover:text-[var(--text)]"
      style={{ borderRadius: "40%" }}
    >
      <Sun className="hidden size-5 dark:block" aria-hidden="true" />
      <Moon className="size-5 dark:hidden" aria-hidden="true" />
    </button>
  );
}
