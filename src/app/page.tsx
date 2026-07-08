import CmaForm from "@/components/CmaForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] font-sans text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-[0.2em] uppercase">
            <span className="text-[#C6A664]">Home</span>
            <span className="text-white">Market</span>Prep
          </div>
          <a
            href="#cma"
            className="rounded-full bg-[#C6A664] px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] hover:bg-[#D4BC82] transition-colors"
          >
            Get My Free CMA
          </a>
        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background — premium luxury home photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80) center/cover no-repeat",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664] mb-6">
            Sell with Confidence
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.15] tracking-tight">
            Don&apos;t Trust an
            <br />
            <span className="font-semibold text-[#C6A664]">
              Algorithm With Your Price
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Zillow, Redfin, and other auto-valuators compare your single-family
            to condos, townhomes, and comps from months ago. Get a hand-built
            Comparative Market Analysis from a local real estate expert who
            actually knows your neighborhood.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="#cma"
              className="group rounded-full bg-[#C6A664] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] hover:bg-[#D4BC82] transition-all"
            >
              Get My Free CMA
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#prep"
              className="rounded-full border border-white/30 px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-white hover:bg-white/10 transition-colors"
            >
              Seller Prep Guide
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
            <div className="w-1 h-2 rounded-full bg-white/60" />
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR ============ */}
      <section className="bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "100+", label: "Homes Successfully Sold" },
            { value: "$50M+", label: "Total Sales Volume" },
            { value: "WA", label: "Licensed Agent" },
            { value: "100%", label: "Free, No-Obligation CMA" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#C6A664]">
                {item.value}
              </div>
              <div className="text-xs uppercase tracking-[0.15em] text-white/60 mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WHY REAL CMA ============ */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664] mb-4">
            The Truth About Home Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.2]">
            AI Is Valuing Your{" "}
            <span className="font-semibold text-[#C6A664]">Home</span> by
            Comparing Apples to Oranges
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {[
            {
              icon: "building" as const,
              title: "Upgrades Count",
              desc: "A new roof, remodeled kitchen, updated HVAC. Auto-valuators can't see inside your walls — but buyers can, and they pay for what they see.",
            },
            {
              icon: "map-pin" as const,
              title: "Micro-Market Knowledge",
              desc: "Cul-de-sac premium, noisy street discount, school boundary shifts. Your exact block tells a story no algorithm has enough resolution to read.",
            },
            {
              icon: "trending-up" as const,
              title: "Current Buyer Demand",
              desc: "What's actively going under contract right now — not what closed 90 days ago in a different market. Real-time demand changes everything.",
            },
            {
              icon: "apple-orange" as const,
              title: "Wrong-Comp Problem",
              desc: "Your auto-estimate just compared your 4-bed single-family to a 2-bed condo across the highway. Apples to oranges, adjusted by a formula nobody can see.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#E8E4DF] hover:border-[#C6A664]/30"
            >
              <div className="h-48 bg-gradient-to-br from-[#FAF9F6] to-[#F0EDE8] flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                {item.icon === "building" && (
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#C6A664]/8 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <svg
                      className="relative w-14 h-14 text-[#C6A664]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 21h18M5 21V7l7-4 7 4v14M9 9h6v6H9z"
                      />
                    </svg>
                  </div>
                )}
                {item.icon === "map-pin" && (
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#C6A664]/8 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <svg
                      className="relative w-14 h-14 text-[#C6A664]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 21C12 21 3 13.5 3 9a9 9 0 1118 0c0 4.5-9 12-9 12z"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                )}
                {item.icon === "trending-up" && (
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#C6A664]/8 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <svg
                      className="relative w-14 h-14 text-[#C6A664]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 7l-8.5 8.5L11 13l-6.5 7H22"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7h6v6"
                      />
                    </svg>
                  </div>
                )}
                {item.icon === "apple-orange" && (
                  <div className="relative">
                    <div className="absolute -inset-4 bg-[#C6A664]/8 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <svg
                      className="relative w-14 h-14 text-[#C6A664]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 10c2-4 6-4 8 0m0 0c2-4 6-4 8 0"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 14v1a4 4 0 004 4h2a4 4 0 004-4v-1M16 14c3 2 5 5 5 9H11c0-4 2-7 5-9z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-3 group-hover:text-[#C6A664] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#5A5A5A] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ SPLIT BANNER ============ */}
      <section
        className="bg-[#1A1A1A]"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(26,26,26,0.95), rgba(26,26,26,0.8)), url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-4xl px-6 py-24 text-center text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664] mb-4">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-light leading-tight">
            Tell Us About Your Property.
            <br />
            <span className="font-semibold">We&apos;ll Do the Research.</span>
          </h2>
          <div className="mt-10 grid grid-cols-3 gap-8 text-white/80 max-w-lg mx-auto">
            {[
              { step: "1", label: "Share Details" },
              { step: "2", label: "We Analyze Comps" },
              { step: "3", label: "Get Your CMA" },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-[#C6A664] flex items-center justify-center text-[#C6A664] font-bold text-lg mb-3">
                  {s.step}
                </div>
                <p className="text-xs uppercase tracking-[0.15em]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CMA FORM ============ */}
      <section id="cma" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: copy */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664] mb-4">
                Free Comparative Market Analysis
              </p>
              <h2 className="text-3xl sm:text-4xl font-light leading-tight tracking-tight">
                Get a Hand-Built CMA,
                <br />
                <span className="font-semibold text-[#C6A664]">
                  Not an Algorithm
                </span>
              </h2>
              <p className="mt-6 text-[#5A5A5A] text-lg leading-relaxed">
                Share your property details. We&apos;ll research comparable
                sales, analyze current buyer demand, and deliver a personalized
                market analysis — completely free, with zero obligation.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Hand-built, not auto-generated",
                  "ASAP delivery",
                  "No strings attached",
                  "Local market expertise",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C6A664]/10 flex items-center justify-center">
                      <svg
                        className="w-3.5 h-3.5 text-[#C6A664]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-[#F8F5F0] rounded-3xl p-8 sm:p-10">
              <CmaForm />
            </div>
          </div>
        </div>
      </section>

      {/* ============ PREP TO SELL ============ */}
      <section id="prep" className="bg-[#F8F5F0]">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664] mb-4">
              Smart Seller Guide
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-[1.2]">
              Prep Before You{" "}
              <span className="font-semibold">List</span>
            </h2>
            <p className="mt-6 text-[#5A5A5A] text-lg leading-relaxed">
              Knowing what to fix — and what to leave alone — can save you
              thousands and help you get top dollar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* High ROI */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-8 bg-green-600" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-green-700 flex items-center gap-2 mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Worth the Investment
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      item: "Fresh interior paint",
                      detail: "Neutral tones make spaces feel larger",
                    },
                    {
                      item: "Deep clean & declutter",
                      detail: "First impressions drive offers",
                    },
                    {
                      item: "Curb appeal upgrades",
                      detail: "Lawn, mulch, front door refresh",
                    },
                    {
                      item: "Professional photography",
                      detail: "Listing photos are digital curb appeal",
                    },
                  ].map((i) => (
                    <li key={i.item} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                      <div>
                        <p className="font-medium">{i.item}</p>
                        <p className="text-sm text-[#5A5A5A]">{i.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skip These */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-8 bg-red-500" />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-red-600 flex items-center gap-2 mb-6">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 14l2-2m0 0l2-2m0 0l2-2m0 0l2 2m0 0l-2 2m0 0l-2 2m0 0l-2-2"
                    />
                  </svg>
                  Not Worth It Before Selling
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      item: "Major kitchen remodel",
                      detail: "Rarely recouped before sale",
                    },
                    {
                      item: "Full bathroom renovation",
                      detail: "Cosmetic refresh beats full remodel",
                    },
                    {
                      item: "Landscape overhaul",
                      detail: "Cleanup beats full redesign",
                    },
                    {
                      item: "Swimming pool installation",
                      detail: "Polarizing for buyers, high cost",
                    },
                  ].map((i) => (
                    <li key={i.item} className="flex items-start gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-red-400 shrink-0" />
                      <div>
                        <p className="font-medium">{i.item}</p>
                        <p className="text-sm text-[#5A5A5A]">{i.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA BANNER ============ */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1920&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight tracking-tight">
            Ready to Find Out What
            <br />
            <span className="font-semibold text-[#C6A664]">
              Your Home Is Worth?
            </span>
          </h2>
          <p className="mt-6 text-white/70 text-lg max-w-xl mx-auto">
            Free hand-built CMA. Real market insight. Local expertise. No strings attached.
          </p>
          <a
            href="#cma"
            className="mt-10 inline-flex rounded-full bg-[#C6A664] px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#1A1A1A] hover:bg-[#D4BC82] transition-colors"
          >
            Get My Free CMA Now
          </a>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[#1A1A1A]">
        <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10">
          <div className="text-lg font-bold tracking-[0.2em] uppercase">
            <span className="text-[#C6A664]">Home</span>
            <span className="text-white">Market</span>Prep
          </div>
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Home Market Prep. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            From the makers of{" "}
            <a
              href="https://writemyoffer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C6A664] hover:text-[#D4BC82] font-medium transition-colors"
            >
              WriteMyOffer.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
