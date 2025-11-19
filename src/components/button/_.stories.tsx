import type { Meta, StoryObj } from "@storybook/nextjs";

import { Button } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Button**: Clickable element with multiple variants and states

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
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description:
        "The visual style variant that determines the button's appearance and semantic meaning",
      table: {
        type: {
          summary:
            '"primary" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"outline"' },
        category: "Appearance",
      },
    },
    children: {
      control: { type: "text" },
      description: "The button content - text, icons, or other React elements",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    loading: {
      control: { type: "boolean" },
      description:
        "Whether the button is in a loading state with spinner animation",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    loadingText: {
      control: { type: "text" },
      description: "Custom text to display when button is loading",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "The HTML button type attribute",
      table: {
        type: { summary: '"button" | "submit" | "reset"' },
        defaultValue: { summary: '"button"' },
        category: "Behavior",
      },
    },
    onClick: {
      control: false,
      description: "Click event handler function",
      table: {
        type: { summary: "(event: React.MouseEvent) => void" },
        category: "Events",
      },
    },
    asChild: COMMON_CONTROLS.asChild,
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Button {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "outline",
  },
};

export const Variants: Story = {
  render: () => (
    <div className="w-xs list-container grid-cols-2">
      <Button variant="primary">Primary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const LoadingState: Story = {
  render: () => (
    <div className="w-sm list-container grid-cols-2">
      <Button variant="primary" loading loadingText="Saving…">
        Save Changes
      </Button>
      <Button variant="destructive" loading loadingText="Deleting…">
        Delete Item
      </Button>
      <Button variant="outline" loading loadingText="Processing…">
        Process Data
      </Button>
      <Button variant="secondary" loading loadingText="Loading…">
        Load More
      </Button>
      <Button variant="ghost" loading loadingText="Fetching…">
        Fetch Data
      </Button>
      <Button variant="link" loading loadingText="Connecting…">
        Connect
      </Button>
    </div>
  ),
};
