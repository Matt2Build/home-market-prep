import Link from "next/link";

const navLinks = [
  { href: "/#seller-answers", label: "Seller Answers" },
  { href: "/sell/local-guides", label: "Local Guides" },
  { href: "/#seller-faqs", label: "FAQs" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-lg font-bold uppercase tracking-[0.2em] text-white">
            <span>Home</span>
            <span className="text-[#C6A664]">Market</span>
            <span>Prep</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#cma"
            className="rounded-full bg-[#C6A664] px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82]"
          >
            Free CMA
          </Link>
        </div>

        <nav className="flex gap-4 overflow-x-auto pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap rounded-full border border-white/12 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/72 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
