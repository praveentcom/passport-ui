import type { Meta, StoryObj } from "@storybook/nextjs";

import { PrefetchLink } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Button } from "../button";
import { definition } from "./definition";

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
        component: `${definition.description}

## Components
- **PrefetchLink**: Enhanced link component with prefetching

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
