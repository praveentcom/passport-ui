import { ScrollText } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Scroll Area",
  icon: ScrollText,
  description:
    "A container with a customizable scrollbar for scrollable content.",
  category: "components",
  storyId: "components-scrollarea--default",
  slug: "scroll-area",
  importCode: `import { ScrollArea } from "passport-ui";
import { Card, CardContent } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <ScrollArea className="h-48 rounded-lg border">
    <div className="list-container p-4">
      {Array.from({ length: 20 }, (_, i) => (
        <Card key={i}>
          <CardContent>
            <div className="meta-container">
              <h3>Item {i + 1}</h3>
              <p>
                This is item number {i + 1} in the scrollable list. The
                scroll area allows for smooth scrolling through content that
                exceeds the container height.
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </ScrollArea>
</div>

{/* Simple text scrolling */}
<ScrollArea className="h-32 w-48 rounded border p-4">
  <div className="space-y-2">
    {Array.from({ length: 50 }, (_, i) => (
      <p key={i}>Line {i + 1}</p>
    ))}
  </div>
</ScrollArea>`,
};
