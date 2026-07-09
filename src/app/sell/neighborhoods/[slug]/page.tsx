import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import MarketSnapshotSection from "@/components/MarketSnapshotSection";
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
import { SITE_URL } from "@/lib/site";

type NeighborhoodSellerPageProps = {
  params: Promise<{ slug: string }>;
};

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

      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-bold uppercase tracking-[0.2em] text-white">
            <span>Home</span>
            <span className="text-[#C6A664]">Market</span>
            <span>Prep</span>
          </Link>
          <Link
            href="/#cma"
            className="rounded-full bg-[#C6A664] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
          >
            Get My Free CMA
          </Link>
        </div>
      </nav>

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Neighborhood Seller Guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {page.heroDescription}
          </p>
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
            <span className="rounded-full border border-white/15 px-4 py-2">
              Neighborhood-level seller SEO page
            </span>
          </div>
        </div>
      </section>

      {snapshot && (
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-18 sm:py-20">
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
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Local Overview
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              How sellers should think about {page.areaName}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
              {page.localSummary}
            </p>
          </div>
          <div className="rounded-3xl border border-[#E8E4DF] bg-white p-8">
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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Pricing Factors
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              What buyers in {page.areaName} tend to compare
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {page.pricingFactors.map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-8"
              >
                <p className="text-sm leading-7 text-[#5A5A5A]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {nearbyAreas.length > 0 && (
        <section className="bg-[#F8F5F0]">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Nearby Local Pages
              </p>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                More neighborhood-level seller guides nearby
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Seller Questions
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              {page.areaName} seller FAQs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {page.sellerQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >
                <h3 className="text-xl font-semibold leading-snug">{item.question}</h3>
                <p className="mt-4 text-sm leading-6 text-white/72">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C6A664]">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center text-[#1A1A1A]">
          <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
            Want a tighter local pricing read for {page.areaName}?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Start with the free CMA and we&apos;ll translate the broad market into
            a pricing range that actually fits your home and your local buyer
            pool.
          </p>
          <Link
            href="/#cma"
            className="mt-10 inline-flex rounded-full bg-[#111111] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2B2B2B]"
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
