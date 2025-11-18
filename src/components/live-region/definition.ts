import { RadioTower } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "LiveRegion",
  icon: RadioTower,
  description:
    "An accessible component that announces dynamic content changes to screen readers.",
  category: "components",
  storyId: "components-liveregion--default",
  slug: "live-region",
  importCode: `import { LiveRegion } from "passport-ui";`,
  usageCode: `const [message, setMessage] = useState("");

return (
  <div>
    <Button onClick={() => setMessage("The content has been updated.")}>
      Update Content
    </Button>
    <LiveRegion message={message} />
  </div>
);`,
};
