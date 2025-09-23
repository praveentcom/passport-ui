"use client";

import React, { useCallback } from "react";

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
 * Mixpanel configuration
 */
export interface MixpanelConfig {
  /** Mixpanel project token */
  token: string;
  /** Configuration options */
  config?: {
    /** API host */
    api_host?: string;
    /** Whether to track page views automatically */
    track_pageview?: boolean;
    /** Whether to respect Do Not Track */
    ignore_dnt?: boolean;
    /** Whether to use localStorage */
    persistence?: 'localStorage' | 'cookie' | 'none';
    /** Additional config options */
    [key: string]: unknown;
  };
  /** Events to track on initialization */
  events?: Array<{
    name: string;
    properties?: Record<string, unknown>;
  }>;
}

/**
 * Amplitude configuration
 */
export interface AmplitudeConfig {
  /** Amplitude API key */
  apiKey: string;
  /** Configuration options */
  config?: {
    /** Server zone (US or EU) */
    serverZone?: 'US' | 'EU';
    /** Whether to track sessions */
    trackSessions?: boolean;
    /** Session timeout in milliseconds */
    sessionTimeout?: number;
    /** Additional config options */
    [key: string]: unknown;
  };
  /** Events to track on initialization */
  events?: Array<{
    eventType: string;
    eventProperties?: Record<string, unknown>;
  }>;
}

/**
 * Segment configuration
 */
export interface SegmentConfig {
  /** Segment write key */
  writeKey: string;
  /** Configuration options */
  config?: {
    /** API host */
    apiHost?: string;
    /** Whether to track page views automatically */
    trackPageview?: boolean;
    /** Integration settings */
    integrations?: Record<string, unknown>;
    /** Additional config options */
    [key: string]: unknown;
  };
  /** Events to track on initialization */
  events?: Array<{
    event: string;
    properties?: Record<string, unknown>;
  }>;
}

/**
 * PostHog configuration
 */
export interface PostHogConfig {
  /** PostHog API key */
  apiKey: string;
  /** PostHog API host */
  apiHost?: string;
  /** Configuration options */
  config?: {
    /** Whether to capture page views automatically */
    capture_pageview?: boolean;
    /** Whether to capture page leaves */
    capture_pageleave?: boolean;
    /** Whether to respect Do Not Track */
    respect_dnt?: boolean;
    /** Session recording options */
    session_recording?: {
      maskAllInputs?: boolean;
      maskInputOptions?: Record<string, boolean>;
    };
    /** Additional config options */
    [key: string]: unknown;
  };
  /** Events to capture on initialization */
  events?: Array<{
    event: string;
    properties?: Record<string, unknown>;
  }>;
}

/**
 * Plausible Analytics configuration
 */
export interface PlausibleConfig {
  /** Domain to track */
  domain: string;
  /** Custom API host (for self-hosted instances) */
  apiHost?: string;
  /** Configuration options */
  config?: {
    /** Whether to track outbound links */
    trackOutboundLinks?: boolean;
    /** Whether to exclude certain pages */
    exclude?: string;
    /** Hash-based routing */
    hashMode?: boolean;
    /** Additional config options */
    [key: string]: unknown;
  };
  /** Custom events to track on initialization */
  events?: Array<{
    name: string;
    props?: Record<string, unknown>;
  }>;
}

/**
 * Analytics providers configuration
 */
