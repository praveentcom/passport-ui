import { MessageCircle } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Tooltip",
  icon: MessageCircle,
  description:
    "A pop-up that displays information when a user hovers over an element.",
  category: "components",
  storyId: "components-tooltip--default",
  slug: "tooltip",
  importCode: `import { Tooltip, TooltipContent, TooltipTrigger } from "passport-ui";
import { Button } from "passport-ui";`,
  usageCode: `<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>This is a tooltip</TooltipContent>
</Tooltip>

{/* Different positions */}
<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Top</Button>
  </TooltipTrigger>
  <TooltipContent side="top">Tooltip on top</TooltipContent>
</Tooltip>

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Bottom</Button>
  </TooltipTrigger>
  <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
</Tooltip>`,
};
