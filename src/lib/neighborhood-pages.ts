export type NeighborhoodPage = {
  slug: string;
  areaName: string;
  parentCity: string;
  parentCitySlug: string;
  county: string;
  title: string;
  metaDescription: string;
  heroDescription: string;
  localSummary: string;
  pricingFactors: string[];
  sellerMoves: string[];
  nearbyAreaSlugs: string[];
  sellerQuestions: Array<{
    question: string;
    answer: string;
  }>;
};

export const neighborhoodPages: NeighborhoodPage[] = [
  {
    slug: "bothell-east-wa",
    areaName: "Bothell East",
    parentCity: "Bothell",
    parentCitySlug: "bothell-wa",
    county: "Snohomish County",
    title: "Selling a House in Bothell East, WA",
    metaDescription:
      "Bothell East seller guide with local market data, pricing context, and pre-list prep advice for homeowners getting ready to sell.",
    heroDescription:
      "Use a Bothell East-specific seller guide before you price, prep, and list. Buyers here often compare polish, lot use, and school-driven demand closely.",
    localSummary:
      "Bothell East sellers usually compete in a presentation-sensitive market where small differences in finish level, yard usability, and move-in readiness can separate one listing from the next quickly.",
    pricingFactors: [
      "Buyers often compare against cleaner suburban inventory and notice deferred maintenance fast at this price point.",
      "School-driven demand, cul-de-sac appeal, and backyard usability can widen the spread between similar square-footage homes.",
      "High-end estimates get punished if the finish quality and photo readiness do not match the ask.",
    ],
    sellerMoves: [
      "Tighten cosmetic details before photography so the home reads polished instead of almost done.",
      "Make storage, work-from-home space, and yard function obvious in photos and showings.",
      "Price around the cleanest nearby competition rather than broad city-wide averages.",
    ],
    nearbyAreaSlugs: ["bothell-west-wa", "mill-creek-east-wa"],
    sellerQuestions: [
      {
        question: "What matters most for Bothell East sellers?",
        answer:
          "Condition and finish quality. Buyers in this pocket tend to be sensitive to upkeep, deferred maintenance, and whether the home feels truly move-in ready.",
      },
      {
        question: "Should Bothell East sellers focus on big remodels?",
        answer:
          "Usually not. A sharper cosmetic presentation and cleaner pricing story often do more than a rushed high-cost remodel.",
      },
    ],
  },
  {
    slug: "bothell-west-wa",
    areaName: "Bothell West",
    parentCity: "Bothell",
    parentCitySlug: "bothell-wa",
    county: "Snohomish County",
    title: "Selling a House in Bothell West, WA",
    metaDescription:
      "Bothell West seller guide with local market data, pricing context, and practical prep advice before listing.",
    heroDescription:
      "Get a Bothell West seller guide built around local comps, commuter-driven demand, and the prep moves that keep buyers focused on value.",
    localSummary:
      "Bothell West can price differently than nearby pockets because housing stock, finish levels, and commute-driven buyer comparisons create a wider spread than city medians suggest.",
    pricingFactors: [
      "Value bands can widen fast when buyers compare older layouts against refreshed nearby competition.",
      "Commuter convenience and day-to-day practicality matter heavily in early buyer filtering.",
      "Homes that look simpler to maintain tend to outperform similar listings that feel like projects.",
    ],
    sellerMoves: [
      "Remove visual clutter so the floor plan reads cleaner and more flexible online.",
      "Handle deferred maintenance before list date so buyers do not anchor on future repair costs.",
      "Keep the price disciplined if the home is competing with recently updated nearby inventory.",
    ],
    nearbyAreaSlugs: ["bothell-east-wa", "mill-creek-east-wa"],
    sellerQuestions: [
      {
        question: "How should Bothell West sellers think about price?",
        answer:
          "Against realistic nearby competition with similar condition, not just by pulling the top city-wide numbers and hoping buyers bridge the gap.",
      },
      {
        question: "What prep helps Bothell West homes most?",
        answer:
          "Cosmetic clean-up, strong photos, and a visible reduction in buyer risk usually matter more than expensive upgrades.",
      },
    ],
  },
  {
    slug: "mill-creek-east-wa",
    areaName: "Mill Creek East",
    parentCity: "Mill Creek",
    parentCitySlug: "mill-creek-wa",
    county: "Snohomish County",
    title: "Selling a House in Mill Creek East, WA",
    metaDescription:
      "Mill Creek East seller guide with local market data, prep priorities, and pricing context for homeowners getting ready to sell.",
    heroDescription:
      "See how Mill Creek East sellers can use neighborhood-level market data and sharper prep to compete with polished nearby inventory.",
    localSummary:
      "Mill Creek East sellers often compete in a market where buyers expect a clean, well-maintained presentation from the first photo through the inspection period.",
    pricingFactors: [
      "Neighborhood consistency means buyers spot finish-level differences faster than sellers expect.",
      "A move-in-ready feel often matters more than stretching for a higher ask based on square footage alone.",
      "Exterior presentation and interior brightness can directly shape showing volume in this pocket.",
    ],
    sellerMoves: [
      "Fix the maintenance details buyers mentally total up after touring kitchens, baths, and entry spaces.",
      "Edit furniture and personal items so the home reads brighter, larger, and less work-intensive.",
      "Use the best local comps, not just Mill Creek at large, when building a pricing range.",
    ],
    nearbyAreaSlugs: ["bothell-east-wa", "bothell-west-wa"],
    sellerQuestions: [
      {
        question: "What helps Mill Creek East sellers most before listing?",
        answer:
          "A consistent, polished presentation. Buyers here respond well when the home feels maintained all the way through, not just in the hero spaces.",
      },
      {
        question: "Do Mill Creek East homes need staging?",
        answer:
          "Not always, but decluttering, furniture editing, and cleaner photo composition usually pay off because buyers compare the online presentation closely.",
      },
    ],
  },
  {
    slug: "monroe-north-wa",
    areaName: "Monroe North",
    parentCity: "Monroe",
    parentCitySlug: "monroe-wa",
    county: "Snohomish County",
    title: "Selling a House in Monroe North, WA",
    metaDescription:
      "Monroe North seller guide with local market data, pricing context, and pre-list advice for homeowners preparing to sell.",
    heroDescription:
      "Use Monroe North-specific market context before you price acreage, larger lots, or edge-of-town homes that do not fit broad suburban comps cleanly.",
    localSummary:
      "Monroe North sellers often need a pricing plan that accounts for property usability, lot character, and how buyers compare semi-rural homes against more standard suburban alternatives.",
    pricingFactors: [
      "Lot quality, outbuildings, privacy, and road approach can matter as much as the house itself.",
      "The buyer pool narrows quickly if the property feels hard to understand or expensive to maintain.",
      "Unique homes need cleaner explanation and tighter pricing discipline than cookie-cutter neighborhoods.",
    ],
    sellerMoves: [
      "Document major systems, upgrades, and property features before the listing goes live.",
      "Show the function of outdoor areas clearly in photos so buyers understand the property value early.",
      "Fix anything that signals deferred maintenance or hidden ownership costs.",
    ],
    nearbyAreaSlugs: ["north-sultan-wa", "arlington-heights-wa"],
    sellerQuestions: [
      {
        question: "How should Monroe North sellers think about comps?",
        answer:
          "They should compare against homes with similar lot function, property style, and buyer appeal, not just the nearest sales by distance.",
      },
      {
        question: "What turns Monroe North buyers off early?",
        answer:
          "Unclear property features, visible deferred maintenance, and a price that assumes buyers will ignore the extra complexity of the property type.",
      },
    ],
  },
  {
    slug: "arlington-heights-wa",
    areaName: "Arlington Heights",
    parentCity: "Arlington",
    parentCitySlug: "arlington-wa",
    county: "Snohomish County",
    title: "Selling a House in Arlington Heights, WA",
    metaDescription:
      "Arlington Heights seller guide with local market data, property-specific pricing context, and prep advice before listing.",
    heroDescription:
      "See how Arlington Heights sellers can price larger-lot and edge-of-town properties with stronger local context before going live.",
    localSummary:
      "Arlington Heights sellers often need more than broad Arlington numbers. Property access, usable land, condition, and outdoor improvements can move value significantly in this subarea.",
    pricingFactors: [
      "Land function and outbuildings only add value if buyers can understand and trust them quickly.",
      "Exterior condition, drainage, and access shape buyer confidence before they focus on interior finishes.",
      "Small-submarket pricing can swing sharply, so the cleanest comparable properties matter a lot.",
    ],
    sellerMoves: [
      "Prioritize exterior maintenance and a clean arrival sequence before listing photos.",
      "Clarify how the land is used and what improvements or utilities buyers should know about.",
      "Avoid overpricing based on land alone if the home itself still reads as work.",
    ],
    nearbyAreaSlugs: ["monroe-north-wa", "north-sultan-wa"],
    sellerQuestions: [
      {
        question: "What matters most for Arlington Heights sellers?",
        answer:
          "Property clarity. Buyers need to understand the usability of the land, the condition of improvements, and the total maintenance picture early.",
      },
      {
        question: "Should Arlington Heights sellers focus on curb appeal?",
        answer:
          "Yes. The approach, driveway, landscaping, and exterior condition often shape the entire buyer conversation before they get through the front door.",
      },
    ],
  },
  {
    slug: "north-sultan-wa",
    areaName: "North Sultan",
    parentCity: "Sultan",
    parentCitySlug: "sultan-wa",
    county: "Snohomish County",
    title: "Selling a House in North Sultan, WA",
    metaDescription:
      "North Sultan seller guide with local market data, pricing context, and prep advice for homeowners getting ready to list.",
    heroDescription:
      "Use North Sultan-specific market context before pricing and prepping a home where rural feel, lot function, and condition all influence buyer demand.",
    localSummary:
      "North Sultan sellers often compete on simplicity and buyer confidence. Homes that feel easy to understand, easy to maintain, and ready for financing usually separate themselves fastest.",
    pricingFactors: [
      "Lot usability, road access, and financing friendliness can change the buyer pool quickly.",
      "Visible repairs matter because buyers often expect more hidden cost in edge-of-town property types.",
      "Pricing needs to reflect how cleanly the home competes with stronger in-town alternatives.",
    ],
    sellerMoves: [
      "Take care of moisture, exterior wear, and maintenance items that buyers treat as financing or inspection risk.",
      "Simplify the presentation so the property feels manageable rather than complicated.",
      "Use photo order and listing remarks to explain the property clearly before buyers rule it out online.",
    ],
    nearbyAreaSlugs: ["monroe-north-wa", "arlington-heights-wa"],
    sellerQuestions: [
      {
        question: "How should North Sultan sellers prep before listing?",
        answer:
          "Focus on condition clarity, exterior maintenance, and removing anything that makes the home feel risky or difficult to finance.",
      },
      {
        question: "What makes pricing hard in North Sultan?",
        answer:
          "Buyer pools are narrower and property types vary more, so broad city averages can miss the real competition by a wide margin.",
      },
    ],
  },
];

export const neighborhoodPageMap = new Map(
  neighborhoodPages.map((entry) => [entry.slug, entry]),
);
