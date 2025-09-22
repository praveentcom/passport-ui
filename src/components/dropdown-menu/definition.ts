import { ChevronDown } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Dropdown Menu",
  icon: ChevronDown,
  description: "Component description",
  category: "components",
  storyId: "components-dropdown-menu--default",
  slug: "dropdown-menu",
  importCode: `import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "passport-ui";
import { Button } from "passport-ui";`,
  usageCode: `<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>Basic Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem variant="destructive">Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

{/* With checkboxes */}
<DropdownMenu>
  <DropdownMenuTrigger>
    <Button>List Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>Tasks</DropdownMenuLabel>
      <DropdownMenuCheckboxItem checked>Ticket 1</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem>Ticket 2</DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem checked>Ticket 3</DropdownMenuCheckboxItem>
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>`,
};
