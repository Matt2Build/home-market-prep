export default function StickyMobileCta({
  ctaText = "Free CMA",
  ctaHref = "/#cma",
}: {
  ctaText?: string;
  ctaHref?: string;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#C6A664]/20 bg-[#1A1A1A]/95 backdrop-blur-sm md:hidden safe-area-inset-bottom">
      <a
        href={ctaHref}
        className="flex h-14 cursor-pointer items-center justify-center text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664] transition-colors active:bg-[#C6A664]/10"
      >
        {ctaText} →
      </a>
    </div>
  );
}
