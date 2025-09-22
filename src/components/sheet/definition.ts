import { PanelRight } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Sheet",
  icon: PanelRight,
  description: "A side panel that slides in to display supplementary content.",
  category: "components",
  storyId: "components-sheet--default",
  slug: "sheet",
  importCode: `import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "passport-ui";
import { Button } from "passport-ui";
import { Input } from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here. Click save when you're done.
      </SheetDescription>
    </SheetHeader>
    <div className="section-container px-4">
      <div className="meta-container">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" defaultValue="Praveen Thirumurugan" />
      </div>
      <div className="meta-container">
        <Label htmlFor="username">Username</Label>
        <Input id="username" defaultValue="@praveentcom" />
      </div>
    </div>
    <SheetFooter>
      <Button type="submit" variant="primary">Save Changes</Button>
      <SheetClose asChild>
        <Button>Cancel</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
};
