import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CornerAccent from "@/components/CornerAccent";
import MarketSnapshotSection from "@/components/MarketSnapshotSection";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { cityPageMap } from "@/lib/city-pages";
import {
  formatSnapshotDate,
  marketSnapshotMap,
} from "@/lib/market-data";
import {
  neighborhoodPageMap,
  neighborhoodPages,
  type NeighborhoodPage,
} from "@/lib/neighborhood-pages";
import {
  sellerPrepPageMap,
  type SellerPrepPage,
} from "@/lib/seller-prep-pages";
import { SITE_URL } from "@/lib/site";

type NeighborhoodSellerPageProps = {
  params: Promise<{ slug: string }>;
};

const neighborhoodSellerGuideSlugs: Record<string, string[]> = {
  "bothell-east-wa": [
    "seller-disclosures-checklist-wa",
    "paperwork-needed-to-sell-house-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "bothell-west-wa": [
    "home-staging-tips-to-sell-house-wa",
    "seller-disclosures-checklist-wa",
    "show-ready-house-checklist-wa",
  ],
  "mill-creek-east-wa": [
    "home-staging-tips-to-sell-house-wa",
    "show-ready-house-checklist-wa",
    "best-time-to-sell-house-wa",
  ],
  "mill-creek-west-wa": [
    "declutter-before-selling-house-wa",
    "home-staging-tips-to-sell-house-wa",
    "show-ready-house-checklist-wa",
  ],
  "north-everett-wa": [
    "declutter-before-selling-house-wa",
    "best-time-to-sell-house-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "silver-lake-everett-wa": [
    "deep-clean-before-listing-house-wa",
    "home-staging-tips-to-sell-house-wa",
    "show-ready-house-checklist-wa",
  ],
  "sunnyside-marysville-wa": [
    "declutter-before-selling-house-wa",
    "repairs-before-selling-house-wa",
    "best-time-to-sell-house-wa",
  ],
  "lakewood-marysville-wa": [
    "show-ready-house-checklist-wa",
    "home-staging-tips-to-sell-house-wa",
    "best-time-to-sell-house-wa",
  ],
  "frontier-village-wa": [
    "repairs-before-selling-house-wa",
    "deep-clean-before-listing-house-wa",
    "best-time-to-sell-house-wa",
  ],
  "cavalero-wa": [
    "sell-house-as-is-wa",
    "pre-listing-inspection-wa",
    "repairs-before-selling-house-wa",
  ],
  "dutch-hill-snohomish-wa": [
    "seller-disclosures-checklist-wa",
    "paperwork-needed-to-sell-house-wa",
    "pre-listing-inspection-wa",
  ],
  "fobes-hill-snohomish-wa": [
    "sell-house-as-is-wa",
    "pre-listing-inspection-wa",
    "seller-disclosures-checklist-wa",
  ],
  "harbour-pointe-mukilteo-wa": [
    "home-staging-tips-to-sell-house-wa",
    "deep-clean-before-listing-house-wa",
    "show-ready-house-checklist-wa",
  ],
  "old-town-mukilteo-wa": [
    "seller-disclosures-checklist-wa",
    "repairs-before-selling-house-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "alderwood-lynnwood-wa": [
    "declutter-before-selling-house-wa",
    "show-ready-house-checklist-wa",
    "repairs-before-selling-house-wa",
  ],
  "martha-lake-lynnwood-wa": [
    "deep-clean-before-listing-house-wa",
    "show-ready-house-checklist-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "hillcrest-park-mount-vernon-wa": [
    "repairs-before-selling-house-wa",
    "paperwork-needed-to-sell-house-wa",
    "best-time-to-sell-house-wa",
  ],
  "little-mountain-mount-vernon-wa": [
    "pre-listing-inspection-wa",
    "sell-house-as-is-wa",
    "seller-disclosures-checklist-wa",
  ],
  "arlington-heights-wa": [
    "sell-house-as-is-wa",
    "pre-listing-inspection-wa",
    "repairs-before-selling-house-wa",
  ],
};

function getNeighborhoodSellerGuides(slugs: string[]) {
  return slugs
    .map((slug) => sellerPrepPageMap.get(slug))
    .filter((entry): entry is SellerPrepPage => Boolean(entry));
}

export function generateStaticParams() {
  return neighborhoodPages.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: NeighborhoodSellerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = neighborhoodPageMap.get(slug);

  if (!page) {
    return {};
  }

  const canonicalPath = `/sell/neighborhoods/${page.slug}`;
  const imagePath = `${canonicalPath}/opengraph-image`;

  return {
    title: `${page.title} | Neighborhood Seller Guide`,
    description: page.metaDescription,
    keywords: [
      `sell house in ${page.areaName.toLowerCase()} wa`,
      `${page.areaName.toLowerCase()} home value`,
      `${page.parentCity.toLowerCase()} neighborhood seller guide`,
      `${page.parentCity.toLowerCase()} wa CMA`,
      `${page.county.toLowerCase()} neighborhood real estate`,
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${page.title} | Neighborhood Seller Guide`,
      description: page.metaDescription,
      url: canonicalPath,
      images: [imagePath],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | Neighborhood Seller Guide`,
      description: page.metaDescription,
      images: [imagePath],
    },
  };
}

