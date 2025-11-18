import { BarChart3 } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Progress",
  icon: BarChart3,
  description: "A progress bar for displaying the completion status of a task.",
  category: "components",
  storyId: "components-progress",
  slug: "progress",
  importCode: `import { Progress } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <Progress value={60} />
</div>

{/* Different progress values */}
<Progress value={25} />
<Progress value={50} />
<Progress value={75} />
<Progress value={100} />

{/* Indeterminate progress */}
<Progress value={null} />`,
};
