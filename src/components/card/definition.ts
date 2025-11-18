import { RectangleHorizontal } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Card",
  icon: RectangleHorizontal,
  description:
    "A flexible content container with header, title, description, content, and footer sections.",
  category: "components",
  storyId: "components-card",
  slug: "card",
  importCode: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "passport-ui";`,
  usageCode: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description and details</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card. You can put any content here.</p>
  </CardContent>
</Card>

{/* Example with footer */}
<Card>
  <CardHeader>
    <CardTitle>Notifications</CardTitle>
    <CardDescription>You have 3 unread messages.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your latest updates are ready to review.</p>
  </CardContent>
  <CardFooter>
    <button>Mark all as read</button>
  </CardFooter>
</Card>`,
};
