import { BarChart } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Analytics",
  icon: BarChart,
  description: "Component description",
  category: "components",
  storyId: "components-analytics--default",
  slug: "analytics",
  importCode: `import { Analytics, useAnalytics } from "passport-ui";`,
  usageCode: `{/* Place once in your app root */}
<Analytics
  providers={{
    googleAnalytics: {
      trackingId: "G-XXXXXXXXXX",
    },
  }}
  enabled={process.env.NODE_ENV === "production"}
/>

{/* Use the hook in components */}
function TrackingExample() {
  const { trackEvent, trackPageView, setUserProperties } = useAnalytics();

  const handleButtonClick = () => {
    trackEvent('button_click', { 
      category: 'ui',
      label: 'header_cta' 
    });
  };

  const handlePageView = () => {
    trackPageView('/demo-page');
  };

  return (
    <Button onClick={handleButtonClick}>
      Track Click Event
    </Button>
  );
}`,
};
