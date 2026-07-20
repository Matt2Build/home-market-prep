import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#1A1A1A]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <div className="text-lg font-bold uppercase tracking-[0.2em]">
              <span className="text-white">Home</span>
              <span className="text-[#C6A664]">Market</span>
              <span className="text-white">Prep</span>
            </div>
            <p className="mt-3 max-w-sm text-xs leading-5 text-white/40">
              Matt Salit · License #24063256<br />
              Century 21 North Homes Realty<br />
              425-645-2181 · mattsalit@writemyoffer.com
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/40">
            <a href="tel:4256452181" className="transition-colors hover:text-[#C6A664]">
              425-645-2181
            </a>
            <span>·</span>
            <a href="mailto:mattsalit@writemyoffer.com" className="transition-colors hover:text-[#C6A664]">
              mattsalit@writemyoffer.com
            </a>
            <span>·</span>
            <a
              href="https://writemyoffer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[#C6A664] transition-colors hover:text-[#D4BC82]"
            >
              WriteMyOffer.com
            </a>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-white/10 pt-6 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} HomeMarketPrep. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white/60">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
