import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import { Calendar } from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";
import { action } from "storybook/actions";
import { DateRange } from "react-day-picker";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A comprehensive calendar component for date selection with multiple modes and full customization, built on React DayPicker.

## Features
- Multiple selection modes: single date, multiple dates, or date ranges
- Full keyboard navigation with arrow keys
- Customizable month/year navigation with dropdown options
- Disabled dates and date matching functions
- Outside day display and navigation
- Flexible styling and theming support
- Built-in accessibility with proper ARIA attributes
- Responsive design with mobile optimization

## Selection Modes
- **Single**: Select one date at a time
- **Multiple**: Select multiple individual dates
- **Range**: Select a continuous date range with start and end

## Navigation
- **Label**: Simple month/year labels with arrow navigation
- **Dropdown**: Dropdown selectors for month and year
- **Dropdown-years**: Enhanced dropdown with year range selection

## Usage
Use calendars for:
- Date pickers in forms
- Event scheduling and booking
- Date range selection for filters
- Availability and booking systems
- Any date-based user input

## Accessibility
Calendars provide full keyboard navigation, screen reader support, and proper date announcements for accessible date selection.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description:
        "The selection mode that determines how dates can be selected",
      table: {
        type: { summary: '"single" | "multiple" | "range"' },
        defaultValue: { summary: '"single"' },
        category: "Behavior",
      },
    },
    selected: {
      control: false,
      description: "The currently selected date(s) - type depends on mode",
      table: {
        type: { summary: "Date | Date[] | DateRange | undefined" },
        category: "State",
      },
    },
    onSelect: {
      action: "selected",
      description: "Event handler called when date selection changes",
      table: {
        type: {
          summary: "(date: Date | Date[] | DateRange | undefined) => void",
        },
        category: "Events",
      },
    },
    captionLayout: {
      control: { type: "select" },
      options: ["label", "dropdown", "dropdown-years"],
      description: "Layout style for the month/year navigation caption",
      table: {
        type: { summary: '"label" | "dropdown" | "dropdown-years"' },
        defaultValue: { summary: '"label"' },
        category: "Appearance",
      },
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Whether to show days from adjacent months",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
        category: "Appearance",
      },
    },
    buttonVariant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Button variant for navigation arrows and controls",
      table: {
        type: {
          summary:
            '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"',
        },
        defaultValue: { summary: '"ghost"' },
        category: "Appearance",
      },
    },
    disabled: {
      control: false,
      description:
        "Dates to disable - can be single date, array, or matcher function",
      table: {
        type: { summary: "Date | Date[] | Matcher | undefined" },
        category: "Validation",
      },
    },
    autoNavigateOnOutsideClick: {
      control: { type: "boolean" },
      description:
        "Automatically navigate to month when clicking outside dates",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Behavior",
      },
    },
    weekSpacing: {
      control: { type: "select" },
      options: ["mt-0", "mt-0.5", "mt-1", "mt-1.5", "mt-2", "mt-3"],
      description: "Vertical spacing between calendar week rows",
      table: {
        type: {
          summary: '"mt-0" | "mt-0.5" | "mt-1" | "mt-1.5" | "mt-2" | "mt-3"',
        },
        defaultValue: { summary: '"mt-2"' },
        category: "Layout",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  args: {
    mode: "single",
    onSelect: action("selected"),
  },
  render: (args) => {
    const [singleDate, setSingleDate] = React.useState<Date | undefined>(
      new Date(),
    );
    const [multipleDates, setMultipleDates] = React.useState<Date[]>([]);
    const [rangeDate, setRangeDate] = React.useState<DateRange | undefined>(
      undefined,
    );
    const [month, setMonth] = React.useState<Date>(new Date());

    const handleSelect = (
      selectedDate: Date | Date[] | DateRange | undefined,
    ) => {
      if (args.mode === "multiple") {
        setMultipleDates((selectedDate as Date[]) || []);
      } else if (args.mode === "range") {
        setRangeDate(selectedDate as DateRange | undefined);
      } else {
        setSingleDate(selectedDate as Date | undefined);
      }
      action("selected")(selectedDate);
    };

    const handleMonthChange = (newMonth: Date) => {
      setMonth(newMonth);
      action("monthChanged")(newMonth);
    };

    if (args.mode === "single") {
      return (
        <Calendar
          {...args}
          mode="single"
          selected={singleDate}
          onSelect={handleSelect}
          month={month}
          onMonthChange={handleMonthChange}
        />
      );
    }

    if (args.mode === "multiple") {
      return (
        <Calendar
          {...args}
          mode="multiple"
          selected={multipleDates}
          onSelect={handleSelect}
          month={month}
          onMonthChange={handleMonthChange}
        />
      );
    }

    return (
      <Calendar
        {...args}
        mode="range"
        selected={rangeDate}
        onSelect={handleSelect}
        month={month}
        onMonthChange={handleMonthChange}
      />
    );
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    className: "border rounded-sm bg-card",
  },
};

export const MultipleSelection: Story = {
  args: {
    mode: "multiple",
    className: "border rounded-sm bg-card",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar that allows selecting multiple dates. Click multiple dates to select them.",
      },
    },
  },
};

export const RangeSelection: Story = {
  args: {
    mode: "range",
    className: "border rounded-sm bg-card",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Calendar that allows selecting a date range. Click a start date, then click an end date to select a range.",
      },
    },
  },
};
