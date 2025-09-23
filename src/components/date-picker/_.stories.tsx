import React, { useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { DateRange } from "react-day-picker";
import { action } from "storybook/actions";

import { DatePicker, DateRangePicker } from ".";
import { COMMON_CONTROLS } from "../../../.storybook/constants";
import { definition } from "./definition";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **DatePicker**: Single date selection with input field
- **DateRangePicker**: Date range selection with input field

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
    date: {
      control: false,
      description: "The currently selected date",
      table: {
        type: { summary: "Date | undefined" },
        category: "State",
      },
    },
    onSelect: {
      action: "selected",
      description: "Event handler called when a date is selected",
      table: {
        type: { summary: "(date: Date | undefined) => void" },
        category: "Events",
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text displayed when no date is selected",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '"Pick a date"' },
        category: "Content",
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the date picker is disabled and non-interactive",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "State",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    onSelect: action("selected"),
    placeholder: "Pick a date",
    disabled: false,
  },
  render: (args) => {
    const [date, setDate] = useState<Date | undefined>(args.date);

    return (
      <div className="w-sm">
        <DatePicker
          {...args}
          date={date}
          onSelect={(selectedDate) => {
            setDate(selectedDate);
            args.onSelect?.(selectedDate);
          }}
        />
      </div>
    );
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {},
};

export const DropdownRange: Story = {
  render: () => {
    const [dateRange, setDateRange] = useState<DateRange | undefined>(
      undefined
    );

    return (
      <div className="w-sm">
        <DateRangePicker
          dateRange={dateRange}
          onSelect={(selectedDateRange) => {
            setDateRange(selectedDateRange);
            action("selected")(selectedDateRange);
          }}
        />
      </div>
    );
  },
};
