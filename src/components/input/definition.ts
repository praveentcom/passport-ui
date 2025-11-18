import { Type } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Input",
  icon: Type,
  description: "A standard text input field for form data.",
  category: "components",
  storyId: "components-input--default",
  slug: "input",
  importCode: `import { Input } from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <div className="meta-container">
    <Label htmlFor="email">Email Address</Label>
    <Input 
      id="email"
      type="email"
      placeholder="hello@example.com"
    />
  </div>
</div>

{/* Different input types */}
<Input type="password" placeholder="Enter password" />
<Input type="number" placeholder="Enter number" />
<Input type="search" placeholder="Search..." />

{/* Disabled state */}
<Input disabled placeholder="Disabled input" />`,
};
