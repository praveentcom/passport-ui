import { Quote } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Blockquote",
  icon: Quote,
  description: "A component for displaying quoted text with optional citation.",
  category: "components",
  storyId: "components-blockquote",
  slug: "blockquote",
  importCode: `import { Blockquote } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <Blockquote>
    This is a blockquote that demonstrates how quoted text appears with 
    proper styling and visual hierarchy.
  </Blockquote>
</div>

{/* Nested blockquote */}
<Blockquote>
  This is a parent quote.
  <Blockquote nested>
    This is a nested quote within the parent.
  </Blockquote>
  Back to the parent quote content.
</Blockquote>`,
};
