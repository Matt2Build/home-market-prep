import {
  formatCurrency,
  formatPercentFromRatio,
  formatSignedPercent,
  formatSnapshotDate,
  type MarketSnapshot,
} from "@/lib/market-data";

type MarketSnapshotSectionProps = {
  snapshot: MarketSnapshot;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
};

export default function MarketSnapshotSection({
  snapshot,
  eyebrow,
  title,
  description,
  className,
}: MarketSnapshotSectionProps) {
  const headlineStats = [
    {
      label: "Median price",
      value: formatCurrency(snapshot.medianSalePrice),
    },
    {
      label: "Median DOM",
      value: `${snapshot.medianDom} days`,
    },
    {
      label: "Supply",
      value: `${snapshot.monthsOfSupply.toFixed(1)} months`,
    },
  ];
  const stats = [
    {
      label: "Homes Sold",
      value: snapshot.homesSold.toString(),
    },
    {
      label: "New Listings",
      value: snapshot.newListings.toString(),
    },
    {
      label: "Sold Above List",
      value: formatPercentFromRatio(snapshot.soldAboveList),
    },
  ];

  return (
    <section className={className}>
      <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-light tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#5A5A5A]">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[#5A5A5A]">
            <span className="rounded-full border border-[#E8E4DF] bg-white px-4 py-2">
              Snapshot date: {formatSnapshotDate(snapshot.periodEnd)}
            </span>
            <span className="rounded-full border border-[#E8E4DF] bg-white px-4 py-2">
              {snapshot.marketTemp}
            </span>
            <span className="rounded-full border border-[#E8E4DF] bg-white px-4 py-2">
              Sale-to-list: {formatPercentFromRatio(snapshot.avgSaleToList)}
            </span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {headlineStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[#E8E4DF] bg-white px-5 py-5 shadow-sm"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A7D68]">
                  {stat.label}
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-[#1A1A1A]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[30px] border border-[#E8E4DF] bg-white p-6 shadow-sm sm:p-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
                Working details
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5A5A5A]">
                Use the market temperature for context, then compare the detailed stats below.
              </p>
            </div>
            <span className="rounded-full border border-[#E8E4DF] bg-[#F8F5F0] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#5A5A5A]">
              {snapshot.marketTemp}
            </span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[22px] border border-[#EFEAE2] bg-[#F8F5F0] p-5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8A7D68]">
                  {stat.label}
                </div>
                <div className="mt-3 text-2xl font-semibold text-[#1A1A1A]">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-[#EFEAE2] pt-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
                Recent snapshot trend
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A7D68]">
                Last 3 periods
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
            {snapshot.historical.map((point) => (
              <div
                key={point.periodEnd}
                className="rounded-[22px] bg-[#111111] p-5 text-white"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
                  {formatSnapshotDate(point.periodEnd)}
                </div>
                <div className="mt-3 text-2xl font-semibold">
                  {formatCurrency(point.medianSalePrice)}
                </div>
                <div className="mt-2 text-sm text-white/72">
                  {point.homesSold} sold · {point.inventory} active ·{" "}
                  {point.monthsOfSupply.toFixed(1)} months supply
                </div>
              </div>
            ))}
            </div>
          </div>

          {typeof snapshot.priceChange === "number" && (
            <p className="mt-6 text-sm leading-6 text-[#5A5A5A]">
              Imported snapshot trend: price {formatSignedPercent(snapshot.priceChange)} and
              homes sold {formatSignedPercent(snapshot.homesSoldChange)} versus the prior
              month in the source dataset.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
