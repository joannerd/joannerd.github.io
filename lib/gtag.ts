/* eslint-disable no-unused-vars */
import { isProduction, gaTrackingId } from './config';

declare global {
  interface Window {
    gtag: any;
  }
}

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL) => {
  if (isProduction) {
    window.gtag('config', gaTrackingId, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: GTagEvent) => {
  if (isProduction) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    });
  }
};
