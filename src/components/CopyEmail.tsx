"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

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
    <div className="flex w-full max-w-xl flex-col items-stretch gap-2 rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm sm:flex-row sm:items-center dark:border-zinc-800 dark:bg-zinc-900">
      <span className="min-w-0 flex-1 select-all break-all px-4 py-2 text-center text-lg font-semibold text-zinc-900 sm:text-left sm:text-xl dark:text-zinc-50">
        {email}
      </span>
      <button
        type="button"
        onClick={copy}
        className={`inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 ${
          copied
            ? "bg-emerald-600 text-white"
            : "bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400"
        }`}
      >
        {copied ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}
        {copied ? "Copied!" : "Copy email"}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </div>
  );
}
