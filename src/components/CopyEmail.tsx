"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "./Magnetic";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const input = document.createElement("textarea");
      input.value = email;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }
    setCopied(true);
  }

  return (
    <div
      className="glass flex w-full max-w-xl flex-col items-stretch gap-2 border border-[var(--border-soft)] p-2 sm:flex-row sm:items-center"
      style={{ borderRadius: "1.75rem 2.25rem 1.5rem 2rem" }}
    >
      <span className="min-w-0 flex-1 select-all break-all px-4 py-2 text-center font-display text-lg font-medium text-[var(--text)] sm:text-left sm:text-xl">
        {email}
      </span>
      <MagneticButton
        onClick={copy}
        className={`btn-organic focus-organic inline-flex min-h-12 shrink-0 items-center justify-center gap-2 px-5 text-sm font-semibold text-white ${
          copied ? "bg-[var(--color-sea)]" : "bg-[var(--accent)] hover:opacity-95"
        }`}
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        {copied ? "Copied" : "Copy email"}
      </MagneticButton>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
