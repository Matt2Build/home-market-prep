export type CountyPage = {
  slug: string;
  county: string;
  title: string;
  metaDescription: string;
  heroDescription: string;
  localSummary: string;
  sellerAngles: string[];
  citySlugs: string[];
  neighborhoodSlugs: string[];
  marketSpotlightSlugs: string[];
  sellerQuestions: Array<{
    question: string;
    answer: string;
  }>;
};

export const countyPages: CountyPage[] = [
  {
    slug: "snohomish-county-wa",
    county: "Snohomish County",
    title: "Selling a House in Snohomish County, WA",
    metaDescription:
      "Snohomish County seller guide with local market snapshots, city pages, neighborhood pages, and practical advice on pricing, prep, and listing strategy.",
    heroDescription:
      "Browse Snohomish County seller guidance built around real local market data, city-by-city prep context, and neighborhood-level pages for sellers getting ready to list.",
    localSummary:
      "Snohomish County is not one market. South county often competes more directly with King County buyers, while north county sellers compete on value, commute tradeoffs, and condition. The prep and pricing strategy that works in Bothell does not always work in Everett, Marysville, or Sultan.",
    sellerAngles: [
      "Use county-level data to understand the broader pace of the market, then narrow down to the city and neighborhood buyers will actually compare.",
      "Sellers usually gain more from clean prep, disciplined pricing, and maintenance clarity than from last-minute remodeling.",
      "Commute access, school patterns, lot usability, and visible deferred maintenance create real pricing separation across Snohomish County.",
    ],
    citySlugs: [
      "arlington-wa",
      "bothell-wa",
      "everett-wa",
      "lake-stevens-wa",
      "lynnwood-wa",
      "marysville-wa",
      "mill-creek-wa",
      "monroe-wa",
      "mukilteo-wa",
      "snohomish-wa",
      "stanwood-wa",
      "sultan-wa",
    ],
    neighborhoodSlugs: [
      "arlington-heights-wa",
      "alderwood-lynnwood-wa",
      "bothell-east-wa",
      "bothell-west-wa",
      "cavalero-wa",
      "dutch-hill-snohomish-wa",
      "fobes-hill-snohomish-wa",
      "frontier-village-wa",
      "harbour-pointe-mukilteo-wa",
      "lakewood-marysville-wa",
      "mill-creek-east-wa",
      "mill-creek-west-wa",
      "monroe-north-wa",
      "martha-lake-lynnwood-wa",
      "north-everett-wa",
      "north-sultan-wa",
      "old-town-mukilteo-wa",
      "silver-lake-everett-wa",
      "sunnyside-marysville-wa",
    ],
    marketSpotlightSlugs: [
      "everett-wa",
      "marysville-wa",
      "lynnwood-wa",
      "bothell-wa",
      "mill-creek-wa",
      "sultan-wa",
    ],
    sellerQuestions: [
      {
        question:
          "What matters most when pricing a house in Snohomish County?",
        answer:
          "The right pricing lens is usually county first, city second, and neighborhood third. Broad county numbers help with pace, but your actual list strategy should be built around the homes buyers will cross-shop against yours.",
      },
      {
        question:
          "Should Snohomish County sellers do major renovations before listing?",
        answer:
          "Usually no. Cleanliness, repairs, paint, exterior maintenance, and a sharper first two weeks on market tend to outperform expensive pre-list remodels.",
      },
    ],
  },
  {
    slug: "skagit-county-wa",
    county: "Skagit County",
    title: "Selling a House in Skagit County, WA",
    metaDescription:
      "Skagit County seller guide with local market snapshots, Mount Vernon pricing context, and prep guidance for homeowners getting ready to list.",
    heroDescription:
      "See how Skagit County sellers can use local market data, cleaner prep, and city-level context before listing a home in Mount Vernon or nearby communities.",
    localSummary:
      "Skagit County sellers often compete across a wide range of property types, from in-town homes to larger lots and edge-of-town properties. Pricing discipline and property-specific clarity matter because buyer expectations can shift quickly across the county.",
    sellerAngles: [
      "Skagit County pricing is heavily influenced by condition, commute patterns, floodplain or site considerations, and how move-in ready the property feels.",
      "City-level comparisons still matter. A Mount Vernon seller should not lean on a broad county median alone when choosing a list strategy.",
      "The best pre-list moves are usually repairs, paperwork clarity, and presentation that makes the home feel simple to understand and easy to buy.",
    ],
    citySlugs: ["mount-vernon-wa"],
    neighborhoodSlugs: [
      "hillcrest-park-mount-vernon-wa",
      "little-mountain-mount-vernon-wa",
    ],
    marketSpotlightSlugs: ["mount-vernon-wa"],
    sellerQuestions: [
      {
        question: "Do Skagit County sellers still need a local CMA?",
        answer:
          "Yes. County numbers help with context, but local comps, condition, and buyer expectations still determine whether your home feels well priced once it goes live.",
      },
      {
        question: "What prep work usually matters most in Skagit County?",
        answer:
          "Visible maintenance, decluttering, exterior clean-up, and documentation around property-specific issues generally matter more than expensive redesign projects right before listing.",
      },
    ],
  },
];

export const countyPageMap = new Map(
  countyPages.map((entry) => [entry.slug, entry]),
);
