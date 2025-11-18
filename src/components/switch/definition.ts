import { ToggleRight } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Switch",
  icon: ToggleRight,
  description: "A control for toggling between two states, such as on or off.",
  category: "components",
  storyId: "components-switch",
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
