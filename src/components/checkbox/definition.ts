import { Check } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Checkbox",
  icon: Check,
  description: "A control that allows the user to select one or more options from a set.",
  category: "components",
  storyId: "components-checkbox--default",
  slug: "checkbox",
  importCode: `import { Checkbox } from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<Checkbox />

{/* With label */}
<div className="flex items-center gap-3">
  <Checkbox id="terms" defaultChecked />
  <Label htmlFor="terms">Accept terms and conditions</Label>
</div>

{/* With description */}
<div className="flex items-start gap-3">
  <Checkbox id="notifications" defaultChecked />
  <div className="meta-container">
    <Label htmlFor="notifications">Enable notifications</Label>
    <p>You can enable or disable notifications at any time.</p>
  </div>
</div>

{/* Disabled state */}
<div className="flex items-start gap-3">
  <Checkbox id="disabled" disabled />
  <Label htmlFor="disabled">Disabled option</Label>
</div>`,
};
