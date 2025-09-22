import { MessageSquareText } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Popover",
  icon: MessageSquareText,
  description: "A pop-up that displays information when an element is clicked.",
  category: "components",
  storyId: "components-popover--default",
  slug: "popover",
  importCode: `import { Popover, PopoverContent, PopoverTrigger } from "passport-ui";
import { Button } from "passport-ui";
import { Input } from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-sm">
    <div className="section-container">
      <div className="meta-container">
        <h3>Dimensions</h3>
        <p>Set the dimensions for the layer.</p>
      </div>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="width">Width</Label>
          <Input id="width" defaultValue="100%" className="col-span-2" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label htmlFor="height">Height</Label>
          <Input id="height" defaultValue="100%" className="col-span-2" />
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`,
};
