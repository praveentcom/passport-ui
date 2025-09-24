import { AlertCircle } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Alert Dialog",
  icon: AlertCircle,
  description:
    "A modal dialog that interrupts the user with important content, requiring action.",
  category: "components",
  storyId: "components-alertdialog",
  slug: "alert-dialog",
  importCode: `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "passport-ui";`,
  usageCode: `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Show Dialog</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <div className="meta-container">
      <h3>Are you absolutely sure?</h3>
      <p>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </p>
    </div>
    <AlertDialogFooter>
      <AlertDialogCancel variant="ghost">Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`,
};
