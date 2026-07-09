import type { Metadata } from "next";
import CmaForm from "@/components/CmaForm";
import SiteHeader from "@/components/SiteHeader";
import Link from "next/link";
import { cityPages } from "@/lib/city-pages";
import { countyPages } from "@/lib/county-pages";
import {
  formatCurrency,
  formatSnapshotDate,
  marketSnapshotMap,
} from "@/lib/market-data";
import { neighborhoodPages } from "@/lib/neighborhood-pages";

export const metadata: Metadata = {
  title: "Free Snohomish County CMA for Sellers",
  description:
    "Get a free Snohomish County CMA plus a seller prep checklist, listing guidance, repair triage, and showing tips for homeowners getting ready to sell in Snohomish County, Washington.",
  keywords: [
    "free CMA Snohomish County",
    "Snohomish County real estate agent seller",
    "Snohomish County listing prep",
    "how to sell a house in Snohomish County",
    "what is my house worth in Snohomish County",
    "Everett home value",
    "Lynnwood home value",
    "Edmonds home value",
    "Mukilteo home value",
    "Mill Creek home value",
    "Lake Stevens home value",
    "Marysville home value",
    "Monroe home value",
    "Snohomish WA home value",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Free Snohomish County CMA for Sellers",
    description:
      "Free Snohomish County CMA plus seller guidance on repairs, prep, paperwork, and pricing before you list.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Snohomish County CMA for Sellers",
    description:
      "Free Snohomish County CMA plus seller guidance on repairs, prep, paperwork, and pricing before you list.",
    images: ["/opengraph-image"],
  },
};

const sellerGuideCards = [
  {
    eyebrow: "Before Listing",
    title: "What to do before selling your house",
    description:
      "Start with decluttering, minor repairs, brighter lighting, and a pricing plan based on real comps before you spend on big projects.",
    href: "#timeline",
  },
  {
    eyebrow: "Repairs",
    title: "What fixes are worth it before you sell",
    description:
      "Cosmetic clean-up and anything visibly broken matter more than expensive remodels that rarely pay back in full.",
    href: "#repairs",
  },
  {
    eyebrow: "Showings",
    title: "How to get your house ready for showings",
    description:
      "Less stuff, more light, and a daily show-ready routine help photos land better and buyers stay longer in the home.",
    href: "#show-ready",
  },
  {
    eyebrow: "Paperwork",
    title: "What documents to gather before listing",
    description:
      "Seller disclosures, HOA documents, warranties, utility info, and keys are easier to organize before the market clock starts.",
    href: "#paperwork",
  },
];

const valuationReasons = [
  {
    title: "Upgrades Count",
    description:
      "A new roof, updated HVAC, clean inspection history, and thoughtful improvements all change how buyers price risk.",
  },
  {
    title: "Micro-Market Matters",
    description:
      "Quiet streets, views, school boundaries, traffic patterns, and lot position move value even when the ZIP code is the same.",
  },
  {
    title: "Current Demand Wins",
    description:
      "Pending activity, showing velocity, and buyer competition right now matter more than stale comps from a different market.",
  },
  {
    title: "Prep Changes Price",
    description:
      "The same home can perform very differently depending on clutter, odors, deferred maintenance, and how it photographs on day one.",
  },
];

const timelineSteps = [
  {
    label: "4 to 6 weeks out",
    title: "Declutter and make the home feel bigger.",
    bullets: [
      "Box anything you have not used in the last six months.",
      "Clear countertops, dressers, and shelves down to a few intentional items.",
      "Thin closets and cabinets so storage reads larger when buyers open them.",
    ],
  },
  {
    label: "2 to 4 weeks out",
    title: "Handle the repairs buyers notice immediately.",
    bullets: [
      "Fix leaky faucets, running toilets, sticking doors, loose hardware, and cracked covers.",
      "Patch nail holes, touch up paint, and neutralize bold-color rooms if the budget allows.",
      "Replace burned-out bulbs, refresh caulk, and swap dirty HVAC filters.",
    ],
  },
  {
    label: "1 to 2 weeks out",
    title: "Deep clean and gather the seller paperwork.",
    bullets: [
      "Clean windows, tracks, vents, grout, baseboards, and appliance interiors.",
      "Pull together disclosure notes, HOA documents, warranties, and repair receipts.",
      "Set aside keys, mailbox keys, remotes, gate codes, and utility details buyers ask for.",
    ],
  },
  {
    label: "Once live",
    title: "Keep the home show-ready and easy to access.",
    bullets: [
      "Make beds, clear dishes, wipe counters, and do a quick vacuum daily.",
      "Say yes to as many showings as possible, especially during the first two weeks.",
      "Leave for showings when you can and take pets with you so buyers linger longer.",
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
        item: "Fresh interior paint",
        detail: "Neutral rooms photograph better and feel larger online and in person.",
      },
      {
        item: "Deep clean and odor removal",
        detail: "This is often the best prep money spent in the entire listing process.",
      },
      {
        item: "Minor repairs",
        detail: "Loose hardware, broken fixtures, and deferred maintenance create avoidable buyer doubt.",
      },
      {
        item: "Curb appeal clean-up",
        detail: "Trimmed landscaping and a sharp front entry change the first showing before buyers walk in.",
      },
    ],
  },
  {
    title: "Ask before spending",
    accent: "bg-red-500",
    text: "text-red-600",
    items: [
      {
        item: "Full kitchen remodel",
        detail: "The market rarely pays you back dollar-for-dollar for a major last-minute renovation.",
      },
      {
        item: "Major bath renovation",
        detail: "A clean cosmetic refresh usually outperforms an expensive overhaul right before listing.",
      },
      {
        item: "Landscape redesign",
        detail: "Buyers respond to clean and maintained more than elaborate new installs.",
      },
      {
        item: "Any large project without pricing context",
        detail: "Know the likely list strategy first so you do not improve the wrong thing for your buyer pool.",
      },
    ],
  },
];

