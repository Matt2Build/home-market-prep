import type { Metadata } from "next";
import Link from "next/link";
import { LocalGuideSectionHeader } from "@/components/LocalGuideBlocks";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { sellerPrepPages, type SellerPrepPage } from "@/lib/seller-prep-pages";
import { SITE_URL } from "@/lib/site";

type PageGroup = {
  label: string;
  description: string;
  slugs: string[];
};

const groups: PageGroup[] = [
  {
    label: "Before Listing",
    description:
      "Prep actions to finish before photos, pricing, and launch day.",
    slugs: [
      "declutter-before-selling-house-wa",
      "repairs-before-selling-house-wa",
      "deep-clean-before-listing-house-wa",
      "home-staging-tips-to-sell-house-wa",
      "show-ready-house-checklist-wa",
      "moving-storage-checklist-before-selling-wa",
    ],
  },
  {
    label: "Pricing, Timing & Strategy",
    description:
      "Decide when to list, how to price, and whether repairs or as-is is the right move.",
    slugs: [
      "best-time-to-sell-house-wa",
      "sell-house-as-is-wa",
      "pre-listing-inspection-wa",
    ],
  },
  {
    label: "Paperwork & Disclosures",
    description:
      "Gather documents, organize disclosures, and keep the sale clean.",
    slugs: [
      "paperwork-needed-to-sell-house-wa",
      "seller-disclosures-checklist-wa",
    ],
  },
  {
    label: "During Escrow",
    description:
      "Handle inspections, appraisals, and utility transfers once an offer is accepted.",
    slugs: [
      "accommodating-inspections-during-escrow-wa",
      "appraisal-prep-during-escrow-wa",
      "utility-transfers-during-escrow-wa",
    ],
  },
];

function groupPages(group: PageGroup): SellerPrepPage[] {
  return group.slugs
    .map((slug) => sellerPrepPages.find((p) => p.slug === slug))
    .filter((p): p is SellerPrepPage => Boolean(p));
}

export const metadata: Metadata = {
  title: "Seller Prep Guides — Snohomish County, WA | HomeMarketPrep",
  description:
    "Seller prep checklists for Washington homeowners, from declutter and repairs to escrow steps, inspections, and utility transfers.",
  alternates: {
    canonical: "/sell",
  },
  openGraph: {
    title: "Seller Prep Guides — Snohomish County, WA",
    description:
      "Seller prep checklists for Washington homeowners, from declutter and repairs to escrow steps, inspections, and utility transfers.",
    url: "/sell",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seller Prep Guides — Snohomish County, WA",
    description:
      "Seller prep checklists for Washington homeowners, from declutter and repairs to escrow steps, inspections, and utility transfers.",
    images: ["/opengraph-image"],
  },
};

export default function SellIndexPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,166,100,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Seller Prep Library
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Everything to prep your home before — and during — the sale
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
            Practical checklists and decision guides for Washington sellers.
            Start with the before-listing steps, then use the pricing, paperwork,
            and escrow pages as the sale moves forward.
          </p>
          <SectionDivider tone="dark" />
          <p className="text-[11px] leading-6 text-white/40">
            Seller pricing & prep guidance by Matt Salit · 425-645-2181 · mattsalit@writemyoffer.com · Century 21 North Homes Realty
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <Link
              href="/sell/snohomish-county-wa"
              className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              County guide
            </Link>
            <Link
              href="/#cma"
              className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              Free CMA
            </Link>
          </div>
        </div>
      </section>

      {/* Category groups */}
      {groups.map((group, gi) => (
        <section
          key={group.label}
          id={`group-${gi + 1}`}
          className={gi % 2 === 1 ? "bg-[#F8F5F0]" : "bg-white"}
        >
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index={String(gi + 1)}
              eyebrow={group.label}
              title={group.description}
              badge={`${groupPages(group).length} guides`}
              align="split"
            />
            <SectionDivider />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {groupPages(group).map((page) => (
                <Link
                  key={page.slug}
                  href={`/sell/checklists/${page.slug}`}
                  className="group relative overflow-hidden rounded-[24px] border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent" />
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    {page.eyebrow}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold leading-snug">
                    {page.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    {page.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-[#E8E4DF] pt-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                      Read guide
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#C6A664] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#C6A664]">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center text-[#1A1A1A]">
          <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
            Want a pricing read before you start prepping?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Get a free CMA so you can connect prep work to a real price range and launch plan.
          </p>
          <SectionDivider tone="gold" align="center" />
          <p className="mx-auto mt-5 max-w-xl text-[11px] text-[#1A1A1A]/50">
            Matt Salit · 425-645-2181 · mattsalit@writemyoffer.com · Century 21 North Homes Realty
          </p>
          <Link
            href="/#cma"
            className="mt-8 inline-flex rounded-full bg-[#111111] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2B2B2B]"
          >
            Start My Free CMA
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: SITE_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Seller Prep",
                item: `${SITE_URL}/sell`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
