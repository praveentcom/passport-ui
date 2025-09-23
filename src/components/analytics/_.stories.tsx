import type { Meta, StoryObj } from "@storybook/nextjs";

import { Analytics } from ".";
import { definition } from "./definition";

const meta = {
  title: "Components/Analytics",
  component: Analytics,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Analytics**: Analytics provider component with hook support

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    providers: {
      description: "Analytics providers configuration",
      control: { type: "object" },
    },
    enabled: {
      description: "Whether to load analytics scripts",
      control: { type: "boolean" },
    },
    nonce: {
      description: "Custom nonce for CSP compliance",
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Analytics>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic Google Analytics setup with just a tracking ID.
 */
export const Default: Story = {
  args: {
    providers: {
      googleAnalytics: {
        trackingId: "G-DEMO123456",
      },
    },
    enabled: false,
  },
};

/**
 * Multiple providers configured together.
 */
export const MultipleProviders: Story = {
  args: {
    providers: {
      googleAnalytics: {
        trackingId: "G-DEMO123456",
        config: {
          anonymize_ip: true,
          cookie_domain: "auto",
        },
      },
      vercelAnalytics: {
        debug: true,
      },
      mixpanel: {
        token: "demo-mixpanel-token",
        config: {
          track_pageview: true,
          persistence: "localStorage",
        },
      },
      segment: {
        writeKey: "demo-segment-write-key",
        config: {
          trackPageview: true,
        },
      },
    },
    enabled: false,
  },
};

/**
 * Vercel Analytics only setup.
 */
export const VercelOnly: Story = {
  args: {
    providers: {
      vercelAnalytics: {
        debug: false,
        disableBeacon: false,
      },
    },
    enabled: false,
  },
};

/**
 * Mixpanel configuration with custom events.
 */
export const MixpanelWithEvents: Story = {
  args: {
    providers: {
      mixpanel: {
        token: "demo-mixpanel-token",
        config: {
          api_host: "api.mixpanel.com",
          track_pageview: true,
          persistence: "cookie",
        },
        events: [
          {
            name: "Component Loaded",
            properties: {
              component: "Analytics",
              version: "1.0",
            },
          },
        ],
      },
    },
    enabled: false,
  },
};

/**
 * Amplitude configuration.
 */
export const AmplitudeSetup: Story = {
  args: {
    providers: {
      amplitude: {
        apiKey: "demo-amplitude-api-key",
        config: {
          serverZone: "US",
          trackSessions: true,
          sessionTimeout: 1800000,
        },
        events: [
          {
            eventType: "Analytics Initialized",
            eventProperties: {
              provider: "Amplitude",
            },
          },
        ],
      },
    },
    enabled: false,
  },
};

/**
 * PostHog configuration with session recording.
 */
export const PostHogSetup: Story = {
  args: {
    providers: {
      posthog: {
        apiKey: "demo-posthog-api-key",
        apiHost: "https://app.posthog.com",
        config: {
          capture_pageview: true,
          capture_pageleave: true,
          session_recording: {
            maskAllInputs: true,
          },
        },
      },
    },
    enabled: false,
  },
};

/**
 * Plausible Analytics configuration.
 */
export const PlausibleSetup: Story = {
  args: {
    providers: {
      plausible: {
        domain: "example.com",
        config: {
          trackOutboundLinks: true,
          hashMode: false,
        },
      },
    },
    enabled: false,
  },
};

/**
 * Privacy-focused setup with minimal tracking.
 */
export const PrivacyFocused: Story = {
  args: {
    providers: {
      googleAnalytics: {
        trackingId: "G-DEMO123456",
        config: {
          anonymize_ip: true,
          cookie_expires: 86400, // 24 hours
        },
      },
      plausible: {
        domain: "example.com",
        config: {
          trackOutboundLinks: false,
        },
      },
    },
    enabled: false,
  },
};
