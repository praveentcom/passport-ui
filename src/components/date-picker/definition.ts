import { CalendarDays } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Date Picker",
  icon: CalendarDays,
  description: "Component description",
  category: "components",
  storyId: "components-date-picker--default",
  slug: "date-picker",
  importCode: `import { DatePicker, DateRangePicker } from "passport-ui";
import { useState } from "react";`,
  usageCode: `function DatePickerExample() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className="w-sm">
      <DatePicker
        date={date}
        onSelect={setDate}
        placeholder="Pick a date"
      />
    </div>
  );
}

{/* Date range picker */}
function DateRangeExample() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <DateRangePicker
      dateRange={dateRange}
      onSelect={setDateRange}
      placeholder="Pick a date range"
    />
  );
}`,
};
