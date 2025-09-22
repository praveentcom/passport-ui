import { ExternalLink } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Prefetch Link",
  icon: ExternalLink,
  description: "Component description",
  category: "components",
  storyId: "components-prefetch-link--default",
  slug: "prefetch-link",
  importCode: `import { PrefetchLink } from "passport-ui";
import { Button } from "passport-ui";`,
  usageCode: `<PrefetchLink href="/about">About Page</PrefetchLink>

{/* With hover prefetching */}
<PrefetchLink 
  href="/products" 
  prefetchOnHover={true}
  prefetchDelay={100}
>
  Products
</PrefetchLink>

{/* With visibility prefetching */}
<PrefetchLink 
  href="/contact" 
  prefetchOnVisible={true}
>
  Contact Us
</PrefetchLink>

{/* As button */}
<Button asChild>
  <PrefetchLink href="/dashboard">
    Go to Dashboard
  </PrefetchLink>
</Button>

{/* External link with prefetching disabled */}
<PrefetchLink 
  href="https://external.com"
  prefetchOnHover={false}
  target="_blank"
>
  External Link
</PrefetchLink>`,
};
