import type { Meta, StoryObj } from "@storybook/nextjs";

import { Blockquote } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof Blockquote> = {
  title: "Components/Blockquote",
  component: Blockquote,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **Blockquote**: Semantic blockquote element for quoted text

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
    nested: {
      control: { type: "boolean" },
      description: "Whether this is a nested blockquote (affects styling)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Appearance",
      },
    },
    className: COMMON_CONTROLS.className,
    children: {
      control: { type: "text" },
      description: "The blockquote content",
      table: {
        type: { summary: "ReactNode" },
        category: "Content",
      },
    },
  },
  render: (args) => (
    <div className="w-sm">
      <Blockquote {...args} />
    </div>
  ),
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children:
      "This is a blockquote that demonstrates how quoted text appears with proper styling and visual hierarchy.",
    nested: false,
  },
};

export const Nested: Story = {
  args: {
    children: (
      <>
        This is a parent blockquote.
        <Blockquote nested>
          This is a nested blockquote within the parent.
        </Blockquote>
        Back to the parent blockquote content.
      </>
    ),
    nested: false,
  },
};
