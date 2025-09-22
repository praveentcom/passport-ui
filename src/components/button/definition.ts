import { MousePointer } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Button",
  icon: MousePointer,
  description: "Component description",
  category: "components",
  storyId: "components-button--default",
  slug: "button",
  importCode: `import { Button } from "passport-ui";`,
  usageCode: `<Button variant="outline">Button</Button>

{/* Different variants */}
<Button variant="primary">Primary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

{/* Different sizes */}
<Button variant="primary" size="medium">Medium</Button>
<Button variant="primary" size="large">Large</Button>

{/* Loading state */}
<Button variant="primary" loading loadingText="Saving…">
  Save Changes
</Button>`,
};
