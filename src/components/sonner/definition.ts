import { Bell } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Sonner",
  icon: Bell,
  description: "Component description",
  category: "components",
  storyId: "components-sonner--default",
  slug: "sonner",
  importCode: `import { Toaster } from "passport-ui";
import { toast } from "sonner";
import { Button } from "passport-ui";`,
  usageCode: `{/* Add Toaster to your app root */}
<Toaster position="bottom-right" />

{/* Trigger toasts */}
<div className="flex gap-2 flex-wrap">
  <Button onClick={() => toast("Default notification")}>
    Default
  </Button>
  <Button
    variant="outline"
    onClick={() =>
      toast("Meeting reminder", {
        description: "You have a meeting in 10 minutes.",
        action: {
          label: "View",
          onClick: () => console.log("View clicked"),
        },
      })
    }
  >
    With Action
  </Button>
  <Button onClick={() => toast.success("Success message")}>
    Success
  </Button>
  <Button onClick={() => toast.error("Error message")}>
    Error
  </Button>
  <Button onClick={() => toast.warning("Warning message")}>
    Warning
  </Button>
  <Button onClick={() => toast.info("Info message")}>
    Info
  </Button>
</div>`,
};
