import { Loader } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Skeleton",
  icon: Loader,
  description: "A placeholder component for loading content.",
  category: "components",
  storyId: "components-skeleton",
  slug: "skeleton",
  importCode: `import { Skeleton } from "passport-ui";`,
  usageCode: `<Skeleton className="size-12" />

{/* Card skeleton */}
<div className="flex flex-col gap-3 w-sm">
  <Skeleton className="h-48 w-full rounded-xl" />
  <div className="grid gap-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-4/5" />
  </div>
</div>

{/* Text skeleton */}
<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`,
};
