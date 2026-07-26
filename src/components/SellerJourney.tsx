import CornerAccent from "@/components/CornerAccent";
import SectionDivider from "@/components/SectionDivider";

const steps = [
  {
    id: "01",
    title: "Ask",
    subtitle: "Get answers before you lift a finger",
    description:
      "Before listing, before calling contractors — get clear on what actually matters. Decluttering, repairs, staging, disclosures, timing. Every question you have before selling, answered with local Snohomish County context.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    href: "/#seller-answers",
  },
  {
    id: "02",
    title: "Price",
    subtitle: "Know what your home is worth",
    description:
      "A focused CMA that looks at your actual neighborhood, not just ZIP code averages. See recent sales, active competition, and what buyers are willing to pay right now in your specific market.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    href: "/#cma",
  },
  {
    id: "03",
    title: "List",
    subtitle: "Launch with clarity and confidence",
    description:
      "When you've done the prep and know the numbers, listing stops feeling like a gamble. You'll know which repairs mattered, how to price the launch, and what to expect in the first critical two weeks.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.841m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    href: "/#cma",
  },
];

export default function SellerJourney() {
  return (
    <section id="seller-journey" className="bg-[#1A1A1A] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            The Right Order Matters
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
            Three steps to a confident listing
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-base text-white/55">
            Most sellers stress because they start in the wrong place. Here is the sequence that actually works.
          </p>
        </div>

        <SectionDivider tone="dark" align="center" />

        {/* Steps */}
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <a
              key={step.id}
              href={step.href}
              className="group relative block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#C6A664]/30 hover:bg-[#C6A664]/5"
            >
              <CornerAccent tone="gold" className="absolute right-4 top-4 h-6 w-10 opacity-20 group-hover:opacity-40 transition-opacity" />

              {/* Step badge */}
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A664]/10 text-sm font-bold text-[#C6A664]">
                  {step.id}
                </span>
                <div className="text-[#C6A664]/60">{step.icon}</div>
              </div>

              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
              <p className="text-sm font-medium text-[#C6A664] mb-3">{step.subtitle}</p>
              <p className="text-sm leading-relaxed text-white/50">
                {step.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[#C6A664] opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <span>→</span>
              </div>

              {/* Connector arrow between steps on desktop */}
              {i < 2 && (
                <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#C6A664]/30 text-lg">
                  →
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
