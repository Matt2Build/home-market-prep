import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CornerAccent from "@/components/CornerAccent";
import MarketSnapshotSection from "@/components/MarketSnapshotSection";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { cityPageMap, cityPages, type CityPage } from "@/lib/city-pages";
import { countyPageMap, countyPages, type CountyPage } from "@/lib/county-pages";
import {
  formatCurrency,
  formatSnapshotDate,
  marketSnapshotMap,
} from "@/lib/market-data";
import { neighborhoodPageMap } from "@/lib/neighborhood-pages";
import {
  sellerPrepPageMap,
  type SellerPrepPage,
} from "@/lib/seller-prep-pages";
import { SITE_URL } from "@/lib/site";

type SellerPageProps = {
  params: Promise<{ slug: string }>;
};

const citySellerGuideSlugs: Record<string, string[]> = {
  "arlington-wa": [
    "repairs-before-selling-house-wa",
    "sell-house-as-is-wa",
    "pre-listing-inspection-wa",
  ],
  "marysville-wa": [
    "declutter-before-selling-house-wa",
    "show-ready-house-checklist-wa",
    "best-time-to-sell-house-wa",
  ],
  "lake-stevens-wa": [
    "deep-clean-before-listing-house-wa",
    "home-staging-tips-to-sell-house-wa",
    "repairs-before-selling-house-wa",
  ],
  "snohomish-wa": [
    "seller-disclosures-checklist-wa",
    "paperwork-needed-to-sell-house-wa",
    "pre-listing-inspection-wa",
  ],
  "everett-wa": [
    "declutter-before-selling-house-wa",
    "home-staging-tips-to-sell-house-wa",
    "best-time-to-sell-house-wa",
  ],
  "mukilteo-wa": [
    "home-staging-tips-to-sell-house-wa",
    "deep-clean-before-listing-house-wa",
    "best-time-to-sell-house-wa",
  ],
  "mount-vernon-wa": [
    "sell-house-as-is-wa",
    "pre-listing-inspection-wa",
    "paperwork-needed-to-sell-house-wa",
  ],
  "lynnwood-wa": [
    "moving-storage-checklist-before-selling-wa",
    "show-ready-house-checklist-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "bothell-wa": [
    "seller-disclosures-checklist-wa",
    "paperwork-needed-to-sell-house-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "mill-creek-wa": [
    "home-staging-tips-to-sell-house-wa",
    "show-ready-house-checklist-wa",
    "best-time-to-sell-house-wa",
  ],
};

const countySellerGuideSlugs: Record<string, string[]> = {
  "snohomish-county-wa": [
    "declutter-before-selling-house-wa",
    "repairs-before-selling-house-wa",
    "seller-disclosures-checklist-wa",
    "best-time-to-sell-house-wa",
  ],
  "skagit-county-wa": [
    "sell-house-as-is-wa",
    "pre-listing-inspection-wa",
    "paperwork-needed-to-sell-house-wa",
    "best-time-to-sell-house-wa",
  ],
};

function getSellerGuides(slugs: string[]) {
  return slugs
    .map((slug) => sellerPrepPageMap.get(slug))
    .filter((entry): entry is SellerPrepPage => Boolean(entry));
}

