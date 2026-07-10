import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { cityPages } from "@/lib/city-pages";
import {
  sellerPrepPageMap,
  sellerPrepPages,
  type SellerPrepPage,
} from "@/lib/seller-prep-pages";
import { SITE_URL } from "@/lib/site";

type SellerPrepPageProps = {
  params: Promise<{ slug: string }>;
};

const prepVisuals: Record<
  string,
  { icon: string; accent: string; cue: string; result: string }
> = {
  "declutter-before-selling-house-wa": {
    icon: "01",
    accent: "Declutter",
    cue: "Clear surfaces, thinner rooms, lighter photos.",
    result: "The home feels larger and easier to buy.",
  },
  "moving-storage-checklist-before-selling-wa": {
    icon: "02",
    accent: "Store",
    cue: "Pack earlier so the house can stay show-ready.",
    result: "Less chaos once showings start.",
  },
  "repairs-before-selling-house-wa": {
    icon: "03",
    accent: "Repair",
    cue: "Handle the visible maintenance buyers remember.",
    result: "Fewer mental deductions during tours.",
  },
  "deep-clean-before-listing-house-wa": {
    icon: "04",
    accent: "Clean",
    cue: "Focus on light, odor, and detail-level upkeep.",
    result: "A brighter, more trustworthy first impression.",
  },
  "paperwork-needed-to-sell-house-wa": {
    icon: "05",
    accent: "Organize",
    cue: "Gather the practical documents before launch week.",
    result: "A smoother, less reactive listing process.",
  },
  "show-ready-house-checklist-wa": {
    icon: "06",
    accent: "Show",
    cue: "Keep the reset routine simple and sustainable.",
    result: "Better access and better early momentum.",
  },
};

const relatedCities = cityPages
  .filter((entry) =>
    ["everett-wa", "marysville-wa", "bothell-wa", "lynnwood-wa"].includes(
      entry.slug,
    ),
  )
  .map((entry) => ({
    href: `/sell/${entry.slug}`,
    label: entry.city,
  }));

export function generateStaticParams() {
  return sellerPrepPages.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: SellerPrepPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = sellerPrepPageMap.get(slug);

  if (!page) {
    return {};
  }

  const canonicalPath = `/sell/checklists/${page.slug}`;

  return {
    title: `${page.title} | Seller Prep Guide`,
    description: page.metaDescription,
    keywords: [
      page.shortTitle,
      `${page.shortTitle} washington`,
      `${page.shortTitle} snohomish county`,
      "seller prep checklist washington",
      "home selling checklist snohomish county",
      "pre listing checklist washington",
    ],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${page.title} | Seller Prep Guide`,
      description: page.metaDescription,
      url: canonicalPath,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | Seller Prep Guide`,
      description: page.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

function RelatedGuideCard({
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
      <h3 className="mt-3 text-xl font-semibold leading-snug">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">{description}</p>
    </Link>
  );
}

function SellerPrepView({ page }: { page: SellerPrepPage }) {
  const visual = prepVisuals[page.slug] ?? {
    icon: "00",
    accent: "Prepare",
    cue: "Sharper prep creates a cleaner launch.",
    result: "Better buyer confidence before offers.",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({
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
        name: "Seller Prep Guides",
        item: `${SITE_URL}/#seller-answers`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.title,
        item: `${SITE_URL}/sell/checklists/${page.slug}`,
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
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-14 sm:py-16 lg:grid-cols-[1.15fr,0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
              {page.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/75">
              <span className="rounded-full border border-white/15 px-4 py-2">
                {page.timeframe}
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Washington seller guide
              </span>
              <span className="rounded-full border border-white/15 px-4 py-2">
                Free CMA available
              </span>
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C6A664] text-xl font-semibold text-[#1A1A1A]">
                {visual.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A664]">
                  {visual.accent}
                </p>
                <p className="mt-2 text-sm leading-6 text-white/76">
                  {visual.cue}
                </p>
              </div>
            </div>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/46">
                Result
              </p>
              <p className="mt-2 text-sm leading-6 text-white/76">
                {visual.result}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-8 w-8 rounded-full border border-[#D9CFBF] bg-[#F8F5F0]" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Why Sellers Search This
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              The goal is to make the home easier to buy
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#5A5A5A]">
              {page.whyItMatters}
            </p>
          </div>
          <div className="rounded-3xl border border-[#E8E4DF] bg-[#F8F5F0] p-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-semibold text-[#C6A664]">
                1
              </span>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                Quick takeaway
              </p>
            </div>
            <p className="mt-4 text-sm leading-7 text-[#5A5A5A]">
              {page.localAngle}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#C6A664]">
                  2
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                  Checklist
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
                What to do
              </h2>
            </div>
            <div className="hidden rounded-full border border-[#D9CFBF] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A5A5A] md:block">
              {page.checklist.length} steps
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.checklist.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E8E4DF] bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F5F0] text-xs font-semibold text-[#C6A664]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#5A5A5A]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0] text-xs font-semibold text-[#C6A664]">
                3
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Common Mistakes
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Where sellers usually create extra friction
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {page.mistakes.map((item, index) => (
              <div
                key={item}
                className="rounded-2xl border border-[#E8E4DF] bg-[#F8F5F0] p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  Avoid 0{index + 1}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#5A5A5A]">{item}</p>
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
                4
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                Related Seller Pages
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Keep going from prep into pricing and local context
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <RelatedGuideCard
              href="/#cma"
              eyebrow="Free CMA"
              title="Get a pricing read before spending more"
              description="Use a local CMA to decide which prep items matter most for your specific house and price range."
            />
            <RelatedGuideCard
              href="/sell/snohomish-county-wa"
              eyebrow="County Guide"
              title="Snohomish County seller guide"
              description="Browse the broader county-level market context and use city pages to narrow down buyer comparisons."
            />
            {relatedCities.slice(0, 2).map((city) => (
              <RelatedGuideCard
                key={city.href}
                href={city.href}
                eyebrow="City Guide"
                title={`Selling in ${city.label}, WA`}
                description={`See local seller guidance for ${city.label}, including pricing context, prep priorities, and common buyer comparisons.`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="seller-faqs" className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-[#C6A664]">
                5
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
                FAQs
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
              Common questions on this topic
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {page.faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold leading-snug">
                  {item.question}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/72">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#C6A664]">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center text-[#1A1A1A]">
          <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
            Need the pricing side too?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Get a free CMA plus seller guidance so you can connect the checklist
            work to a real pricing strategy.
          </p>
          <Link
            href="/#cma"
            className="mt-8 inline-flex rounded-full bg-[#111111] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2B2B2B]"
          >
            Request My Free CMA
          </Link>
        </div>
      </section>
    </div>
  );
}

export default async function SellerPrepGuidePage({
  params,
}: SellerPrepPageProps) {
  const { slug } = await params;
  const page = sellerPrepPageMap.get(slug);

  if (!page) {
    notFound();
  }

  return <SellerPrepView page={page} />;
}
