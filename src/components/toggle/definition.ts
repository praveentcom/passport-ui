import { ToggleLeft } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Toggle",
  icon: ToggleLeft,
  description: "A two-state button that can be either on or off.",
  category: "components",
  storyId: "components-toggle--default",
  slug: "toggle",
  importCode: `import { Toggle } from "passport-ui";`,
  usageCode: `<Toggle variant="outline" size="regular">
  Toggle
</Toggle>

{/* Different variants */}
<Toggle variant="transparent">Transparent</Toggle>
<Toggle variant="outline">Outline</Toggle>

{/* Different sizes */}
<Toggle variant="outline" size="medium">Medium</Toggle>
<Toggle variant="outline" size="large">Large</Toggle>

{/* Pressed state */}
<Toggle variant="outline" defaultPressed>
  Pressed
</Toggle>

{/* Disabled state */}
<Toggle variant="outline" disabled>
  Disabled
</Toggle>`,
};
