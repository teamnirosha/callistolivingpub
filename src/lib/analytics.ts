declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const GA_MEASUREMENT_ID = "G-N7CL2VBYNL";

export function trackEvent(action: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", action, params);
  }
}

export function trackLead(details?: Record<string, any>) {
  trackEvent("generate_lead", {
    currency: "INR",
    ...details,
  });
}

export function trackWhatsAppClick(placement: string) {
  trackEvent("contact", {
    method: "WhatsApp",
    placement,
  });
}
