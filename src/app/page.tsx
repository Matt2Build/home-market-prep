import type { Metadata } from "next";
import Link from "next/link";
import CmaForm from "@/components/CmaForm";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Free Snohomish County CMA for Sellers",
  description:
    "Get a free Snohomish County CMA plus straightforward seller guidance on pricing, repairs, showings, and listing prep before you put your home on the market.",
  keywords: [
    "free CMA Snohomish County",
    "Snohomish County seller guide",
    "what is my home worth Snohomish County",
    "how to prepare house for sale Snohomish County",
    "what to fix before selling house Washington",
    "seller checklist Washington",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Snohomish County CMA for Sellers",
    description:
      "Free CMA plus practical seller guidance on pricing, repairs, and listing prep before you sell.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Snohomish County CMA for Sellers",
    description:
      "Free CMA plus practical seller guidance on pricing, repairs, and listing prep before you sell.",
    images: ["/opengraph-image"],
  },
};

const sellerGuideCards = [
  {
    eyebrow: "Pricing",
    title: "How to price before you list",
    description:
      "Use real comps, current competition, and property condition instead of broad online estimates.",
    href: "#cma",
  },
  {
    eyebrow: "Checklist",
    title: "What to do before selling",
    description:
      "Declutter, repair the obvious problems, clean deeply, and gather paperwork before launch week.",
    href: "#timeline",
  },
  {
    eyebrow: "Repairs",
    title: "What fixes are worth it",
    description:
      "Cosmetic cleanup and visible maintenance usually matter more than rushed high-cost remodels.",
    href: "#repairs",
  },
  {
    eyebrow: "Showings",
    title: "How to get show-ready fast",
    description:
      "Create a brighter, simpler, lower-friction home that photographs well and feels easy to buy.",
    href: "#show-ready",
  },
];

const sellerFocusPoints = [
  {
    title: "Know the likely price range",
    description:
      "Get a real comp-based read before you pick a list price or spend money in the wrong places.",
  },
  {
    title: "Prioritize the right prep",
    description:
      "Find out which repairs and cleanup items actually matter before you go live.",
  },
  {
    title: "Get market-ready faster",
    description:
      "Use the checklist, repair guidance, and seller FAQs to avoid a messy pre-list scramble.",
  },
];

const timelineSteps = [
  {
    label: "First",
    title: "Declutter and simplify the home.",
    bullets: [
      "Clear surfaces, thin closets, and remove anything that makes rooms feel smaller.",
      "Box up extra decor, bulky furniture, and personal items early.",
    ],
  },
  {
    label: "Next",
    title: "Fix the obvious buyer objections.",
    bullets: [
      "Handle leaky faucets, sticking doors, loose hardware, cracked covers, and burned-out bulbs.",
      "Touch up paint, refresh caulk, and clean up visible exterior neglect.",
    ],
  },
  {
    label: "Then",
    title: "Deep clean and gather the paperwork.",
    bullets: [
      "Clean windows, vents, baseboards, appliances, and bathrooms thoroughly.",
      "Pull together disclosures, HOA docs, receipts, manuals, remotes, and keys.",
    ],
  },
  {
    label: "Once live",
    title: "Keep it show-ready for the first two weeks.",
    bullets: [
      "Make beds, wipe counters, vacuum quickly, and remove pet clutter daily.",
      "Say yes to as many showings as possible while the listing is freshest.",
    ],
  },
];

const repairSections = [
  {
    title: "Usually worth doing",
    accent: "bg-green-600",
    text: "text-green-700",
    items: [
      {
        item: "Paint, patching, and touch-ups",
        detail: "A cleaner, more neutral home photographs better and feels easier to buy.",
      },
      {
        item: "Deep cleaning and odor removal",
        detail: "This is often the highest-return pre-list spend on the entire house.",
      },
      {
        item: "Minor visible repairs",
        detail: "Fix the things buyers mentally add to a future repair list during the showing.",
      },
    ],
  },
  {
    title: "Usually not first",
    accent: "bg-red-500",
    text: "text-red-600",
    items: [
      {
        item: "Full kitchen remodels",
        detail: "The market rarely pays back a rushed last-minute renovation dollar for dollar.",
      },
      {
        item: "Major bath overhauls",
        detail: "A clean cosmetic refresh is usually enough if the rest of the home shows well.",
      },
      {
        item: "Large projects without pricing context",
        detail: "Know your target buyer and likely list strategy before spending heavily.",
      },
    ],
  },
];

