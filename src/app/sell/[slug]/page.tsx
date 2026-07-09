import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cityPageMap, cityPages } from "@/lib/city-pages";
import { SITE_URL } from "@/lib/site";

type CityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cityPages.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cityPage = cityPageMap.get(slug);

  if (!cityPage) {
    return {};
  }

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

export default async function CitySellerPage({ params }: CityPageProps) {
  const { slug } = await params;
  const cityPage = cityPageMap.get(slug);

  if (!cityPage) {
    notFound();
  }

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
        name: "Seller City Guides",
        item: `${SITE_URL}/sell/${cityPage.slug}`,
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
            {cityPage.city}, WA Seller Guide
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {cityPage.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
            {cityPage.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/75">
            <span className="rounded-full border border-white/15 px-4 py-2">
              {cityPage.county}, WA
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              Free CMA
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2">
              Seller Prep Guidance
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Local Overview
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              What sellers in {cityPage.city} usually need to know
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
              {cityPage.localSummary}
            </p>
          </div>
          <div className="rounded-3xl border border-[#E8E4DF] bg-[#F8F5F0] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
              Start here
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-[#5A5A5A]">
              <li>Get a local CMA before spending on projects.</li>
              <li>Fix the maintenance buyers will remember after showings.</li>
              <li>Prepare photos, paperwork, and pricing together.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Pricing Factors
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              How buyers in {cityPage.city} tend to compare homes
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cityPage.pricingFactors.map((factor) => (
              <div
                key={factor}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-8 shadow-sm"
              >
                <p className="text-sm leading-7 text-[#5A5A5A]">{factor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Prep Priorities
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              What to do before listing a house in {cityPage.city}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {cityPage.prepPriorities.map((priority) => (
              <div
                key={priority}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-8"
              >
                <p className="text-sm leading-7 text-[#5A5A5A]">{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Common Seller Questions
            </p>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              {cityPage.city} seller FAQs
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {cityPage.sellerQuestions.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-8"
              >
                <h3 className="text-xl font-semibold leading-snug">{item.question}</h3>
                <p className="mt-4 text-sm leading-6 text-[#5A5A5A]">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
            Want a clearer price range for your {cityPage.city} home?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/75">
            Get a free CMA plus practical seller guidance before you spend money
            in the wrong places or list at the wrong number.
          </p>
          <Link
            href="/#cma"
            className="mt-10 inline-flex rounded-full bg-[#C6A664] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
          >
            Start My Free CMA
          </Link>
        </div>
      </section>
    </div>
  );
}
