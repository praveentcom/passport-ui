import type { Meta, StoryObj } from "@storybook/nextjs";
import { Combobox } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";
import { useState } from "react";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const languages = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
];

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Autocomplete input and command palette with a list of suggestions.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description: "Array of options with value and label",
      table: {
        type: { summary: "ComboboxOption[]" },
      },
    },
    value: {
      control: "text",
      description: "Currently selected value",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "undefined" },
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Callback when selection changes",
      table: {
        type: { summary: "(value: string) => void" },
      },
    },
    placeholder: {
      control: "text",
      description: "Text shown when no selection",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Select option..."' },
      },
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder for search input",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Search options..."' },
      },
    },
    emptyText: {
      control: "text",
      description: "Text shown when no options match search",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"No option found."' },
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the combobox is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onValueChange: action("onValueChange"),
  },
  render: (args) => {
    const [value, setValue] = useState<string>(args.value || "");

    const handleValueChange = (newValue: string) => {
      setValue(newValue);
      args.onValueChange?.(newValue);
    };

    return (
      <div className="w-sm">
        <Combobox {...args} value={value} onValueChange={handleValueChange} />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  args: {
    options: frameworks,
    placeholder: "Select framework...",
    searchPlaceholder: "Search framework...",
    emptyText: "No framework found.",
  },
};

export const Languages: Story = {
  args: {
    options: languages,
    placeholder: "Select language...",
    searchPlaceholder: "Search language...",
    emptyText: "No language found.",
  },
};
