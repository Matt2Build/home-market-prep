import CmaForm from "@/components/CmaForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            HomeMarket<span className="text-amber-600">Prep</span>
          </div>
          <a
            href="#cma"
            className="rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white hover:bg-amber-700 transition-colors"
          >
            Get My Free CMA
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              Want to know what your home is{" "}
              <span className="text-amber-600">really</span> worth?
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Automated estimates don&apos;t know about your new roof, your
              cul-de-sac location, or today&apos;s buyer demand. Get a free,
              hand-built CMA from a local real estate expert who actually
              knows your market.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#cma"
                className="inline-flex items-center justify-center rounded-full bg-amber-600 px-7 py-3 text-base font-semibold text-white hover:bg-amber-700 transition-colors"
              >
                Get My Free CMA
              </a>
              <a
                href="#prep"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3 text-base font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Seller Prep Guide
              </a>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 p-8 flex items-center justify-center min-h-[320px]">
            {/* Placeholder hero image area — swap in real photo later */}
            <div className="text-center text-gray-500">
              <div className="text-6xl mb-3">🏠</div>
              <p className="text-sm font-medium">Hero image goes here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "100+", label: "Homes Sold" },
            { value: "$XM", label: "Total Volume" },
            { value: "WAC", label: "Licensed Agent" },
            { value: "100%", label: "Free CMA" },
          ].map((item) => (
            <div key={item.label}>
              <div className="text-2xl font-bold text-gray-900">
                {item.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why a Real CMA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Why a Real CMA &gt; Auto-Estimates
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Zillow, Redfin, and other algorithms give you a number based on
            stale public data. They don&apos;t see the full picture.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Upgrades Count",
              desc: "A new kitchen, roof, or HVAC system. Algorithms miss these entirely — buyers won't.",
              icon: "🔧",
            },
            {
              title: "Micro-Market Knowledge",
              desc: "Cul-de-sac premiums, school boundaries, noise factors. Your location is more than a ZIP code.",
              icon: "📍",
            },
            {
              title: "Current Buyer Demand",
              desc: "What's actually selling right now — not what sold 3 months ago. Active buyer interest matters.",
              icon: "🔥",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CMA Intake Form Section */}
      <section id="cma" className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">
              Get Your Free Comparative Market Analysis
            </h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Tell us about your property. We&apos;ll research comps, current
              demand, and deliver a personalized report. No strings attached.
            </p>
          </div>
          <div className="max-w-xl mx-auto">
            <CmaForm />
          </div>
        </div>
      </section>

      {/* Prep to Sell */}
      <section id="prep" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Prep Before You List
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Smart sellers prepare before they list. Knowing what to fix — and
            what to leave alone — can save you thousands and get you top dollar.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {[
            {
              category: "High ROI",
              items: [
                "Fresh interior paint (neutral tones)",
                "Deep clean and declutter",
                "Curb appeal: lawn, mulch, front door",
                "Professional photography",
              ],
              color: "green",
            },
            {
              category: "Skip These",
              items: [
                "Major kitchen remodel before selling",
                "Full bathroom renovation",
                "Landscape overhaul",
                "Swimming pool installation",
              ],
              color: "red",
            },
          ].map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-gray-200 p-6"
            >
              <h3
                className={`text-lg font-semibold ${
                  group.color === "green"
                    ? "text-green-700"
                    : "text-red-600"
                }`}
              >
                {group.category === "High ROI"
                  ? "✅ Worth the Investment"
                  : "❌ Not Worth It Before Selling"}
              </h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-gray-700"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Seller FAQs */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-center">
              Common Seller Questions
            </h2>
            <div className="mt-10 space-y-6">
              {[
                {
                  q: "How much is my CMA likely to cost me?",
                  a: "Nothing. Your CMA is completely free. We build it because it's how we start conversations with serious sellers.",
                },
                {
                  q: "How long does it take to get my CMA?",
                  a: "We'll research your property and reach out within 24 hours with your hand-built comparative market analysis.",
                },
                {
                  q: "Do I have to commit to selling to work with you?",
                  a: "Absolutely not. The CMA is free with no obligation. Many sellers use it to understand their options, even if they're not ready to list yet.",
                },
                {
                  q: "Now is a good time to sell?",
                  a: "That depends on your situation, local inventory, and current buyer demand. Let's look at the data together to find out.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-gray-200 pb-6">
                  <h3 className="text-base font-semibold">{faq.q}</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Ready to Find Out?
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto leading-relaxed">
          Get your free, hand-built CMA — no Zillow algorithm, no strings,
          just real market insight from a local expert.
        </p>
        <a
          href="#cma"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-600 px-8 py-3 text-base font-semibold text-white hover:bg-amber-700 transition-colors"
        >
          Get My Free CMA
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-lg font-bold tracking-tight">
            HomeMarket<span className="text-amber-600">Prep</span>
          </div>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Home Market Prep. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built by{" "}
            <a
              href="https://writemyoffer.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              WriteMyOffer
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
