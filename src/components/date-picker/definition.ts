import { CalendarDays } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Date Picker",
  icon: CalendarDays,
  description:
    "A component for selecting a single date using dropdown menus.",
  category: "components",
  storyId: "components-datepicker",
  slug: "date-picker",
  importCode: `import { DatePicker } from "passport-ui";
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
}`,
};