const searchFaqs = [
  {
    question: "What should I fix before selling my house?",
    answer:
      "Start with anything obviously broken, anything that smells, and anything that makes the home feel smaller, darker, or harder to maintain.",
  },
  {
    question: "Should I remodel before listing my home?",
    answer:
      "Usually not. Paint, repairs, cleaning, lighting, and decluttering tend to outperform expensive remodels done right before the home hits the market.",
  },
  {
    question: "How do I prepare my house for listing photos?",
    answer:
      "Clear surfaces, remove excess furniture, open blinds, replace burned-out bulbs, hide pet items, and make every room read as clean and bright.",
  },
  {
    question: "What paperwork do I need before I sell a house in Washington?",
    answer:
      "Most sellers should have disclosure information ready, plus HOA documents if applicable, repair receipts, appliance details, utility information, and all keys or access codes.",
  },
];

const popularGuides = [
  { href: "/sell/snohomish-county-wa", label: "Snohomish County Guide" },
  { href: "/sell/skagit-county-wa", label: "Skagit County Guide" },
  { href: "/sell/everett-wa", label: "Everett Seller Page" },
  { href: "/sell/bothell-wa", label: "Bothell Seller Page" },
  { href: "/sell/lynnwood-wa", label: "Lynnwood Seller Page" },
  { href: "/sell/marysville-wa", label: "Marysville Seller Page" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: searchFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://home-market-prep.vercel.app/#agent",
  name: "HomeMarketPrep",
  url: "https://home-market-prep.vercel.app/",
  email: "mattsalit@writemyoffer.com",
  telephone: "+1-805-304-3976",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Snohomish County, Washington",
    },
    {
      "@type": "AdministrativeArea",
      name: "Skagit County, Washington",
    },
  ],
  serviceType: [
    "Comparative Market Analysis",
    "Seller pre-list preparation guidance",
    "Home selling consultation",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Century 21 North Homes",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "HomeMarketPrep",
  url: "https://home-market-prep.vercel.app/",
  description:
    "Free Snohomish County CMA and seller prep guidance for homeowners getting ready to list.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] font-sans text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(130deg, rgba(17,17,17,0.94) 15%, rgba(17,17,17,0.78) 55%, rgba(17,17,17,0.9) 100%), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80) center/cover no-repeat",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-18 md:grid-cols-[1.05fr,0.95fr] md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Free CMA for Snohomish County Sellers
            </p>
            <h1 className="mt-5 text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl md:text-6xl">
              Find out what your home could sell for
              <span className="font-semibold text-[#C6A664]"> before you list</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/78">
              Get a hand-built CMA, straightforward prep guidance, and a cleaner
              plan for pricing, repairs, and launch timing without turning the
              whole process into a project.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                Free hand-built CMA
              </span>
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                Local seller prep guidance
              </span>
              <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
                Fast follow-up
              </span>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {sellerFocusPoints.map((point, index) => (
                <div
                  key={point.title}
                  className="border-l border-white/15 pl-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A664]">
                    0{index + 1}
                  </p>
                  <h2 className="mt-3 text-base font-semibold leading-snug">
                    {point.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cma"
                className="rounded-full bg-[#C6A664] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
              >
                Get My Free CMA
              </a>
              <a
                href="#seller-guides"
                className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
              >
                Seller Questions
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/60">
              No obligation. Just local pricing context and clear next steps.
            </p>
          </div>

          <div
            id="cma"
            className="rounded-[32px] border border-white/10 bg-[#F8F5F0] p-7 text-[#1A1A1A] shadow-2xl sm:p-9"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A664]">
              Start Here
            </p>
            <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight">
              Request your free CMA
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
              Tell us where the property is and where to send the CMA. We&apos;ll
              review comps, current competition, and the prep moves most likely
              to change your list strategy.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium text-[#5A5A5A]">
              <span className="rounded-full bg-white px-3 py-1.5">
                Hand-built comp review
              </span>
              <span className="rounded-full bg-white px-3 py-1.5">
                Seller prep guidance
              </span>
              <span className="rounded-full bg-white px-3 py-1.5">
                Fast follow-up
              </span>
            </div>
            <div className="mt-6 rounded-3xl bg-white p-6 sm:p-7">
              <CmaForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                A Cleaner Seller Plan
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Start with price, then prep the home around that strategy
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
                Most sellers get stuck because they are trying to answer pricing,
                repairs, timing, and presentation all at once. The goal here is
                to narrow that down fast.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {[
                {
                  label: "Price",
                  title: "See the likely range first",
                  description:
                    "Use current comps and competition to understand where the property fits now.",
                },
                {
                  label: "Prep",
                  title: "Focus on the visible wins",
                  description:
                    "Tackle cleanup, repairs, and updates that actually improve buyer perception.",
                },
                {
                  label: "Launch",
                  title: "Go live with less friction",
                  description:
                    "Use a simpler checklist so photos, showings, and paperwork do not pile up late.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="seller-guides" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Questions
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              What most sellers want to know before they list
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              Start here if you are trying to figure out price, prep, repairs, or
              how much work to do before the listing goes live.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sellerGuideCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  {card.eyebrow}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                  {card.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Checklist
            </p>
            <h2 className="mt-4 text-3xl font-light leading-tight tracking-tight sm:text-4xl md:text-5xl">
              What to do before your house hits the market
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              Keep it simple: declutter first, fix the obvious issues, clean
              deeply, and make the home easy to show when the listing goes live.
            </p>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {timelineSteps.map((step) => (
              <div
                key={step.label}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-8 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  {step.label}
                </p>
                <h3 className="mt-4 text-xl font-semibold leading-snug">
                  {step.title}
                </h3>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-[#5A5A5A]">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A664]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="repairs" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Repairs and Prep
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Spend where buyers notice. Skip the vanity projects.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {repairSections.map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <div className={`h-8 ${section.accent}`} />
                <div className="p-8">
                  <h3 className={`mb-6 text-xl font-semibold ${section.text}`}>
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item.item} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A664]" />
                        <div>
                          <p className="font-medium">{item.item}</p>
                          <p className="text-sm leading-6 text-[#5A5A5A]">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div id="show-ready" className="rounded-3xl bg-[#111111] p-10 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Showings
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight">
                Show-ready beats perfect.
              </h2>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-white/80">
                {[
                  "Make beds, clear dishes, wipe counters, and do a quick vacuum daily.",
                  "Remove pet bowls, litter boxes, and anything that creates odor or clutter.",
                  "Open blinds, turn on lights, and keep the home easy to move through.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A664]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-[#E8E4DF] bg-white p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Paperwork
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight">
                Gather the important documents early.
              </h2>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-[#5A5A5A]">
                {[
                  "Disclosure notes and Form 17 details.",
                  "HOA or condo documents, dues, CC&Rs, and assessments if applicable.",
                  "Repair receipts, warranties, manuals, utility notes, keys, remotes, and codes.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A664]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="seller-faqs" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Common questions sellers ask before they list
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {searchFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-8"
              >
                <h3 className="text-xl font-semibold leading-snug">
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8E4DF] bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-18">
          <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Local Guides
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Browse city and county pages separately
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
                The homepage stays focused on seller prep and CMAs. Local market
                pages live in their own place so they are easier to browse and
                easier to search.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {popularGuides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="rounded-full border border-[#D8D0C4] bg-white px-4 py-2 text-sm font-medium text-[#1A1A1A] transition-colors hover:border-[#C6A664] hover:text-[#111111]"
                >
                  {guide.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.68), rgba(0,0,0,0.68)), url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to price the home
            <br />
            <span className="font-semibold text-[#C6A664]">
              and prep it the right way?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/72">
            Start with the CMA. Then use the checklist, repair guidance, and seller
            FAQs to clean up the rest of the process.
          </p>
          <a
            href="#cma"
            className="mt-10 inline-flex rounded-full bg-[#C6A664] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
          >
            Get My Free CMA Now
          </a>
        </div>
      </section>

      <footer className="bg-[#1A1A1A]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-b border-white/10 px-6 py-12 sm:flex-row">
          <div className="text-lg font-bold uppercase tracking-[0.2em]">
            <span className="text-white">Home</span>
            <span className="text-[#C6A664]">Market</span>
            <span className="text-white">Prep</span>
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Home Market Prep. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            From the makers of{" "}
            <a
              href="https://writemyoffer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#C6A664] transition-colors hover:text-[#D4BC82]"
            >
              WriteMyOffer.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
