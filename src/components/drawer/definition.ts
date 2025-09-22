import { PanelBottomOpen } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Drawer",
  icon: PanelBottomOpen,
  description: "Component description",
  category: "components",
  storyId: "components-drawer--default",
  slug: "drawer",
  importCode: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "passport-ui";
import { Button } from "passport-ui";`,
  usageCode: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm section-container">
      <div className="meta-container">
        <h3>Drawer component</h3>
        <p>
          Add your content here. Use Drawer to confirm actions, and this
          looks better in mobile layouts.
        </p>
      </div>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="primary">Close</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`,
};
