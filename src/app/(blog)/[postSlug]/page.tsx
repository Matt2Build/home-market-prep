import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostMap, blogPosts } from "@/lib/blog-posts";
import SiteHeader from "@/components/SiteHeader";
import { SITE_URL } from "@/lib/site";
import Markdown from "react-markdown";

type PostPageProps = {
  params: Promise<{ postSlug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((p) => ({ postSlug: p.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { postSlug } = await params;
  const post = blogPostMap.get(postSlug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: `${post.title} | HomeMarketPrep`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: post.publishDate,
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/opengraph-image"],
    },
  };
}

function InlineCmaLink() {
  return (
    <Link
      href="/#cma"
      className="inline-flex items-center gap-1 rounded-full bg-[#C6A664]/15 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#C6A664] no-underline transition-colors hover:bg-[#C6A664]/25"
    >
      Free CMA →
    </Link>
  );
}

const articleSchema = (post: { title: string; metaDescription: string; publishDate: string; slug: string }) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.metaDescription,
  datePublished: post.publishDate,
  url: `${SITE_URL}/blog/${post.slug}`,
  author: {
    "@type": "Person",
    name: "Matt Salit",
    telephone: "425-645-2181",
    email: "mattsalit@writemyoffer.com",
  },
  publisher: {
    "@type": "Organization",
    name: "HomeMarketPrep",
  },
});

export default async function BlogPostPage({ params }: PostPageProps) {
  const { postSlug } = await params;
  const post = blogPostMap.get(postSlug);
  if (!post) notFound();

  const schema = articleSchema(post);

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader />

      <article>
        {/* Hero */}
        <section className="bg-[#111111] text-white">
          <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              {post.category.replace("-", " ")}
            </p>
            <h1 className="mt-4 text-3xl font-light leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex items-center gap-4 text-sm text-white/60">
              <span>{new Date(post.publishDate).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
            <p className="mt-3 text-[11px] text-white/40">
              By Matt Salit · 425-645-2181 · Century 21 North Homes Realty
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-white">
          <div className="mx-auto max-w-3xl px-6 py-10">
            <div className="prose prose-neutral max-w-none prose-headings:font-light prose-headings:tracking-tight prose-a:text-[#C6A664] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#1A1A1A] prose-p:text-[#5A5A5A] prose-p:leading-7">
              <Markdown>
                {post.body}
              </Markdown>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#C6A664]">
          <div className="mx-auto max-w-4xl px-6 py-14 text-center text-[#1A1A1A]">
            <h2 className="text-3xl font-light tracking-tight sm:text-5xl">
              Want this analysis for your home?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#1A1A1A]/80">
              Get a free, neighborhood-level CMA based on real comparable sales and current buyer demand.
            </p>
            <Link
              href="/#cma"
              className="mt-8 inline-flex rounded-full bg-[#111111] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:bg-[#2B2B2B]"
            >
              Request My Free CMA
            </Link>
          </div>
        </section>

        {/* Back to blog */}
        <section className="border-t border-[#E8E4DF] bg-[#F8F5F0]">
          <div className="mx-auto max-w-3xl px-6 py-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#5A5A5A] transition-colors hover:text-[#C6A664]"
            >
              ← Back to all insights
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
