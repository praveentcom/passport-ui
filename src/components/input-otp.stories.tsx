import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Label,
  MetaContainer,
} from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const meta: Meta<typeof InputOTP> = {
  title: "Components/InputOTP",
  component: InputOTP,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A one-time password input component built on top of input-otp. Perfect for authentication flows and verification codes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    maxLength: {
      control: { type: "range", min: 1, max: 10 },
      description: "Maximum number of characters",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "6" },
      },
    },
    value: {
      control: "text",
      description: "The current value of the OTP input",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    onChange: {
      action: "onChange",
      description: "Callback fired when the value changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    onComplete: {
      action: "onComplete",
      description: "Callback fired when all slots are filled",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    textAlign: {
      control: { type: "select" },
      options: ["left", "center", "right"],
      description: "The text alignment of the OTP input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "center" },
      },
    },
    pushPasswordManagerStrategy: {
      control: { type: "select" },
      options: ["increase-width", "none"],
      description:
        "The strategy to push the password manager to increase the width of the OTP input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "increase-width" },
      },
    },
    pasteTransformer: {
      description: "The function to transform the pasted text",
      table: {
        type: { summary: "(pasted: string) => string" },
      },
    },
    className: COMMON_CONTROLS.className,
    containerClassName: {
      ...COMMON_CONTROLS.className,
      name: "containerClassName",
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
        <MetaContainer>
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
        </MetaContainer>
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
