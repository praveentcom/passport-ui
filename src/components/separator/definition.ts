import { Minus } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Separator",
  icon: Minus,
  description: "A visual divider for separating content sections.",
  category: "components",
  storyId: "components-separator",
  slug: "separator",
  importCode: `import { Separator } from "passport-ui";`,
  usageCode: `{/* Horizontal separator */}
<div className="w-sm h-24 items-center justify-center flex">
  <Separator />
</div>

{/* Vertical separator */}
<div className="flex h-24 items-center justify-center">
  <div>Left content</div>
  <Separator orientation="vertical" className="mx-4" />
  <div>Right content</div>
</div>`,
};
