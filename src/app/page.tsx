import type { Metadata } from "next";
import Link from "next/link";
import CmaForm from "@/components/CmaForm";
import CornerAccent from "@/components/CornerAccent";
import {
  LocalGuideAnchorNav,
  LocalGuideFactGrid,
  LocalGuideSectionHeader,
} from "@/components/LocalGuideBlocks";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { sellerPrepPages } from "@/lib/seller-prep-pages";

const sellerQuestionVisuals: Record<
  string,
  { id: string; cue: string; tone: string }
> = {
  "declutter-before-selling-house-wa": {
    id: "01",
    cue: "Make the home feel larger",
    tone: "Clear rooms, lighter photos, less visual drag.",
  },
  "moving-storage-checklist-before-selling-wa": {
    id: "02",
    cue: "Keep the house market-ready",
    tone: "Pack early so showing mode is easier to maintain.",
  },
  "repairs-before-selling-house-wa": {
    id: "03",
    cue: "Fix what buyers remember",
    tone: "Visible maintenance usually matters more than remodels.",
  },
  "deep-clean-before-listing-house-wa": {
    id: "04",
    cue: "Clean for trust and light",
    tone: "Odor, brightness, and detail-level upkeep change perception fast.",
  },
  "paperwork-needed-to-sell-house-wa": {
    id: "05",
    cue: "Get organized before launch",
    tone: "Disclosures and practical docs are easier early than late.",
  },
  "show-ready-house-checklist-wa": {
    id: "06",
    cue: "Protect the first two weeks",
    tone: "Simple routines create better access and better momentum.",
  },
  "home-staging-tips-to-sell-house-wa": {
    id: "07",
    cue: "Help buyers read the layout",
    tone: "Furniture edits and better light usually beat extra decor.",
  },
  "seller-disclosures-checklist-wa": {
    id: "08",
    cue: "Reduce risk before questions hit",
    tone: "Clear disclosures keep property issues from feeling larger.",
  },
  "best-time-to-sell-house-wa": {
    id: "09",
    cue: "Line up timing with readiness",
    tone: "The right week matters less than a stronger launch.",
  },
  "sell-house-as-is-wa": {
    id: "10",
    cue: "Be deliberate about condition",
    tone: "As-is still works better with clean prep and pricing discipline.",
  },
  "pre-listing-inspection-wa": {
    id: "11",
    cue: "Find issues before buyers do",
    tone: "Use inspection clarity to decide repair, disclose, or price around it.",
  },
};

const featuredPrepSlugs = [
  "declutter-before-selling-house-wa",
  "repairs-before-selling-house-wa",
  "paperwork-needed-to-sell-house-wa",
  "show-ready-house-checklist-wa",
  "home-staging-tips-to-sell-house-wa",
  "best-time-to-sell-house-wa",
];

const additionalPrepSlugs = [
  "deep-clean-before-listing-house-wa",
  "moving-storage-checklist-before-selling-wa",
  "seller-disclosures-checklist-wa",
  "sell-house-as-is-wa",
  "pre-listing-inspection-wa",
];

const featuredPrepPages = sellerPrepPages.filter((page) =>
  featuredPrepSlugs.includes(page.slug),
);

const additionalPrepPages = sellerPrepPages.filter((page) =>
  additionalPrepSlugs.includes(page.slug),
);

export const metadata: Metadata = {
  title: "Seller Questions Before Listing in Snohomish County",
  description:
    "Seller answers for Snohomish County homeowners getting ready to list. Learn what to fix, how to declutter, stage, disclose, time the launch, sell as-is, and request a CMA.",
  keywords: [
    "seller questions before listing",
    "how to prepare house for sale Snohomish County",
    "what to fix before selling house Washington",
    "how to stage a house to sell Washington",
    "paperwork needed to sell house Washington",
    "seller disclosures checklist Washington",
    "best time to sell house Washington",
    "sell house as is Washington",
    "show ready house checklist",
    "free CMA Snohomish County",
    "pre listing checklist Washington",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Seller Questions Before Listing in Snohomish County",
    description:
      "Seller answers on decluttering, repairs, staging, disclosures, showings, as-is strategy, and free CMA help before you list.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Questions Before Listing in Snohomish County",
    description:
      "Seller answers on decluttering, repairs, staging, disclosures, showings, as-is strategy, and free CMA help before you list.",
    images: ["/opengraph-image"],
  },
};

