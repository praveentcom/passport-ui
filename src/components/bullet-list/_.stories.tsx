import type { Meta, StoryObj } from "@storybook/nextjs";

import { BulletList } from ".";
import { definition } from "./definition";

const meta: Meta<typeof BulletList> = {
  title: "Components/BulletList",
  component: BulletList,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **BulletList**: List component with custom bullet styling

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
