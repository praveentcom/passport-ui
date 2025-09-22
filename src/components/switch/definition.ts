import { ToggleRight } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Switch",
  icon: ToggleRight,
  description: "Component description",
  category: "components",
  storyId: "components-switch--default",
  slug: "switch",
  importCode: `import { Switch } from "passport-ui";`,
  usageCode: `<Switch />

{/* With variants */}
<Switch variant="success" defaultChecked />
<Switch variant="warning" defaultChecked />
<Switch variant="destructive" defaultChecked />
<Switch variant="info" defaultChecked />

{/* Disabled state */}
<Switch disabled />`,
};
