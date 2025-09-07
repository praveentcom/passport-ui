import type { Meta, StoryObj } from "@storybook/nextjs";

import { PrefetchLink } from "./prefetch-link";
import { Button } from "./button";

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
        component:
          "An enhanced Next.js Link component that provides intelligent prefetching capabilities. Supports prefetching on hover, visibility, or both, with configurable delays for optimal performance.",
      },
    },
  },
  argTypes: {
    href: {
      control: "text",
      description: "The URL to navigate to",
    },
    children: {
      control: false,
      description: "The content to render inside the link",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    prefetchOnHover: {
      control: "boolean",
      description: "Whether to prefetch the route on hover",
      defaultValue: true,
    },
    prefetchOnVisible: {
      control: "boolean",
      description: "Whether to prefetch when the link becomes visible",
      defaultValue: false,
    },
    prefetchDelay: {
      control: "number",
      description: "Delay in milliseconds before prefetching on hover",
      defaultValue: 100,
    },
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
