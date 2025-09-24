import { ChevronRight } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Breadcrumb",
  icon: ChevronRight,
  description:
    "A navigation aid that shows the user’s location in a site or app.",
  category: "components",
  storyId: "components-breadcrumb",
  slug: "breadcrumb",
  importCode: `import { Breadcrumb } from "passport-ui";`,
  usageCode: `<Breadcrumb
  path={[
    { href: "/", label: "Home" },
    { href: "/docs", label: "Documentation" },
    { href: "/docs/components", label: "Components" },
    { href: "/docs/components/breadcrumb", label: "Breadcrumb" },
  ]}
/>

{/* With back button */}
<Breadcrumb
  back={{ href: "/docs" }}
  path={[
    { href: "/", label: "Home" },
    { href: "/docs", label: "Documentation" },
    { href: "/docs/components", label: "Components" },
  ]}
/>`,
};
