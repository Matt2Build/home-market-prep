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
      "HomeMarketPrep | Snohomish County CMA, Seller Prep Checklist, and Listing Guides",
    template: "%s | HomeMarketPrep",
  },
  description:
    "Free CMA and seller prep guidance for Snohomish County, WA homeowners. Explore county, city, and neighborhood seller guides covering pricing, repairs, showings, paperwork, and home value context before listing.",
  applicationName: "HomeMarketPrep",
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
