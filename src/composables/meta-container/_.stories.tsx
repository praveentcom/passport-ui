import type { Meta, StoryObj } from "@storybook/nextjs";

import { MetaContainer } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

const meta: Meta<typeof MetaContainer> = {
  title: "Composables/MetaContainer",
  component: MetaContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A versatile container component for displaying structured metadata, information, and content with optional title and consistent spacing.

## Features
- Optional title with semantic heading structure
- Consistent spacing and typography from design system
- Flexible content layout supporting various data types
- Integration with cards and other container components
- Responsive design with proper text flow
- Clean visual hierarchy for metadata presentation

## Usage
Perfect for displaying:
- User information and profiles
- Project metadata and statistics
- Contact details and structured data
- Any content requiring title-content organization
- Information cards and data presentation

The component automatically handles spacing and typography to maintain consistency across your application.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description:
        "Optional title displayed above the content with proper heading semantics",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    children: {
      control: { type: "text" },
      description:
        "The content to display within the container - text, elements, or complex structures",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Information",
    children:
      "This is some metadata information that can contain multiple lines of content.",
  },
};
