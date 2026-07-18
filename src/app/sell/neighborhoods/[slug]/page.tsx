import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LocalGuideAnchorNav,
  LocalGuideFactGrid,
  LocalGuideHeroAside,
  LocalGuideLinkCard,
  LocalGuidePanel,
  LocalGuideSectionHeader,
  LocalGuideStatementCard,
} from "@/components/LocalGuideBlocks";
import MarketSnapshotSection from "@/components/MarketSnapshotSection";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { cityPageMap } from "@/lib/city-pages";
import { formatCurrency, formatSnapshotDate, marketSnapshotMap } from "@/lib/market-data";
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

function NeighborhoodPageView({ page }: { page: NeighborhoodPage }) {
  const snapshot = marketSnapshotMap.get(page.slug);
  const parentCity = cityPageMap.get(page.parentCitySlug);
  const nearbyAreas = page.nearbyAreaSlugs
    .map((slug) => neighborhoodPageMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const sellerGuides = getNeighborhoodSellerGuides(
    neighborhoodSellerGuideSlugs[page.slug] ?? [],
  );
  const neighborhoodAnchorLinks = [
    { href: "#neighborhood-overview", label: "Overview" },
    { href: "#neighborhood-pricing", label: "Buyer lens" },
    ...(sellerGuides.length > 0
      ? [{ href: "#neighborhood-guides", label: "Seller guides" }]
      : []),
    ...(nearbyAreas.length > 0
      ? [{ href: "#neighborhood-nearby", label: "Nearby pages" }]
      : []),
    { href: "#neighborhood-faqs", label: "FAQs" },
  ];

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
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
          <div>
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
            <p className="text-[11px] leading-6 text-white/40">Neighborhood seller guidance by Matt Salit · 425-645-2181 · Century 21 North Homes Realty</p>
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
              <Link
                href="/#cma"
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Free CMA
              </Link>
            </div>
          </div>
          <LocalGuideHeroAside
            eyebrow="Use this page for"
            title={`${page.areaName} seller context fast`}
            stats={[
              {
                label: "Parent city",
                value: parentCity?.city ?? page.parentCity,
              },
              {
                label: "Seller topics",
                value: `${sellerGuides.length || 0}`,
              },
              {
                label: "Median price",
                value: snapshot ? formatCurrency(snapshot.medianSalePrice) : "Hyperlocal",
              },
            ]}
            bullets={[
              `Use ${page.areaName} when city-wide numbers are too broad for how buyers compare this pocket.`,
              nearbyAreas.length > 0
                ? `There are ${nearbyAreas.length} nearby neighborhood pages linked below for tighter cross-shopping.`
                : "Pair this page with the city guide when you need the broader comparison set too.",
              snapshot
                ? `Current imported market temperature: ${snapshot.marketTemp.toLowerCase()}.`
                : "Request the free CMA if the neighborhood view needs to be tied to your specific house.",
            ]}
          />
        </div>
      </section>

      <LocalGuideAnchorNav links={neighborhoodAnchorLinks} />

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

      <section id="neighborhood-overview" className="bg-[#F8F5F0]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <LocalGuideSectionHeader
              index="1"
              eyebrow="Local Overview"
              title={`How sellers should think about ${page.areaName}`}
              description={page.localSummary}
            />
            <SectionDivider />
          </div>
          <LocalGuidePanel
            eyebrow="Seller moves"
            title={`${page.areaName} prep priorities`}
            items={page.sellerMoves}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <LocalGuideFactGrid
            items={[
              {
                label: "Parent city",
                value: parentCity?.city ?? page.parentCity,
                detail: "Use the city page when you need the broader comparison set that surrounds this subarea.",
              },
              {
                label: "Nearby pages",
                value: `${nearbyAreas.length}`,
                detail: "Cross-shopping nearby subareas helps when buyers compare one pocket against another inside the same city.",
              },
              {
                label: "Pricing view",
                value: snapshot ? formatCurrency(snapshot.medianSalePrice) : "Hyperlocal",
                detail: snapshot
                  ? `Imported snapshot dated ${formatSnapshotDate(snapshot.periodEnd)}.`
                  : "Request a CMA when the neighborhood view still needs to be translated into your exact property.",
              },
            ]}
          />
        </div>
      </section>

      <section id="neighborhood-pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index="2"
            eyebrow="Pricing Factors"
            title={`What buyers in ${page.areaName} tend to compare`}
            description="Neighborhood pages work best when buyer comparisons get pickier than a broad city median can explain."
          />
          <SectionDivider />
          <div className="grid gap-5 md:grid-cols-3">
            {page.pricingFactors.map((factor) => (
              <LocalGuideStatementCard
                key={factor}
                label="Buyer lens"
                text={factor}
              />
            ))}
          </div>
        </div>
      </section>

      {sellerGuides.length > 0 && (
        <section id="neighborhood-guides" className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index="3"
              eyebrow="Seller Prep Guides"
              title={`Seller topics that usually connect to ${page.areaName}`}
              description={`These guides cover the prep decisions that tend to matter once sellers understand the local buyer expectations in ${page.areaName}.`}
              badge={`${sellerGuides.length} related guides`}
              align="split"
            />
            <SectionDivider />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {sellerGuides.map((guide) => (
                <LocalGuideLinkCard
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
        <section id="neighborhood-nearby" className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index={sellerGuides.length > 0 ? "4" : "3"}
              eyebrow="Nearby Local Pages"
              title="More neighborhood-level seller guides nearby"
              description="These pages help when sellers need to compare adjacent pockets instead of assuming the whole city behaves the same way."
              badge={`${nearbyAreas.length} nearby pages`}
              align="split"
            />
            <SectionDivider />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {nearbyAreas.map((entry) => (
                <LocalGuideLinkCard
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

      <section id="neighborhood-faqs" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index={sellerGuides.length > 0 ? "5" : "4"}
            eyebrow="Seller Questions"
            title={`${page.areaName} seller FAQs`}
            description="These usually surface once sellers understand the local market context but still need clarity on prep, timing, or how buyers will react."
            tone="dark"
          />
          <SectionDivider tone="dark" />
          <div className="grid gap-5 md:grid-cols-2">
            {page.sellerQuestions.map((item) => (
              <LocalGuideStatementCard
                key={item.question}
                label={item.question}
                text={item.answer}
                tone="dark"
              />
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
          <p className="mx-auto mt-5 max-w-xl text-[11px] text-[#1A1A1A]/50">Matt Salit · 425-645-2181 · Century 21 North Homes Realty</p>
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
