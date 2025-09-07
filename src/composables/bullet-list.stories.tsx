import type { Meta, StoryObj } from "@storybook/nextjs";
import { BulletList } from "@/client";

const meta: Meta<typeof BulletList> = {
  title: "Composables/BulletList",
  component: BulletList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A styled bullet list component with custom bullet points and consistent spacing.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { type: "object" },
      description:
        "Array of strings to display as list items, or a single string.",
      table: {
        type: {
          summary: "string[] | string",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ["First item", "Second item", "Third item"],
  },
};
