import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";
import { SITE_URL } from "@/lib/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Matt Salit | HomeMarketPrep — Snohomish County CMA, Seller Prep & Listing Guides",
    template: "%s | HomeMarketPrep",
  },
  description:
    "Free CMA and seller prep guidance from Matt Salit, Century 21 North Homes, for Snohomish County and nearby Washington homeowners. Explore seller question pages, county guides, city guides, and neighborhood pages covering pricing, repairs, showings, paperwork, disclosures, timing, and home value context before listing.",
  applicationName: "HomeMarketPrep",
  category: "real estate",
  creator: "Matt Salit — Century 21 North Homes",
  publisher: "HomeMarketPrep",
  authors: [{ name: "Matt Salit" }],
  keywords: [
    "Snohomish County CMA",
    "Snohomish County home value",
    "what is my home worth Snohomish County",
    "Snohomish County seller guide",
    "how to prepare house for sale Snohomish County",
    "what to fix before selling house Washington",
    "seller checklist Washington",
    "pre-list checklist Snohomish County",
    "sell house Everett WA",
    "sell house Marysville WA",
    "sell house Bothell WA",
    "sell house Mill Creek WA",
    "sell house Lynnwood WA",
    "sell house Monroe WA",
    "sell house Sultan WA",
    "sell house Snohomish WA",
    "Snohomish County neighborhood seller guide",
    "Skagit County seller guide",
    "Matt Salit",
    "Century 21 North Homes",
  ],
  icons: {
    icon: [
      { url: "/icon", type: "image/png", sizes: "32x32" },
      { url: "/icon", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon"],
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title:
      "HomeMarketPrep | Snohomish County CMA, Seller Prep Checklist, and Listing Guides",
    description:
      "Free CMA plus county, city, and neighborhood seller guides for Snohomish County and nearby Washington markets.",
    siteName: "HomeMarketPrep",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HomeMarketPrep | Snohomish County CMA, Seller Prep Checklist, and Listing Guides",
    description:
      "Free CMA plus county, city, and neighborhood seller guides for Snohomish County and nearby Washington markets.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ScrollToTopOnMount />
        {children}
      </body>
    </html>
  );
}
