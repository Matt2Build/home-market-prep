import type { Metadata } from "next";
import Link from "next/link";
import CmaForm from "@/components/CmaForm";
import SiteHeader from "@/components/SiteHeader";
import { sellerPrepPages } from "@/lib/seller-prep-pages";

export const metadata: Metadata = {
  title: "Seller Questions Before Listing in Snohomish County",
  description:
    "Seller answers for Snohomish County homeowners getting ready to list. Learn what to fix, how to declutter, what paperwork to gather, how to stay show-ready, and when to request a CMA.",
  keywords: [
    "seller questions before listing",
    "how to prepare house for sale Snohomish County",
    "what to fix before selling house Washington",
    "paperwork needed to sell house Washington",
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
      "Seller answers on decluttering, repairs, paperwork, showings, and free CMA help before you list.",
    url: "/",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Questions Before Listing in Snohomish County",
    description:
      "Seller answers on decluttering, repairs, paperwork, showings, and free CMA help before you list.",
    images: ["/opengraph-image"],
  },
};

const searchFaqs = [
  {
    question: "Should I get a CMA before deciding what to fix?",
    answer:
      "Usually yes. A CMA helps connect the likely price range to the prep work that actually matters, instead of spending money on projects that may not move the result.",
  },
  {
    question: "How far ahead should I start preparing to sell?",
    answer:
      "Most sellers should start four to six weeks before the target list date so decluttering, repairs, cleaning, and paperwork do not get compressed into one stressful week.",
  },
  {
    question: "What paperwork should I have ready before listing?",
    answer:
      "Start with disclosures, HOA or condo documents if they apply, repair receipts, warranties, utility details, manuals, keys, remotes, and access codes.",
  },
  {
    question: "What matters most once the home is on the market?",
    answer:
      "Show readiness and access matter a lot. The home should stay easy to tour, easy to understand, and easy for buyers to picture themselves in during the first two weeks.",
  },
];

const popularGuides = [
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
            <span className="font-semibold text-[#C6A664]"> Start with the answers buyers force you to have.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/78 sm:text-xl">
            What should you fix? How much should you declutter? What paperwork do
            you need? How do you keep the house show-ready? Start there, then use
            a free CMA to connect the prep work to a real pricing strategy.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
            <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
              Decluttering
            </span>
            <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
              Repairs
            </span>
            <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
              Paperwork
            </span>
            <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
              Showings
            </span>
            <span className="rounded-full border border-white/15 bg-white/8 px-4 py-2">
              Free CMA
            </span>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#seller-answers"
              className="rounded-full bg-[#C6A664] px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
            >
              Browse Seller Answers
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

      <section id="seller-answers" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Answers
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              The questions sellers usually search before they are ready to list
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              These are the prep topics that shape how the home shows, how buyers
              react, and how stressful the launch feels once the listing goes live.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {sellerPrepPages.map((page) => (
              <Link
                key={page.slug}
                href={`/sell/checklists/${page.slug}`}
                className="rounded-3xl border border-[#E8E4DF] bg-[#F8F5F0] p-8 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  {page.timeframe}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-snug">
                  {page.shortTitle}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                  {page.summary}
                </p>
                <div className="mt-6 border-t border-[#E8E4DF] pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A]">
                    Includes
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cma" className="bg-[#F8F5F0]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Free CMA
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl md:text-5xl">
              When pricing becomes the question, start here
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              A CMA works best after the seller prep questions are clearer. Use it
              to understand your likely range, avoid spending money in the wrong
              places, and line up the home prep with the price strategy.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                {
                  label: "Price",
                  text: "See how nearby comps and current competition frame the likely range.",
                },
                {
                  label: "Prep",
                  text: "Figure out which cleanup or repair items are worth doing first.",
                },
                {
                  label: "Launch",
                  text: "Get clearer on timing, presentation, and next steps before you list.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#E8E4DF] bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    {item.label}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-[#E8E4DF] bg-white p-7 text-[#1A1A1A] shadow-xl sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C6A664]">
              Start Here
            </p>
            <h2 className="mt-3 text-3xl font-light leading-tight tracking-tight">
              Request your free CMA
            </h2>
            <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
              Tell us where the property is and where to send the CMA. You will
              get confirmation right away, and we will follow up with pricing and
              prep guidance as soon as possible.
            </p>
            <div className="mt-6 rounded-3xl bg-[#F8F5F0] p-6 sm:p-7">
              <CmaForm />
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
              A few common seller questions before listing
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
        <div className="mx-auto max-w-7xl px-6 py-18">
          <div className="grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Local Guides
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Browse city and county seller pages separately
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
                The homepage stays focused on seller questions and CMA requests.
                Local market pages live on their own so city and county content is
                easier to browse and easier to search.
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