function LinkCard({
  href,
  eyebrow,
  title,
  description,
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">{description}</p>
    </Link>
  );
}

function NeighborhoodPageView({ page }: { page: NeighborhoodPage }) {
  const snapshot = marketSnapshotMap.get(page.slug);
  const parentCity = cityPageMap.get(page.parentCitySlug);
  const nearbyAreas = page.nearbyAreaSlugs
    .map((slug) => neighborhoodPageMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const sellerGuides = getNeighborhoodSellerGuides(
    neighborhoodSellerGuideSlugs[page.slug] ?? [],
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.sellerQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
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
        name: page.parentCity,
        item: `${SITE_URL}/sell/${page.parentCitySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.areaName,
        item: `${SITE_URL}/sell/neighborhoods/${page.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,166,100,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-14 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Neighborhood Seller Guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {page.heroDescription}
          </p>
          <SectionDivider tone="dark" />
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            {parentCity && (
              <Link
                href={`/sell/${parentCity.slug}`}
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                {parentCity.city} city guide
              </Link>
            )}
            <span className="rounded-full border border-white/15 px-4 py-2">
              {page.county}, WA
            </span>
            {sellerGuides[0] && (
              <Link
                href={`/sell/checklists/${sellerGuides[0].slug}`}
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Seller prep guide
              </Link>
            )}
            <span className="rounded-full border border-white/15 px-4 py-2">
              Neighborhood-level seller SEO page
            </span>
          </div>
        </div>
      </section>

      {snapshot && (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
            <MarketSnapshotSection
              snapshot={snapshot}
              eyebrow="Neighborhood Snapshot"
              title={`Imported ${page.areaName} market data for sellers`}
              description={`This imported ${page.areaName} snapshot gives you a tighter local read than a broad county number alone. Exact snapshot date: ${formatSnapshotDate(
                snapshot.periodEnd,
              )}.`}
            />
          </div>
        </div>
      )}

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                1
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Local Overview
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              How sellers should think about {page.areaName}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
              {page.localSummary}
            </p>
            <SectionDivider />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#E8E4DF] bg-white p-6">
            <CornerAccent
              tone="gold"
              className="absolute right-4 top-4 h-12 w-[4.5rem]"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
              Seller moves
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#5A5A5A]">
              {page.sellerMoves.map((move) => (
                <li key={move}>{move}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0] text-xs font-semibold text-[#C6A664]">
                2
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Pricing Factors
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              What buyers in {page.areaName} tend to compare
            </h2>
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {page.pricingFactors.map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6"
              >
                <p className="text-sm leading-7 text-[#5A5A5A]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sellerGuides.length > 0 && (
        <section className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                  3
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Seller Prep Guides
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Seller topics that usually connect to {page.areaName}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
                These guides cover the prep decisions that tend to matter once sellers
                understand the local buyer expectations in {page.areaName}.
              </p>
              <SectionDivider />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sellerGuides.map((guide) => (
                <LinkCard
                  key={guide.slug}
                  href={`/sell/checklists/${guide.slug}`}
                  eyebrow="Seller Guide"
                  title={guide.shortTitle}
                  description={guide.summary}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {nearbyAreas.length > 0 && (
        <section className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 4 : 3}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Nearby Local Pages
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                More neighborhood-level seller guides nearby
              </h2>
              <SectionDivider />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {nearbyAreas.map((entry) => (
                <LinkCard
                  key={entry.slug}
                  href={`/sell/neighborhoods/${entry.slug}`}
                  eyebrow={`${entry.parentCity}, WA`}
                  title={entry.areaName}
                  description={entry.metaDescription}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 5 : 4}
                </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Seller Questions
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              {page.areaName} seller FAQs
            </h2>
            <SectionDivider tone="dark" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {page.sellerQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold leading-snug">{item.question}</h3>
                <p className="mt-4 text-sm leading-6 text-white/72">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C6A664]">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center text-[#1A1A1A]">
          <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
            Want a tighter local pricing read for {page.areaName}?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Start with the free CMA and we&apos;ll translate the broad market into
            a pricing range that actually fits your home and your local buyer
            pool.
          </p>
          <SectionDivider tone="gold" align="center" />
          <Link
            href="/#cma"
            className="mt-8 inline-flex rounded-full bg-[#111111] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2B2B2B]"
          >
            Start My Free CMA
          </Link>
        </div>
      </section>
    </div>
  );
}

export default async function NeighborhoodSellerPage({
  params,
}: NeighborhoodSellerPageProps) {
  const { slug } = await params;
  const page = neighborhoodPageMap.get(slug);

  if (!page) {
    notFound();
  }

  return <NeighborhoodPageView page={page} />;
}
