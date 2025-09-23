import { Box } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Content Container",
  icon: Box,
  description:
    "A layout container for centering and constraining content width.",
  category: "layouts",
  storyId: "layouts-contentcontainer--default",
  slug: "content-container",
  importCode: `import { ContentContainer } from "passport-ui";`,
  usageCode: `<ContentContainer variant="broad">
  <div className="section-container">
    <div className="meta-container">
      <h1>Page Title</h1>
      <p>Page description or subtitle goes here.</p>
    </div>
    
    <div className="list-container">
      <div className="meta-container">
        <h2>Section Title</h2>
        <p>Section content and information.</p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent>
            <h3>Card 1</h3>
            <p>Card content here</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h3>Card 2</h3>
            <p>Card content here</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</ContentContainer>

{/* Different width variants */}
<ContentContainer variant="compact">
  <p>Compact width content</p>
</ContentContainer>

<ContentContainer variant="relaxed">
  <p>Relaxed width content</p>
</ContentContainer>

<ContentContainer variant="full">
  <p>Full width content</p>
</ContentContainer>`,
};
