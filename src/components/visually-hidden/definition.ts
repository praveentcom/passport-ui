import { EyeOff } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "VisuallyHidden",
  icon: EyeOff,
  description:
    "A component that hides content visually but keeps it accessible to screen readers.",
  category: "components",
  storyId: "components-visuallyhidden--default",
  slug: "visually-hidden",
  importCode: `import { VisuallyHidden } from "passport-ui";`,
  usageCode: `<Button>
  <PlusIcon />
  <VisuallyHidden>Add Item</VisuallyHidden>
</Button>`,
};