const searchFaqs = [
  {
    question: "Should I get a CMA before deciding what to fix?",
    answer:
      "Usually yes. A CMA helps connect the likely price range to the prep work that actually matters, instead of spending money on projects that may not move the result.",
    detail:
      "The best version of this process is not price first or prep first in isolation. It is understanding the likely range, then using that range to decide which seller projects support the strategy and which ones just create more work.",
    href: "/sell/checklists/repairs-before-selling-house-wa",
  },
  {
    question: "How far ahead should I start preparing to sell?",
    answer:
      "Most sellers should start four to six weeks before the target list date so decluttering, repairs, cleaning, and paperwork do not get compressed into one stressful week.",
    detail:
      "Starting early gives you room to declutter, gather documents, book cleaners or movers, and fix the visible maintenance items without turning launch week into a scramble.",
    href: "/sell/checklists/declutter-before-selling-house-wa",
  },
  {
    question: "What paperwork should I have ready before listing?",
    answer:
      "Start with disclosures, HOA or condo documents if they apply, repair receipts, warranties, utility details, manuals, keys, remotes, and access codes.",
    detail:
      "Paperwork is one of the easiest places for sellers to lose time late in the process. Getting it together earlier makes the home feel better organized and reduces buyer hesitation once questions start coming in.",
    href: "/sell/checklists/paperwork-needed-to-sell-house-wa",
  },
  {
    question: "What matters most once the home is on the market?",
    answer:
      "Show readiness and access matter a lot. The home should stay easy to tour, easy to understand, and easy for buyers to picture themselves in during the first two weeks.",
    detail:
      "The first two weeks usually shape the whole listing arc. A simple reset routine, flexible showing access, and a home that feels easy to buy matter more than trying to make it perfect every hour of the day.",
    href: "/sell/checklists/show-ready-house-checklist-wa",
  },
  {
    question: "Do I need staging before I list my house?",
    answer:
      "Not always professionally, but most sellers need some form of staging. Furniture editing, cleaner bedding, better light, and less visual clutter usually help the home photograph and show better.",
    detail:
      "Staging is really about making the layout easier to read. Sellers usually get more from removing bulky pieces and simplifying the rooms than from adding more decor.",
    href: "/sell/checklists/home-staging-tips-to-sell-house-wa",
  },
  {
    question: "Should I sell my house as-is or fix it first?",
    answer:
      "That depends on price range, buyer pool, and the type of condition issues involved. Many sellers can skip major repairs, but as-is still works best when the home is clean, accessible, and priced realistically.",
    detail:
      "As-is is a pricing and expectation strategy, not an excuse to leave the home confusing. Buyers still compare presentation, disclosures, and how much uncertainty they are being asked to absorb.",
    href: "/sell/checklists/sell-house-as-is-wa",
  },
];

const popularGuides = [
  { href: "/sell/local-guides", label: "All Local Guides" },
  { href: "/sell/snohomish-county-wa", label: "Snohomish County" },
  { href: "/sell/skagit-county-wa", label: "Skagit County" },
  { href: "/sell/everett-wa", label: "Everett" },
  { href: "/sell/marysville-wa", label: "Marysville" },
  { href: "/sell/lake-stevens-wa", label: "Lake Stevens" },
  { href: "/sell/snohomish-wa", label: "Snohomish" },
  { href: "/sell/mukilteo-wa", label: "Mukilteo" },
  { href: "/sell/lynnwood-wa", label: "Lynnwood" },
  { href: "/sell/bothell-wa", label: "Bothell" },
  { href: "/sell/mill-creek-wa", label: "Mill Creek" },
  { href: "/sell/mount-vernon-wa", label: "Mount Vernon" },
  { href: "/sell/arlington-wa", label: "Arlington" },
];

