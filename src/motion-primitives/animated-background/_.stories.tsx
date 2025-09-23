import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { AnimatedBackground } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof AnimatedBackground> = {
  title: "Motion Primitives/AnimatedBackground",
  component: AnimatedBackground,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **AnimatedBackground**: Component for creating animated backgrounds

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
      control: { type: "object", disable: true },
      description:
        "Interactive elements to render. Each child must have a unique data-id prop for tracking",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    enableHover: {
      control: { type: "boolean" },
      description:
        "Enable hover interaction mode instead of click-to-select behavior",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Interaction",
      },
    },
    transition: {
      control: { type: "object" },
      description:
        "Framer Motion transition configuration for the background animation",
      table: {
        type: { summary: "Transition" },
        category: "Animation",
      },
    },
    onValueChangeAction: {
      action: "onValueChangeAction",
      description:
        "Callback fired when the active element changes, receives the new active data-id",
      table: {
        type: { summary: "(newActiveId: string | null) => void" },
        category: "Events",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onValueChangeAction(newActiveId) {
      action("onValueChangeAction")(newActiveId);
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    className: "bg-border rounded-sm",
    enableHover: true,
    children: ["One", "Two", "Three"].map((item) => (
      <div key={item} data-id={item} className="px-2 py-1 cursor-pointer">
        <p>{item}</p>
      </div>
    )),
  },
};

export const Click: Story = {
  args: {
    className: "bg-border rounded-sm",
    enableHover: false,
    children: ["Male", "Female"].map((item) => (
      <div key={item} data-id={item} className="px-2 py-1 cursor-pointer">
        <p>{item}</p>
      </div>
    )),
  },
};
