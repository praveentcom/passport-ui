import { User } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Avatar",
  icon: User,
  description: "An image element with a fallback for representing a user or entity.",
  category: "components",
  storyId: "components-avatar--default",
  slug: "avatar",
  importCode: `import { Avatar, AvatarFallback, AvatarImage } from "passport-ui";`,
  usageCode: `<Avatar>
  <AvatarImage src="https://placehold.co/32x32" alt="Avatar" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

{/* With fallback when image fails */}
<Avatar>
  <AvatarImage src="" alt="Avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

{/* Stacked avatars */}
<div className="flex -space-x-3">
  <Avatar className="ring-2 ring-border">
    <AvatarImage src="https://placehold.co/32x32" alt="Avatar" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="ring-2 ring-border">
    <AvatarImage src="" alt="Avatar" />
    <AvatarFallback>AS</AvatarFallback>
  </Avatar>
</div>`,
};
