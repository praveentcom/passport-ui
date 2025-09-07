import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { DatePicker, DateRangePicker } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";
import { DateRange } from "react-day-picker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A date picker component with popover calendar. Built using a composition of Popover and Calendar components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    date: {
      control: false,
      description: "The selected date",
      table: {
        type: { summary: "Date | undefined" },
      },
    },
    onSelect: {
      action: "selected",
      description: "Event handler called when a date is selected",
      table: {
        type: { summary: "(date: Date | undefined) => void" },
      },
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text when no date is selected",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Pick a date" },
      },
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the picker is disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
    const [date, setDate] = React.useState<Date | undefined>(args.date);

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
    const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
      undefined,
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
