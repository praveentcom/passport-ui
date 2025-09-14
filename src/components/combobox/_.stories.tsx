"use client";

import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { action } from "storybook/actions";

import { Combobox } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";

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
        component: `A searchable combobox component that combines input and dropdown functionality with autocomplete and filtering capabilities.

## Features
- Real-time search and filtering of options
- Keyboard navigation with arrow keys and Enter selection
- Type-ahead search with instant filtering
- Customizable placeholder and empty state messages
- Built-in accessibility with proper ARIA attributes
- Portal-based dropdown for proper layering
- Smooth animations and visual feedback
- Support for large option lists with virtual scrolling

## Usage
Use comboboxes for:
- Searchable dropdowns with many options
- Autocomplete inputs for forms
- Command palettes and quick actions
- Location, category, or tag selection
- Any selection that benefits from search filtering

## Interaction
- Click to open dropdown
- Type to filter options
- Arrow keys to navigate
- Enter to select
- Escape to close

## Best Practices
- Provide clear placeholder text
- Use descriptive labels for options
- Consider grouping for large option sets
- Provide helpful empty state messages

## Accessibility
Comboboxes provide full keyboard navigation, screen reader support, and proper option announcements for accessible selection.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      control: "object",
      description:
        "Array of selectable options with value and label properties",
      table: {
        type: { summary: "ComboboxOption[]" },
        category: "Content",
      },
    },
    value: {
      control: "text",
      description: "The controlled selected value",
      table: {
        type: { summary: "string" },
        category: "State",
      },
    },
    onValueChange: {
      action: "onValueChange",
      description: "Callback fired when the selected value changes",
      table: {
        type: { summary: "(value: string) => void" },
        category: "Events",
      },
    },
    placeholder: {
      control: "text",
      description: "Text displayed when no option is selected",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Select option..."' },
        category: "Content",
      },
    },
    searchPlaceholder: {
      control: "text",
      description: "Placeholder text for the search input field",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Search options..."' },
        category: "Content",
      },
    },
    emptyText: {
      control: "text",
      description: "Text shown when no options match the search query",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"No option found."' },
        category: "Content",
      },
    },
    disabled: {
      control: "boolean",
      description: "Whether the combobox is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
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
