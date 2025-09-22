import { FileX } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Empty State",
  icon: FileX,
  description: "Component description",
  category: "composables",
  storyId: "composables-empty-state--default",
  slug: "empty-state",
  importCode: `import { EmptyState } from "passport-ui";`,
  usageCode: `<EmptyState
  title="No results found"
  description="Try adjusting your search or filter to find what you're looking for."
  action={<Button>Clear filters</Button>}
/>`,
};
