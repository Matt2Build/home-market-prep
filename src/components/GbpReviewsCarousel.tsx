"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import {
  type GbpReview,
  gbpReviews,
  avgRating,
  GBP_REVIEW_URL,
} from "@/data/gbp-reviews";

/** Google Business Profile reviews carousel — dark/gold tone, horizontal scroll */
export default function GbpReviewsCarousel({ tone = "light" }: { tone?: "light" | "dark" }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const isDark = tone === "dark";

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1 text-lg">
          {Array.from({ length: Math.round(avgRating) }).map((_, i) => (
            <span key={i} className={isDark ? "text-[#FFD700]" : "text-[#C6A664]"}>★</span>
          ))}
        </span>
        <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-[#1A1A1A]"}`}>
          {avgRating.toFixed(1)} out of 5
        </p>
        <span className={`text-xs ${isDark ? "text-white/50" : "text-[#5A5A5A]"}`}>
          · {gbpReviews.length} Google reviews
        </span>
        <a
          href={GBP_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`ml-auto text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-[#D4BC82] ${isDark ? "text-[#C6A664]" : "text-[#5A5A5A]"}`}
        >
          Leave a review →
        </a>
      </div>

      <div className="relative">
        {/* Scroll left button */}
        {canScrollLeft && (
          <button
            type="button"
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
            onClick={() => scrollRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
          >
            ←
          </button>
        )}
        {/* Scroll right button */}
        {canScrollRight && (
          <button
            type="button"
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-sm hover:bg-black/70"
            onClick={() => scrollRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
          >
            →
          </button>
        )}

        <div
          ref={scrollRef}
          className={`flex gap-[16px] overflow-x-auto scroll-smooth pb-2 ${isDark ? "scrollbar-thin" : "scrollbar-thin"}`}>
          {gbpReviews.map((review, idx) => (
            <div key={idx} className={`w-[340px] shrink-0 rounded-[26px] border p-6 ${isDark ? "border-[#C6A664]/25 bg-white/[0.06]" : "border-[#E8E4DF] bg-white"}`}>
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${isDark ? "bg-[#C6A664]/25 text-[#C6A664]" : "bg-[#C6A664]/10 text-[#C6A664]"}`}
                >
                  {review.author.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <p className={`text-sm font-semibold ${isDark ? "text-[#C6A664]" : "text-[#1A1A1A]"}`}>{review.author}</p>
                  <p className={`text-xs ${isDark ? "text-white/60" : "text-[#5A5A5A]"}`}>{review.date}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className={`text-sm ${isDark ? "text-[#FFD700]" : "text-[#C6A664]"}`}>★</span>
                ))}
              </div>
              <p className={`text-sm leading-6 ${isDark ? "text-white/90" : "text-[#5A5A5A]"}`}>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
