import type { Meta, StoryObj } from "@storybook/nextjs";
import { Analytics } from "./analytics";

const meta = {
  title: "Components/Analytics",
  component: Analytics,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
A flexible analytics component that supports multiple providers. Currently supports Google Analytics with easy extensibility for other providers.

## Features

- **Multiple Provider Support**: Designed to support Google Analytics, Facebook Pixel, Mixpanel, etc.
- **Type Safety**: Full TypeScript support with comprehensive interfaces
- **CSP Compliance**: Supports nonce for Content Security Policy
- **Development Friendly**: Can be disabled during development
- **Custom Events**: Support for custom tracking events
- **Hook Integration**: Includes \`useAnalytics\` hook for programmatic tracking

## useAnalytics Hook

The \`useAnalytics\` hook provides programmatic access to analytics functionality:

\`\`\`typescript
const { trackEvent, trackPageView, setUserProperties } = useAnalytics()

// Track custom events
trackEvent('button_click', {
  category: 'ui',
  label: 'demo_button',
  value: 1,
})

// Track page views
trackPageView('/demo-page', 'Analytics Demo Page')

// Set user properties
setUserProperties({
  user_type: 'premium_user',
  subscription_status: 'active',
})
\`\`\`

### Hook Methods

- **trackEvent(eventName, parameters?)**: Track custom events with optional parameters
- **trackPageView(path, title?)**: Track page views with path and optional title
- **setUserProperties(properties)**: Set user properties for enhanced tracking

## Usage

The component renders analytics scripts in the document head. It's designed to be placed once in your app's root layout or _app component.

**Note**: In Storybook, the analytics scripts are disabled by default to prevent tracking during development.
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
