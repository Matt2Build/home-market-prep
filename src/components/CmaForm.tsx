"use client";

import { useState } from "react";

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

  if (submitted) {
    return (
      <div className="py-4 text-center">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 mx-auto">
          <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
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
    <div>
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C6A664]">
          Quick request form
        </p>
        <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
          Just send the address, your name, and your email. We&apos;ll take it from
          there.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          placeholder="Property address"
          value={values.address || ""}
          onChange={(e) => handleChange("address", e.target.value)}
          className="sm:col-span-2 w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
          autoFocus
        />
        <input
          type="text"
          placeholder="Your name"
          value={values.name || ""}
          onChange={(e) => handleChange("name", e.target.value)}
          className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
        />
        <input
          type="email"
          placeholder="Your email"
          value={values.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
        />
      </div>

      {error && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="mt-6 flex items-center justify-end">
        <button
          onClick={handleSubmit}
          disabled={
            !values.address?.trim() ||
            !values.name?.trim() ||
            !values.email?.trim() ||
            submitting
          }
          className="rounded-full bg-[#1A1A1A] px-7 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white disabled:cursor-not-allowed disabled:opacity-30 transition-colors hover:bg-[#333]"
        >
          {submitting ? "Sending..." : "Request My Free CMA"}
        </button>
      </div>
    </div>
  );
}
