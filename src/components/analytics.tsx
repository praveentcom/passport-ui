"use client";

import * as React from "react";

/**
 * Google Analytics configuration
 */
export interface GoogleAnalyticsConfig {
  /** Google Analytics tracking ID (e.g., 'G-XXXXXXXXXX') */
  trackingId: string;
  /** Additional gtag config parameters */
  config?: {
    /** Custom cookie domain */
    cookie_domain?: string;
    /** Cookie expiration time in seconds */
    cookie_expires?: number;
    /** Whether to respect Do Not Track */
    anonymize_ip?: boolean;
    /** Custom dimensions */
    custom_map?: Record<string, string>;
    /** Additional config options */
    [key: string]: unknown;
  };

  /** Custom gtag events to send on load */
  events?: Array<{
    action: string;
    category?: string;
    label?: string;
    value?: number;
    [key: string]: unknown;
  }>;
}

/**
 * Analytics providers configuration
 */
export interface AnalyticsProviders {
  /** Google Analytics configuration */
  googleAnalytics?: GoogleAnalyticsConfig;
}

/**
 * Analytics component props
 */
export interface AnalyticsProps {
  /** Analytics providers configuration */
  providers: AnalyticsProviders;
  /** Whether to load analytics scripts (useful for development) */
  enabled?: boolean;
  /** Custom nonce for CSP compliance */
  nonce?: string;
}

/**
 * Google Analytics Script Component
 */
const GoogleAnalyticsScript: React.FC<{
  config: GoogleAnalyticsConfig;
  nonce?: string;
}> = ({ config, nonce }) => {
  const { trackingId, config: gtagConfig = {}, events = [] } = config;

  const gtagScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    
    gtag('config', '${trackingId}', ${JSON.stringify(gtagConfig)});
    
    ${events
      .map(
        (event) =>
          `gtag('event', '${event.action}', ${JSON.stringify(
            Object.fromEntries(
              Object.entries(event).filter(([key]) => key !== "action")
            )
          )});`
      )
      .join("\n    ")}
  `.trim();

  return (
    <>
      {/* Google Analytics gtag.js */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        nonce={nonce}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: gtagScript,
        }}
        nonce={nonce}
      />
    </>
  );
};

/**
 * Analytics Component
 *
 * A flexible analytics component that supports multiple providers.
 * Currently supports Google Analytics with easy extensibility for other providers.
 *
 * @example
 * ```tsx
 * // Basic Google Analytics
 * <Analytics
 *   providers={{
 *     googleAnalytics: {
 *       trackingId: 'G-XXXXXXXXXX'
 *     }
 *   }}
 * />
 *
 * // Advanced Google Analytics with custom config
 * <Analytics
 *   providers={{
 *     googleAnalytics: {
 *       trackingId: 'G-XXXXXXXXXX',
 *       config: {
 *         anonymize_ip: true,
 *         cookie_domain: 'auto'
 *       },
 *       events: [
 *         { action: 'page_view', category: 'engagement' }
 *       ]
 *     }
 *   }}
 * />
 * ```
 */
export const Analytics: React.FC<AnalyticsProps> = ({
  providers,
  enabled = true,
  nonce,
}) => {
  if (!enabled) {
    return null;
  }

  return (
    <>
      {/* Google Analytics */}
      {providers.googleAnalytics && (
        <GoogleAnalyticsScript
          config={providers.googleAnalytics}
          nonce={nonce}
        />
      )}
    </>
  );
};

/**
 * Hook for programmatic analytics tracking
 */
export const useAnalytics = () => {
  const trackEvent = React.useCallback(
    (action: string, parameters?: Record<string, unknown>) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, parameters);
      }
    },
    []
  );

  const trackPageView = React.useCallback(
    (page_path: string, page_title?: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_view", {
          page_path,
          page_title,
        });
      }
    },
    []
  );

  const setUserProperties = React.useCallback(
    (properties: Record<string, unknown>) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          user_properties: properties,
        });
      }
    },
    []
  );

  return {
    trackEvent,
    trackPageView,
    setUserProperties,
  };
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
