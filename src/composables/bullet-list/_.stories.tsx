import type { Meta, StoryObj } from "@storybook/nextjs";

import { BulletList } from ".";

const meta: Meta<typeof BulletList> = {
  title: "Composables/BulletList",
  component: BulletList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A styled bullet list component with custom bullet points, consistent spacing, and flexible content support.

## Features
- Custom bullet point styling with theme integration
- Consistent spacing and typography
- Flexible content support (strings, arrays, or mixed content)
- Responsive design with proper text flow
- Semantic HTML structure for accessibility
- Integration with the design system's spacing scale

## Usage
Use for displaying lists of related items, features, or any content that benefits from bullet point formatting. The component handles both simple string arrays and more complex content structures.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      control: { type: "object" },
      description:
        "Array of strings to display as list items, or a single string for a one-item list",
      table: {
        type: { summary: "string[] | string" },
        category: "Content",
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
