import { Navigation } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Navigation Menu",
  icon: Navigation,
  description: "A collection of links for navigating a website or application.",
  category: "components",
  storyId: "components-navigation-menu--default",
  slug: "navigation-menu",
  importCode: `import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "passport-ui";
import Link from "next/link";`,
  usageCode: `<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Home</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="list-container grid-cols-2 w-sm">
          <li>
            <NavigationMenuLink className="bg-transparent" asChild>
              <Link href="/docs">
                <div className="passport-ui p-1">
                  <div>
                    <h3>Introduction</h3>
                    <p className="line-clamp-2">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </p>
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
          <li>
            <NavigationMenuLink className="bg-transparent" asChild>
              <Link href="/docs/installation">
                <div className="passport-ui p-1">
                  <div>
                    <h3>Installation</h3>
                    <p className="line-clamp-2">
                      How to install dependencies and structure your app.
                    </p>
                  </div>
                </div>
              </Link>
            </NavigationMenuLink>
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs">Docs</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`,
};
