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
        component: `A date picker component that combines input field with popover calendar for intuitive date selection.

## Features
- Click-to-open popover calendar interface
- Keyboard navigation within calendar
- Date formatting and display in input field
- Single date and date range selection modes
- Disabled state and date restrictions
- Built-in accessibility with proper ARIA attributes
- Portal-based popover for proper layering
- Responsive design with mobile optimization

## Variants
- **DatePicker**: Single date selection with popover calendar
- **DateRangePicker**: Date range selection with enhanced calendar

## Usage
Use date pickers for:
- Form date inputs and selections
- Event scheduling and booking
- Date filtering in interfaces
- Appointment and reservation systems
- Any date-based user input requirement

## Composition
Built using a composition of Popover and Calendar components for maximum flexibility and consistency.

## Accessibility
Date pickers provide full keyboard navigation and screen reader support with proper date announcements.`,
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