const searchFaqs = [
  {
    question: "What should I fix before selling my house?",
    answer:
      "Start with anything obviously broken, anything that smells, and anything that makes the home feel smaller or darker. Buyers forgive dated finishes faster than deferred maintenance.",
  },
  {
    question: "Should I remodel before listing my home?",
    answer:
      "Usually not. Paint, repairs, cleaning, lighting, and decluttering tend to outperform expensive remodels done right before the home hits the market.",
  },
  {
    question: "How do I prepare my house for listing photos?",
    answer:
      "Clear surfaces, pull excess furniture, open blinds, replace burned-out bulbs, hide pet items, and make every room read as clean, bright, and easy to move through.",
  },
  {
    question: "What paperwork do I need before I sell a house in Washington?",
    answer:
      "Most sellers should have disclosure information ready, plus HOA documents if applicable, repair receipts, appliance details, utility information, and all keys, remotes, and access codes.",
  },
];

const snohomishCities = [
  "Arlington",
  "Everett",
  "Lynnwood",
  "Edmonds",
  "Mukilteo",
  "Mill Creek",
  "Bothell",
  "Snohomish",
  "Monroe",
  "Stanwood",
  "Sultan",
  "Lake Stevens",
  "Marysville",
];

const featuredCityPages = cityPages;
const featuredCountyPages = countyPages;
const featuredNeighborhoodPages = neighborhoodPages;

