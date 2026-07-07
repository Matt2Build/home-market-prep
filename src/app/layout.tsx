import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HomeMarketPrep — Free CMA & Seller Market Insights",
  description:
    "Get a free, hand-built Comparative Market Analysis from a local expert. Sell with confidence — real data, not an algorithm.",
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
