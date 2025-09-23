import { MousePointerClick } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Hover Card",
  icon: MousePointerClick,
  description: "A pop-up card that appears when a user hovers over an element.",
  category: "components",
  storyId: "components-hovercard--default",
  slug: "hover-card",
  importCode: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "passport-ui";
import { Button } from "passport-ui";`,
  usageCode: `<HoverCard>
  <HoverCardTrigger asChild>
    <Button variant="link">Passport UI</Button>
  </HoverCardTrigger>
  <HoverCardContent className="w-sm">
    <div className="meta-container">
      <h3>Maintainer</h3>
      <p>Praveen Thirumurugan</p>
    </div>
  </HoverCardContent>
</HoverCard>

{/* With custom timing */}
<HoverCard openDelay={300} closeDelay={100}>
  <HoverCardTrigger asChild>
    <Button variant="link">Quick Preview</Button>
  </HoverCardTrigger>
  <HoverCardContent>
    <p>This hover card opens quickly!</p>
  </HoverCardContent>
</HoverCard>`,
};
