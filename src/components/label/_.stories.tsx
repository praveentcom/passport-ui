import type { Meta, StoryObj } from "@storybook/nextjs";

import { Label } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Label**: Text label for form inputs

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
