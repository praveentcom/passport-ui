import { AlertTriangle } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Alert",
  icon: AlertTriangle,
  description:
    "Displays a short, important message in a way that attracts the user's attention.",
  category: "components",
  storyId: "components-alert",
  slug: "alert",
  importCode: `import { Alert } from "passport-ui";
import { InfoIcon } from "lucide-react";`,
  usageCode: `<Alert
  title="Heads up!"
  description="You can add components and dependencies to your app using the cli."
  icon={<InfoIcon />}
/>

{/* With variants */}
<Alert
  variant="warning"
  title="Warning"
  description="Please review this information carefully before proceeding."
  icon={<AlertTriangleIcon />}
/>`,
};
