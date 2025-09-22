import { MessageSquare } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Dialog",
  icon: MessageSquare,
  description: "Component description",
  category: "components",
  storyId: "components-dialog--default",
  slug: "dialog",
  importCode: `import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "passport-ui";
import { Button } from "passport-ui";`,
  usageCode: `<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent className="w-sm">
    <div className="meta-container">
      <h3>Account Settings</h3>
      <p>Manage your account settings and preferences here.</p>
    </div>
    <Separator />
    <div className="meta-container">
      <h3>Profile Information</h3>
      <p>Update your personal details and contact information</p>
    </div>
    <DialogFooter>
      <DialogClose asChild>
        <Button variant="ghost">Cancel</Button>
      </DialogClose>
      <Button>Save Changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`,
};
