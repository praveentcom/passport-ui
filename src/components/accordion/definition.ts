import { ChevronDown } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Accordion",
  icon: ChevronDown,
  description:
    "A vertically stacked set of interactive headings that reveal sections of content.",
  category: "components",
  storyId: "components-accordion--default",
  slug: "accordion",
  importCode: `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "passport-ui";`,
  usageCode: `<Accordion type="single" collapsible className="w-sm">
  <AccordionItem value="item-1">
    <AccordionTrigger>Product Information</AccordionTrigger>
    <AccordionContent className="flex flex-col gap-4 text-balance">
      <p>
        Our flagship product combines modern technology with sleek design.
        Built with premium materials, it offers unparalleled performance and
        reliability.
      </p>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Shipping Details</AccordionTrigger>
    <AccordionContent className="flex flex-col gap-4 text-balance">
      <p>
        We offer worldwide shipping through trusted courier partners.
        Standard delivery takes 3-5 business days.
      </p>
    </AccordionContent>
  </AccordionItem>
</Accordion>`,
};
