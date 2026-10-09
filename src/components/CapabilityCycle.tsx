"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/resume";

const words = [...profile.capabilities.fullStack, ...profile.capabilities.ai];

export function CapabilityCycle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      setVisible(false);
      window.setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setVisible(true);
      }, 320);
    }, 2400);

    return () => window.clearInterval(id);
  }, []);

  return (
    <p className="mt-5 text-base text-[var(--text-muted)]">
      <span className="sr-only">Building with {words.join(", ")}.</span>
      <span aria-hidden="true" className="flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 lg:justify-start">
        <span>Building with</span>
        <span
          className={`inline-flex min-w-[12ch] font-display text-lg font-medium text-[var(--accent)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-1 opacity-0 blur-[2px]"
          }`}
        >
          {words[index]}
        </span>
      </span>
    </p>
  );
}
