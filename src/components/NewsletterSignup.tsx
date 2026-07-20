"use client";

import { useState } from "react";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to subscribe. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to subscribe. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <p className="text-base text-[#C6A664]">
        You&apos;re in. We&apos;ll send seller insights straight to your inbox.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl border border-white/15 bg-white/8 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] focus:bg-white/12 transition-all"
        required
      />
      <button
        type="submit"
        disabled={submitting || !email.trim()}
        className="shrink-0 rounded-full bg-[#C6A664] px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] disabled:cursor-not-allowed disabled:opacity-40 transition-colors hover:bg-[#D4BC82] active:scale-[0.98]"
      >
        {submitting ? "..." : "Subscribe"}
      </button>
    </form>
  );
}
