"use client";

import {
  type GbpReview,
  gbpReviews,
  avgRating,
  GBP_REVIEW_URL,
} from "@/data/gbp-reviews";
import { useEffect, useRef, useState } from "react";

const CARD_WIDTH = 340;
const GAP = 20;
const AUTO_DELAY = 3000;

/** Google Business Profile reviews carousel — auto-scrolling, pause on hover */
export default function GbpReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [hovered, setHovered] = useState(false);
  // Duplicate reviews for seamless loop
  const loopReviews: GbpReview[] = [...gbpReviews, ...gbpReviews];
  const singleSetWidth = gbpReviews.length * (CARD_WIDTH + GAP);

  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setPos((p) => {
        const next = p + (CARD_WIDTH + GAP);
        if (next >= singleSetWidth) return 0;
        return next;
      });
    }, AUTO_DELAY);
    return () => clearInterval(interval);
  }, [hovered, singleSetWidth]);

  return (
    <div
      className="mx-auto max-w-7xl px-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center gap-4">
        <span className="text-xl text-[#C6A664]">
          {"★".repeat(Math.round(avgRating))}
        </span>
        <div>
          <p className="text-sm font-semibold text-white">
            {avgRating.toFixed(1)} out of 5
          </p>
          <p className="text-xs text-white/50">
            {gbpReviews.length} reviews from Google Business Profile
          </p>
        </div>
        <a
          href={GBP_REVIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-xs font-semibold uppercase tracking-[0.14em] text-[#C6A664] transition-colors hover:text-[#D4BC82]"
        >
          Read all reviews →
        </a>
      </div>

      <div className="mt-6 overflow-hidden" ref={scrollRef}>
        <div
          className="flex gap-5 transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${pos}px)` }}
        >
          {loopReviews.map((review, i) => (
            <div
              key={i}
              className="w-[340px] shrink-0 rounded-[26px] border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A664]/20 text-xs font-bold text-[#C6A664]">
                  {review.author
                    .split(" ")
                    .map((w) => w[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {review.author}
                  </p>
                  <p className="text-xs text-white/40">{review.date}</p>
                </div>
              </div>
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: review.rating }).map((_, idx) => (
                  <span key={idx} className="text-sm text-[#C6A664]">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm leading-6 text-white/72">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
