import Link from "next/link";
import {
  type SnohoNeighborhood,
  getActiveNeighborhoods,
} from "@/lib/snohomish-data";

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
            <h2 className="mt-1 text-2xl font-light tracking-tight sm:text-3xl">
              Neighborhoods that sold recently
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5A5A5A]">
              Real neighborhoods where buyers are active right now. Use the fit and tradeoff cues to understand where each area works best.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {active.map((n) => (
            <NeighborhoodCard key={n.slug} neighborhood={n} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NeighborhoodCard({
  neighborhood,
}: {
  neighborhood: SnohoNeighborhood;
}) {
  const n = neighborhood;

  return (
    <Link
      href={`/sell/neighborhoods/${n.parentSlug}/${n.slug}`}
      className="group relative overflow-hidden rounded-[24px] border border-[#E8E4DF] bg-white p-6 transition-all hover:-translate-y-1 hover:border-[#C6A664]/40 hover:shadow-lg"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent opacity-60" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
            {n.parentName}
          </p>
          <h3 className="mt-2 text-lg font-semibold leading-snug text-[#1A1A1A]">
            {n.name}
          </h3>
          <div className="mt-3 space-y-2">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-green-500" />
              <p className="text-xs leading-5 text-[#5A5A5A]">
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
            <p className="mt-3 text-[11px] leading-5 text-[#8C8375]">
              {n.localTexture}
            </p>
          )}
        </div>
        <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F8F5F0] text-sm font-semibold text-[#C6A664] transition-transform group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}
