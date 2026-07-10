export type SellerPrepPage = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  metaDescription: string;
  summary: string;
  timeframe: string;
  whyItMatters: string;
  checklist: string[];
  mistakes: string[];
  localAngle: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
};

export const sellerPrepPages: SellerPrepPage[] = [
  {
    slug: "declutter-before-selling-house-wa",
    eyebrow: "Declutter and Open Up the Space",
    title: "How to Declutter Before Selling a House in Washington",
    shortTitle: "How to declutter before selling",
    metaDescription:
      "Washington seller guide on how to declutter before listing a house. Learn what to pack, what to remove, and how to make your home feel larger before it hits the market.",
    summary:
      "Most sellers need to remove more than they think. A cleaner, lighter, less personal home usually photographs better and feels easier to buy.",
    timeframe: "Start 4-6 weeks before listing",
    whyItMatters:
      "Buyers decide quickly from photos and first impressions. Decluttering is one of the fastest ways to make rooms feel larger, brighter, and easier to understand.",
    checklist: [
      "Pack up off-season clothes, extra dishes, books, decor, collections, and paperwork that do not need to stay out.",
      "Clear countertops, dressers, nightstands, shelves, and entry surfaces so each one reads simple instead of crowded.",
      "Remove extra chairs, side tables, and oversized furniture that makes rooms feel tighter than they are.",
      "Thin closets and cabinets so storage looks usable instead of overfilled.",
      "Take down most personal photos, fridge notes, and highly personal items so buyers can picture the home as theirs.",
      "Donate, sell, or throw away items that are not moving with you.",
    ],
    mistakes: [
      "Leaving packed closets and garage shelves untouched because they are technically organized.",
      "Using decorative clutter to make rooms feel finished when it actually makes them feel smaller.",
      "Waiting until photos are scheduled to start boxing things up.",
    ],
    localAngle:
      "In Snohomish County and nearby Washington markets, buyers compare homes online first. Decluttering is often what separates a home that gets dismissed as cramped from one that feels move-in ready enough to tour.",
    faqs: [
      {
        question: "How much should I declutter before listing my house?",
        answer:
          "More than most sellers expect. Surfaces should stay nearly clear, closets should look about half full, and rooms should show their function without extra furniture or overflow storage.",
      },
      {
        question: "Should I remove personal photos before selling?",
        answer:
          "Usually yes. A few neutral personal touches are fine, but most personal photos and fridge items should come down so buyers focus on the home instead of your household.",
      },
    ],
  },
  {
    slug: "moving-storage-checklist-before-selling-wa",
    eyebrow: "Storage and Movers",
    title: "Moving and Storage Checklist Before Listing Your House",
    shortTitle: "Moving and storage before listing",
    metaDescription:
      "Seller checklist for lining up movers, storage, and packing before your Washington home goes on the market. Avoid last-minute chaos while keeping the house show-ready.",
    summary:
      "Packing early is not just about the move. It is one of the easiest ways to keep the home cleaner, lighter, and easier to show once buyers start coming through.",
    timeframe: "Start 4-6 weeks before listing",
    whyItMatters:
      "Sellers who plan moving and storage early are less likely to let boxes, extra furniture, and daily life take over the home once it goes active.",
    checklist: [
      "Get two or three mover quotes early, especially if you may list during a busy season.",
      "Price portable storage or a small storage unit for the items you box up before listing.",
      "Check condo or HOA rules for move hours, elevator use, parking, or container placement.",
      "Start collecting boxes and packing materials before the listing date gets close.",
      "Label boxes by room and priority so unpacking later is easier.",
      "Move packed boxes out of the main living areas instead of stacking them in the garage entrance or spare bedroom if those spaces will be photographed.",
    ],
    mistakes: [
      "Using closets, hallways, or the garage as overflow staging areas after decluttering.",
      "Waiting to contact movers until the listing is already live.",
      "Ignoring HOA or condo move rules until the last minute.",
    ],
    localAngle:
      "For Snohomish County sellers, early moving prep matters because many homes need to stay show-ready through the first two weeks on market. A storage plan keeps the home feeling cleaner while you are still living in it.",
    faqs: [
      {
        question: "Should I rent storage before I list my house?",
        answer:
          "Often yes. If the home feels full or you are boxing up a lot of belongings, off-site storage can make day-to-day show readiness much easier.",
      },
      {
        question: "When should I book movers if I am thinking about selling?",
        answer:
          "Start getting quotes several weeks before listing. Busy moving periods can book out quickly, and early planning reduces stress once offers start coming in.",
      },
    ],
  },
  {
    slug: "repairs-before-selling-house-wa",
    eyebrow: "Repairs and Touch-Ups",
    title: "What Repairs Should You Make Before Selling a House?",
    shortTitle: "What to fix before selling",
    metaDescription:
      "Washington seller guide on what repairs to make before listing a house. Learn which low-friction fixes matter most and which bigger projects usually do not pay back.",
    summary:
      "Most sellers do not need a remodel. They need obvious maintenance handled, basic cosmetic issues cleaned up, and a home that does not trigger buyer concern.",
    timeframe: "Start 3-4 weeks before listing",
    whyItMatters:
      "Visible maintenance issues make buyers worry about larger hidden problems. Small repairs often do more for confidence and showing quality than expensive upgrades.",
    checklist: [
      "Fix leaky faucets, running toilets, sticking doors, loose hardware, and cracked outlet or switch covers.",
      "Replace burned-out bulbs and keep color temperature consistent so the home feels brighter and more deliberate.",
      "Patch nail holes and touch up paint where wear is visible.",
      "Repaint strong or outdated wall colors to a lighter neutral if the budget allows.",
      "Refresh caulk around tubs, showers, and sinks if it is stained or peeling.",
      "Replace the furnace filter and confirm smoke and carbon monoxide detectors work properly.",
    ],
    mistakes: [
      "Spending heavily on remodels before fixing the smaller maintenance items buyers notice first.",
      "Leaving a home full of little broken things because none of them feels major on its own.",
      "Starting larger projects without understanding how the home is likely to be priced.",
    ],
    localAngle:
      "In many Snohomish County markets, clean maintenance and visual polish help a home compete better than a rushed renovation. Buyers compare the visible condition of nearby listings very quickly.",
    faqs: [
      {
        question: "Do I need to remodel before selling my house?",
        answer:
          "Usually no. Paint, repairs, lighting, cleaning, and decluttering tend to outperform expensive last-minute remodels in both speed and return.",
      },
      {
        question: "What small repairs matter most before listing?",
        answer:
          "Start with anything visibly broken, anything that suggests moisture or neglect, and anything buyers will touch during a showing such as doors, fixtures, outlets, and hardware.",
      },
    ],
  },
  {
    slug: "deep-clean-before-listing-house-wa",
    eyebrow: "Deep Clean",
    title: "How to Deep Clean a House Before Listing",
    shortTitle: "How to deep clean before listing",
    metaDescription:
      "Seller guide for deep cleaning a house before it hits the market. Learn what to clean, where odors matter most, and how to make your Washington home show brighter.",
    summary:
      "Deep cleaning is one of the highest-return pre-list moves most sellers can make. A clean home feels brighter, better maintained, and easier to trust.",
    timeframe: "Start 2-3 weeks before listing",
    whyItMatters:
      "Buyers notice cleanliness immediately, even when they cannot explain it. Clean windows, neutral odors, and crisp surfaces make the whole home feel more cared for.",
    checklist: [
      "Clean windows inside and out, including tracks where possible, to maximize natural light.",
      "Scrub grout, baseboards, vents, light switches, and appliance interiors.",
      "Professionally clean carpets if they are stained or holding odors.",
      "Neutralize pet, smoke, or cooking odors at the source instead of trying to mask them.",
      "Deep clean bathrooms and kitchens until they look simple and easy to maintain.",
      "Consider hiring a one-time professional cleaning service if the home needs a full reset.",
    ],
    mistakes: [
      "Doing a normal weekly clean and calling it enough before photos or showings.",
      "Ignoring odor sources because you have become used to them.",
      "Forgetting the details buyers read as maintenance signals, such as vents, caulk lines, appliance interiors, and baseboards.",
    ],
    localAngle:
      "Snohomish County buyers often decide from photos whether a home feels worth touring. Deep cleaning improves both the online first impression and the in-person showing experience.",
    faqs: [
      {
        question: "Should I hire a cleaner before listing my house?",
        answer:
          "Often yes. A one-time deep clean is frequently one of the best pre-list expenses because it improves photos, showings, and overall buyer confidence.",
      },
      {
        question: "What should be cleaned before real estate photos?",
        answer:
          "Windows, floors, counters, bathrooms, kitchen surfaces, appliance fronts, and any detail that catches light or suggests the home has not been maintained well.",
      },
    ],
  },
  {
    slug: "paperwork-needed-to-sell-house-wa",
    eyebrow: "Paperwork to Gather",
    title: "What Paperwork Do You Need to Sell a House in Washington?",
    shortTitle: "Paperwork needed to sell a house",
    metaDescription:
      "Washington seller paperwork checklist covering disclosures, HOA documents, warranties, repair receipts, utility info, and keys before listing a home for sale.",
    summary:
      "Paperwork rarely feels urgent until a buyer asks for it. Gathering it early helps the sale feel organized and keeps disclosures from becoming a last-minute scramble.",
    timeframe: "Start 1-2 weeks before listing",
    whyItMatters:
      "Organized paperwork builds confidence. It helps buyers, agents, and escrow move faster and reduces the chance that basic document gaps slow the process down.",
    checklist: [
      "Be ready to complete the Washington Seller Disclosure Statement honestly and thoroughly.",
      "Gather HOA or condo documents, dues information, rules, and any special assessment details if they apply.",
      "Pull appliance manuals, warranties, and receipts for recent repairs or improvements.",
      "Make note of average utility costs and active service contracts buyers may ask about.",
      "Collect keys, fobs, mailbox keys, garage remotes, gate codes, and storage access details.",
      "Keep everything in one place so questions can be answered quickly once the home is active.",
    ],
    mistakes: [
      "Waiting until an offer is in hand to figure out where the important documents are.",
      "Underestimating how often buyers ask about utilities, improvements, HOA fees, or special assessments.",
      "Forgetting the practical handoff items such as remotes, mailbox keys, and access codes.",
    ],
    localAngle:
      "For Washington sellers, paperwork readiness matters because disclosure and HOA questions come up early. A smoother document package helps the property feel less risky from the buyer side.",
    faqs: [
      {
        question: "What disclosures do I need to sell a house in Washington?",
        answer:
          "Most sellers should expect to complete a Seller Disclosure Statement and provide additional property information as needed. HOA and condo sellers should also expect document requests tied to the association.",
      },
      {
        question: "What documents should I gather before listing?",
        answer:
          "Start with disclosures, HOA or condo documents if applicable, repair receipts, warranties, utility details, manuals, keys, remotes, and any access codes tied to the property.",
      },
    ],
  },
  {
    slug: "show-ready-house-checklist-wa",
    eyebrow: "While You Are on the Market",
    title: "How to Keep a House Show-Ready While It Is on the Market",
    shortTitle: "How to keep a house show-ready",
    metaDescription:
      "Show-ready house checklist for sellers in Washington. Learn how to keep beds made, counters clear, pets managed, and the home ready for real estate showings.",
    summary:
      "The first two weeks on market matter. A simple daily reset routine makes it easier to say yes to showings and gives buyers a better in-person experience.",
    timeframe: "Use daily once the home is live",
    whyItMatters:
      "A home can be beautifully prepared for launch and still lose momentum if it is hard to show or feels messy once buyers arrive in person.",
    checklist: [
      "Make beds, put away dishes, clear counters, and do a quick vacuum each day.",
      "Keep pet items, litter boxes, and strong odors under control before every showing.",
      "Secure valuables, medications, and personal documents out of sight.",
      "Leave for showings when possible so buyers can move through the home without friction.",
      "Try to approve as many showing requests as possible, especially in the first two weeks.",
      "Keep the home simple to reset so you are not fighting the process every day.",
    ],
    mistakes: [
      "Treating show readiness as optional after the listing has already gone live.",
      "Saying no to early showing requests because the house is inconvenient to reset.",
      "Leaving pet clutter, personal paperwork, or lived-in messes visible during tours.",
    ],
    localAngle:
      "Across Snohomish County, strong early access can shape momentum. Homes that are easy to tour in the first two weeks usually give buyers a better chance to connect before the listing feels stale.",
    faqs: [
      {
        question: "How clean does my house need to stay while it is listed?",
        answer:
          "Clean enough that a showing can happen with a short reset. Beds made, counters clear, dishes away, and obvious clutter handled should be the baseline.",
      },
      {
        question: "Should I leave during showings?",
        answer:
          "Usually yes. Buyers tend to stay longer and look more comfortably when the seller is not in the home during the showing.",
      },
    ],
  },
];

export const sellerPrepPageMap = new Map(
  sellerPrepPages.map((entry) => [entry.slug, entry]),
);
