import { List } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Bullet List",
  icon: List,
  description: "A component for displaying a list of items with bullet points.",
  category: "components",
  storyId: "components-bulletlist--default",
  slug: "bullet-list",
  importCode: `import { BulletList } from "passport-ui";`,
  usageCode: `<BulletList items={["First item", "Second item", "Third item"]} />

{/* Single item */}
<BulletList items="Single item in the list" />

{/* Complex items */}
<BulletList items={[
  "User interface components with accessibility",
  "Form validation and error handling",
  "Theme support with light and dark modes",
  "Motion primitives for smooth animations",
  "TypeScript support out of the box"
]} />`,
};
