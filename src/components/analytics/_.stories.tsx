import type { Meta, StoryObj } from "@storybook/nextjs";

import { Analytics } from ".";

const meta = {
  title: "Components/Analytics",
  component: Analytics,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `Analytics component supporting multiple providers.

## Features
- Multiple providers: Google Analytics, Facebook Pixel, Mixpanel
- TypeScript support
- CSP compliance with nonce
- Can be disabled during development
- \`useAnalytics\` hook

## useAnalytics Hook
\`\`\`typescript
const { trackEvent, trackPageView, setUserProperties } = useAnalytics()
trackEvent('button_click', { category: 'ui' })
trackPageView('/demo-page')
\`\`\`

## Usage
Place once in app root. Disabled by default in Storybook.`,
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
