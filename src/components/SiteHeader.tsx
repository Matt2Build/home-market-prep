"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#seller-answers", label: "Seller Answers" },
  { href: "/sell/local-guides", label: "Local Guides" },
  { href: "/#seller-faqs", label: "FAQs" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between py-3.5 sm:py-4">
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

          <div className="flex items-center gap-2">
            <Link
              href="/#cma"
              className="rounded-full bg-[#C6A664] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1A1A1A] transition-colors hover:bg-[#D4BC82] sm:px-5 sm:text-xs"
            >
              Free CMA
            </Link>
            <button
              type="button"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/78 transition-colors hover:border-white/24 hover:text-white md:hidden"
            >
              <span className="sr-only">Menu</span>
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="grid gap-2 pb-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/78 transition-colors hover:border-[#C6A664] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  );
}
