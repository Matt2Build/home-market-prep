/**
 * Snohomish-landing data import.
 * Pulled from ../snohomish-landing/data/ for rich neighborhood/city insights.
 * Updated: 2026-07-18
 */

export interface ImportedCityInsight {
  slug: string;
  name: string;
  median_sale_price: number;
  median_dom: number | null;
  homes_sold: number | null;
  new_listings: number | null;
  months_of_supply: number | null;
  median_ppsf: number | null;
}

export interface ImportedNeighborhood {
  parentSlug: string;
  parentName: string;
  name: string;
  route: string;
  slug: string;
  /** "Just Sold" tagline: best-fit + tradeoff from landing HTML */
  bestFit?: string;
  tradeoff?: string;
  localTexture?: string;
}

export const importedCities: ImportedCityInsight[] = [];
export const importedNeighborhoods: ImportedNeighborhood[] = [];
