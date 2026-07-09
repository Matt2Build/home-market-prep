import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeMarketPrep | Free CMA, Seller Prep Checklist, and Listing Guides",
  description:
    "Get a free CMA plus practical seller guidance on what to fix, what not to remodel, how to prep for showings, and what paperwork to gather before listing in Washington.",
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
