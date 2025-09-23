import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { ContentContainer } from ".";
import { SAMPLE_CONTENT_CONTAINER } from "../../../.storybook/constants";

const meta: Meta<typeof ContentContainer> = {
  title: "Layout Containers/ContentContainer",
  component: ContentContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **ContentContainer**: Layout container for centering content

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
  argTypes: {
    children: {
      control: false,
      description: "The page content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ContentContainer>;

export const Default: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
  },
};