export interface AnalyticsProviders {
  /** Google Analytics configuration */
  googleAnalytics?: GoogleAnalyticsConfig;
  /** Mixpanel configuration */
  mixpanel?: MixpanelConfig;
  /** Amplitude configuration */
  amplitude?: AmplitudeConfig;
  /** Segment configuration */
  segment?: SegmentConfig;
  /** PostHog configuration */
  posthog?: PostHogConfig;
  /** Plausible Analytics configuration */
  plausible?: PlausibleConfig;
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
 * Mixpanel Script Component
 */
const MixpanelScript: React.FC<{
  config: MixpanelConfig;
  nonce?: string;
}> = ({ config, nonce }) => {
  const { token, config: mixpanelConfig = {}, events = [] } = config;

  const mixpanelScript = `
    (function(c,a){if(!a.__SV){var b=window;try{var d,m,j,k=b.location,f=k.hash;d=function(a,b){return(m=a.match(RegExp(b+"=([^&]*)")))?m[1]:null};f&&d(f,"state")&&(j=JSON.parse(decodeURIComponent(d(f,"state"))),"mpeditor"===j.action&&(b.sessionStorage.setItem("_mpcehash",f),history.replaceState(j.desiredHash||"",c.title,k.pathname+k.search)))}catch(n){}var l,h;window.mixpanel=a;a._i=[];a.init=function(b,d,g){function c(b,i){var a=i.split(".");2==a.length&&(b=b[a[0]],i=a[1]);b[i]=function(){b.push([i].concat(Array.prototype.slice.call(arguments,0)))}}var e=a;"undefined"!==typeof g?e=a[g]=[]:g="mixpanel";e.people=e.people||[];e.toString=function(b){var a="mixpanel";"mixpanel"!==g&&(a+="."+g);b||(a+=" (stub)");return a};e.people.toString=function(){return e.toString(1)+".people (stub)"};l="disable time_event track track_pageview track_links track_forms track_with_groups add_group set_group remove_group register register_once alias unregister identify name_tag set_config reset opt_in_tracking opt_out_tracking has_opted_in_tracking has_opted_out_tracking clear_opt_in_out_tracking start_batch_senders people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user people.remove".split(" ");for(h=0;h<l.length;h++)c(e,l[h]);var f="set set_once union unset remove delete".split(" ");e.get_group=function(){function a(c){b[c]=function(){call2_args=arguments;call2=[c].concat(Array.prototype.slice.call(call2_args,0));e.push([d,call2])}}for(var b={},d=["get_group"].concat(Array.prototype.slice.call(arguments,0)),c=0;c<f.length;c++)a(f[c]);return b};a._i.push([b,d,g])};a.__SV=1.2})(document,window.mixpanel||[]);
    
    mixpanel.init('${token}', ${JSON.stringify(mixpanelConfig)});
    
    ${events
      .map(
        (event) =>
          `mixpanel.track('${event.name}', ${JSON.stringify(event.properties || {})});`
      )
      .join("\n    ")}
  `.trim();

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: mixpanelScript,
      }}
      nonce={nonce}
    />
  );
};

/**
 * Amplitude Script Component
 */
const AmplitudeScript: React.FC<{
  config: AmplitudeConfig;
  nonce?: string;
}> = ({ config, nonce }) => {
  const { apiKey, config: amplitudeConfig = {}, events = [] } = config;

  const amplitudeScript = `
    (function(e,t){var n=e.amplitude||{_q:[],_iq:{}};var r=t.createElement("script");r.type="text/javascript";r.integrity="sha384-x0ik2D45ZDEEEpYpEuDpmj05fY91P7EOZkGVjmtOBkr5aaQvlIaU4T7pXNNFL98m";r.crossOrigin="anonymous";r.async=true;r.src="https://cdn.amplitude.com/libs/amplitude-8.21.9-min.gz.js";r.onload=function(){if(!e.amplitude.runQueuedFunctions){console.log("[Amplitude] Error: could not load SDK")}};var s=t.getElementsByTagName("script")[0];s.parentNode.insertBefore(r,s);function i(e,t){e.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));return this}}var o=function(){this._q=[];return this};var a=["add","append","clearAll","prepend","set","setOnce","unset","preInsert","postInsert","remove"];for(var c=0;c<a.length;c++){i(o,a[c])}n.Identify=o;var l=function(){this._q=[];return this};var u=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"];for(var p=0;p<u.length;p++){i(l,u[p])}n.Revenue=l;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","enableTracking","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"];function v(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}for(var n=0;n<d.length;n++){t(d[n])}}v(n);n.getInstance=function(e){e=(!e||e.length===0?"$default_instance":e).toLowerCase();if(!Object.prototype.hasOwnProperty.call(n._iq,e)){n._iq[e]={_q:[]};v(n._iq[e])}return n._iq[e]};e.amplitude=n})(window,document);
    
    amplitude.getInstance().init('${apiKey}', null, ${JSON.stringify(amplitudeConfig)});
    
    ${events
      .map(
        (event) =>
          `amplitude.getInstance().logEvent('${event.eventType}', ${JSON.stringify(event.eventProperties || {})});`
      )
      .join("\n    ")}
  `.trim();

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: amplitudeScript,
      }}
      nonce={nonce}
    />
  );
};

/**
 * Segment Script Component
 */
const SegmentScript: React.FC<{
  config: SegmentConfig;
  nonce?: string;
}> = ({ config, nonce }) => {
  const { writeKey, config: segmentConfig = {}, events = [] } = config;

  const segmentScript = `
    !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){var t=Array.prototype.slice.call(arguments);t.unshift(e);analytics.push(t);return analytics}};for(var e=0;e<analytics.methods.length;e++){var key=analytics.methods[e];analytics[key]=analytics.factory(key)}analytics.load=function(key,e){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=e};analytics._writeKey="${writeKey}";analytics.SNIPPET_VERSION="4.13.2";
    analytics.load("${writeKey}", ${JSON.stringify(segmentConfig)});
    
    ${events
      .map(
        (event) =>
          `analytics.track('${event.event}', ${JSON.stringify(event.properties || {})});`
      )
      .join("\n    ")}
    }}();
  `.trim();

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: segmentScript,
      }}
      nonce={nonce}
    />
  );
};