export function generateStaticParams() {
  return [...cityPages, ...countyPages].map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: SellerPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityPage = cityPageMap.get(slug);
  const countyPage = countyPageMap.get(slug);

  if (cityPage) {
    const canonicalPath = `/sell/${cityPage.slug}`;
    const imagePath = `${canonicalPath}/opengraph-image`;

    return {
      title: `${cityPage.title} | Free CMA and Seller Prep`,
      description: cityPage.metaDescription,
      keywords: [
        `sell house in ${cityPage.city} wa`,
        `${cityPage.city} wa home value`,
        `${cityPage.city} wa CMA`,
        `${cityPage.city} seller guide`,
        `${cityPage.city} listing prep`,
        `${cityPage.county} real estate seller`,
      ],
      alternates: {
        canonical: canonicalPath,
      },
      openGraph: {
        title: `${cityPage.title} | Free CMA and Seller Prep`,
        description: cityPage.metaDescription,
        url: canonicalPath,
        images: [imagePath],
      },
      twitter: {
        card: "summary_large_image",
        title: `${cityPage.title} | Free CMA and Seller Prep`,
        description: cityPage.metaDescription,
        images: [imagePath],
      },
    };
  }

  if (countyPage) {
    const canonicalPath = `/sell/${countyPage.slug}`;
    const imagePath = `${canonicalPath}/opengraph-image`;

    return {
      title: `${countyPage.title} | County Seller Guide`,
      description: countyPage.metaDescription,
      keywords: [
        `sell house in ${countyPage.county.toLowerCase()} wa`,
        `${countyPage.county} home value`,
        `${countyPage.county} seller guide`,
        `${countyPage.county} CMA`,
        `how to sell a house in ${countyPage.county.toLowerCase()}`,
      ],
      alternates: {
        canonical: canonicalPath,
      },
      openGraph: {
        title: `${countyPage.title} | County Seller Guide`,
        description: countyPage.metaDescription,
        url: canonicalPath,
        images: [imagePath],
      },
      twitter: {
        card: "summary_large_image",
        title: `${countyPage.title} | County Seller Guide`,
        description: countyPage.metaDescription,
        images: [imagePath],
      },
    };
  }

  return {};
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

function CityPageView({ cityPage }: { cityPage: CityPage }) {
  const snapshot = marketSnapshotMap.get(cityPage.slug);
  const relatedAreas = (cityPage.relatedAreaSlugs ?? [])
    .map((slug) => neighborhoodPageMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const matchingNeighborhoods = Array.from(neighborhoodPageMap.values()).filter(
    (entry) => entry.parentCitySlug === cityPage.slug,
  );
  const localInsights = Array.from(
    new Map(
      [...matchingNeighborhoods, ...relatedAreas].map((entry) => [
        entry.slug,
        entry,
      ]),
    ).values(),
  );
  const sellerGuides = getSellerGuides(citySellerGuideSlugs[cityPage.slug] ?? []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityPage.sellerQuestions.map((item) => ({
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
        name: cityPage.county,
        item: `${SITE_URL}/sell/${cityPage.countySlug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: cityPage.city,
        item: `${SITE_URL}/sell/${cityPage.slug}`,
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
            {cityPage.city}, WA Seller Guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {cityPage.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {cityPage.heroDescription}
          </p>
          <SectionDivider tone="dark" />
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <Link
              href={`/sell/${cityPage.countySlug}`}
              className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
            >
              {cityPage.county} guide
            </Link>
            {sellerGuides[0] && (
              <Link
                href={`/sell/checklists/${sellerGuides[0].slug}`}
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Seller prep guide
              </Link>
            )}
            <span className="rounded-full border border-white/15 px-4 py-2">
              Free CMA
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              Seller Prep Guidance
            </span>
          </div>
        </div>
      </section>

      {snapshot && (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
            <MarketSnapshotSection
              snapshot={snapshot}
              eyebrow="Local Market Snapshot"
              title={`Imported ${cityPage.city} market data for sellers`}
              description={`This page includes the latest imported ${cityPage.city} market snapshot from the Moving2PNW dataset. The exact snapshot date is shown below so you can use the numbers as context, not guesswork.`}
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
              What sellers in {cityPage.city} usually need to know
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
              {cityPage.localSummary}
            </p>
            <SectionDivider />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#E8E4DF] bg-white p-6">
            <CornerAccent
              tone="gold"
              className="absolute right-4 top-4 h-12 w-[4.5rem]"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
              Start here
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#5A5A5A]">
              <li>Get a local CMA before spending on projects.</li>
              <li>Fix the maintenance buyers will remember after showings.</li>
              <li>Prepare photos, paperwork, and pricing together.</li>
              {snapshot && (
                <li>
                  Imported snapshot date: {formatSnapshotDate(snapshot.periodEnd)}
                </li>
              )}
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
              How buyers in {cityPage.city} tend to compare homes
            </h2>
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cityPage.pricingFactors.map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6 shadow-sm"
              >
                <p className="text-sm leading-7 text-[#5A5A5A]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                3
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Prep Priorities
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              What to do before listing a house in {cityPage.city}
            </h2>
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cityPage.prepPriorities.map((priority) => (
              <div
                key={priority}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-6"
              >
                <p className="text-sm leading-7 text-[#5A5A5A]">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {sellerGuides.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0] text-xs font-semibold text-[#C6A664]">
                  4
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Seller Prep Guides
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Seller questions that usually matter in {cityPage.city}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5A5A5A]">
                Use these topic pages when the local market question turns into a prep
                question. They connect pricing context in {cityPage.city} to what you
                should actually fix, clean up, disclose, or time before listing.
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

      {localInsights.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0] text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 5 : 4}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Neighborhood and Local Insights
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Smaller-area seller pages around {cityPage.city}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#5A5A5A]">
                City-level pages are useful, but sellers often search by neighborhood,
                subarea, or local pocket too. These pages help cover that more detailed
                layer.
              </p>
              <SectionDivider />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {localInsights.map((area) => {
                const areaSnapshot = marketSnapshotMap.get(area.slug);
                return (
                  <LinkCard
                    key={area.slug}
                    href={`/sell/neighborhoods/${area.slug}`}
                    eyebrow={`${area.parentCity}, WA`}
                    title={area.areaName}
                    description={
                      areaSnapshot
                        ? `${area.metaDescription} Snapshot: ${formatCurrency(
                            areaSnapshot.medianSalePrice,
                          )} median sale price as of ${formatSnapshotDate(
                            areaSnapshot.periodEnd,
                          )}.`
                        : area.metaDescription
                    }
                  />
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 6 : 5}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Seller Questions
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                {cityPage.city} seller FAQs
              </h2>
              <SectionDivider tone="dark" />
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/6 p-6">
              <p className="text-sm leading-7 text-white/78">
                Sellers usually get the best result when pricing, prep, and timing
                are handled together. If the home goes live with the wrong number
                or the wrong repair priorities, the market notices fast.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {cityPage.sellerQuestions.map((item) => (
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
            Want a clearer price range for your {cityPage.city} home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Get a free CMA plus practical seller guidance before you spend money
            in the wrong places or list at the wrong number.
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

function CountyPageView({ countyPage }: { countyPage: CountyPage }) {
  const snapshot = marketSnapshotMap.get(countyPage.slug);
  const cityEntries = countyPage.citySlugs
    .map((slug) => cityPageMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const neighborhoodEntries = countyPage.neighborhoodSlugs
    .map((slug) => neighborhoodPageMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const marketSpotlights = countyPage.marketSpotlightSlugs
    .map((slug) => marketSnapshotMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  const sellerGuides = getSellerGuides(
    countySellerGuideSlugs[countyPage.slug] ?? [],
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: countyPage.sellerQuestions.map((item) => ({
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
        name: countyPage.county,
        item: `${SITE_URL}/sell/${countyPage.slug}`,
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
            County Seller Guide
          </p>
          <h1 className="mt-5 max-w-5xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {countyPage.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {countyPage.heroDescription}
          </p>
          <SectionDivider tone="dark" />
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <span className="rounded-full border border-white/15 px-4 py-2">
              {countyPage.county}, WA
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              City and neighborhood guides
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
              Free CMA
            </span>
          </div>
        </div>
      </section>

      {snapshot && (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14">
            <MarketSnapshotSection
              snapshot={snapshot}
              eyebrow="County Market Snapshot"
              title={`Imported ${countyPage.county} market data for sellers`}
              description={`Use this imported county snapshot as broad context, then narrow down into city and neighborhood pages before choosing a pricing range. Exact snapshot date: ${formatSnapshotDate(
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
                Local Context
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              How sellers should read this county
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
              {countyPage.localSummary}
            </p>
            <SectionDivider />
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#E8E4DF] bg-white p-6">
            <CornerAccent
              tone="gold"
              className="absolute right-4 top-4 h-12 w-[4.5rem]"
            />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
              Seller takeaways
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#5A5A5A]">
              {countyPage.sellerAngles.map((angle) => (
                <li key={angle}>{angle}</li>
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
                City Guides
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Seller pages across {countyPage.county}
            </h2>
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cityEntries.map((entry) => (
              <LinkCard
                key={entry.slug}
                href={`/sell/${entry.slug}`}
                eyebrow={countyPage.county}
                title={entry.city}
                description={entry.metaDescription}
              />
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
                Seller topics that usually shape outcomes across {countyPage.county}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
                County pages are broad by design. These seller guides cover the prep
                questions that usually decide whether a home launches cleanly or creates
                extra friction before offers start.
              </p>
              <SectionDivider />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      {neighborhoodEntries.length > 0 && (
        <section className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-14">
            <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 4 : 3}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Neighborhood and Local City Insights
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                Local SEO pages for smaller search terms sellers actually use
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
                These pages cover the more specific neighborhood and local-area
                searches that sit underneath the county and city guides.
              </p>
              <SectionDivider />
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {neighborhoodEntries.map((entry) => (
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

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0] text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 5 : 4}
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Market Spotlights
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              A few local numbers to ground the conversation
            </h2>
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {marketSpotlights.map((entry) => (
              <div
                key={entry.slug}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  {entry.kind}
                </p>
                <h3 className="mt-3 text-2xl font-semibold">{entry.name}</h3>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                  {formatCurrency(entry.medianSalePrice)} median sale price •{" "}
                  {entry.medianDom} median DOM • {entry.monthsOfSupply.toFixed(1)}{" "}
                  months supply
                </p>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">
                  Imported snapshot date: {formatSnapshotDate(entry.periodEnd)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[#C6A664]">
                  {sellerGuides.length > 0 ? 6 : 5}
                </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Seller Questions
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Common {countyPage.county} seller questions
            </h2>
            <SectionDivider tone="dark" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {countyPage.sellerQuestions.map((item) => (
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
            Want a county-level pricing read plus a city-specific CMA?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Start with the free CMA and we&apos;ll help narrow the broad county
            picture down to the actual buyer pool for your home.
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

export default async function SellerPage({ params }: SellerPageProps) {
  const { slug } = await params;
  const cityPage = cityPageMap.get(slug);

  if (cityPage) {
    return <CityPageView cityPage={cityPage} />;
  }

  const countyPage = countyPageMap.get(slug);

  if (countyPage) {
    return <CountyPageView countyPage={countyPage} />;
  }

  notFound();
}
