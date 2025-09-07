import type { Meta, StoryObj } from "@storybook/nextjs";
import { Toaster, toast, Button } from "@/client";

const meta: Meta<typeof Toaster> = {
  title: "Components/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "An opinionated toast component for React. Add the Toaster component to your app and use the toast function to display notifications.",
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
      description: "Position of the toast notifications",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"bottom-right"' },
      },
    },
    expand: {
      control: "boolean",
      description: "Whether to expand toasts on hover",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    richColors: {
      control: "boolean",
      description: "Whether to use rich colors for different toast types",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    closeButton: {
      control: "boolean",
      description: "Whether to show close button on toasts",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
