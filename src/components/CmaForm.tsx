"use client";

import { useState } from "react";

const fields = [
  {
    label: "Property Address *",
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
    placeholder: "2",
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
    label: "Any Recent Upgrades? (optional)",
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
    label: "Your Name *",
    name: "name",
    type: "text",
    placeholder: "Jane Doe",
    required: true,
  },
  {
    label: "Email *",
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
  fields.slice(0, 2), // Property address, beds
  fields.slice(2, 5), // Baths, sqft, upgrades
  fields.slice(5, 6), // Timeline (single Q)
  fields.slice(6, 9), // Name, email, phone
  fields.slice(9, 10), // Message
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
    return currentFields.every((f) => !f.required || (values[f.name] || "").trim());
  };

  const handleSubmit = async () => {
    // TODO: wire to HubSpot form submission API
    // HubSpot form submit: POST to your form endpoint
    // Or server action for clean server-side submission
    console.log("CMA Form submitted:", values);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="text-xl font-bold text-green-800">Your CMA Is Being Prepared!</h3>
        <p className="mt-3 text-green-700 leading-relaxed">
          We&apos;re researching comps and current market data for your property.
          Expect to hear from us within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i <= step ? "bg-amber-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Current step fields */}
      <div className="space-y-5">
        {steps[step].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1.5">
              {field.label}
            </label>
            {field.type === "select" ? (
              <select
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="">Select…</option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
              />
            ) : (
              <input
                type={field.type}
                value={values[field.name] || ""}
                onChange={(e) => handleChange(field.name, e.target.value)}
                placeholder={field.placeholder}
                required={field.required}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-base focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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
            className="text-sm font-medium text-gray-600 hover:text-gray-800"
          >
            ← Back
          </button>
        ) : (
          <div />
        )}
        {step < steps.length - 1 ? (
          <button
            onClick={() => canNext() && setStep(step + 1)}
            disabled={!canNext()}
            className="rounded-full bg-amber-600 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-amber-700 transition-colors"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canNext()}
            className="rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-green-700 transition-colors"
          >
            Submit My CMA Request
          </button>
        )}
      </div>
    </div>
  );
}
