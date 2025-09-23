import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { action } from "storybook/actions";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { Label } from "../label";

const meta: Meta<typeof InputOTP> = {
  title: "Components/InputOTP",
  component: InputOTP,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **InputOTP**: Root container
- **InputOTPGroup**: Grouped slots
- **InputOTPSlot**: Individual slots
- **InputOTPSeparator**: Visual separators

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
    maxLength: {
      control: { type: "range", min: 1, max: 10 },
      description: "Maximum number of characters/slots in the OTP input",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "6" },
        category: "Configuration",
      },
    },
    value: {
      control: "text",
      description: "The controlled current value of the OTP input",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the OTP input is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "Text alignment within each OTP slot",
      table: {
        type: { summary: '"left" | "center" | "right"' },
        defaultValue: { summary: '"center"' },
        category: "Appearance",
      },
    },
    pushPasswordManagerStrategy: {
      control: { type: "select" },
      options: ["increase-width", "none"],
      description: "Strategy for handling password manager interactions",
      table: {
        type: { summary: '"increase-width" | "none"' },
        defaultValue: { summary: '"increase-width"' },
        category: "Behavior",
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback fired when the OTP value changes",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Events",
      },
    },
    onComplete: {
      action: "onComplete",
      description: "Callback fired when all OTP slots are filled",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Events",
      },
    },
    pasteTransformer: {
      control: false,
      description:
        "Function to transform pasted text before distribution to slots",
      table: {
        type: { summary: "(pasted: string) => string" },
        category: "Behavior",
      },
    },
    className: COMMON_CONTROLS.className,
    containerClassName: {
      ...COMMON_CONTROLS.className,
      name: "containerClassName",
      description: "Additional CSS classes for the OTP container",
    },
  },
  args: {
    onChange: action("onChange"),
    onComplete: action("onComplete"),
  },
  render: (args) => {
    const {
      maxLength,
      value,
      disabled,
      onChange,
      onComplete,
      textAlign,
      pushPasswordManagerStrategy,
      pasteTransformer,
      className,
      containerClassName,
    } = args;

    return (
      <div className="w-sm">
        <div className="meta-container">
          <Label>Verification Code</Label>
          <InputOTP
            maxLength={maxLength}
            value={value}
            disabled={disabled}
            onChange={onChange}
            onComplete={onComplete}
            textAlign={textAlign}
            pushPasswordManagerStrategy={pushPasswordManagerStrategy}
            pasteTransformer={pasteTransformer}
            className={className}
            containerClassName={containerClassName}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof InputOTP>;

export const Default: Story = {
  args: {
    maxLength: 6,
  },
};
