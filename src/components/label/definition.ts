import { Tag } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Label",
  icon: Tag,
  description:
    "A text label for form inputs, providing context and improving accessibility.",
  category: "components",
  storyId: "components-label",
  slug: "label",
  importCode: `import { Label } from "passport-ui";`,
  usageCode: `<Label htmlFor="email">Email Address</Label>

{/* With form control */}
<div className="meta-container">
  <Label htmlFor="username">Username</Label>
  <Input id="username" placeholder="Enter username" />
</div>`,
};
