import type { Metadata } from "next";
import Link from "next/link";
import CornerAccent from "@/components/CornerAccent";
import {
  LocalGuideHeroAside,
  LocalGuideLinkCard,
  LocalGuideStatementCard,
} from "@/components/LocalGuideBlocks";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { cityPages } from "@/lib/city-pages";
import { countyPages } from "@/lib/county-pages";
import { marketSnapshotMap } from "@/lib/market-data";
import { neighborhoodPages } from "@/lib/neighborhood-pages";
import { sellerPrepPages } from "@/lib/seller-prep-pages";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local Seller Guides for Snohomish County and Nearby WA Cities",
  description:
    "Browse county, city, and neighborhood seller guides for Snohomish County, Everett, Marysville, Lake Stevens, Snohomish, Mukilteo, Lynnwood, Bothell, Mill Creek, Mount Vernon, and more.",
  keywords: [
    "snohomish county seller guide",
    "everett wa seller guide",
    "marysville wa seller guide",
    "lake stevens seller guide",
    "bothell neighborhood seller guide",
    "home selling guides snohomish county",
  ],
  alternates: {
    canonical: "/sell/local-guides",
  },
  openGraph: {
    title: "Local Seller Guides for Snohomish County and Nearby WA Cities",
    description:
      "County, city, and neighborhood seller pages built around pricing, prep, and listing-readiness questions.",
    url: `${SITE_URL}/sell/local-guides`,
    siteName: "HomeMarketPrep",
    locale: "en_US",
    type: "website",
  },
};

const featuredSellerGuides = sellerPrepPages.slice(0, 6);

const groupedNeighborhoods = cityPages
  .map((city) => ({
    city,
    neighborhoods: neighborhoodPages.filter(
      (page) => page.parentCitySlug === city.slug,
    ),
  }))
  .filter((entry) => entry.neighborhoods.length > 0);

const cityGroups = countyPages.map((county) => ({
  county,
  cities: cityPages.filter((city) => city.countySlug === county.slug),
}));

const quickStartPaths = [
  {
    label: "County first",
    title: "Use this when the question is broad",
    description:
      "Start here if you need pricing pace, market direction, and a high-level read before narrowing down.",
    href: "#counties",
    countLabel: `${countyPages.length} county guides`,
  },
  {
    label: "City guide",
    title: "Use this when buyers compare at the city level",
    description:
      "Move here when seller questions start sounding local: Everett, Marysville, Lake Stevens, Snohomish, and more.",
    href: "#cities",
    countLabel: `${cityPages.length} city guides`,
  },
  {
    label: "Neighborhood page",
    title: "Use this when broad city numbers feel too generic",
    description:
      "These pages help when buyers will compare one side of a city, school pocket, or neighborhood differently.",
    href: "#neighborhoods",
    countLabel: `${neighborhoodPages.length} neighborhood pages`,
  },
];

const sellerIntentTags = [
  "Home value context",
  "What to fix first",
  "Best time to list",
  "Neighborhood comparisons",
];

const guideDirectorySchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HomeMarketPrep Local Seller Guides",
  url: `${SITE_URL}/sell/local-guides`,
  description:
    "A directory of county, city, and neighborhood seller guides for homeowners getting ready to price, prep, and list in Washington.",
  hasPart: [
    ...countyPages.map((entry) => ({
      "@type": "WebPage",
      name: entry.title,
      url: `${SITE_URL}/sell/${entry.slug}`,
    })),
    ...cityPages.map((entry) => ({
      "@type": "WebPage",
      name: entry.title,
      url: `${SITE_URL}/sell/${entry.slug}`,
    })),
    ...neighborhoodPages.map((entry) => ({
      "@type": "WebPage",
      name: entry.title,
      url: `${SITE_URL}/sell/neighborhoods/${entry.slug}`,
    })),
  ],
};

