"use client";

import { useState } from "react";

const timeframeOptions = [
  { value: "0-3 months", label: "Now — within 3 months" },
  { value: "3-6 months", label: "3 to 6 months" },
  { value: "6-12 months", label: "6 to 12 months" },
  { value: "just curious", label: "Just curious" },
];

export default function CmaForm() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/cma", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to submit. Please try again.");
      }

      setSubmitted(true);
    } catch (error: unknown) {
      setError(
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const isDisabled =
    !values.address?.trim() ||
    !values.name?.trim() ||
    !values.email?.trim() ||
    submitting;

  if (submitted) {
    return (
      <div className="py-4 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <svg
            className="h-7 w-7 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Your CMA request is in</h3>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-[#5A5A5A]">
          We&apos;re reviewing comps and current market data for your property now.
          Check your inbox and we&apos;ll follow up ASAP.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        void handleSubmit();
      }}
    >
      <div className="flex flex-wrap items-center gap-2">
        <div className="rounded-full bg-[#C6A664]/10 px-4 py-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
            Free CMA
          </span>
        </div>
        <span className="text-xs text-[#8C8375]">·</span>
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8C8375]">
          No obligation
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]">
            Property address
          </label>
          <input
            type="text"
            placeholder="123 Maple St, Marysville, WA 98270"
            value={values.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            className="w-full rounded-xl border border-[#E8E4DF] bg-[#FAFAF8] px-4 py-3.5 text-base placeholder:text-[#B8B0A4] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] focus:bg-white transition-all"
            autoFocus
          />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]">
              Your name
            </label>
            <input
              type="text"
              placeholder="Jane Smith"
              value={values.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-xl border border-[#E8E4DF] bg-[#FAFAF8] px-4 py-3.5 text-base placeholder:text-[#B8B0A4] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] focus:bg-white transition-all"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]">
              Your email
            </label>
            <input
              type="email"
              placeholder="jane@example.com"
              value={values.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl border border-[#E8E4DF] bg-[#FAFAF8] px-4 py-3.5 text-base placeholder:text-[#B8B0A4] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] focus:bg-white transition-all"
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A]">
            When are you thinking of listing?
          </label>
          <select
            value={values.timeframe || ""}
            onChange={(e) => handleChange("timeframe", e.target.value)}
            className="w-full rounded-xl border border-[#E8E4DF] bg-[#FAFAF8] px-4 py-3.5 text-base text-[#5A5A5A] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] focus:bg-white transition-all appearance-none"
          >
            <option value="" disabled>Select your timeframe</option>
            {timeframeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <div>
          <p className="text-xs leading-5 text-[#8C8375]">
            You&apos;ll receive a confirmation email after submission.
          </p>
          <p className="mt-1 text-xs text-[#A1A1A1]">
            Your info goes directly to Matt — no shared lists, no spam.
          </p>
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className="w-full sm:w-auto rounded-full bg-[#C6A664] px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-md shadow-[#C6A664]/20 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none transition-all hover:bg-[#D4BC82] hover:shadow-lg hover:shadow-[#C6A664]/30 active:scale-[0.98]"
        >
          {submitting ? "Sending..." : "Request My Free CMA"}
        </button>
      </div>
    </form>
  );
}
