import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  MetaContainer,
} from "@/client";
import { action } from "storybook/actions";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Displays a list of options for the user to pick from—triggered by a button.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: { type: "text" },
      description: "The default selected value",
      table: {
        type: { summary: "string" },
      },
    },
    value: {
      control: { type: "text" },
      description: "The controlled selected value",
      table: {
        type: { summary: "string" },
      },
    },
    onValueChange: {
      action: "value-changed",
      description: "Callback fired when the value changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the select is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    open: {
      control: { type: "boolean" },
      description: "Whether the select is open (controlled)",
      table: {
        type: { summary: "boolean" },
      },
    },
  },
  args: {
    onValueChange: action("value-changed"),
  },
  render: (args) => (
    <MetaContainer title="Select a fruit or vegetable">
      <Select {...args}>
        <SelectTrigger className="w-sm">
          <SelectValue placeholder="Select one" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
            <SelectItem value="cauliflower">Cauliflower</SelectItem>
            <SelectItem value="onion">Onion</SelectItem>
            <SelectItem value="potato">Potato</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </MetaContainer>
  ),
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};