export default function LocalGuidesIndexPage() {
  const snapshotCount = [...countyPages, ...cityPages].filter((entry) =>
    marketSnapshotMap.has(entry.slug),
  ).length;
  const neighborhoodSnapshotCount = neighborhoodPages.filter((entry) =>
    marketSnapshotMap.has(entry.slug),
  ).length;

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideDirectorySchema) }}
      />

      <SiteHeader />

      <section className="relative overflow-hidden bg-[#111111] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,166,100,0.16),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Local Guides
            </p>
            <h1 className="mt-5 max-w-5xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Browse seller guides by county, city, and neighborhood
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
              This is the cleanest way to move through the site if you are trying to
              price a house, decide what to fix, or narrow down how buyers compare one
              pocket of Snohomish County or nearby Skagit County against another.
            </p>
            <SectionDivider tone="dark" />
            <p className="text-[11px] leading-6 text-white/40">Local seller guides by Matt Salit · 425-645-2181 · mattsalit@writemyoffer.com · Century 21 North Homes Realty</p>
            <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/68">
              {sellerIntentTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
              <a
                href="#counties"
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Start with counties
              </a>
              <a
                href="#cities"
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Jump to cities
              </a>
              <a
                href="#neighborhoods"
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Browse neighborhoods
              </a>
              <Link
                href="/#cma"
                className="rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                Request free CMA
              </Link>
            </div>
          </div>
          <LocalGuideHeroAside
            eyebrow="What is here"
            title="A cleaner local map for seller search intent"
            bullets={[
              "Browse all local seller guides in one place.",
              "County → city → neighborhood for faster answers.",
              "Every page built around seller intent, not vanity metrics.",
            ]}
            stats={[
              { label: "Counties", value: `${countyPages.length}` },
              { label: "City guides", value: `${cityPages.length}` },
              { label: "Neighborhoods", value: `${neighborhoodPages.length}` },
              { label: "Snapshots", value: `${snapshotCount + neighborhoodSnapshotCount}` },
            ]}
          />
        </div>
      </section>

      {/* Quick Start — centered header, tighter, bigger cards */}
      <section className="border-b border-[#E8E4DF] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Quick Start
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            Pick the guide type that matches the question in your head
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg leading-relaxed text-[#5A5A5A]">
            Most sellers do not need every page. They need the right layer of
            local context fast, then a clean path into pricing or prep.
          </p>
          <SectionDivider className="mx-auto" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quickStartPaths.map((path, i) => (
              <a
                key={path.href}
                href={path.href}
                className="group flex flex-col justify-between rounded-[28px] border border-[#E8E4DF] bg-[#F8F5F0] p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-xl"
              >
                <div>
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6A664]/10 text-xl font-bold text-[#C6A664] transition-transform duration-300 group-hover:scale-110">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A664]/80">
                    {path.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-snug text-[#1A1A1A]">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                    {path.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-[#E8E4DF] pt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                    {path.countLabel}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A664] text-sm font-bold text-white transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Counties — full-width centered, no sidebar */}
      <section className="bg-white" id="counties">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Counties First
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Start broad, then narrow down
            </h2>
            <p className="mt-5 max-w-[34rem] mx-auto text-lg leading-relaxed text-[#5A5A5A]">
              County pages are the right starting point when sellers want a fast read
              on general market pace, pricing posture, and where the sharper city or
              neighborhood pages live underneath.
            </p>
            <SectionDivider />
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {countyPages.map((entry) => (
              <LocalGuideLinkCard
                key={entry.slug}
                href={`/sell/${entry.slug}`}
                eyebrow="County guide"
                title={entry.county}
                description={entry.metaDescription}
              />
            ))}
          </div>
        </div>
      </section>

      {/* City Guides — stacked containers, no clutter badges, 2-col city grid inside each */}
      <section className="bg-[#F8F5F0]" id="cities">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              City Guides
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Seller pages for the cities homeowners search most
            </h2>
            <p className="mt-5 max-w-[34rem] mx-auto text-lg leading-relaxed text-[#5A5A5A]">
              These pages handle city-level search intent better than a broad county
              page and are where sellers usually go when they are comparing list timing,
              prep scope, and likely buyer expectations.
            </p>
            <SectionDivider />
          </div>
          <div className="mt-8 space-y-6">
            {cityGroups.map(({ county, cities }) => (
              <div
                key={county.slug}
                className="relative overflow-hidden rounded-[28px] border border-[#E8E4DF] bg-white p-6 shadow-sm"
              >
                <CornerAccent
                  tone="gold"
                  className="absolute right-6 top-6 h-12 w-16 opacity-60"
                />
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
                    {county.county} County
                  </p>
                  <span className="text-xs text-[#8C8375]">
                    · {cities.length} guide{cities.length > 1 ? "s" : ""}
                  </span>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {cities.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/sell/${entry.slug}`}
                      className="group flex items-start gap-3 rounded-xl border border-[#EEE8DF] bg-[#F8F5F0] p-4 transition-all hover:-translate-y-0.5 hover:border-[#C6A664]/40 hover:bg-white"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold tracking-tight text-[#1A1A1A] truncate">
                          {entry.city}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-[#5A5A5A] line-clamp-2">
                          {entry.metaDescription}
                        </p>
                      </div>
                      <span className="mt-0.5 shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#C6A664]/10 text-[11px] font-semibold text-[#C6A664] transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="neighborhoods">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Neighborhood Collections
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Smaller-area pages grouped under their city guides
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              These tighter pages help when sellers know buyers will compare one side of
              a city differently than another. Each collection links back up to the city
              guide so the internal map stays clear.
            </p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {groupedNeighborhoods.map(({ city, neighborhoods }) => (
              <div
                key={city.slug}
                className="relative overflow-hidden rounded-[28px] border border-[#E8E4DF] bg-[#F8F5F0] p-6 shadow-sm"
              >
                <CornerAccent
                  tone="gold"
                  className="absolute right-4 top-4 h-10 w-[4.2rem] opacity-65"
                />
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
                      {city.county}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                      {city.city}
                    </h3>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-[#5A5A5A]">
                      {city.metaDescription}
                    </p>
                  </div>
                  <div className="relative flex items-center gap-3">
                    <span className="rounded-full border border-[#D8D0C4] bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                      {neighborhoods.length} local pages
                    </span>
                    <Link
                      href={`/sell/${city.slug}`}
                      className="rounded-full border border-[#D8D0C4] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-colors hover:border-[#C6A664]"
                    >
                      Open city guide
                    </Link>
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-3">
                  {neighborhoods.map((page) => (
                    <Link
                      key={page.slug}
                      href={`/sell/neighborhoods/${page.slug}`}
                      className="rounded-full border border-[#D8D0C4] bg-white px-4 py-2 text-sm text-[#1A1A1A] transition-colors hover:border-[#C6A664]"
                    >
                      {page.areaName}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0]" id="seller-guides">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 grid gap-8 lg:grid-cols-[0.78fr,1.22fr] lg:items-end">
            <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Prep Searches
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Guides for the questions sellers ask before they ever request a CMA
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#5A5A5A]">
              These are the search terms that usually show up alongside pricing:
              repairs, staging, paperwork, timing, showings, inspections, and whether
              to sell as-is.
            </p>
            <SectionDivider />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#E8E4DF] bg-white px-5 py-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  Most useful when
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                  You already know the city or neighborhood and now need to decide what
                  to repair, stage, disclose, or skip.
                </p>
              </div>
              <div className="rounded-[24px] border border-[#E8E4DF] bg-white px-5 py-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  Search intent
                </p>
                <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                  These pages are built around the seller questions people search before
                  they are ready to talk price out loud.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featuredSellerGuides.map((guide) => (
              <LocalGuideLinkCard
                key={guide.slug}
                href={`/sell/checklists/${guide.slug}`}
                eyebrow="Seller guide"
                title={guide.shortTitle}
                description={guide.summary}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="grid gap-5 md:grid-cols-3">
            <LocalGuideStatementCard
              label="How to use this"
              text="Start at the county level if you need general context, move to the city page when buyer expectations get more specific, and use the neighborhood pages when broad city averages are no longer enough."
              tone="white"
            />
            <LocalGuideStatementCard
              label="Best next step"
              text="Use a free CMA once you know which local page best matches the way buyers will actually compare your property."
              tone="white"
            />
            <LocalGuideStatementCard
              label="Need pricing help"
              text="The site content helps narrow questions fast. The CMA is where the actual house, condition, and comp set get translated into a usable range."
              tone="white"
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/#cma"
              className="rounded-full bg-[#C6A664] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
            >
              Request Free CMA
            </Link>
            <Link
              href="/#seller-answers"
              className="rounded-full border border-[#D8D0C4] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-colors hover:border-[#C6A664]"
            >
              Browse Seller Answers
            </Link>
          </div>
          <p className="mt-8 text-center text-[11px] text-white/40">Matt Salit · 425-645-2181 · mattsalit@writemyoffer.com · Century 21 North Homes Realty</p>
        </div>
      </section>
    </div>
  );
}
