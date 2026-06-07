export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  // TODO: Wire analytics only after the provider and consent strategy are approved.
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics:stub]", eventName, properties);
  }
}

