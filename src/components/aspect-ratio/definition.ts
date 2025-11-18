import { RectangleHorizontal } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Aspect Ratio",
  icon: RectangleHorizontal,
  description: "A container that maintains a specific aspect ratio.",
  category: "components",
  storyId: "components-aspectratio--default",
  slug: "aspect-ratio",
  importCode: `import { AspectRatio } from "passport-ui";
import { Card, CardContent } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <AspectRatio ratio={16 / 9}>
    <Card className="h-full">
      <CardContent>
        <div className="meta-container">
          <h3>Aspect Ratio</h3>
          <p>16:9</p>
        </div>
      </CardContent>
    </Card>
  </AspectRatio>
</div>

{/* Square aspect ratio */}
<AspectRatio ratio={1}>
  <Card className="h-full">
    <CardContent>
      <div className="meta-container">
        <h3>Aspect Ratio</h3>
        <p>1:1</p>
      </div>
    </CardContent>
  </Card>
</AspectRatio>

{/* With image */}
<AspectRatio ratio={16 / 9}>
  <img
    src="https://placehold.co/1600x900"
    alt="Placeholder"
    className="rounded-lg object-cover"
  />
</AspectRatio>`,
};
