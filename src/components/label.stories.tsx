import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Label } from "../../src";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A semantic label component for form elements with proper accessibility integration and consistent styling.

## Features
- Semantic HTML label element for accessibility
- Automatic association with form controls via htmlFor
- Consistent typography and styling with design system
- Screen reader compatible with proper labeling
- Click-to-focus behavior for associated form elements
- Integration with form validation and error states

## Usage
Always use labels with form inputs for accessibility. The label should clearly describe the purpose of the associated form control. Use the \`htmlFor\` prop to associate the label with the input's \`id\`.

## Accessibility
Labels are essential for accessibility - they provide context for screen readers and enable click-to-focus functionality for better user experience.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description:
        "The label text content that describes the associated form element",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    htmlFor: {
      control: { type: "text" },
      description: "The id of the form element this label is associated with",
      table: {
        type: { summary: "string" },
        category: "Association",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <Label {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a label",
  },
};
