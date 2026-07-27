"use client";

import { useState, useMemo } from "react";
import { marketSnapshots, type MarketSnapshot } from "@/lib/market-data";
import CornerAccent from "@/components/CornerAccent";
import SectionDivider from "@/components/SectionDivider";

const marketKindOrder = ["county", "city", "neighborhood"] as const;
type Props =
  | {
      snapshot: MarketSnapshot;
      eyebrow: string;
      title: string;
      description: string;
    }
  | {
      snapshot?: never;
      eyebrow?: never;
      title?: never;
      description?: never;
    };

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function fmt(s: MarketSnapshot) {
  return {
    medianPrice: formatPrice(s.medianSalePrice),
    medianDom: `${Math.round(s.medianDom)} days`,
    monthsSupply: `${s.monthsOfSupply} mo`,
    homesSold: s.homesSold.toLocaleString(),
    avgSaleToList: `${(s.avgSaleToList * 100).toFixed(1)}%`,
    soldAboveList: `${(s.soldAboveList * 100).toFixed(1)}%`,
    medianPpsf: formatPrice(s.medianPpsf).replace(".00", ""),
    inventory: s.inventory.toLocaleString(),
  };
}

const badgeColor = (s: MarketSnapshot) =>
  s.marketColor === "hot"
    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    : s.marketColor === "cool"
      ? "bg-blue-500/10 text-blue-400 border-blue-500/20"
      : "bg-[#C6A664]/10 text-[#C6A664] border-[#C6A664]/20";

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm text-[#A1A1A1]">{label}</span>
      <span className="text-lg font-semibold text-[#1A1A1A]">{value}</span>
    </div>
  );
}

function SnapshotCard({ s }: { s: MarketSnapshot }) {
  return (
    <div className="relative rounded-[28px] border border-[#E8E4DF] bg-white p-6 sm:p-8">
      <CornerAccent tone="gold" className="absolute right-5 top-5 h-10 w-16 opacity-40" />

      <div className="flex flex-wrap items-baseline gap-3 mb-6">
        <h3 className="text-2xl font-light tracking-tight text-[#1A1A1A]">{s.name}</h3>
        <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeColor(s)}`}>
          {s.marketTemp}
        </span>
        <span className="text-sm text-[#A1A1A1]">
          As of {new Date(s.periodEnd).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-y-5 gap-x-6 sm:grid-cols-4">
        <StatCard label="Median Sale Price" value={fmt(s).medianPrice} />
        <StatCard label="Days on Market" value={fmt(s).medianDom} />
        <StatCard label="Months of Supply" value={fmt(s).monthsSupply} />
        <StatCard label="Homes Sold" value={fmt(s).homesSold} />
        <StatCard label="Avg Sale-to-List" value={fmt(s).avgSaleToList} />
        <StatCard label="Sold Above List" value={fmt(s).soldAboveList} />
        <StatCard label="Median $/sqft" value={fmt(s).medianPpsf} />
        <StatCard label="Active Inventory" value={fmt(s).inventory} />
      </div>
    </div>
  );
}

export default function MarketSnapshotSection(props: Props) {
  /* ---------- props mode (city/county/neighbourhood pages) ---------- */
  if (props.snapshot) {
    return (
      <div>
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            {props.eyebrow}
          </p>
          <h2 className="mt-3 text-[2rem] font-light tracking-tight sm:text-4xl text-[#1A1A1A]">
            {props.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#5A5A5A]">{props.description}</p>
        </div>
        <SectionDivider tone="light" align="center" />
        <div className="mt-8">
          <SnapshotCard s={props.snapshot} />
        </div>
      </div>
    );
  }

  /* ---------- interactive mode (homepage) ---------- */
  const [kind, setKind] = useState<(typeof marketKindOrder)[number]>("county");

  const groups = useMemo(() => {
    const byKind: Record<string, typeof marketSnapshots> = {};
    for (const s of marketSnapshots) {
      if (!byKind[s.kind]) byKind[s.kind] = [];
      byKind[s.kind].push(s);
    }
    return byKind;
  }, []);

  const counties = useMemo(
    () => [...new Set(marketSnapshots.map((s) => s.county))],
    []
  );
  const [county, setCounty] = useState(counties[0] ?? "");

  const snapshots = useMemo(() => {
    const list = groups[kind] ?? [];
    return kind === "county"
      ? list
      : county
        ? list.filter((s) => s.county === county)
        : list;
  }, [kind, county, groups]);

  const defaultPick =
    snapshots.find((s) => s.slug === "snohomish-county-wa") ?? snapshots[0];
  const [selected, setSelected] = useState<MarketSnapshot>(defaultPick);

  if (snapshots.length === 0) return null;

  return (
    <section id="market-data" className="bg-[#F8F5F0]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            Local Market Intelligence
          </p>
          <h2 className="mt-3 text-[2rem] font-light tracking-tight sm:text-4xl text-[#1A1A1A]">
            Understand your local market before you decide
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base leading-7 text-[#5A5A5A]">
            Real numbers, not guesses. Pick the market you care about and see what buyers are actually doing right now.
          </p>
        </div>

        <SectionDivider tone="light" align="center" />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6 mt-6">
          <div className="flex rounded-xl border border-[#E8E4DF] bg-white p-1">
            {marketKindOrder.map((k) => (
              <button
                key={k}
                onClick={() => {
                  setKind(k);
                  setCounty(counties[0] ?? "");
                }}
                className={`rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                  kind === k
                    ? "bg-[#1A1A1A] text-white"
                    : "text-[#5A5A5A] hover:text-[#1A1A1A]"
                }`}
              >
                {k === "county" ? "Counties" : k === "city" ? "Cities" : "Neighborhoods"}
              </button>
            ))}
          </div>

          {kind !== "county" && counties.length > 1 && (
            <>
              <span className="text-sm text-[#A1A1A1] mx-1">·</span>
              <select
                value={county}
                onChange={(e) => setCounty(e.target.value)}
                className="rounded-xl border border-[#E8E4DF] bg-white px-3 py-2 text-sm text-[#1A1A1A] focus:border-[#C6A664] focus:outline-none focus:ring-2 focus:ring-[#C6A664]/30"
              >
                {counties.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </>
          )}
        </div>

        {/* Location selector pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {snapshots.map((s) => (
            <button
              key={s.slug}
              onClick={() => setSelected(s)}
              className={`rounded-full border px-3 py-1.5 text-xs font-medium tracking-[0.10em] transition-all ${
                selected.slug === s.slug
                  ? "border-[#C6A664] bg-[#C6A664]/10 text-[#C6A664]"
                  : "border-[#E8E4DF] bg-white text-[#5A5A5A] hover:border-[#C6A664]/40"
              }`}
            >
              {s.name.replace(" County", "")}
            </button>
          ))}
        </div>

        {/* Snapshot card */}
        <SnapshotCard s={selected} />

        <p className="mt-6 text-sm text-[#A1A1A1]">
          Want to know what these numbers mean for your listing?{" "}
          <a
            href="/#cma"
            className="font-medium text-[#C6A664] hover:text-[#D4BC82]"
          >
            Get a free, no-pressure CMA →
          </a>
        </p>
      </div>
    </section>
  );
}
