"use client";

import { Check, Copy, Send } from "lucide-react";
import { useState } from "react";
import { profile } from "@/data/resume";

export function ContactForm() {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [topic, setTopic] = useState("Full-Stack Role");
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const formattedSubject = `[${topic}] Opportunity Inquiry from ${name || "Portfolio Visitor"}`;
  const formattedBody = `Hi Akash,\n\n${message || "I came across your portfolio and would love to connect about potential opportunities."}\n\nBest regards,\n${name || "Recruiter / Team Lead"}\n${senderEmail ? `Email: ${senderEmail}` : ""}`;

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    formattedSubject,
  )}&body=${encodeURIComponent(formattedBody)}`;

  const handleCopyDraft = () => {
    const textToCopy = `To: ${profile.email}\nSubject: ${formattedSubject}\n\n${formattedBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="surface-petal relative mx-auto mt-10 w-full max-w-2xl overflow-hidden border border-[var(--border-soft)] p-6 text-left shadow-lg sm:p-8"
      style={{ borderRadius: "2rem" }}
    >
      <div className="flex items-center justify-between border-b border-[var(--border-soft)] pb-4">
        <div>
          <span className="text-xs font-semibold tracking-wider uppercase text-[var(--accent)]">
            Direct Inquiry
          </span>
          <h3 className="font-display text-lg font-medium text-[var(--text)]">Send a Quick Note</h3>
        </div>
        <span className="chip-organic bg-[color-mix(in_oklab,var(--color-sea)_20%,var(--surface))] px-2.5 py-1 text-xs font-semibold text-[var(--accent)]">
          Replies within ~24h
        </span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = mailtoHref;
        }}
        className="mt-6 space-y-4 text-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-semibold text-[var(--text-muted)]">
              Your Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Sarah Connor"
              className="mt-1 w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] px-3.5 py-2.5 text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-semibold text-[var(--text-muted)]">
              Your Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
              placeholder="s.connor@company.com"
              className="mt-1 w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] px-3.5 py-2.5 text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)]"
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-topic" className="block text-xs font-semibold text-[var(--text-muted)]">
            Discussion Topic
          </label>
          <select
            id="contact-topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="mt-1 w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] px-3.5 py-2.5 text-[var(--text)] outline-none focus:border-[var(--accent)]"
          >
            <option value="Full-Stack Engineer Role">Full-Stack Engineer Role</option>
            <option value="AI / LLM Engineer Role">AI / LLM Tooling Role</option>
            <option value="Front-End Lead / Senior Role">Front-End / UI Engineering</option>
            <option value="Distributed Systems / Backend">Backend / Microservices</option>
            <option value="General Conversation / Hello">Just Saying Hi</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-semibold text-[var(--text-muted)]">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about the role, team, or project..."
            className="mt-1 w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface)] px-3.5 py-2.5 text-[var(--text)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] resize-none"
          />
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-end pt-2">
          <button
            type="button"
            onClick={handleCopyDraft}
            className="btn-organic focus-organic inline-flex items-center justify-center gap-2 border border-[var(--border-soft)] bg-[color-mix(in_oklab,var(--surface-alt)_70%,transparent)] px-4 py-2.5 text-xs font-semibold text-[var(--text)] transition-colors hover:border-[var(--accent)]"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-emerald-500" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="size-3.5 text-[var(--accent)]" />
                <span>Copy Draft Message</span>
              </>
            )}
          </button>

          <button
            type="submit"
            className="btn-organic focus-organic inline-flex items-center justify-center gap-2 bg-[var(--accent)] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-opacity hover:opacity-90"
          >
            <Send className="size-3.5" />
            <span>Open in Mail Client</span>
          </button>
        </div>
      </form>
    </div>
  );
}
