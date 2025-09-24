import { StretchHorizontal } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Resizable",
  icon: StretchHorizontal,
  description: "A component with resizable panels for flexible layouts.",
  category: "components",
  storyId: "components-resizable",
  slug: "resizable",
  importCode: `import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "passport-ui";
import { Card } from "passport-ui";`,
  usageCode: `<div className="w-sm h-96">
  <ResizablePanelGroup direction="horizontal">
    <ResizablePanel defaultSize={50}>
      <Card className="h-full rounded-none flex items-center justify-center">
        <div className="meta-container">
          <h3>Panel One</h3>
          <p>This panel can be resized</p>
        </div>
      </Card>
    </ResizablePanel>
    <ResizableHandle withHandle />
    <ResizablePanel defaultSize={50}>
      <Card className="h-full rounded-none flex items-center justify-center">
        <div className="meta-container">
          <h3>Panel Two</h3>
          <p>Drag the handle to resize</p>
        </div>
      </Card>
    </ResizablePanel>
  </ResizablePanelGroup>
</div>

{/* Vertical layout */}
<div className="w-sm h-96">
  <ResizablePanelGroup direction="vertical">
    <ResizablePanel defaultSize={50}>
      <Card className="h-full rounded-none">Panel One</Card>
    </ResizablePanel>
    <ResizableHandle />
    <ResizablePanel defaultSize={50}>
      <Card className="h-full rounded-none">Panel Two</Card>
    </ResizablePanel>
  </ResizablePanelGroup>
</div>`,
};
