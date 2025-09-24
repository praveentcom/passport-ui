import { CheckSquare } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Toggle Select",
  icon: CheckSquare,
  description: "A set of toggle buttons for selecting one or more options.",
  category: "components",
  storyId: "components-toggleselect",
  slug: "toggle-select",
  importCode: `import { ToggleSelect } from "passport-ui";`,
  usageCode: `<ToggleSelect>
  <ToggleSelectItem value="option1">Option 1</ToggleSelectItem>
  <ToggleSelectItem value="option2">Option 2</ToggleSelectItem>
  <ToggleSelectItem value="option3">Option 3</ToggleSelectItem>
</ToggleSelect>`,
};
