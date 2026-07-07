"use client";

import { useState } from "react";

export default function CmaForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log("CMA Form submitted:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A]">Your CMA Is Being Prepared</h3>
        <p className="mt-3 text-[#5A5A5A] leading-relaxed max-w-sm mx-auto">
          We&apos;re researching comps and current market data for your property. Expect to hear from us within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C6A664]">
            Step {step + 1} of 2
          </p>
          <p className="text-xs text-[#5A5A5A]">{step === 0 ? "50" : "100"}%</p>
        </div>
        <div className="h-1.5 bg-[#E8E4DF] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C6A664] rounded-full transition-all duration-500 ease-out"
            style={{ width: step === 0 ? "50%" : "100%" }}
          />
        </div>
      </div>

      {/* Step 0: Property Address */}
      {step === 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">What&apos;s your address?</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="123 Main St, City, WA 98001"
              value={values.address || ""}
              onChange={(e) => handleChange("address", e.target.value)}
              className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
              autoFocus
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                type="number"
                placeholder="Beds"
                value={values.beds || ""}
                onChange={(e) => handleChange("beds", e.target.value)}
                className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
              />
              <input
                type="text"
                placeholder="Baths"
                value={values.baths || ""}
                onChange={(e) => handleChange("baths", e.target.value)}
                className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
              />
              <input
                type="number"
                placeholder="Sq Ft"
                value={values.sqft || ""}
                onChange={(e) => handleChange("sqft", e.target.value)}
                className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Email + Name */}
      {step === 1 && (
        <div>
          <h3 className="text-xl font-semibold mb-6">Where should we send your CMA?</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={values.name || ""}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={values.email || ""}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
              autoFocus={step > 0}
            />
            <input
              type="tel"
              placeholder="Phone (optional)"
              value={values.phone || ""}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="mt-8 flex justify-between items-center">
        {step > 0 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-1 text-sm font-medium text-[#5A5A5A] hover:text-[#1A1A1A] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
        ) : (
          <div />
        )}
        {step < 1 ? (
          <button
            onClick={() => setStep(1)}
            disabled={!values.address?.trim()}
            className="rounded-full bg-[#C6A664] px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4BC82] transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!values.name?.trim() || !values.email?.trim()}
            className="rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#333] transition-colors"
          >
            Get My Free CMA
          </button>
        )}
      </div>
    </div>
  );
}