/**
 * PostHog Script Component
 */
const PostHogScript: React.FC<{
  config: PostHogConfig;
  nonce?: string;
}> = ({ config, nonce }) => {
  const { apiKey, apiHost = 'https://app.posthog.com', config: posthogConfig = {}, events = [] } = config;

  const posthogScript = `
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    
    posthog.init('${apiKey}', {
      api_host: '${apiHost}',
      ${Object.entries(posthogConfig).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join(',\n      ')}
    });
    
    ${events
      .map(
        (event) =>
          `posthog.capture('${event.event}', ${JSON.stringify(event.properties || {})});`
      )
      .join("\n    ")}
  `.trim();

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: posthogScript,
      }}
      nonce={nonce}
    />
  );
};

/**
 * Plausible Script Component
 */
const PlausibleScript: React.FC<{
  config: PlausibleConfig;
  nonce?: string;
}> = ({ config, nonce }) => {
  const { domain, apiHost = 'https://plausible.io', config: plausibleConfig = {}, events = [] } = config;

  const scriptSrc = `${apiHost}/js/script.js`;
  const scriptAttrs: Record<string, string> = {
    'data-domain': domain,
  };

  // Add optional attributes based on config
  if (plausibleConfig.trackOutboundLinks) {
    scriptAttrs['data-api'] = `${apiHost}/api/event`;
  }
  if (plausibleConfig.exclude) {
    scriptAttrs['data-exclude'] = plausibleConfig.exclude as string;
  }
  if (plausibleConfig.hashMode) {
    scriptSrc.replace('/js/script.js', '/js/script.hash.js');
  }

  const plausibleScript = events.length > 0 ? `
    window.plausible = window.plausible || function() { 
      (window.plausible.q = window.plausible.q || []).push(arguments) 
    };
    
    ${events
      .map(
        (event) =>
          `plausible('${event.name}', { props: ${JSON.stringify(event.props || {})} });`
      )
      .join("\n    ")}
  `.trim() : '';

  return (
    <>
      <script
        defer
        data-domain={domain}
        {...(plausibleConfig.trackOutboundLinks && { 'data-api': `${apiHost}/api/event` })}
        {...(plausibleConfig.exclude && { 'data-exclude': plausibleConfig.exclude as string })}
        src={scriptSrc}
        nonce={nonce}
      />
      {plausibleScript && (
        <script
          dangerouslySetInnerHTML={{
            __html: plausibleScript,
          }}
          nonce={nonce}
        />
      )}
    </>
  );
};

/**
 * Analytics Component
 *
 * A flexible analytics component that supports multiple providers.
 * Supports Google Analytics, Mixpanel, Amplitude, Segment, PostHog, and Plausible.
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
 * // Multiple providers
 * <Analytics
 *   providers={{
 *     googleAnalytics: {
 *       trackingId: 'G-XXXXXXXXXX',
 *       config: {
 *         anonymize_ip: true,
 *         cookie_domain: 'auto'
 *       }
 *     },
 *     mixpanel: {
 *       token: 'your-mixpanel-token'
 *     },
 *     segment: {
 *       writeKey: 'your-segment-write-key'
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

      {/* Mixpanel */}
      {providers.mixpanel && (
        <MixpanelScript
          config={providers.mixpanel}
          nonce={nonce}
        />
      )}

      {/* Amplitude */}
      {providers.amplitude && (
        <AmplitudeScript
          config={providers.amplitude}
          nonce={nonce}
        />
      )}

      {/* Segment */}
      {providers.segment && (
        <SegmentScript
          config={providers.segment}
          nonce={nonce}
        />
      )}

      {/* PostHog */}
      {providers.posthog && (
        <PostHogScript
          config={providers.posthog}
          nonce={nonce}
        />
      )}

      {/* Plausible */}
      {providers.plausible && (
        <PlausibleScript
          config={providers.plausible}
          nonce={nonce}
        />
      )}
    </>
  );
};

/**
 * Hook for programmatic analytics tracking across multiple providers
 */
