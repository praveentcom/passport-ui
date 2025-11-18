import { AlignLeft } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Textarea",
  icon: AlignLeft,
  description: "A multi-line text input for longer form content.",
  category: "components",
  storyId: "components-textarea--default",
  slug: "textarea",
  importCode: `import { Textarea } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <Textarea placeholder="Type your message here." />
</div>

{/* With custom rows */}
<Textarea 
  placeholder="Larger text area..."
  rows={6}
/>

{/* Disabled state */}
<Textarea 
  disabled 
  placeholder="This textarea is disabled"
/>`,
};
