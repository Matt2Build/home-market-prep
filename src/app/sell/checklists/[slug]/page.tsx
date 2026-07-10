import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CornerAccent from "@/components/CornerAccent";
import SectionDivider from "@/components/SectionDivider";
import SiteHeader from "@/components/SiteHeader";
import { cityPages } from "@/lib/city-pages";
import { neighborhoodPageMap } from "@/lib/neighborhood-pages";
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
  "home-staging-tips-to-sell-house-wa": {
    icon: "07",
    accent: "Stage",
    cue: "Edit the rooms so buyers understand them faster.",
    result: "Stronger photos and cleaner room-to-room flow.",
  },
  "seller-disclosures-checklist-wa": {
    icon: "08",
    accent: "Disclose",
    cue: "Organize the property story before buyers ask for it.",
    result: "Less uncertainty around known issues and repairs.",
  },
  "best-time-to-sell-house-wa": {
    icon: "09",
    accent: "Time",
    cue: "Launch when readiness and pricing are actually aligned.",
    result: "A stronger first two weeks on market.",
  },
  "sell-house-as-is-wa": {
    icon: "10",
    accent: "As-Is",
    cue: "Frame the condition honestly and price around it clearly.",
    result: "Less confusion between buyer expectation and reality.",
  },
  "pre-listing-inspection-wa": {
    icon: "11",
    accent: "Inspect",
    cue: "Use inspection clarity before repair money gets spent blindly.",
    result: "Cleaner decisions on repairs, disclosures, and pricing.",
  },
};

const relatedPrepSlugs: Record<string, string[]> = {
  "declutter-before-selling-house-wa": [
    "deep-clean-before-listing-house-wa",
    "home-staging-tips-to-sell-house-wa",
    "moving-storage-checklist-before-selling-wa",
  ],
  "moving-storage-checklist-before-selling-wa": [
    "declutter-before-selling-house-wa",
    "show-ready-house-checklist-wa",
    "best-time-to-sell-house-wa",
  ],
  "repairs-before-selling-house-wa": [
    "pre-listing-inspection-wa",
    "sell-house-as-is-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "deep-clean-before-listing-house-wa": [
    "declutter-before-selling-house-wa",
    "show-ready-house-checklist-wa",
    "home-staging-tips-to-sell-house-wa",
  ],
  "paperwork-needed-to-sell-house-wa": [
    "seller-disclosures-checklist-wa",
    "best-time-to-sell-house-wa",
    "show-ready-house-checklist-wa",
  ],
  "show-ready-house-checklist-wa": [
    "deep-clean-before-listing-house-wa",
    "home-staging-tips-to-sell-house-wa",
    "moving-storage-checklist-before-selling-wa",
  ],
  "home-staging-tips-to-sell-house-wa": [
    "declutter-before-selling-house-wa",
    "deep-clean-before-listing-house-wa",
    "show-ready-house-checklist-wa",
  ],
  "seller-disclosures-checklist-wa": [
    "paperwork-needed-to-sell-house-wa",
    "pre-listing-inspection-wa",
    "sell-house-as-is-wa",
  ],
  "best-time-to-sell-house-wa": [
    "repairs-before-selling-house-wa",
    "show-ready-house-checklist-wa",
    "moving-storage-checklist-before-selling-wa",
  ],
  "sell-house-as-is-wa": [
    "repairs-before-selling-house-wa",
    "seller-disclosures-checklist-wa",
    "pre-listing-inspection-wa",
  ],
  "pre-listing-inspection-wa": [
    "repairs-before-selling-house-wa",
    "seller-disclosures-checklist-wa",
    "sell-house-as-is-wa",
  ],
};

