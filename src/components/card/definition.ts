import { RectangleHorizontal } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Card",
  icon: RectangleHorizontal,
  description: "Component description",
  category: "components",
  storyId: "components-card--default",
  slug: "card",
  importCode: `import { Card, CardContent } from "passport-ui";`,
  usageCode: `<Card>
  <CardContent>
    <div className="meta-container">
      <h3>Card Title</h3>
      <p>
        This is the main content of the card. You can put any content here.
      </p>
    </div>
  </CardContent>
</Card>

{/* Example with progress */}
<Card>
  <CardContent>
    <div className="meta-container">
      <h3>Project Alpha</h3>
      <p>A modern web application built with React and TypeScript.</p>
    </div>
    <div className="meta-container">
      <div className="flex justify-between text-sm">
        <span>Progress</span>
        <span>75%</span>
      </div>
      <Progress value={75} />
    </div>
  </CardContent>
</Card>`,
};
