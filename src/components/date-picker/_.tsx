"use client";

import React, { useState, useMemo } from "react";

import { format } from "date-fns";
import { Calendar as CalendarIcon, ChevronDownIcon } from "lucide-react";
import { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Calendar } from "../calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

export interface DatePickerInputProps
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
        "passport-input whitespace-nowrap",
        "data-[empty=true]:text-muted-foreground data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground",
        className
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
  minDate?: Date;
  maxDate?: Date;
}

/**
 * A lightweight date picker with dropdown selection for day, month, and year
 * @param date - The selected date
 * @param onSelect - Callback when date is selected
 * @param placeholder - Placeholder text when no date is selected
 * @param disabled - Whether the picker is disabled
 * @param className - Additional CSS classes
 * @param label - Label for the date picker
 * @param minDate - Minimum selectable date (optional)
 * @param maxDate - Maximum selectable date (optional)
 * @returns The date picker with dropdown component
 */
export function DatePicker({
  date,
  onSelect,
  placeholder = "Select date",
  disabled = false,
  className,
  minDate,
  maxDate,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string>(
    date ? date.getDate().toString() : ""
  );
  const [selectedMonth, setSelectedMonth] = useState<string>(
    date ? date.getMonth().toString() : ""
  );
  const [selectedYear, setSelectedYear] = useState<string>(
    date ? date.getFullYear().toString() : ""
  );

  const currentYear = new Date().getFullYear();
  const minYear = minDate ? minDate.getFullYear() : currentYear - 100;
  const maxYear = maxDate ? maxDate.getFullYear() : currentYear + 10;

  const years = useMemo(() => {
    const yearList = [];
    for (let year = minYear; year <= maxYear; year++) {
      yearList.push(year.toString());
    }
    return yearList;
  }, [minYear, maxYear]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const daysInMonth = useMemo(() => {
    if (!selectedMonth || !selectedYear) return 31;
    const month = parseInt(selectedMonth);
    const year = parseInt(selectedYear);
    return new Date(year, month + 1, 0).getDate();
  }, [selectedMonth, selectedYear]);

  const days = useMemo(() => {
    const dayList = [];
    for (let day = 1; day <= daysInMonth; day++) {
      dayList.push(day.toString());
    }
    return dayList;
  }, [daysInMonth]);

  const handleApply = () => {
    if (selectedDay && selectedMonth && selectedYear) {
      const newDate = new Date(
        parseInt(selectedYear),
        parseInt(selectedMonth),
        parseInt(selectedDay)
      );

      // Validate against min/max dates
      if (minDate && newDate < minDate) return;
      if (maxDate && newDate > maxDate) return;

      onSelect?.(newDate);
      setOpen(false);
    }
  };

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
        className="w-80 p-4"
        align="start"
        data-slot="date-picker-dropdown-content"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-[80px,1fr,100px] gap-2">
            <div>
              <Select value={selectedDay} onValueChange={setSelectedDay}>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {days.map((day) => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={index} value={index.toString()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-sm rounded-md hover:bg-muted"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleApply}
              disabled={!selectedDay || !selectedMonth || !selectedYear}
              className="px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Apply
            </button>
          </div>
        </div>
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
        className="w-auto max-w-[calc(100vw-2rem)] overflow-auto p-0"
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
