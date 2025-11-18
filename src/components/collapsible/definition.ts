import { ChevronUp } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Collapsible",
  icon: ChevronUp,
  description: "A content area that can be expanded and collapsed.",
  category: "components",
  storyId: "components-collapsible",
  slug: "collapsible",
  importCode: `import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "passport-ui";
import { Button } from "passport-ui";
import { ChevronsUpDown } from "lucide-react";`,
  usageCode: `<Collapsible className="w-sm list-container">
  <div className="flex justify-between items-center">
    <h4>Do you know today's date?</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost">
        <ChevronsUpDown />
        <span className="sr-only">Toggle</span>
      </Button>
    </CollapsibleTrigger>
  </div>
  <CollapsibleContent className="flex flex-col gap-2">
    <div className="meta-container">
      <p>Today's date is {new Date().toLocaleDateString()}.</p>
      <p>The current time is {new Date().toLocaleTimeString()}.</p>
    </div>
  </CollapsibleContent>
</Collapsible>`,
};
