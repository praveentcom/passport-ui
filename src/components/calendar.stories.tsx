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
        component:
          "A date field component that allows users to enter and edit dates. Built on top of React DayPicker with full customization support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: { type: "select" },
      options: ["single", "multiple", "range"],
      description: "The selection mode of the calendar",
      table: {
        type: { summary: "single | multiple | range" },
        defaultValue: { summary: "single" },
      },
    },
    selected: {
      control: false,
      description: "The selected date(s)",
      table: {
        type: { summary: "Date | Date[] | DateRange | undefined" },
      },
    },
    onSelect: {
      action: "selected",
      description: "Event handler called when a date is selected",
      table: {
        type: {
          summary: "(date: Date | Date[] | DateRange | undefined) => void",
        },
      },
    },
    captionLayout: {
      control: { type: "select" },
      options: ["label", "dropdown", "dropdown-years"],
      description: "Layout for the caption (month/year navigation)",
      table: {
        type: { summary: "label | dropdown | dropdown-years" },
        defaultValue: { summary: "label" },
      },
    },
    showOutsideDays: {
      control: { type: "boolean" },
      description: "Show days outside the current month",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
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
      description: "Button variant for navigation buttons",
      table: {
        type: {
          summary: "default | destructive | outline | secondary | ghost | link",
        },
        defaultValue: { summary: "ghost" },
      },
    },
    disabled: {
      control: false,
      description: "Disabled dates or date matcher function",
      table: {
        type: { summary: "Date | Date[] | Matcher | undefined" },
      },
    },
    autoNavigateOnOutsideClick: {
      control: { type: "boolean" },
      description:
        "Automatically navigate to the month when clicking on outside dates",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    weekSpacing: {
      control: { type: "select" },
      options: ["mt-0", "mt-0.5", "mt-1", "mt-1.5", "mt-2", "mt-3"],
      description: "Vertical spacing between week rows",
      table: {
        type: { summary: "mt-0 | mt-0.5 | mt-1 | mt-1.5 | mt-2 | mt-3" },
        defaultValue: { summary: "mt-2" },
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