const localGuideSlugs: Record<string, string[]> = {
  "declutter-before-selling-house-wa": ["everett-wa", "marysville-wa"],
  "moving-storage-checklist-before-selling-wa": ["lynnwood-wa", "bothell-wa"],
  "repairs-before-selling-house-wa": ["snohomish-wa", "arlington-wa"],
  "deep-clean-before-listing-house-wa": ["mukilteo-wa", "lake-stevens-wa"],
  "paperwork-needed-to-sell-house-wa": ["bothell-wa", "everett-wa"],
  "show-ready-house-checklist-wa": ["marysville-wa", "lynnwood-wa"],
  "home-staging-tips-to-sell-house-wa": ["mukilteo-wa", "mill-creek-wa"],
  "seller-disclosures-checklist-wa": ["snohomish-wa", "bothell-wa"],
  "best-time-to-sell-house-wa": ["lake-stevens-wa", "everett-wa"],
  "sell-house-as-is-wa": ["arlington-wa", "mount-vernon-wa"],
  "pre-listing-inspection-wa": ["snohomish-wa", "arlington-wa"],
};

const localNeighborhoodSlugs: Record<string, string[]> = {
  "declutter-before-selling-house-wa": [
    "north-everett-wa",
    "sunnyside-marysville-wa",
  ],
  "moving-storage-checklist-before-selling-wa": [
    "alderwood-lynnwood-wa",
    "harbour-pointe-mukilteo-wa",
  ],
  "repairs-before-selling-house-wa": [
    "fobes-hill-snohomish-wa",
    "arlington-heights-wa",
  ],
  "deep-clean-before-listing-house-wa": [
    "silver-lake-everett-wa",
    "martha-lake-lynnwood-wa",
  ],
  "paperwork-needed-to-sell-house-wa": [
    "dutch-hill-snohomish-wa",
    "hillcrest-park-mount-vernon-wa",
  ],
  "show-ready-house-checklist-wa": [
    "lakewood-marysville-wa",
    "alderwood-lynnwood-wa",
  ],
  "home-staging-tips-to-sell-house-wa": [
    "harbour-pointe-mukilteo-wa",
    "mill-creek-west-wa",
  ],
  "seller-disclosures-checklist-wa": [
    "bothell-east-wa",
    "old-town-mukilteo-wa",
  ],
  "best-time-to-sell-house-wa": [
    "frontier-village-wa",
    "north-everett-wa",
  ],
  "sell-house-as-is-wa": [
    "cavalero-wa",
    "little-mountain-mount-vernon-wa",
  ],
  "pre-listing-inspection-wa": [
    "fobes-hill-snohomish-wa",
    "little-mountain-mount-vernon-wa",
  ],
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

function StepGraphic({ index }: { index: number }) {
  const variant = index % 4;

  if (variant === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 120 72" className="h-16 w-24" fill="none">
        <rect x="8" y="18" width="52" height="12" rx="6" fill="#EBDDAB" />
        <rect x="8" y="40" width="74" height="10" rx="5" fill="#F4EBD7" />
        <path d="M72 20H112" stroke="#C6A664" strokeWidth="2" strokeLinecap="round" />
        <path d="M90 40H112" stroke="#D9CFBF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 120 72" className="h-16 w-24" fill="none">
        <circle cx="28" cy="36" r="16" fill="#F4EBD7" />
        <circle cx="28" cy="36" r="7" fill="#C6A664" fillOpacity="0.9" />
        <path d="M58 24H110" stroke="#C6A664" strokeWidth="2" strokeLinecap="round" />
        <path d="M58 38H98" stroke="#D9CFBF" strokeWidth="2" strokeLinecap="round" />
        <path d="M58 52H88" stroke="#E8E4DF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 2) {
    return (
      <svg aria-hidden="true" viewBox="0 0 120 72" className="h-16 w-24" fill="none">
        <rect x="12" y="14" width="24" height="44" rx="12" fill="#F4EBD7" />
        <rect x="44" y="24" width="24" height="34" rx="12" fill="#EBDDAB" />
        <rect x="76" y="8" width="24" height="50" rx="12" fill="#C6A664" fillOpacity="0.85" />
        <path d="M8 62H112" stroke="#E8E4DF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 120 72" className="h-16 w-24" fill="none">
      <path
        d="M12 48C22 34 32 28 42 28C56 28 60 44 74 44C86 44 94 34 108 18"
        stroke="#C6A664"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="24" cy="38" r="6" fill="#F4EBD7" />
      <circle cx="58" cy="36" r="6" fill="#EBDDAB" />
      <circle cx="94" cy="26" r="6" fill="#F4EBD7" />
      <path d="M12 58H72" stroke="#E8E4DF" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MistakeGraphic({ index }: { index: number }) {
  const variant = index % 3;

  if (variant === 0) {
    return (
      <svg aria-hidden="true" viewBox="0 0 88 64" className="h-14 w-20" fill="none">
        <path d="M14 16H74" stroke="#E0D6C6" strokeWidth="2" strokeLinecap="round" />
        <path d="M22 30H66" stroke="#C6A664" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M30 46H58" stroke="#E0D6C6" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="16" r="4" fill="#F4EBD7" />
        <circle cx="68" cy="46" r="4" fill="#F4EBD7" />
      </svg>
    );
  }

  if (variant === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 88 64" className="h-14 w-20" fill="none">
        <rect x="14" y="14" width="18" height="36" rx="9" fill="#F4EBD7" />
        <rect x="36" y="22" width="18" height="28" rx="9" fill="#EBDDAB" />
        <rect x="58" y="10" width="16" height="40" rx="8" fill="#D9CFBF" />
        <path d="M12 54H76" stroke="#C6A664" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 88 64" className="h-14 w-20" fill="none">
      <path
        d="M14 42C22 28 30 22 40 22C50 22 56 34 66 34C72 34 77 30 82 24"
        stroke="#C6A664"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="36" r="5" fill="#F4EBD7" />
      <circle cx="44" cy="28" r="5" fill="#EBDDAB" />
      <circle cx="70" cy="30" r="5" fill="#F4EBD7" />
    </svg>
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
  const relatedPrepPages = (relatedPrepSlugs[page.slug] ?? [])
    .map((slug) => sellerPrepPageMap.get(slug))
    .filter((entry): entry is SellerPrepPage => Boolean(entry));
  const heroPreviewSteps = page.checklist.slice(0, 3);
  const relatedLocalPages = (localGuideSlugs[page.slug] ?? [])
    .map((slug) => cityPages.find((entry) => entry.slug === slug))
    .filter((entry): entry is (typeof cityPages)[number] => Boolean(entry));
  const relatedNeighborhoodPages = (localNeighborhoodSlugs[page.slug] ?? [])
    .map((slug) => neighborhoodPageMap.get(slug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

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
        <div className="absolute inset-y-0 right-0 hidden w-[34rem] bg-[radial-gradient(circle_at_center,rgba(198,166,100,0.08),transparent_62%)] lg:block" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-14 lg:grid-cols-[1.08fr,0.92fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              {page.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-light leading-[1.04] tracking-tight sm:text-5xl md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
              {page.summary}
            </p>
            <SectionDivider tone="dark" />
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/75">
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
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#guide-steps"
                className="rounded-full bg-[#C6A664] px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
              >
                Jump to the checklist
              </a>
              <a
                href="#guide-links"
                className="rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/80 transition-colors hover:bg-white/8 hover:text-white"
              >
                Explore related guides
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm lg:p-7">
            <CornerAccent
              tone="dark"
              className="absolute right-5 top-5 h-12 w-[4.5rem] opacity-70"
            />
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#C6A664] text-xl font-semibold text-[#1A1A1A]">
                {visual.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C6A664]">
                  {visual.accent}
                </p>
                <h2 className="mt-2 text-2xl font-light tracking-tight text-white">
                  What this guide helps you sort out
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/72">
                  {visual.cue}
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-3">
              {heroPreviewSteps.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                >
                  <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/8 text-[11px] font-semibold text-[#C6A664]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-white/76">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#C6A664]/20 bg-[#C6A664]/10 px-4 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C6A664]">
                Result
              </p>
              <p className="mt-2 text-sm leading-6 text-white/82">
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
            <SectionDivider />
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

      <section id="guide-steps" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
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
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#5A5A5A]">
                Work through the highest-impact actions first. The goal is not to
                do everything. It is to make the home feel cleaner, clearer, and
                easier for buyers to trust.
              </p>
              <SectionDivider />
            </div>
            <div className="inline-flex w-fit rounded-full border border-[#D9CFBF] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A5A5A]">
              {page.checklist.length} actions to work through
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.checklist.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[26px] border border-[#E8E4DF] bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-[#C6A664]/35 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent opacity-90" />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
                      Action {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#5A5A5A]">{item}</p>
                  </div>
                  <div className="shrink-0 rounded-2xl bg-[#F8F5F0] px-2 py-1">
                    <StepGraphic index={index} />
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2 border-t border-[#EEE8DF] pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#C6A664]" />
                  Seller prep priority
                </div>
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
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5A5A5A]">
              These are the places where good seller prep often drifts into extra
              cost, extra delay, or a home that still does not read clearly to buyers.
            </p>
            <SectionDivider />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {page.mistakes.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-[26px] border border-[#E8E4DF] bg-[#F8F5F0] p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/30 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                      Avoid 0{index + 1}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#5A5A5A]">{item}</p>
                  </div>
                  <div className="shrink-0 rounded-2xl bg-white px-2 py-1">
                    <MistakeGraphic index={index} />
                  </div>
                </div>
                <div className="mt-5 border-t border-[#E8E4DF] pt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                  Common seller drag
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="guide-links" className="bg-[#F8F5F0]">
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
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5A5A5A]">
              Use the next links deliberately: keep reading seller topics if you are
              still deciding what to do, jump into local pages if the market context
              matters more, or request a CMA when you need pricing tied to your house.
            </p>
            <SectionDivider />
          </div>
          <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
            <div className="rounded-[30px] border border-[#E8E4DF] bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F5F0] text-sm font-semibold text-[#C6A664]">
                  01
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    Next Seller Reads
                  </p>
                  <p className="mt-1 text-sm text-[#5A5A5A]">
                    Stay in the seller-prep path and read the topics that connect to this one.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <RelatedGuideCard
                  href="/#cma"
                  eyebrow="Free CMA"
                  title="Get a pricing read before spending more"
                  description="Use a local CMA to decide which prep items matter most for your specific house and price range."
                />
                {relatedPrepPages.slice(0, 3).map((entry) => (
                  <RelatedGuideCard
                    key={entry.slug}
                    href={`/sell/checklists/${entry.slug}`}
                    eyebrow="Seller Guide"
                    title={entry.shortTitle}
                    description={entry.summary}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[30px] border border-[#E8E4DF] bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F5F0] text-sm font-semibold text-[#C6A664]">
                  02
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                    Local Market Pages
                  </p>
                  <p className="mt-1 text-sm text-[#5A5A5A]">
                    Pair this seller topic with local pricing context in Snohomish County.
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-5">
                <RelatedGuideCard
                  href="/sell/snohomish-county-wa"
                  eyebrow="County Guide"
                  title="Snohomish County seller guide"
                  description="Browse the broader county-level market context and use city pages to narrow down buyer comparisons."
                />
                <div className="grid gap-5 md:grid-cols-2">
                  {relatedLocalPages.map((city) => (
                    <RelatedGuideCard
                      key={city.slug}
                      href={`/sell/${city.slug}`}
                      eyebrow="City Guide"
                      title={`Selling in ${city.city}, WA`}
                      description={city.heroDescription}
                    />
                  ))}
                </div>
                {relatedNeighborhoodPages.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                      Neighborhood seller pages
                    </p>
                    <div className="mt-3 grid gap-5 md:grid-cols-2">
                      {relatedNeighborhoodPages.map((entry) => (
                        <RelatedGuideCard
                          key={entry.slug}
                          href={`/sell/neighborhoods/${entry.slug}`}
                          eyebrow={`${entry.parentCity} Subarea`}
                          title={`Selling in ${entry.areaName}`}
                          description={entry.heroDescription}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8C8375]">
                    More local guides
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    {relatedCities.slice(0, 4).map((city) => (
                      <Link
                        key={city.href}
                        href={city.href}
                        className="rounded-full border border-[#D9CFBF] bg-[#F8F5F0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5A5A5A] transition-colors hover:border-[#C6A664] hover:text-[#1A1A1A]"
                      >
                        {city.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
            <SectionDivider tone="dark" />
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
