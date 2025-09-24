import { BarChart } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Analytics",
  icon: BarChart,
  description:
    "A comprehensive analytics component supporting multiple providers: Google Analytics, Mixpanel, Amplitude, Segment, PostHog, and Plausible.",
  category: "components",
  storyId: "components-analytics",
  slug: "analytics",
  importCode: `import { Analytics, useAnalytics } from "passport-ui";`,
  usageCode: `{/* Place once in your app root */}
<Analytics
  providers={{
    googleAnalytics: {
      trackingId: "G-XXXXXXXXXX",
    },
    mixpanel: {
      token: "your-mixpanel-token",
    },
    segment: {
      writeKey: "your-segment-write-key",
    },
  }}
  enabled={process.env.NODE_ENV === "production"}
/>

{/* Use the hook in components */}
function TrackingExample() {
  const { trackEvent, trackPageView, setUserProperties, identifyUser } = useAnalytics();

  const handleButtonClick = () => {
    // Tracks across all configured providers
    trackEvent('button_click', { 
      category: 'ui',
      label: 'header_cta' 
    });
  };

  const handleUserLogin = (userId: string) => {
    identifyUser(userId, {
      plan: 'premium',
      signupDate: new Date().toISOString(),
    });
  };

  return (
    <div>
      <Button onClick={handleButtonClick}>
        Track Click Event
      </Button>
      <Button onClick={() => handleUserLogin('user123')}>
        Identify User
      </Button>
    </div>
  );
}

{/* Individual provider examples */}

{/* Google Analytics */}
<Analytics
  providers={{
    googleAnalytics: {
      trackingId: "G-XXXXXXXXXX",
      config: {
        anonymize_ip: true,
        cookie_domain: "auto",
      },
      events: [
        { action: "page_view", category: "engagement" }
      ]
    }
  }}
/>

{/* Mixpanel */}
<Analytics
  providers={{
    mixpanel: {
      token: "your-mixpanel-token",
      config: {
        track_pageview: true,
        persistence: "localStorage",
      }
    }
  }}
/>

{/* Amplitude */}
<Analytics
  providers={{
    amplitude: {
      apiKey: "your-amplitude-api-key",
      config: {
        serverZone: "US",
        trackSessions: true,
      }
    }
  }}
/>

{/* Segment */}
<Analytics
  providers={{
    segment: {
      writeKey: "your-segment-write-key",
      config: {
        trackPageview: true,
      }
    }
  }}
/>

{/* PostHog */}
<Analytics
  providers={{
    posthog: {
      apiKey: "your-posthog-api-key",
      apiHost: "https://app.posthog.com",
      config: {
        capture_pageview: true,
        session_recording: {
          maskAllInputs: true,
        }
      }
    }
  }}
/>

{/* Plausible */}
<Analytics
  providers={{
    plausible: {
      domain: "yourdomain.com",
      config: {
        trackOutboundLinks: true,
      }
    }
  }}
/>`,
};
