/**
 * Analytics & tracking utilities.
 */

/** Google Search Console verification — replace with actual token */
export const GSC_VERIFICATION_TOKEN = "";

/** Google Analytics 4 Measurement ID — replace with actual ID */
export const GA4_MEASUREMENT_ID = "";

/**
 * Track CMA form submission in GA4 (if configured).
 */
export function trackCmaSubmission() {
  if (typeof window === "undefined" || !GA4_MEASUREMENT_ID) return;
  
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "generate_lead", {
      event_category: "cma_form",
      event_label: "cma_request",
      value: 1,
    });
  }
}

/**
 * Track outbound phone call click.
 */
export function trackPhoneCall() {
  if (typeof window === "undefined" || !GA4_MEASUREMENT_ID) return;
  
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("event", "phone_call", {
      event_category: "contact",
      event_label: "425-645-2181",
    });
  }
}