export const useAnalytics = () => {
  const trackEvent = useCallback(
    (action: string, parameters?: Record<string, unknown>) => {
      if (typeof window === "undefined") return;

      // Google Analytics
      if (window.gtag) {
        window.gtag("event", action, parameters);
      }

      // Mixpanel
      if (window.mixpanel) {
        window.mixpanel.track(action, parameters);
      }

      // Amplitude
      if (window.amplitude) {
        window.amplitude.getInstance().logEvent(action, parameters);
      }

      // Segment
      if (window.analytics) {
        window.analytics.track(action, parameters);
      }

      // PostHog
      if (window.posthog) {
        window.posthog.capture(action, parameters);
      }

      // Plausible
      if (window.plausible) {
        window.plausible(action, { props: parameters });
      }
    },
    []
  );

  const trackPageView = useCallback(
    (page_path: string, page_title?: string) => {
      if (typeof window === "undefined") return;

      const pageData = { page_path, page_title };

      // Google Analytics
      if (window.gtag) {
        window.gtag("event", "page_view", pageData);
      }
    
      // Mixpanel
      if (window.mixpanel) {
        window.mixpanel.track("Page View", pageData);
      }

      // Amplitude
      if (window.amplitude) {
        window.amplitude.getInstance().logEvent("Page View", pageData);
      }

      // Segment
      if (window.analytics) {
        window.analytics.page(page_title, page_path, pageData);
      }

      // PostHog
      if (window.posthog) {
        window.posthog.capture("$pageview", pageData);
      }

      // Plausible (automatically tracks page views)
      if (window.plausible) {
        window.plausible("pageview", { props: pageData });
      }
    },
    []
  );

  const setUserProperties = useCallback(
    (properties: Record<string, unknown>) => {
      if (typeof window === "undefined") return;

      // Google Analytics
      if (window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          user_properties: properties,
        });
      }

      // Mixpanel
      if (window.mixpanel) {
        window.mixpanel.people.set(properties);
      }

      // Amplitude
      if (window.amplitude) {
        window.amplitude.getInstance().setUserProperties(properties);
      }

      // Segment
      if (window.analytics) {
        window.analytics.identify(undefined, properties);
      }

      // PostHog
      if (window.posthog) {
        window.posthog.setPersonProperties(properties);
      }
    },
    []
  );

  const identifyUser = useCallback(
    (userId: string, traits?: Record<string, unknown>) => {
      if (typeof window === "undefined") return;

      // Google Analytics
      if (window.gtag) {
        window.gtag("config", "GA_MEASUREMENT_ID", {
          user_id: userId,
          user_properties: traits,
        });
      }

      // Mixpanel
      if (window.mixpanel) {
        window.mixpanel.identify(userId);
        if (traits) window.mixpanel.people.set(traits);
      }

      // Amplitude
      if (window.amplitude) {
        window.amplitude.getInstance().setUserId(userId);
        if (traits) window.amplitude.getInstance().setUserProperties(traits);
      }

      // Segment
      if (window.analytics) {
        window.analytics.identify(userId, traits);
      }

      // PostHog
      if (window.posthog) {
        window.posthog.identify(userId, traits);
      }
    },
    []
  );

  return {
    trackEvent,
    trackPageView,
    setUserProperties,
    identifyUser,
  };
};

declare global {
  interface Window {
    // Google Analytics
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    
    // Mixpanel
    mixpanel: {
      init: (token: string, config?: Record<string, unknown>) => void;
      track: (event: string, properties?: Record<string, unknown>) => void;
      identify: (userId: string) => void;
      people: {
        set: (properties: Record<string, unknown>) => void;
      };
    };
    
    // Amplitude
    amplitude: {
      getInstance: () => {
        init: (apiKey: string, userId?: string, config?: Record<string, unknown>) => void;
        logEvent: (eventType: string, eventProperties?: Record<string, unknown>) => void;
        setUserId: (userId: string) => void;
        setUserProperties: (properties: Record<string, unknown>) => void;
      };
    };
    
    // Segment
    analytics: {
      load: (writeKey: string, config?: Record<string, unknown>) => void;
      track: (event: string, properties?: Record<string, unknown>) => void;
      page: (name?: string, path?: string, properties?: Record<string, unknown>) => void;
      identify: (userId?: string | undefined, traits?: Record<string, unknown>) => void;
    };
    
    // PostHog
    posthog: {
      init: (apiKey: string, config?: Record<string, unknown>) => void;
      capture: (event: string, properties?: Record<string, unknown>) => void;
      identify: (userId: string, properties?: Record<string, unknown>) => void;
      setPersonProperties: (properties: Record<string, unknown>) => void;
    };
    
    // Plausible
    plausible: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}
