import type { MetadataRoute } from "next";
import { cityPages } from "@/lib/city-pages";
import { countyPages } from "@/lib/county-pages";
import { neighborhoodPages } from "@/lib/neighborhood-pages";
import { sellerPrepPages } from "@/lib/seller-prep-pages";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...cityPages.map((entry) => ({
      url: `${SITE_URL}/sell/${entry.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...countyPages.map((entry) => ({
      url: `${SITE_URL}/sell/${entry.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    })),
    ...neighborhoodPages.map((entry) => ({
      url: `${SITE_URL}/sell/neighborhoods/${entry.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...sellerPrepPages.map((entry) => ({
      url: `${SITE_URL}/sell/checklists/${entry.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    })),
  ];
}
