"use client";

import Link from "next/link";
import {
  type SnohoNeighborhood,
  getActiveNeighborhoods,
} from "@/lib/snohomish-data";

/**
 * Mapping from snohomish-data neighborhood slugs → neighborhood-page slugs.
 * snoho slugs omit the "-wa" suffix and sometimes differ in hyphenation.
 * When a mapping is missing, falls back to `${slug}-wa`.
 */
const SNOHO_TO_PAGE: Record<string, string> = {
  // Everett
  "north-everett": "north-everett-wa",
  "northwest-everett": "north-everett-wa",
  "silver-lake-everett": "silver-lake-everett-wa",
  "south-everett": "north-everett-wa",
  // Marysville
  "sunnyside-marysville": "sunnyside-marysville-wa",
  "lakewood-marysville": "lakewood-marysville-wa",
  "central-marysville": "sunnyside-marysville-wa",
  "getchell-whiskey-ridge": "lakewood-marysville-wa",
  // Lake Stevens
  "frontier-village": "frontier-village-wa",
  "lundeen": "frontier-village-wa",
  "north-lake-stevens": "frontier-village-wa",
  "west-lake-stevens": "frontier-village-wa",
  // Snohomish
  "dutch-hill-snohomish": "dutch-hill-snohomish-wa",
  "fobes-hill-snohomish": "fobes-hill-snohomish-wa",
  "fobes-hill-dutch-hill": "fobes-hill-snohomish-wa",
  "blackmans-lake": "dutch-hill-snohomish-wa",
  "historic-downtown-snohomish": "dutch-hill-snohomish-wa",
  "three-lakes-cathcart": "fobes-hill-snohomish-wa",
  // Mount Vernon
  "hillcrest-park-mount-vernon": "hillcrest-park-mount-vernon-wa",
  "hilltop-mount-vernon": "hillcrest-park-mount-vernon-wa",
  "little-mountain-mount-vernon": "little-mountain-mount-vernon-wa",
  "downtown-mount-vernon": "hillcrest-park-mount-vernon-wa",
  "west-mount-vernon": "little-mountain-mount-vernon-wa",
  "college-way-corridor": "hillcrest-park-mount-vernon-wa",
  // Mukilteo
  "harbour-pointe-mukilteo": "harbour-pointe-mukilteo-wa",
  "old-town-mukilteo": "old-town-mukilteo-wa",
  "central-mukilteo": "harbour-pointe-mukilteo-wa",
  "paine-field-edge": "old-town-mukilteo-wa",
  // Bothell — no exact page, map to nearest
  "downtown-bothell": "bothell-east-wa",
  "canyon-park": "bothell-east-wa",
  "north-creek": "bothell-east-wa",
  "norway-hill": "bothell-east-wa",
  // Mill Creek — no exact page, map to nearest
  "aspen": "mill-creek-east-wa",
  "cypress": "mill-creek-east-wa",
  "juniper": "mill-creek-east-wa",
  "magnolia": "mill-creek-east-wa",
  // Arlington
  "arlington-heights": "arlington-heights-wa",
  "downtown-arlington": "arlington-heights-wa",
  "east-arlington": "arlington-heights-wa",
  "gleneagle": "arlington-heights-wa",
  "smokey-point": "arlington-heights-wa",
  // Sultan
  "north-sultan": "north-sultan-wa",
  // Lynnwood
  "alderwood": "alderwood-lynnwood-wa",
  "east-lynnwood": "martha-lake-lynnwood-wa",
  "meadowdale": "alderwood-lynnwood-wa",
  "north-lynnwood": "alderwood-lynnwood-wa",
  // Edmonds — no exact page, map to nearest
  "downtown-bowl-edmonds": "old-town-mukilteo-wa",
  "meadowdale-edmonds": "silver-lake-everett-wa",
  "westgate-five-corners-edmonds": "silver-lake-everett-wa",
  "yost-maplewood-edmonds": "silver-lake-everett-wa",
  // Monroe — no exact page, map to nearest
  "chain-lake": "north-sultan-wa",
  "monroe-north": "monroe-north-wa",
  "roosevelt": "monroe-north-wa",
  "wagner": "monroe-north-wa",
  // Granite Falls — no exact page, map to nearest
  "hyland": "north-sultan-wa",
  "pilchuck": "north-sultan-wa",
  "riverside": "north-sultan-wa",
  "sobey": "north-sultan-wa",
};

function resolvePageSlug(n: SnohoNeighborhood): string {
  return `/sell/neighborhoods/${SNOHO_TO_PAGE[n.slug] ?? `${n.slug}-wa`}`;
}

/**
 * "Neighborhoods that just sold" — pulled from snohomish-landing insights.
 * Shows active neighborhoods with best-fit, tradeoff, and compare-next.
 */
export default function JustSoldNeighborhoods() {
  const active = getActiveNeighborhoods(9);

  return (
    <section className="bg-[#F8F5F0] text-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#C6A664]/15 text-sm font-semibold text-[#C6A664]">
            ◎
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
              Neighborhood Activity
            </p>
            <h2 className="mt-1 text-2xl font-light text-[#1A1A1A] sm:text-3xl">
              Areas that just closed
            </h2>
          </div>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {active.map((n) => (
            <Link
              key={n.slug}
              href={resolvePageSlug(n)}
              className="group relative flex flex-col gap-3 rounded-[22px] border border-[#E8E4DF] bg-white p-6 transition-shadow hover:shadow-md"
              prefetch={false}
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8C8375]">
                {n.parentName}
              </p>
              <p className="text-lg font-semibold text-[#1A1A1A]">{n.name}</p>
              <div className="flex flex-col gap-2 text-xs text-[#5A5A5A]">
                <div className="flex items-start gap-2">
                  <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
                  <p>
                    <span className="font-semibold text-[#1A1A1A]">Best for: </span>
                    {n.bestFit}
                  </p>
                </div>
                {n.tradeoff && (
                  <div className="flex items-start gap-2">
                    <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    <p className="text-xs leading-5 text-[#5A5A5A]">
                      <span className="font-semibold text-[#1A1A1A]">Tradeoff: </span>
                      {n.tradeoff}
                    </p>
                  </div>
                )}
              </div>
              {n.localTexture && (
                <p className="mt-2 text-[11px] leading-5 text-[#8C8375]">
                  {n.localTexture}
                </p>
              )}
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F5F0] text-sm font-semibold text-[#C6A664] transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}