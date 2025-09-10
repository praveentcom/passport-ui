import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Button, PrefetchLink } from "../../src";

const meta: Meta<typeof PrefetchLink> = {
  title: "Components/PrefetchLink",
  component: PrefetchLink,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component: `An intelligent Next.js Link component with advanced prefetching strategies for optimal performance and user experience.

## Features
- Smart prefetching on hover with configurable delays
- Intersection observer-based visibility prefetching
- Configurable prefetching strategies for different use cases
- Built on Next.js Link with all native functionality
- Performance optimization to prevent unnecessary requests
- Automatic cleanup of prefetch requests
- Support for external and internal links

## Prefetching Strategies
- **Hover Prefetching**: Prefetches when user hovers over the link
- **Visibility Prefetching**: Prefetches when link enters viewport
- **Combined**: Use both strategies for maximum optimization
- **Delayed**: Configurable delay prevents accidental prefetching

## Performance Benefits
- Faster page transitions with pre-loaded content
- Reduced perceived loading times
- Better user experience with instant navigation
- Intelligent prefetching prevents bandwidth waste

## Usage
Use prefetch links for:
- Critical navigation paths in your application
- Links that users are likely to follow
- High-traffic pages and common destinations
- Any link where faster navigation improves UX

## Best Practices
- Use hover prefetching for likely destinations
- Use visibility prefetching for above-the-fold links
- Adjust delays based on your application's needs
- Consider bandwidth implications for mobile users

## Accessibility
Prefetch links maintain all standard link accessibility features while adding performance optimizations.`,
      },
    },
  },
  argTypes: {
    href: {
      control: "text",
      description: "The URL to navigate to and prefetch",
      table: {
        type: { summary: "string" },
        category: "Navigation",
      },
    },
    children: {
      control: false,
      description: "The content to render inside the link",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    prefetchOnHover: {
      control: "boolean",
      description:
        "Whether to prefetch the route when user hovers over the link",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Prefetching",
      },
    },
    prefetchOnVisible: {
      control: "boolean",
      description:
        "Whether to prefetch when the link becomes visible in viewport",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Prefetching",
      },
    },
    prefetchDelay: {
      control: "number",
      description:
        "Delay in milliseconds before prefetching on hover to prevent accidental prefetching",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "100" },
        category: "Prefetching",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  tags: ["autodocs"],
  render: (args) => <PrefetchLink {...args} />,
};

export default meta;
type Story = StoryObj<typeof PrefetchLink>;

export const Default: Story = {
  args: {
    href: "/dashboard",
    children: <Button>Go to Dashboard</Button>,
    prefetchOnHover: true,
    prefetchOnVisible: false,
    prefetchDelay: 100,
  },
};
