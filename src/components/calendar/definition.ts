import { Calendar } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Calendar",
  icon: Calendar,
  description: "Component description",
  category: "components",
  storyId: "components-calendar--default",
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
      className="rounded-md border"
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
