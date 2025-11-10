import { CalendarDays } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Calendar",
  icon: CalendarDays,
  description: "A calendar component for selecting dates and date ranges.",
  category: "components",
  storyId: "components-calendar",
  slug: "calendar",
  importCode: `import { Calendar } from "passport-ui";
import { useState } from "react";`,
  usageCode: `function CalendarExample() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border"
    />
  );
}

{/* Multiple date selection */}
function MultiCalendar() {
  const [dates, setDates] = useState<Date[]>([]);

  return (
    <Calendar
      mode="multiple"
      selected={dates}
      onSelect={setDates}
    />
  );
}`,
};
