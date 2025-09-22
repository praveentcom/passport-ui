import { Tag } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Badge",
  icon: Tag,
  description: "Component description",
  category: "components",
  storyId: "components-badge--default",
  slug: "badge",
  importCode: `import { Badge } from "passport-ui";`,
  usageCode: `<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>

{/* Semantic variants */}
<Badge variant="info">Info</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>`,
};
