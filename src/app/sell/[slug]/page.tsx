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
  const cityAnchorLinks = [
    { href: "#city-overview", label: "Overview" },
    { href: "#city-pricing", label: "Buyer lens" },
    { href: "#city-prep", label: "Prep moves" },
    ...(sellerGuides.length > 0
      ? [{ href: "#city-guides", label: "Seller guides" }]
      : []),
    ...(localInsights.length > 0
      ? [{ href: "#city-neighborhoods", label: "Local pages" }]
      : []),
    { href: "#city-faqs", label: "FAQs" },
  ];

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
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
          <div>
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
            <p className="text-[11px] leading-6 text-white/40">Seller pricing & prep guidance by Matt Salit · 425-645-2181 · Century 21 North Homes Realty</p>
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
              <Link
                href="/#cma"
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Free CMA
              </Link>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Seller Prep Guidance
              </span>
            </div>
          </div>
          <LocalGuideHeroAside
            eyebrow="Use this page for"
            title={`${cityPage.city} pricing and prep in one pass`}
            stats={[
              {
                label: "Local guides",
                value: `${localInsights.length || 0}`,
              },
              {
                label: "Seller topics",
                value: `${sellerGuides.length || 0}`,
              },
              {
                label: "Median price",
                value: snapshot ? formatCurrency(snapshot.medianSalePrice) : "CMA only",
              },
            ]}
            bullets={[
              `Use ${cityPage.city}-level context before choosing what to fix or leave alone.`,
              "Compare the neighborhood pages below when buyers will judge smaller subareas differently.",
              snapshot
                ? `Current imported market temperature: ${snapshot.marketTemp.toLowerCase()}.`
                : "Request the CMA if you need the pricing read tied directly to your property.",
            ]}
          />
        </div>
      </section>

      <LocalGuideAnchorNav links={cityAnchorLinks} />

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

      <section id="city-overview" className="bg-[#F8F5F0]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <LocalGuideSectionHeader
              index="1"
              eyebrow="Local Overview"
              title={`What sellers in ${cityPage.city} usually need to know`}
              description={cityPage.localSummary}
            />
            <SectionDivider />
          </div>
          <LocalGuidePanel
            eyebrow="Start here"
            title={`${cityPage.city} seller game plan`}
            items={[
              "Get a local CMA before spending on projects.",
              "Fix the maintenance buyers will remember after showings.",
              "Prepare photos, paperwork, and pricing together.",
              ...(snapshot
                ? [
                    `Imported snapshot date: ${formatSnapshotDate(
                      snapshot.periodEnd,
                    )}.`,
                  ]
                : []),
            ]}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <LocalGuideFactGrid
            items={[
              {
                label: "County path",
                value: cityPage.county,
                detail: "Use the county guide when you want broader pace and pricing context before narrowing back down.",
              },
              {
                label: "Local pages",
                value: `${localInsights.length}`,
                detail: "Neighborhood and subarea pages help when one part of the city sells on a different comparison set.",
              },
              {
                label: "Pricing view",
                value: snapshot ? formatCurrency(snapshot.medianSalePrice) : "By CMA",
                detail: snapshot
                  ? `Imported snapshot dated ${formatSnapshotDate(snapshot.periodEnd)}.`
                  : "Request the free CMA when the imported data is too broad for your property.",
              },
            ]}
          />
        </div>
      </section>

      <section id="city-pricing" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index="2"
            eyebrow="Pricing Factors"
            title={`How buyers in ${cityPage.city} tend to compare homes`}
            description="These are usually the filters buyers apply before they ever look at the exact square footage or seller story."
          />
          <SectionDivider />
          <div className="grid gap-5 md:grid-cols-3">
            {cityPage.pricingFactors.map((factor) => (
              <LocalGuideStatementCard
                key={factor}
                label="Buyer lens"
                text={factor}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="city-prep" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index="3"
            eyebrow="Prep Priorities"
            title={`What to do before listing a house in ${cityPage.city}`}
            description="Focus on the work that helps the home show more clearly and keeps buyers from mentally discounting the price."
          />
          <SectionDivider />
          <div className="grid gap-5 md:grid-cols-3">
            {cityPage.prepPriorities.map((priority) => (
              <LocalGuideStatementCard
                key={priority}
                label="Prep move"
                text={priority}
                tone="white"
              />
            ))}
          </div>
        </div>
      </section>

      {sellerGuides.length > 0 && (
        <section id="city-guides" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index="4"
              eyebrow="Seller Prep Guides"
              title={`Seller questions that usually matter in ${cityPage.city}`}
              description={`Use these topic pages when the local market question turns into a prep question. They connect pricing context in ${cityPage.city} to what you should actually fix, clean up, disclose, or time before listing.`}
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

      {localInsights.length > 0 && (
        <section id="city-neighborhoods" className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index={sellerGuides.length > 0 ? "5" : "4"}
              eyebrow="Neighborhood and Local Insights"
              title={`Smaller-area seller pages around ${cityPage.city}`}
              description="City-level pages are useful, but sellers often search by neighborhood, subarea, or local pocket too. These pages help cover that more detailed layer."
              badge={`${localInsights.length} nearby pages`}
              align="split"
            />
            <SectionDivider />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {localInsights.map((area) => {
                const areaSnapshot = marketSnapshotMap.get(area.slug);
                return (
                  <LocalGuideLinkCard
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

      <section id="city-faqs" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
            <div>
              <LocalGuideSectionHeader
                index={sellerGuides.length > 0 ? "6" : "5"}
                eyebrow="Seller Questions"
                title={`${cityPage.city} seller FAQs`}
                tone="dark"
              />
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
            Want a clearer price range for your {cityPage.city} home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Get a free CMA plus practical seller guidance before you spend money
            in the wrong places or list at the wrong number.
          </p>
          <SectionDivider tone="gold" align="center" />
          <p className="mx-auto mt-5 max-w-xl text-[11px] text-[#1A1A1A]/50">Matt Salit · 425-645-2181 · Century 21 North Homes Realty</p>
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
  const countyAnchorLinks = [
    { href: "#county-overview", label: "Overview" },
    { href: "#county-cities", label: "Cities" },
    ...(sellerGuides.length > 0
      ? [{ href: "#county-guides", label: "Seller guides" }]
      : []),
    ...(neighborhoodEntries.length > 0
      ? [{ href: "#county-neighborhoods", label: "Local pages" }]
      : []),
    { href: "#county-spotlights", label: "Market numbers" },
    { href: "#county-faqs", label: "FAQs" },
  ];

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
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1.02fr,0.98fr] lg:items-center">
          <div>
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
            <p className="text-[11px] leading-6 text-white/40">Seller pricing & prep guidance by Matt Salit · 425-645-2181 · Century 21 North Homes Realty</p>
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
            title={`${countyPage.county} market context first`}
            stats={[
              {
                label: "City guides",
                value: `${cityEntries.length}`,
              },
              {
                label: "Subarea pages",
                value: `${neighborhoodEntries.length}`,
              },
              {
                label: "Median price",
                value: snapshot ? formatCurrency(snapshot.medianSalePrice) : "Broad view",
              },
            ]}
            bullets={[
              "Use the county view for pace and broader pricing context, then narrow down into city and neighborhood pages.",
              `There are ${cityEntries.length} city guides and ${neighborhoodEntries.length} smaller-area pages linked from here.`,
              snapshot
                ? `Current imported market temperature: ${snapshot.marketTemp.toLowerCase()}.`
                : "Use the free CMA when the county numbers need to be translated into your actual buyer pool.",
            ]}
          />
        </div>
      </section>

      <LocalGuideAnchorNav links={countyAnchorLinks} />

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

      <section id="county-overview" className="bg-[#F8F5F0]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <LocalGuideSectionHeader
              index="1"
              eyebrow="Local Context"
              title="How sellers should read this county"
              description={countyPage.localSummary}
            />
            <SectionDivider />
          </div>
          <LocalGuidePanel
            eyebrow="Seller takeaways"
            title={`${countyPage.county} in one pass`}
            items={countyPage.sellerAngles}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-12">
          <LocalGuideFactGrid
            items={[
              {
                label: "City guides",
                value: `${cityEntries.length}`,
                detail: "Use city pages when broad county pricing starts feeling too generic for how buyers will compare your home.",
              },
              {
                label: "Subarea pages",
                value: `${neighborhoodEntries.length}`,
                detail: "These tighter pages help when one side of a city competes differently than another.",
              },
              {
                label: "Market view",
                value: snapshot ? formatCurrency(snapshot.medianSalePrice) : "Broad",
                detail: snapshot
                  ? `Imported snapshot dated ${formatSnapshotDate(snapshot.periodEnd)}.`
                  : "Use the CMA when county numbers need to be translated into a sharper price range.",
              },
            ]}
          />
        </div>
      </section>

      <section id="county-cities" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index="2"
            eyebrow="City Guides"
            title={`Seller pages across ${countyPage.county}`}
            description="This is usually the next layer down once sellers stop asking county-wide questions and start comparing specific city-level competition."
          />
          <SectionDivider />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cityEntries.map((entry) => (
              <LocalGuideLinkCard
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
        <section id="county-guides" className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index="3"
              eyebrow="Seller Prep Guides"
              title={`Seller topics that usually shape outcomes across ${countyPage.county}`}
              description="County pages are broad by design. These seller guides cover the prep questions that usually decide whether a home launches cleanly or creates extra friction before offers start."
              badge={`${sellerGuides.length} related guides`}
              align="split"
            />
            <SectionDivider />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
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

      {neighborhoodEntries.length > 0 && (
        <section id="county-neighborhoods" className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <LocalGuideSectionHeader
              index={sellerGuides.length > 0 ? "4" : "3"}
              eyebrow="Neighborhood and Local City Insights"
              title="Local SEO pages for smaller search terms sellers actually use"
              description="These pages cover the more specific neighborhood and local-area searches that sit underneath the county and city guides."
              badge={`${neighborhoodEntries.length} smaller-area pages`}
              align="split"
            />
            <SectionDivider />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {neighborhoodEntries.map((entry) => (
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

      <section id="county-spotlights" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index={sellerGuides.length > 0 ? "5" : "4"}
            eyebrow="Market Spotlights"
            title="A few local numbers to ground the conversation"
            description="These spotlights are there to help sellers contextualize pace and price without turning the page into a spreadsheet."
          />
          <SectionDivider />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {marketSpotlights.map((entry) => (
              <LocalGuideStatementCard
                key={entry.slug}
                label={`${entry.kind} · ${entry.name}`}
                text={`${formatCurrency(entry.medianSalePrice)} median sale price • ${entry.medianDom} median DOM • ${entry.monthsOfSupply.toFixed(1)} months supply. Imported snapshot date: ${formatSnapshotDate(entry.periodEnd)}.`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="county-faqs" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <LocalGuideSectionHeader
            index={sellerGuides.length > 0 ? "6" : "5"}
            eyebrow="Seller Questions"
            title={`Common ${countyPage.county} seller questions`}
            description="These questions usually sit underneath the county-level pricing conversation once sellers start thinking about timing, prep, and local competition."
            tone="dark"
          />
          <SectionDivider tone="dark" />
          <div className="grid gap-5 md:grid-cols-2">
            {countyPage.sellerQuestions.map((item) => (
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
            Want a county-level pricing read plus a city-specific CMA?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Start with the free CMA and we&apos;ll help narrow the broad county
            picture down to the actual buyer pool for your home.
          </p>
          <SectionDivider tone="gold" align="center" />
          <p className="mx-auto mt-5 max-w-xl text-[11px] text-[#1A1A1A]/50">Matt Salit · 425-645-2181 · Century 21 North Homes Realty</p>
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
