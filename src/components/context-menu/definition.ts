import { MousePointerClick } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Context Menu",
  icon: MousePointerClick,
  description:
    "A menu that appears on right-click, offering context-specific actions.",
  category: "components",
  storyId: "components-contextmenu",
  slug: "context-menu",
  importCode: `import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "passport-ui";`,
  usageCode: `<div className="flex w-sm h-24 items-center justify-center">
  <ContextMenu>
    <ContextMenuTrigger className="flex w-full h-full items-center justify-center rounded-md border border-dashed text-sm">
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent className="w-52">
      <ContextMenuItem>
        Back
        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem disabled>
        Forward
        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuItem>
        Reload
        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
      </ContextMenuItem>
      <ContextMenuSeparator />
      <ContextMenuItem>
        Print
        <ContextMenuShortcut>⌘P</ContextMenuShortcut>
      </ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</div>`,
};
