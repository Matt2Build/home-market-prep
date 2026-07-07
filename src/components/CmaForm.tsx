"use client";

import { useState } from "react";

const allFields = [
  {
    label: "Property Address",
    name: "address",
    type: "text",
    placeholder: "123 Main St, City, WA 98001",
    required: true,
  },
  {
    label: "How Many Bedrooms?",
    name: "bedrooms",
    type: "number",
    placeholder: "3",
    required: false,
  },
  {
    label: "How Many Bathrooms?",
    name: "bathrooms",
    type: "number",
    placeholder: "2.5",
    required: false,
  },
  {
    label: "Approx. Square Footage",
    name: "sqft",
    type: "number",
    placeholder: "1,800",
    required: false,
  },
  {
    label: "Any Recent Upgrades?",
    name: "upgrades",
    type: "text",
    placeholder: "New roof 2024, remodeled kitchen 2023…",
    required: false,
  },
  {
    label: "When Are You Thinking of Selling?",
    name: "timeline",
    type: "select",
    options: [
      "Within 1–3 months",
      "3–6 months",
      "6–12 months",
      "Just exploring right now",
    ],
    required: false,
  },
  {
    label: "Your Name",
    name: "name",
    type: "text",
    placeholder: "Jane Doe",
    required: true,
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "jane@email.com",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    placeholder: "(206) 555-0123",
    required: false,
  },
  {
    label: "Anything Else We Should Know?",
    name: "message",
    type: "textarea",
    placeholder: "Questions, concerns, or anything else about your property…",
    required: false,
  },
];

const steps = [
  allFields.slice(0, 2), // Address, beds
  allFields.slice(2, 4), // Baths, sqft
  allFields.slice(4, 5), // Timeline (single Q)
  allFields.slice(5, 6), // Upgrades (single Q)
  allFields.slice(6, 9), // Name, email, phone
  allFields.slice(9, 10), // Message
];

const stepTitles = [
  "Where is your property?",
  "Tell us about the space",
  "What's your timeline?",
  "Any recent improvements?",
  "How do we reach you?",
  "Anything else?",
];

export default function CmaForm() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const canNext = () => {
    const currentFields = steps[step];
    return currentFields.every(
      (f) => !f.required || (values[f.name] || "").trim()
    );
  };

  const handleSubmit = async () => {
    console.log("CMA Form submitted:", values);
    // TODO: wire to HubSpot form submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-[#1A1A1A]">
          Your CMA Is Being Prepared
        </h3>
        <p className="mt-3 text-[#5A5A5A] leading-relaxed max-w-sm mx-auto">
          We&apos;re researching comps and current market data for your
          property. Expect to hear from us within 24 hours.
        </p>
      </div>
    );
  }

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C6A664]">
            Step {step + 1} of {steps.length}
          </p>
          <p className="text-xs text-[#5A5A5A]">{Math.round(progress)}%</p>
        </div>
        <div className="h-1.5 bg-[#E8E4DF] rounded-full overflow-hidden">
          <div
            className="h-full bg-[#C6A664] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step title */}
      <h3 className="text-xl font-semibold mb-6">{stepTitles[step]}</h3>

      {/* Fields */}
      <div className="space-y-4">
        {steps[step].map((field, idx) => (
          <div key={field.name}>
            {field.type === "textarea" ? (
              <textarea
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all resize-none"
                autoFocus={idx === 0}
              />
            ) : field.type === "select" ? (
              <select
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all appearance-none cursor-pointer"
                autoFocus={idx === 0}
              >
                <option value="">Select a timeframe…</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full rounded-xl border border-[#E8E4DF] bg-white px-4 py-3 text-base placeholder:text-[#A1A1A1] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/40 focus:border-[#C6A664] transition-all"
                autoFocus={idx === 0}
              />
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
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
        {step < steps.length - 1 ? (
          <button
            onClick={() => canNext() && setStep(step + 1)}
            disabled={!canNext()}
            className="rounded-full bg-[#C6A664] px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#1A1A1A] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#D4BC82] transition-colors"
          >
            Continue
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext()}
            className="rounded-full bg-[#1A1A1A] px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#333] transition-colors"
          >
            Submit My CMA Request
          </button>
        )}
      </div>
    </div>
  );
}
