"use client";

import { gbpReviews, GBP_REVIEW_URL } from "@/data/gbp-reviews";
import { useEffect, useRef, useState } from "react";

const SPEED = 0.5; // px per frame ~30fps feel

export default function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(0);
  const [hovered, setHovered] = useState(false);
  const items = [...gbpReviews, ...gbpReviews]; // duplicate for seamless loop

  useEffect(() => {
    if (hovered) return;
    let frame: number;
    const step = () => {
      setPos((p) => {
        const next = p + SPEED;
        if (scrollRef.current) {
          const half = scrollRef.current.scrollWidth / 2;
          return next >= half ? next - half : next;
        }
        return next;
      });
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [hovered]);

  return (
    <section className="overflow-hidden bg-[#111111] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-12 pb-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-[#C6A664]">
            ★
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A64]">
              Verified Reviews
            </p>
            <h2 className="mt-1 text-xl font-light tracking-tight text-white">
              What sellers and buyers in Snohomish County say
            </h2>
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-5 px-6 pb-8"
          style={{ transform: `translateX(${-pos}px)` }}
        >
          {items.map((r, i) => (
            <a
              key={`${r.author}-${i}`}
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-80 shrink-0 cursor-pointer flex-col rounded-[24px] border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#C6A664]/40 hover:bg-white/[0.06]"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A664]/20 text-xs font-semibold text-[#C6A664]">
                  {r.author.split(' ').map(w => w[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{r.author}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, idx) => (
                      <span key={idx} className="text-xs text-[#C6A664]">★</span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/72">
                {r.text}
              </p>
              <p className="mt-3 text-[11px] text-white/40">{r.date}</p>
            </a>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#111111] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#111111] to-transparent" />
      </div>
    </section>
  );
}
