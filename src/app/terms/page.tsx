import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CornerAccent from "@/components/CornerAccent";

export const metadata: Metadata = {
  title: "Terms of Service | Home Market Prep",
  description: "Terms of service for Home Market Prep.",
  robots: {
    index: false,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0]">
      <SiteHeader />

      <main className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="relative mb-10">
          <CornerAccent tone="gold" className="absolute -right-4 top-0 h-12 w-20 opacity-30" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A1A1A1]">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl text-[#1A1A1A]">
            Terms of Service
          </h1>
          <p className="mt-3 text-base text-[#5A5A5A]">
            Last updated: July 20, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8 text-[#1A1A1A]">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              By accessing and using Home Market Prep (&quot;the Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Description of Service</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Home Market Prep provides educational content, market data, seller preparation checklists, and comparative market analysis (CMA) request tools for homeowners in Washington State. The Site does not provide legal, financial, or real estate advice. All information is provided for general educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. No Professional Advice</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Content on this Site does not constitute legal, financial, tax, or real estate advice. Always consult with qualified professionals — including licensed real estate agents, attorneys, and tax advisors — before making decisions about buying, selling, or valuing real estate.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Market Data Disclaimer</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Market data displayed on the Site is provided for informational purposes and may not reflect current real-time conditions. Data is sourced from publicly available records and third-party providers. We do not guarantee the accuracy, completeness, or timeliness of any market data. Numbers should be verified with current MLS data or a licensed professional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. CMA Requests</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Submitting a CMA request through the Site does not create any contractual obligation. CMAs are estimates of property value based on comparable sales data and market conditions. Actual home values may vary based on numerous factors not captured in a standard CMA.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. User Submissions</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              When you submit information through forms on the Site (including CMA requests and newsletter signups), you consent to the collection and use of that information as described in our Privacy Policy. You agree to provide accurate information and not to submit false or misleading data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              All content on the Site, including text, images, designs, logos, and code, is the property of Home Market Prep and its owners unless otherwise noted. You may not reproduce, distribute, or create derivative works from Site content without express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Home Market Prep and its owners shall not be liable for any damages arising from the use of or inability to use the Site, including reliance on information provided. The Site is provided &quot;as is&quot; without warranties of any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. External Links</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              The Site may contain links to external websites not controlled by Home Market Prep. We are not responsible for the content or practices of external sites and recommend reviewing their terms and privacy policies before use.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">10. Changes to Terms</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              We reserve the right to update these Terms at any time. Changes are effective immediately upon posting to the Site. Your continued use of the Site after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">11. Governing Law</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              These Terms shall be governed by and construed in accordance with the laws of the State of Washington. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Snohomish County, Washington.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">12. Contact</h2>
            <p className="text-sm leading-relaxed text-[#5A5A5A]">
              Questions about these Terms? Contact us at{" "}
              <a
                href="mailto:mattsalit@writemyoffer.com"
                className="font-medium text-[#C6A664] hover:text-[#D4BC82]"
              >
                mattsalit@writemyoffer.com
              </a>{" "}
              or{" "}
              <a
                href="tel:4256452181"
                className="font-medium text-[#C6A664] hover:text-[#D4BC82]"
              >
                425-645-2181
              </a>
              .
            </p>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-[#E8E4DF] bg-white p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C6A664] mb-2">
            Want to skip the reading and just talk?
          </p>
          <a
            href="tel:4256452181"
            className="inline-block rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#333]"
          >
            Call Matt · 425-645-2181
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
