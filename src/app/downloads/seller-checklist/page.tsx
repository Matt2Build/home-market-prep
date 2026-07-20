"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import CornerAccent from "@/components/CornerAccent";
import SectionDivider from "@/components/SectionDivider";
import type { Metadata } from "next";

function PdfDownloadForm() {
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
      <div className="text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#C6A664]/10">
          <svg className="h-10 w-10 text-[#C6A664]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="mb-3 text-2xl font-semibold">Checklist sent</h2>
        <p className="mx-auto max-w-md text-base text-[#5A5A5A]">
          The seller prep PDF is on its way to <span className="font-semibold text-[#1A1A1A]">{email}</span>. If it doesn&apos;t arrive soon, check your spam folder or reach out directly.
        </p>
        <p className="mt-6 text-sm text-[#A1A1A1]">
          Want to talk through your specific situation?{" "}
          <a href="tel:4256452181" className="font-medium text-[#C6A664] hover:text-[#D4BC82]">425-645-2181</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md">
      <label htmlFor="pdf-email" className="sr-only">Email address</label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <input
          id="pdf-email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full grow rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-sm placeholder:text-[#A1A1A1] focus:border-[#C6A664] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/30 transition-all"
          required
        />
        <button
          type="submit"
          disabled={submitting || !email.trim()}
          className="shrink-0 whitespace-nowrap rounded-full bg-[#C6A664] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82] disabled:cursor-not-allowed disabled:opacity-40"
        >
          {submitting ? "Sending..." : "Send me the PDF"}
        </button>
      </div>
      {error && (
        <p className="mt-3 text-sm text-red-500">{error}</p>
      )}
      <p className="mt-4 text-center text-xs text-[#A1A1A1]">
        No spam. Just the checklist and occasional seller insights.
      </p>
    </form>
  );
}

export default function PdfDownloadPage() {
  const checklistItems = [
    "What to fix before listing — low-friction vs. big-money decisions",
    "Declutter targets that show immediately in photos and showings",
    "Daily show-ready reset routine for when the home is active",
    "Paperwork checklist — disclosures, HOA docs, keys, and receipts",
    "Pricing discipline — how to connect prep work to a real CMA",
  ];

  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Free Seller Resource
          </p>
          <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
            The Pre-Listing Checklist Sellers Actually Use
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">
            A compact, practical PDF covering the decisions that shape how the home shows, how buyers react, and how smooth the launch feels.
          </p>
          <SectionDivider tone="dark" align="center" />
          <div className="mt-12">
            <PdfDownloadForm />
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="mb-10 text-center text-xl font-semibold">What&apos;s inside</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {checklistItems.map((item, i) => (
              <div
                key={i}
                className="relative flex items-start gap-4 rounded-[20px] border border-[#E8E4DF] bg-[#F8F5F0] p-5"
              >
                <CornerAccent tone="gold" className="absolute right-3 top-3 h-8 w-12 opacity-60" />
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C6A664]/10 text-xs font-semibold text-[#C6A664]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-snug text-[#1A1A1A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center">
          <h2 className="mb-4 text-xl font-semibold">Who this is for</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#5A5A5A]">
            Homeowners in Snohomish County or nearby Skagit County who are thinking about selling and want a clear, structured checklist before they start calling contractors or setting a price. It&apos;s not a substitute for talking to someone who knows the local market — it&apos;s a starting point.
          </p>
          <div className="mt-8 rounded-[24px] border border-[#E8E4DF] bg-white p-8 max-w-lg mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664] mb-2">
              Want to skip the PDF and just talk?
            </p>
            <a
              href="tel:4256452181"
              className="inline-block rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#333]"
            >
              Call Matt · 425-645-2181
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
