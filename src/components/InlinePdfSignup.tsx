"use client";

import { useState } from "react";

export default function InlinePdfSignup() {
  const [step, setStep] = useState<"form" | "submitted">("form");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/pdf-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to send. Please try again.");
      }

      setStep("submitted");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (step === "submitted") {
    return (
      <div className="text-center py-1">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#C6A664]/15">
          <svg className="h-6 w-6 text-[#C6A664]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm text-white/80">
          Checklist sent to <span className="font-semibold text-[#C6A664]">{email}</span>
        </p>
        <p className="mt-1 text-xs text-white/40">Check spam if it doesn't arrive shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full grow rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder:text-white/35 focus:border-[#C6A664]/60 focus:outline-none focus:ring-2 focus:ring-[#C6A664]/20 transition-all"
          required
        />
        <button
          type="submit"
          disabled={submitting || !email.trim()}
          className="shrink-0 whitespace-nowrap rounded-full bg-[#C6A664] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Sending..." : "Send PDF"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-xs text-red-400">{error}</p>
      )}
      <p className="mt-2 text-center text-[11px] text-white/30">
        No spam. Just the checklist and occasional seller insights.
      </p>
    </form>
  );
}
