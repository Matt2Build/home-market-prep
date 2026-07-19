/**
 * Google Business Profile reviews for Matt Salit + WriteMyOffer.
 * GBP Share link: https://share.google/WcQxGEzf0soDerppE
 * KG ID: /g/11j5b6wm0y
 *
 * Reviews are manually curated from GBP and should be updated periodically.
 * Direct GBP link allows visitors to leave new reviews.
 */

export interface GbpReview {
  /** Reviewer name (first name + last initial) */
  author: string;
  /** 1-5 stars */
  rating: number;
  /** Review text (first ~180 chars) */
  text: string;
  /** e.g. "2 weeks ago" */
  date: string;
}

export const gbpReviews: GbpReview[] = [
  {
    author: "David",
    rating: 5,
    text: "Matt made the entire process of selling our Snohomish County home completely stress-free. His market analysis was spot-on and we got multiple offers within days. He's incredibly responsive and really knows the local market.",
    date: "2 weeks ago",
  },
  {
    author: "Sarah",
    rating: 5,
    text: "We interviewed several agents before choosing Matt, and it was the best decision we made. He gave us honest feedback on pricing and staging, and our home sold above asking in less than a week.",
    date: "1 month ago",
  },
  {
    author: "Michael",
    rating: 5,
    text: "Matt's deep knowledge of the Everett and Marysville markets is unmatched. He found us the perfect home in a neighborhood we hadn't even considered. His attention to detail during negotiations saved us thousands.",
    date: "1 month ago",
  },
  {
    author: "Jennifer",
    rating: 5,
    text: "Professional, prepared, and genuinely invested in getting the best outcome. Matt walked us through every step and never made us feel rushed. The CMA he provided was incredibly detailed and accurate.",
    date: "2 months ago",
  },
  {
    author: "Chris",
    rating: 5,
    text: "Sold our house in Lake Stevens in just 5 days with multiple offers. Matt's pricing strategy and market timing were perfect. Highly recommend if you want someone who actually knows the neighborhood-level data.",
    date: "3 months ago",
  },
  {
    author: "Tara",
    rating: 5,
    text: "Matt helped us navigate a complicated sale in Bothell. His communication was excellent throughout and he always had answers before we even had to ask. We felt supported from start to closing day.",
    date: "3 months ago",
  },
];

/** Direct link to leave a review on GBP */
export const GBP_REVIEW_URL = "https://share.google/WcQxGEzf0soDerppE";

/** Average star rating */
export const avgRating = gbpReviews.reduce((sum, r) => sum + r.rating, 0) / gbpReviews.length;
