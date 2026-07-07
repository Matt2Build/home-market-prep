import CmaForm from "@/components/CmaForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] font-sans text-[#1A1A1A]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="text-xl font-bold tracking-[0.2em] uppercase text-white">
            HomeMarket<span className="text-[#C6A664]">Prep</span>
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
        {/* Background — CSS gradient fallback + image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%), url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80) center/cover no-repeat",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A664] mb-6">
            Sell with Confidence
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white leading-[1.15] tracking-tight">
            Your Home Is Worth
            <br />
            <span className="font-semibold text-[#C6A664]">
              More Than You Think
            </span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            Automated estimates don&apos;t see your upgrades, your location, or
            today&apos;s buyer demand. Get a hand-built Comparative Market
            Analysis from a local real estate expert.
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
            Algorithms Don&apos;t Know{" "}
            <span className="font-semibold text-[#C6A664]">Your Home</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              emoji: "🏠",
              title: "Upgrades Count",
              desc: "A new roof, remodeled kitchen, or updated HVAC. Algorithms miss these entirely — but buyers see them and pay for them.",
            },
            {
              emoji: "📍",
              title: "Micro-Market Knowledge",
              desc: "Cul-de-sac premium, school boundaries, traffic patterns. Your address tells a story that data can't read.",
            },
            {
              emoji: "📈",
              title: "Current Buyer Demand",
              desc: "What's actually selling right now — not what closed 3 months ago. Active buyer interest changes everything.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="h-56 bg-[#F8F5F0] flex items-center justify-center text-6xl">
                {item.emoji}
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-[#5A5A5A] leading-relaxed">{item.desc}</p>
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
            <span className="font-semibold">We'll Do the Research.</span>
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
                  "Delivered within 24 hours",
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
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Worth the Investment
                </h3>
                <ul className="space-y-4">
                  {[
                    { item: "Fresh interior paint", detail: "Neutral tones make spaces feel larger" },
                    { item: "Deep clean & declutter", detail: "First impressions drive offers" },
                    { item: "Curb appeal upgrades", detail: "Lawn, mulch, front door refresh" },
                    { item: "Professional photography", detail: "Listing photos are digital curb appeal" },
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
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m0 0l2-2m0 0l2 2m0 0l-2 2m0 0l-2 2m0 0l-2-2" />
                  </svg>
                  Not Worth It Before Selling
                </h3>
                <ul className="space-y-4">
                  {[
                    { item: "Major kitchen remodel", detail: "Rarely recouped before sale" },
                    { item: "Full bathroom renovation", detail: "Cosmetic refresh beats full remodel" },
                    { item: "Landscape overhaul", detail: "Cleanup beats full redesign" },
                    { item: "Swimming pool installation", detail: "Polarizing for buyers, high cost" },
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
            <span className="font-semibold text-[#C6A664]">Your Home Is Worth?</span>
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
          <div className="text-lg font-bold tracking-[0.2em] uppercase text-white">
            HomeMarket<span className="text-[#C6A664]">Prep</span>
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
