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
  {
    slug: "home-staging-tips-to-sell-house-wa",
    eyebrow: "Staging and Presentation",
    title: "Home Staging Tips to Sell a House in Washington",
    shortTitle: "How to stage your house to sell",
    metaDescription:
      "Washington home staging guide for sellers. Learn which rooms matter most, what to remove, and how to make listing photos and showings feel stronger before your house hits the market.",
    summary:
      "Staging is less about decorating and more about helping buyers read the layout quickly. The right edits make the home feel brighter, calmer, and easier to imagine living in.",
    timeframe: "Start 2-3 weeks before listing",
    whyItMatters:
      "Buyers compare homes fast online and in person. Staging helps the strongest rooms read clearly, keeps attention on the home instead of your belongings, and supports better listing photos.",
    checklist: [
      "Start with the rooms buyers care about most first: living room, kitchen, primary bedroom, and main bathrooms.",
      "Edit furniture so walkways stay open and each room reads with a clear purpose.",
      "Use lighter bedding, simple pillows, and a small amount of neutral decor instead of filling surfaces.",
      "Open blinds, replace dim bulbs, and keep window areas clean so natural light does more work.",
      "Remove oversized recliners, extra dining chairs, or bulky pieces that make rooms feel tighter.",
      "Make sure the exterior entry and front porch feel maintained because the showing starts before the lockbox.",
    ],
    mistakes: [
      "Trying to decorate around clutter instead of actually removing enough belongings.",
      "Leaving too much furniture in place because the room works for daily life even if it feels cramped in photos.",
      "Treating every room equally instead of focusing first on the rooms that sell the house.",
    ],
    localAngle:
      "In Snohomish County, buyers often compare presentation quality closely within the same price band. Cleaner staging and better light can make a home feel more competitive before anyone studies the details.",
    faqs: [
      {
        question: "Do I need professional staging before selling my house?",
        answer:
          "Not always. Many homes improve enough through furniture editing, decluttering, cleaner bedding, lighter decor, and stronger photo prep. Professional staging can help when rooms feel empty, awkward, or dated.",
      },
      {
        question: "Which rooms should I stage first before listing?",
        answer:
          "Start with the living room, kitchen, primary bedroom, and the cleanest bathrooms. Those spaces do most of the work in photos and set the tone for the rest of the tour.",
      },
    ],
  },
  {
    slug: "seller-disclosures-checklist-wa",
    eyebrow: "Disclosures and Known Issues",
    title: "Seller Disclosures Checklist for Washington Home Sellers",
    shortTitle: "Seller disclosures checklist",
    metaDescription:
      "Washington seller disclosures checklist for homeowners preparing to list. Learn what to gather, what buyers usually ask about, and how to reduce last-minute disclosure stress.",
    summary:
      "Disclosure stress usually comes from disorganization, not just from the form itself. The earlier you gather facts, receipts, and property history, the easier the listing feels once questions start.",
    timeframe: "Start 1-2 weeks before listing",
    whyItMatters:
      "Disclosures shape buyer confidence. When the property story feels clear and consistent, buyers spend less energy wondering what they are missing and more energy deciding whether the house fits.",
    checklist: [
      "List known repairs, updates, leaks, insurance claims, or recurring issues while they are still easy to remember.",
      "Pull receipts or invoices for major system work, roof work, plumbing, electrical, or water-related repairs.",
      "Review any HOA, condo, or neighborhood documents that affect the property or the buyer experience.",
      "Note what stays with the property, including appliances, mounted TVs, hot tubs, sheds, or outdoor equipment.",
      "Be ready to explain any past issues that were resolved, including what was done and when it happened.",
      "Keep disclosure notes and supporting documents together so answers stay consistent once the home is active.",
    ],
    mistakes: [
      "Assuming buyers will not ask about past repairs once the home looks clean and updated.",
      "Trying to reconstruct property history after the listing is live and questions are already coming in.",
      "Answering from memory when receipts, invoices, or prior records would give a cleaner explanation.",
    ],
    localAngle:
      "In Washington, organized disclosures matter because buyers often compare risk just as much as finishes. A clear paper trail can keep a property-specific issue from feeling bigger than it is.",
    faqs: [
      {
        question: "What should I gather for seller disclosures before listing?",
        answer:
          "Start with repair receipts, warranty information, HOA or condo information if applicable, notes on known issues, and anything that helps explain past maintenance or improvements accurately.",
      },
      {
        question: "Should I disclose old issues that were already fixed?",
        answer:
          "Usually yes. Resolved issues are easier for buyers to process when they are explained clearly with supporting details than when they are discovered later without context.",
      },
    ],
  },
  {
    slug: "best-time-to-sell-house-wa",
    eyebrow: "Timing the Launch",
    title: "When Is the Best Time to Sell a House in Washington?",
    shortTitle: "Best time to sell a house",
    metaDescription:
      "Washington seller timing guide on when to list a house for sale. Learn how season, prep readiness, buyer demand, and your own move timeline affect the best listing window.",
    summary:
      "The best time to list is not just seasonal. It is when the home is ready, the pricing is realistic, and the launch is strong enough to make the first two weeks count.",
    timeframe: "Start planning 4-8 weeks before listing",
    whyItMatters:
      "Timing affects buyer traffic, but readiness affects conversion. A well-prepared listing in a normal week often outperforms a rushed listing launched in a supposedly perfect one.",
    checklist: [
      "Work backward from your move, school, job, or purchase timeline so the list date serves a real goal.",
      "Make sure decluttering, repairs, cleaning, photos, and paperwork are ready before fixing the launch date.",
      "Use a CMA to compare current competition instead of assuming the season alone will carry the listing.",
      "Avoid launching during a week when the home is only half ready or showing access will be difficult.",
      "Plan for the first two weeks on market to be the strongest window for buyer attention and feedback.",
      "Leave enough time for any prep vendors you need so the listing date is not built around avoidable delays.",
    ],
    mistakes: [
      "Choosing a list date based on the calendar while the house itself is still not launch-ready.",
      "Waiting for a perfect market moment while ignoring the leverage of better prep and clearer pricing.",
      "Underestimating how much first-week showing access shapes the whole listing timeline.",
    ],
    localAngle:
      "Snohomish County sellers usually benefit most when timing and readiness line up together. A cleaner launch often matters more than chasing a specific week if the home still needs work.",
    faqs: [
      {
        question: "What month is best to sell a house in Washington?",
        answer:
          "There is no single best month for every seller. Seasonal demand matters, but the stronger question is whether the home is prepared well enough to take advantage of the launch window when it goes live.",
      },
      {
        question: "Should I wait to list until everything is perfect?",
        answer:
          "Usually no. The goal is not perfection. It is a home that is priced credibly, photographed well, easy to show, and not carrying visible issues that distract buyers.",
      },
    ],
  },
  {
    slug: "sell-house-as-is-wa",
    eyebrow: "As-Is Strategy",
    title: "Should You Sell Your House As-Is in Washington?",
    shortTitle: "Should you sell as-is",
    metaDescription:
      "Washington seller guide on selling a house as-is. Learn when as-is makes sense, what prep still matters, and how pricing and disclosures affect buyer reaction.",
    summary:
      "Selling as-is does not mean doing nothing. It means being deliberate about what you will not repair while still making the home easier to understand and easier to tour.",
    timeframe: "Decide before repair money is spent",
    whyItMatters:
      "As-is listings can work, but buyers still compare condition, transparency, and price. A home marketed as-is without a clear strategy often just feels uncertain instead of straightforward.",
    checklist: [
      "Use a CMA first so the as-is decision is tied to realistic value instead of frustration or guesswork.",
      "Handle trash, deep cleaning, and the most distracting cosmetic issues even if bigger repairs stay undone.",
      "Consider whether a pre-inspection or contractor bids would help frame larger known issues more clearly.",
      "Be ready with organized disclosures and an honest explanation of what is known about the property.",
      "Price against the likely buyer pool, not against renovated listings that solve different problems.",
      "Make the showing experience easy so buyers can evaluate the property without extra friction.",
    ],
    mistakes: [
      "Using as-is as a reason to skip cleaning, access, or basic presentation entirely.",
      "Pricing close to updated competition while expecting buyers to absorb visible repair risk.",
      "Being vague about known condition issues and hoping buyers will fill in the gaps kindly.",
    ],
    localAngle:
      "In local Washington markets, as-is homes still benefit from clean presentation and sharper disclosures. Buyers can handle work, but they hesitate when the condition story feels unclear.",
    faqs: [
      {
        question: "Can I sell my house as-is without making repairs?",
        answer:
          "Yes, but that does not mean no prep. Cleaning, access, pricing discipline, and clear disclosures still matter because buyers are evaluating both the work itself and the uncertainty around it.",
      },
      {
        question: "Does selling as-is mean I should price lower?",
        answer:
          "Usually yes relative to comparable homes that are more updated or easier to finance. The key is understanding how much condition risk the likely buyer pool will mentally deduct.",
      },
    ],
  },
  {
    slug: "pre-listing-inspection-wa",
    eyebrow: "Inspection Strategy",
    title: "Should You Get a Pre-Listing Inspection Before Selling?",
    shortTitle: "Pre-listing inspection before selling",
    metaDescription:
      "Washington seller guide on pre-listing inspections. Learn when a pre-inspection can help, what it changes, and how to use the findings without creating extra confusion.",
    summary:
      "A pre-listing inspection is not always necessary, but it can help when the house is older, the condition is unclear, or you want fewer surprises once buyers start writing offers.",
    timeframe: "Consider 2-4 weeks before listing",
    whyItMatters:
      "Some sellers need more certainty before spending repair money or setting price expectations. A pre-inspection can create cleaner decisions around repairs, disclosures, and buyer negotiation risk.",
    checklist: [
      "Consider a pre-list inspection if the home is older, has deferred maintenance, or has systems buyers may question quickly.",
      "Use the report to separate safety or confidence issues from items that are mostly cosmetic.",
      "Decide whether to repair key items, disclose them clearly, or leave them reflected in price.",
      "Avoid doing every recommendation automatically without first understanding the likely price strategy.",
      "Keep contractor bids or repair estimates if you want buyers to understand the cost range more clearly.",
      "Use the inspection as a planning tool, not just as a way to generate a longer to-do list.",
    ],
    mistakes: [
      "Getting a pre-inspection and then panicking into unnecessary work before pricing is clear.",
      "Treating every line item as equally important when many items will not influence buyer decisions much.",
      "Ordering the inspection too late to use the information well before photos and launch.",
    ],
    localAngle:
      "For Snohomish County sellers with older homes, acreage properties, or a longer maintenance story, a pre-list inspection can help turn uncertainty into a clearer repair-or-disclose decision.",
    faqs: [
      {
        question: "Should I get a pre-listing inspection before selling?",
        answer:
          "Sometimes. It is most useful when the home has condition questions that could otherwise create messy surprises later or when you need help deciding what should be repaired before listing.",
      },
      {
        question: "Will a pre-list inspection make buyers more confident?",
        answer:
          "It can, especially when it helps you clean up major questions early and present the home with better context. The report alone does not solve everything, but it can reduce ambiguity.",
      },
    ],
  },
];

export const sellerPrepPageMap = new Map(
  sellerPrepPages.map((entry) => [entry.slug, entry]),
);
