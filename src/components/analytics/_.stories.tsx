import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { Analytics } from ".";

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