const homeAnchorLinks = [
  { href: "#seller-answers", label: "Seller answers" },
  { href: "#cma", label: "Free CMA" },
  { href: "#seller-faqs", label: "FAQs" },
  { href: "/sell/local-guides", label: "Local guides" },
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
    "Seller answers, prep checklists, and free CMA guidance for Snohomish County homeowners getting ready to list.",
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
              "linear-gradient(180deg, rgba(17,17,17,0.86) 0%, rgba(17,17,17,0.72) 45%, rgba(17,17,17,0.84) 100%), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80) center/cover no-repeat",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center sm:py-28 md:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Seller Questions Before You Hit the Market
          </p>
          <h1 className="mx-auto mt-5 max-w-5xl text-4xl font-light leading-[1.06] tracking-tight sm:text-5xl md:text-7xl">
            Thinking about selling?
            <span className="font-semibold text-[#C6A664]"> Here&apos;s what you should be asking first.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/78 sm:text-xl">
            What should you fix? How much should you declutter? What paperwork do
            you need? How do you keep the house show-ready? Start there, then use
            a free CMA to connect the prep work to a real pricing strategy.
          </p>
          <SectionDivider tone="dark" align="center" />
          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                Start here
              </p>
              <p className="mt-3 text-sm leading-6 text-white/74">
                Seller questions first, then pricing. It keeps prep from turning into random projects.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                Local focus
              </p>
              <p className="mt-3 text-sm leading-6 text-white/74">
                Built around Snohomish County and nearby Skagit sellers, not generic national advice.
              </p>
            </div>
            <div className="rounded-[24px] border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                CMA path
              </p>
              <p className="mt-3 text-sm leading-6 text-white/74">
                Quick request, confirmation email, then local pricing and prep follow-up.
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
            <Link
              href="/sell/checklists/declutter-before-selling-house-wa"
              className="rounded-full border border-white/15 bg-white/8 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              Decluttering
            </Link>
            <Link
              href="/sell/checklists/repairs-before-selling-house-wa"
              className="rounded-full border border-white/15 bg-white/8 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              Repairs
            </Link>
            <Link
              href="/sell/checklists/paperwork-needed-to-sell-house-wa"
              className="rounded-full border border-white/15 bg-white/8 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              Paperwork
            </Link>
            <Link
              href="/sell/checklists/show-ready-house-checklist-wa"
              className="rounded-full border border-white/15 bg-white/8 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              Showings
            </Link>
            <a
              href="#cma"
              className="rounded-full border border-white/15 bg-white/8 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              Free CMA
            </a>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#seller-answers"
              className="rounded-full bg-[#C6A664] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
            >
              Browse Seller Questions
            </a>
            <a
              href="#cma"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10"
            >
              Request Free CMA
            </a>
          </div>
        </div>
      </section>

      <LocalGuideAnchorNav links={homeAnchorLinks} tone="dark" />

      <section id="seller-answers" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <LocalGuideSectionHeader
              index="01"
              eyebrow="Seller Answers"
              title="The questions sellers usually search before they are ready to list"
              description="These are the prep topics that shape how the home shows, how buyers react, and how stressful the launch feels once the listing goes live."
            />
            <SectionDivider align="center" />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredPrepPages.map((page) => {
              const visual = sellerQuestionVisuals[page.slug] ?? {
                id: "00",
                cue: "Seller prep",
                tone: "Sharper prep supports cleaner pricing and launch decisions.",
              };
              return (
              <Link
                key={page.slug}
                href={`/sell/checklists/${page.slug}`}
                className="group relative overflow-hidden rounded-[28px] border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
              >
                <CornerAccent
                  tone="gold"
                  className="absolute right-4 top-4 h-12 w-18 opacity-80"
                />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                        {visual.id}
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                        {page.timeframe}
                      </p>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold leading-snug">
                      {page.shortTitle}
                    </h3>
                  </div>
                  <span className="rounded-full border border-[#D9CFBF] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5A5A5A] transition-colors group-hover:border-[#C6A664] group-hover:text-[#1A1A1A]">
                    Guide
                  </span>
                </div>
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.16em] text-[#1A1A1A]">
                  {visual.cue}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5A5A5A]">
                  {visual.tone}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                  {page.summary}
                </p>
                <div className="mt-5 border-t border-[#E8E4DF] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A]">
                    Starts with
                  </p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-[#5A5A5A]">
                    {page.checklist.slice(0, 2).map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#C6A664]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-[#E8E4DF] pt-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#5A5A5A]">
                    Read full guide
                  </span>
                  <span className="text-sm font-semibold text-[#C6A664] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            );})}
          </div>
          <div className="mt-12 rounded-[32px] border border-[#E8E4DF] bg-[#F8F5F0] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  More Seller Questions
                </p>
                <h3 className="mt-3 text-2xl font-light tracking-tight sm:text-3xl">
                  The topics sellers usually realize they need right after the basics
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5A5A5A] sm:text-base">
                  These pages cover the things sellers search once pricing, repairs,
                  and paperwork lead into deeper decisions about timing, condition,
                  inspection risk, and how much effort to put in before launch.
                </p>
              </div>
              <div className="rounded-full border border-[#D8D0C4] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A5A5A]">
                Smart extras
              </div>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {additionalPrepPages.map((page) => {
                const visual = sellerQuestionVisuals[page.slug] ?? {
                  id: "00",
                  cue: "Seller prep",
                  tone: "Sharper prep supports cleaner pricing and launch decisions.",
                };

                return (
                  <Link
                    key={page.slug}
                    href={`/sell/checklists/${page.slug}`}
                    className="group rounded-[24px] border border-[#E8E4DF] bg-white p-5 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A664]">
                          {visual.id} · {page.timeframe}
                        </p>
                        <h4 className="mt-3 text-xl font-semibold leading-snug">
                          {page.shortTitle}
                        </h4>
                      </div>
                      <span className="text-sm font-semibold text-[#C6A664] transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                    <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-[#1A1A1A]">
                      {visual.cue}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#5A5A5A]">
                      {page.summary}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="cma" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[0.94fr,1.06fr] lg:items-start">
            <div className="max-w-2xl">
              <LocalGuideSectionHeader
                index="02"
                eyebrow="Free CMA"
                title="Start with the pricing question"
                description="If you want to know what the home could sell for before spending money or picking a list strategy, request the CMA here. We’ll use it to connect price, prep, and next steps."
              />
              <SectionDivider />
              <div className="mt-8 grid gap-4">
                <div className="rounded-[24px] border border-[#E8E4DF] bg-white px-5 py-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    What you send
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    Address, name, and email. No long intake, no extra fields, no clunky step flow.
                  </p>
                </div>
                <div className="rounded-[24px] border border-[#E8E4DF] bg-white px-5 py-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    What happens next
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    You get a confirmation email right away, then local comp and prep follow-up as soon as possible.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-[28px] border border-[#E8E4DF] bg-white p-5 text-[#1A1A1A] shadow-lg sm:p-6">
              <CornerAccent
                tone="gold"
                className="absolute right-4 top-4 h-12 w-[4.5rem] opacity-70"
              />
              <div className="max-w-2xl pr-12">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C6A664]">
                  Quick request
                </p>
                <h3 className="mt-2 text-2xl font-light leading-tight tracking-tight sm:text-[2rem]">
                  Request your free CMA
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#5A5A5A]">
                  Send the address, your name, and your email. We&apos;ll confirm
                  right away and follow up with pricing and prep guidance.
                </p>
              </div>
              <div className="mt-5">
                <LocalGuideFactGrid
                  items={[
                    {
                      label: "Response path",
                      value: "Email first",
                      detail: "Both the submission notification and your confirmation route through the live CMA request flow.",
                    },
                    {
                      label: "Coverage",
                      value: "Snohomish + Skagit",
                      detail: "The site content and local guides are built around the markets you are already targeting.",
                    },
                    {
                      label: "Goal",
                      value: "Price + prep",
                      detail: "The CMA is not isolated from the prep questions. It is there to support them.",
                    },
                  ]}
                />
              </div>
              <div className="mt-5 rounded-[24px] bg-[#F8F5F0] p-4 sm:p-5">
                <CmaForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="seller-faqs" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-10 max-w-4xl">
            <LocalGuideSectionHeader
              index="03"
              eyebrow="FAQs"
              title="A few common seller questions before listing"
              description="These are the high-intent questions that usually sit between the first seller-search click and a real pricing conversation."
            />
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {searchFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold leading-snug">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                      {faq.answer}
                    </p>
                  </div>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    Open
                  </span>
                </summary>
                <div className="mt-5 border-t border-[#E8E4DF] pt-5">
                  <p className="text-sm leading-6 text-[#5A5A5A]">{faq.detail}</p>
                  <Link
                    href={faq.href}
                    className="mt-4 inline-flex text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:text-[#C6A664]"
                  >
                    Read the full guide
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E8E4DF] bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
            <div>
              <LocalGuideSectionHeader
                index="04"
                eyebrow="Local Guides"
                title="Browse county, city, and neighborhood seller pages"
                description="The homepage stays focused on seller questions and CMA requests. The local guide hub breaks out county, city, and smaller neighborhood pages so sellers can move from broad market context to tighter local insight without getting lost."
              />
              <SectionDivider />
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
