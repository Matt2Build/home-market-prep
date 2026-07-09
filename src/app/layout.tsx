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
    "Free CMA and seller prep guidance for Snohomish County, WA homeowners. Learn what to fix, what to skip, how to prepare for showings, and how to price before listing.",
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
      "Free CMA and seller prep guidance for Snohomish County, WA homeowners getting ready to list.",
    siteName: "HomeMarketPrep",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "HomeMarketPrep | Snohomish County CMA, Seller Prep Checklist, and Listing Guides",
    description:
      "Free CMA and seller prep guidance for Snohomish County, WA homeowners getting ready to list.",
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
