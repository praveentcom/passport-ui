import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { toast } from "sonner";

import { Toaster } from ".";
import { Button } from "../button";

const meta: Meta<typeof Toaster> = {
  title: "Components/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Toaster**: Toast notification container

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
    position: {
      control: { type: "select" },
      options: [
        "top-left",
        "top-center",
        "top-right",
        "bottom-left",
        "bottom-center",
        "bottom-right",
      ],
      description: "Screen position where toast notifications appear",
      table: {
        type: {
          summary:
            '"top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"',
        },
        defaultValue: { summary: '"bottom-right"' },
        category: "Layout",
      },
    },
    expand: {
      control: "boolean",
      description:
        "Whether to expand stacked toasts on hover for better visibility",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    richColors: {
      control: "boolean",
      description:
        "Whether to use rich semantic colors for different toast types",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
    closeButton: {
      control: "boolean",
      description: "Whether to show close button on toast notifications",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    duration: {
      control: { type: "number" },
      description: "Default duration in milliseconds before auto-dismissal",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "4000" },
        category: "Timing",
      },
    },
  },
  render: (args) => (
    <div>
      <div className="flex gap-2 flex-wrap">
        <Button onClick={() => toast("Default notification")}>Default</Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("Meeting reminder", {
              description: "You have a meeting in 10 minutes.",
              action: {
                label: "View",
                onClick: () => console.log("View clicked"),
              },
            })
          }
        >
          With Action
        </Button>
        <Button onClick={() => toast.success("Success message")}>
          Success
        </Button>
        <Button onClick={() => toast.error("Error message")}>Error</Button>
        <Button onClick={() => toast.warning("Warning message")}>
          Warning
        </Button>
        <Button onClick={() => toast.info("Info message")}>Info</Button>
      </div>
      <Toaster {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  args: {
    richColors: true,
    closeButton: true,
  },
};