const snohomishSellerTopics = [
  {
    title: "Price against the real buyer pool",
    description:
      "Snohomish County pricing can swing quickly based on commute access, school boundaries, views, lot usability, and whether the home competes with newer inventory nearby.",
  },
  {
    title: "Prep for what buyers flag locally",
    description:
      "Older roofs, drainage, moss, crawlspace issues, deferred exterior maintenance, and stale interiors all matter more when buyers compare your home against cleaner options.",
  },
  {
    title: "Know the paperwork early",
    description:
      "Seller disclosures, HOA documents, septic or well details when applicable, and repair history are easier to organize before the listing timeline gets compressed.",
  },
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
    ...snohomishCities.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Washington",
      },
    })),
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <SiteHeader />

      <section className="relative flex h-screen min-h-[700px] items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80) center/cover no-repeat",
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Free Snohomish County CMA for Sellers
          </p>
          <h1 className="text-4xl font-light leading-[1.15] tracking-tight text-white sm:text-5xl md:text-7xl">
            Know What Buyers Will Pay
            <br />
            <span className="font-semibold text-[#C6A664]">Before You List</span>
          </h1>
          <p className="mx-auto mt-8 max-w-3xl text-lg font-light leading-relaxed text-white/80 sm:text-xl">
            Get a hand-built Comparative Market Analysis for your Snohomish
            County home plus practical seller prep guidance so you can price
            correctly, skip the wrong repairs, and go live with a cleaner
            listing from day one.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#cma"
              className="group rounded-full bg-[#C6A664] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] transition-all hover:bg-[#D4BC82]"
            >
              Get My Free CMA
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#timeline"
              className="rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-white/10"
            >
              Seller Prep Guide
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 pt-2">
            <div className="h-2 w-1 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      <section id="county-guides" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Snohomish County Sellers
              </p>
              <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Seller guidance built for Snohomish County, WA
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
                If you are getting ready to sell in Snohomish County, the goal
                is not generic advice. It is understanding what buyers in your
                submarket are actually comparing, what prep work moves the
                needle, and what price story your home can support right now.
              </p>
            </div>
            <div className="rounded-3xl border border-[#E8E4DF] bg-[#F8F5F0] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                Areas commonly served
              </p>
              <p className="mt-4 text-sm leading-7 text-[#5A5A5A]">
                {snohomishCities.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1A1A1A]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {[
            { value: "100+", label: "Homes Successfully Sold" },
            { value: "$50M+", label: "Total Sales Volume" },
            { value: "WA", label: "Licensed Agent" },
            { value: "ASAP", label: "CMA Follow-Up and Prep Guidance" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-bold text-[#C6A664] sm:text-3xl">
                {item.value}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/60">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            The Truth About Home Pricing
          </p>
          <h2 className="text-3xl font-light leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
            A Good Snohomish County List Price Comes From
            <span className="font-semibold text-[#C6A664]"> Real Context</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#5A5A5A]">
            Automated estimates can be a reference point. They are not a
            pricing strategy. Sellers usually make or lose money on the details
            the algorithm cannot see.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {valuationReasons.map((item, index) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-[#E8E4DF] bg-white shadow-lg transition-all duration-500 hover:border-[#C6A664]/30 hover:shadow-2xl"
            >
              <div className="flex h-48 items-center justify-center bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE8] transition-transform duration-700 group-hover:scale-105">
                {index === 0 && (
                  <svg
                    className="h-14 w-14 text-[#C6A664]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 21h18M5 21V7l7-4 7 4v14M9 9h6v6H9z"
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    className="h-14 w-14 text-[#C6A664]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21C12 21 3 13.5 3 9a9 9 0 1118 0c0 4.5-9 12-9 12z"
                    />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    className="h-14 w-14 text-[#C6A664]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 7l-8.5 8.5L11 13l-6.5 7H22"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7h6v6"
                    />
                  </svg>
                )}
                {index === 3 && (
                  <svg
                    className="h-14 w-14 text-[#C6A664]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5v14"
                    />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                )}
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-lg font-semibold transition-colors group-hover:text-[#C6A664]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#5A5A5A]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Local Seller Strategy
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              What Snohomish County home sellers usually need before listing
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {snohomishSellerTopics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold leading-snug">
                  {topic.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8E4DF] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Features and Guides
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Built around the questions sellers actually search before they list
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {sellerGuideCards.map((card) => (
              <a
                key={card.title}
                href={card.href}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              County Seller Hubs
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Start broad with county pages, then drill down by city and neighborhood
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              These county-level guides pull together market context, city pages,
              and neighborhood pages so sellers can move from broad trends to a
              sharper local pricing strategy.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {featuredCountyPages.map((entry) => {
              const snapshot = marketSnapshotMap.get(entry.slug);

              return (
                <Link
                  key={entry.slug}
                  href={`/sell/${entry.slug}`}
                  className="rounded-3xl border border-[#E8E4DF] bg-[#111111] p-8 text-white transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    County guide
                  </p>
                  <h3 className="mt-3 text-3xl font-light">{entry.county}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-white/72">
                    {entry.metaDescription}
                  </p>
                  {snapshot && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-3">
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="text-xs uppercase tracking-[0.14em] text-white/55">
                          Median sale
                        </div>
                        <div className="mt-2 text-xl font-semibold">
                          {formatCurrency(snapshot.medianSalePrice)}
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="text-xs uppercase tracking-[0.14em] text-white/55">
                          DOM
                        </div>
                        <div className="mt-2 text-xl font-semibold">
                          {snapshot.medianDom} days
                        </div>
                      </div>
                      <div className="rounded-2xl bg-white/6 p-4">
                        <div className="text-xs uppercase tracking-[0.14em] text-white/55">
                          Snapshot date
                        </div>
                        <div className="mt-2 text-sm font-semibold">
                          {formatSnapshotDate(snapshot.periodEnd)}
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="city-pages" className="border-y border-[#E8E4DF] bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              City Seller Pages
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Local seller pages for the cities you actually care about
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              Browse city-specific seller pages for pricing context, prep
              priorities, and common questions before you list.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredCityPages.map((entry) => (
              <Link
                key={entry.slug}
                href={`/sell/${entry.slug}`}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  {entry.county}, WA
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{entry.city}</h3>
                <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                  {entry.metaDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="neighborhood-pages" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Neighborhood and Subarea Pages
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Targeted local pages for smaller search terms sellers actually use
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              Pulled from the local area dataset in `moving2pnw`, these pages add
              neighborhood-level seller intent coverage without feeling like a
              directory dump.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredNeighborhoodPages.map((entry) => {
              const snapshot = marketSnapshotMap.get(entry.slug);

              return (
                <Link
                  key={entry.slug}
                  href={`/sell/neighborhoods/${entry.slug}`}
                  className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    {entry.parentCity}, WA
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{entry.areaName}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    {entry.metaDescription}
                  </p>
                  {snapshot && (
                    <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                      {formatCurrency(snapshot.medianSalePrice)} median sale price •{" "}
                      {snapshot.medianDom} median DOM • imported {formatSnapshotDate(
                        snapshot.periodEnd,
                      )}
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="bg-[#1A1A1A]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(26,26,26,0.95), rgba(26,26,26,0.8)), url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            How It Works
          </p>
          <h2 className="text-3xl font-light leading-tight sm:text-4xl">
            Tell us about the property.
            <br />
            <span className="font-semibold">We&apos;ll do the research.</span>
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-3 gap-8 text-white/80">
            {[
              { step: "1", label: "Share Details" },
              { step: "2", label: "We Analyze Comps" },
              { step: "3", label: "Get Your CMA" },
            ].map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#C6A664] text-lg font-bold text-[#C6A664]">
                  {step.step}
                </div>
                <p className="text-xs uppercase tracking-[0.15em]">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cma" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Free Comparative Market Analysis
              </p>
              <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
                Get a Pricing Range
                <br />
                <span className="font-semibold text-[#C6A664]">
                  and a Smarter Snohomish County Prep Plan
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-[#5A5A5A]">
                Share the property details and we&apos;ll review comparable
                Snohomish County sales, current buyer demand, and the prep
                decisions most likely to affect your list strategy. Free,
                local, and no obligation.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Hand-built CMA with real comparable context",
                  "Practical guidance on what to fix and what to skip",
                  "ASAP follow-up from Matt Salit",
                  "No obligation and no pressure",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C6A664]/10">
                      <svg
                        className="h-3.5 w-3.5 text-[#C6A664]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-[#F8F5F0] p-8 sm:p-10">
              <CmaForm />
            </div>
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Pre-List Checklist
            </p>
            <h2 className="text-3xl font-light leading-[1.2] tracking-tight sm:text-4xl md:text-5xl">
              What to do before selling your Snohomish County house,
              <span className="font-semibold"> in order</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5A5A5A]">
              Work top to bottom as the list date approaches: less stuff, more
              light, and everything working. That is the simplest version of a
              home that shows well and supports a stronger price story.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {timelineSteps.map((step) => (
              <div
                key={step.label}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-8 shadow-sm"
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

      <section id="repairs" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              What to Fix Before Selling
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Spend where Snohomish County buyers notice.
              <span className="font-semibold text-[#C6A664]">
                {" "}
                Skip vanity projects.
              </span>
            </h2>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {repairSections.map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-2xl bg-[#F8F5F0] shadow-sm"
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
                          <p className="text-sm text-[#5A5A5A]">{item.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-2">
            <div id="show-ready" className="rounded-3xl bg-[#1A1A1A] p-10 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                How to Prepare for Showings
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight">
                Show-ready beats perfect.
              </h2>
              <p className="mt-5 leading-7 text-white/75">
                Buyers decide quickly. A home that feels bright, open, and easy
                to move through photographs better, gets stronger showing
                feedback, and supports cleaner offers.
              </p>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-white/80">
                {[
                  "Make beds, clear dishes, wipe counters, and do a quick vacuum daily.",
                  "Remove pet bowls, litter boxes, and anything creating odor or visual clutter.",
                  "Open blinds, turn on lights, and keep matching warm bulbs throughout the house.",
                  "Secure valuables, medications, and personal paperwork before the first showing.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A664]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div id="paperwork" className="rounded-3xl border border-[#E8E4DF] bg-white p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Seller Paperwork Checklist
              </p>
              <h2 className="mt-4 text-3xl font-light leading-tight">
                Gather these before the listing clock starts.
              </h2>
              <ul className="mt-8 space-y-4 text-sm leading-6 text-[#5A5A5A]">
                {[
                  "Disclosure details for Form 17 so known issues are documented early and accurately.",
                  "HOA or condo resale documents, dues, CC&Rs, and any special assessment information.",
                  "Appliance manuals, repair receipts, warranties, and notes on recent improvements.",
                  "Average utility costs, service contracts, keys, fobs, remotes, and access codes.",
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Questions
            </p>
            <h2 className="text-3xl font-light leading-tight tracking-tight sm:text-4xl">
              Snohomish County seller questions people ask before they list
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

      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-light leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to Price the Home
            <br />
            <span className="font-semibold text-[#C6A664]">
              and Prep It the Right Way?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/70">
            Free hand-built CMA. Practical seller prep guidance. Local expertise.
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
