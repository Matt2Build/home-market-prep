import Link from "next/link";
import CornerAccent from "@/components/CornerAccent";

export function LocalGuideLinkCard({
  href,
  eyebrow,
  title,
  description,
  tone = "light",
}: {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
  tone?: "light" | "dark";
}) {
  const isDark = tone === "dark";

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[26px] border p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
        isDark
          ? "border-white/10 bg-white/5 hover:border-[#C6A664]/45"
          : "border-[#E8E4DF] bg-white hover:border-[#C6A664]/45"
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${
          isDark
            ? "bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent"
            : "bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent"
        }`}
      />
      <CornerAccent
        tone={isDark ? "dark" : "gold"}
        className={`absolute right-4 top-4 h-10 w-[4.2rem] ${
          isDark ? "opacity-40" : "opacity-70"
        }`}
      />
      <div className="relative flex h-full flex-col">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.18em] ${
            isDark ? "text-[#C6A664]" : "text-[#C6A664]"
          }`}
        >
          {eyebrow}
        </p>
        <h3
          className={`mt-3 text-2xl font-semibold leading-snug ${
            isDark ? "text-white" : "text-[#1A1A1A]"
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 text-sm leading-6 ${
            isDark ? "text-white/72" : "text-[#5A5A5A]"
          }`}
        >
          {description}
        </p>
        <div
          className={`mt-5 flex items-center justify-between border-t pt-4 ${
            isDark ? "border-white/10" : "border-[#EEE8DF]"
          }`}
        >
          <span
            className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-white/62" : "text-[#8C8375]"
            }`}
          >
            Open guide
          </span>
          <span
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition-transform group-hover:translate-x-1 ${
              isDark
                ? "bg-white/10 text-[#C6A664]"
                : "bg-[#F8F5F0] text-[#C6A664]"
            }`}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}

export function LocalGuidePanel({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-[#E8E4DF] bg-white p-6 shadow-sm">
      <CornerAccent
        tone="gold"
        className="absolute right-4 top-4 h-12 w-[4.5rem] opacity-80"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
        {eyebrow}
      </p>
      <h3 className="mt-3 max-w-sm text-2xl font-light leading-tight tracking-tight text-[#1A1A1A]">
        {title}
      </h3>
      <div className="mt-6 space-y-3">
        {items.map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border border-[#EEE8DF] bg-[#F8F5F0] px-4 py-4"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-[#C6A664]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-[#5A5A5A]">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LocalGuideStatementCard({
  label,
  text,
  tone = "soft",
}: {
  label: string;
  text: string;
  tone?: "soft" | "white" | "dark";
}) {
  const toneClasses =
    tone === "dark"
      ? "border-white/10 bg-white/5"
      : tone === "white"
        ? "border-[#E8E4DF] bg-white"
        : "border-[#E8E4DF] bg-[#F8F5F0]";

  const textClasses =
    tone === "dark" ? "text-white/72" : "text-[#5A5A5A]";

  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border p-6 shadow-sm ${toneClasses}`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C6A664] via-[#EBDDAB] to-transparent" />
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A664]">
        {label}
      </p>
      <p className={`mt-4 text-sm leading-7 ${textClasses}`}>{text}</p>
    </div>
  );
}

export function LocalGuideHeroAside({
  eyebrow,
  title,
  stats,
  bullets,
}: {
  eyebrow: string;
  title: string;
  stats: Array<{ label: string; value: string }>;
  bullets: string[];
}) {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/6 p-6 backdrop-blur-sm sm:p-7">
      <CornerAccent
        tone="dark"
        className="absolute right-4 top-4 h-12 w-[4.5rem] opacity-50"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C6A664]">
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-sm text-2xl font-light leading-tight tracking-tight text-white">
        {title}
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={`${stat.label}-${stat.value}`}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/58">
              {stat.label}
            </p>
            <p className="mt-2 text-lg font-semibold tracking-tight text-white">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3">
        {bullets.map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
          >
            <div className="flex items-start gap-3">
              <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[11px] font-semibold text-[#C6A664]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-6 text-white/74">{item}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
