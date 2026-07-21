import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, blogPostMap, type BlogPost } from "@/lib/blog-posts";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Market Insights & Seller Guides | HomeMarketPrep",
  description: "Snohomish County housing market updates, seller guides, neighborhood spotlights, and pricing insights from Matt Salit.",
  keywords: ["Snohomish County housing market", "Washington real estate news", "home selling tips", "neighborhood market updates", "CMA pricing guide"],
  alternates: { canonical: `${SITE_URL}/blog` },
};

const categoryLabels: Record<BlogPost["category"], string> = {
  "market-update": "Market Update",
  "seller-guide": "Seller Guide",
  "neighborhood-spotlight": "Neighborhood Spotlight",
  "pricing": "Pricing",
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <SiteHeader />

      {/* Hero */}
      <section className="bg-[#111111] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Market Insights
          </p>
          <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
            Snohomish County housing market updates & seller guides
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/72">
            Local market analysis, neighborhood spotlights, and practical seller guidance — updated regularly.
          </p>
          <p className="mt-3 text-[11px] text-white/40">
            By Matt Salit · 425-645-2181 · mattsalit@writemyoffer.com · Century 21 North Homes Realty
          </p>
        </div>
      </section>

      {/* Posts */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sorted.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group relative overflow-hidden rounded-[24px] border border-[#E8E4DF] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent opacity-80" />
                <div className="flex items-center gap-2">
                  <span className="rounded-full border border-[#C6A664]/30 bg-[#C6A664]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C6A664]">
                    {categoryLabels[post.category]}
                  </span>
                  <span className="text-[10px] text-[#8C8375]">{post.readTime}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold leading-snug group-hover:text-[#8A7D68]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
                  {post.metaDescription}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-[#EEE8DF] pt-4">
                  <span className="text-[11px] text-[#8C8375]">
                    {new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#F8F5F0] text-sm font-semibold text-[#C6A664] transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CMA CTA */}
      <section className="bg-[#C6A664]">
        <div className="mx-auto max-w-4xl px-6 py-14 text-center text-[#1A1A1A]">
          <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
            Need a real number, not an estimate?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
            Get a free, neighborhood-level CMA based on actual comparable sales — not an algorithm.
          </p>
          <a
            href="/#cma"
            className="mt-8 inline-flex rounded-full bg-[#111111] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2B2B2B]"
          >
            Request My Free CMA
          </a>
        </div>
      </section>
    </div>
  );
}
