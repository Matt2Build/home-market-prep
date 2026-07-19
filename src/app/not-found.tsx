import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F8F5F0] px-6 text-center">
      <div className="max-w-lg">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664]">
          Page not found
        </p>
        <h1 className="mt-4 text-6xl font-light tracking-tight text-[#1A1A1A] sm:text-8xl">
          404
        </h1>
        <p className="mt-6 text-xl font-light text-[#5A5A5A]">
          This page does not exist or may have moved.
        </p>
        <p className="mt-3 text-sm leading-6 text-[#5A5A5A]">
          If you were exploring seller checklists, local guides, or looking for a CMA — the main page has all of it.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-full bg-[#C6A664] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
          >
            Back to Home
          </Link>
          <Link
            href="/sell/checklists"
            className="rounded-full border border-[#D8D0C4] px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:border-[#C6A664]"
          >
            Seller Checklists
          </Link>
        </div>
        <div className="mt-10 border-t border-[#E8E4DF] pt-8">
          <p className="text-xs text-[#5A5A5A]">
            Need help?{" "}
            <a
              href="tel:4256452181"
              className="font-medium text-[#C6A664] transition-colors hover:text-[#D4BC82]"
            >
              425-645-2181
            </a>
            {" · "}
            <a
              href="mailto:mattsalit@writemyoffer.com"
              className="font-medium text-[#C6A664] transition-colors hover:text-[#D4BC82]"
            >
              mattsalit@writemyoffer.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
