"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDownIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";

interface DatePickerInputProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "default";
}

/**
 * Date picker input trigger component styled like a select input
 */
function DatePickerInput({
  className,
  size = "default",
  children,
  ...props
}: DatePickerInputProps) {
  return (
    <button
      data-slot="date-picker-input"
      data-size={size}
      className={cn(
        "border-input data-[empty=true]:text-muted-foreground data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 bg-card dark:hover:bg-input/50 flex w-full items-center justify-between gap-2 rounded-sm border px-2 py-1.5 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-8 data-[size=sm]:h-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="size-4 opacity-50" />
    </button>
  );
}

export interface DatePickerProps {
  date?: Date;
  onSelect?: (date: Date | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  label?: string;
}

/**
 * A date picker with dropdown selection for birth dates
 * @param date - The selected date
 * @param onSelect - Callback when date is selected
 * @param placeholder - Placeholder text when no date is selected
 * @param disabled - Whether the picker is disabled
 * @param className - Additional CSS classes
 * @param label - Label for the date picker
 * @returns The date picker with dropdown component
 */
export function DatePicker({
  date,
  onSelect,
  placeholder = "Select date",
  disabled = false,
  className,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <DatePickerInput
          id="date"
          disabled={disabled}
          className={cn(className)}
        >
          {date ? date.toLocaleDateString() : placeholder}
        </DatePickerInput>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto overflow-hidden p-0"
        align="start"
        data-slot="date-picker-dropdown-content"
      >
        <Calendar
          mode="single"
          selected={date}
          captionLayout="dropdown"
          onSelect={(selectedDate) => {
            onSelect?.(selectedDate);
            setOpen(false);
          }}
        />
      </PopoverContent>
    </Popover>
  );
}

export interface DateRangePickerProps {
  dateRange?: DateRange;
  onSelect?: (range: DateRange | undefined) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

/**
 * A date range picker component with popover calendar
 * @param dateRange - The selected date range
 * @param onSelect - Callback when date range is selected
 * @param placeholder - Placeholder text when no range is selected
 * @param disabled - Whether the picker is disabled
 * @param className - Additional CSS classes
 * @returns The date range picker component
 */
export function DateRangePicker({
  dateRange,
  onSelect,
  placeholder = "Pick a date range",
  disabled = false,
  className,
}: DateRangePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <DatePickerInput
          disabled={disabled}
          data-empty={!dateRange?.from}
          className={cn(className)}
        >
          <CalendarIcon className="size-3.5" />
          {dateRange?.from ? (
            dateRange.to ? (
              <>
                {format(dateRange.from, "LLL dd, y")} -{" "}
                {format(dateRange.to, "LLL dd, y")}
              </>
            ) : (
              format(dateRange.from, "LLL dd, y")
            )
          ) : (
            placeholder
          )}
        </DatePickerInput>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto overflow-hidden p-0"
        align="start"
        data-slot="date-range-picker-content"
      >
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={(selectedDateRange) => {
            onSelect?.(selectedDateRange);
          }}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
