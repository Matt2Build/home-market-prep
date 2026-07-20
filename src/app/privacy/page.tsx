import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Privacy Policy — HomeMarketPrep",
  description:
    "Privacy policy for HomeMarketPrep. How your information is collected, used, and protected.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#1A1A1A]">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-light tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-sm text-[#8C8375]">Last updated July 2026</p>

        <section className="mt-10 space-y-6 text-sm leading-7 text-[#5A5A5A]">
          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            What we collect
          </h2>
          <p>
            When you request a CMA, download a guide, or sign up for our
            newsletter, we collect the information you voluntarily provide —
            typically your name, email address, property address, and your
            listing timeframe. We do not collect data from third-party sources.
          </p>

          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            How we use your information
          </h2>
          <p>
            Your information is used exclusively to respond to your request —
            preparing a comparative market analysis, delivering requested
            resources, or sending newsletter updates. We do not sell, rent, or
            share your information with third parties for marketing. We do not
            add your email to any shared lists.
          </p>

          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Who sees your data
          </h2>
          <p>
            Your submission goes directly to Matt Salit, a real estate agent
            with Century 21 North Homes Realty. It is not shared with other
            agents, brokerages, or marketing services.
          </p>

          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Email and communications
          </h2>
          <p>
            You may receive a follow-up email related to your request. You can
            opt out of future communications at any time by replying to the
            email or contacting mattsalit@writemyoffer.com directly.
          </p>

          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Cookies and analytics
          </h2>
          <p>
            This site uses basic analytics to understand traffic patterns. No
            personal data is used for tracking or advertising purposes.
          </p>

          <h2 className="text-lg font-semibold text-[#1A1A1A]">
            Contact
          </h2>
          <p>
            Questions about your data? Reach out directly:
            <br />
            <a href="tel:4256452181" className="text-[#C6A664] hover:text-[#D4BC82]">
              425-645-2181
            </a>
            {" · "}
            <a
              href="mailto:mattsalit@writemyoffer.com"
              className="text-[#C6A664] hover:text-[#D4BC82]"
            >
              mattsalit@writemyoffer.com
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
