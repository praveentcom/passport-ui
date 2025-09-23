import Link from "next/link";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { MenuIcon, XIcon } from "lucide-react";

import { HeaderContainer } from ".";
import { SAMPLE_HEADER_CONTENT } from "../../../.storybook/constants";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/avatar";
import { Button } from "../../components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "../../components/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/navigation-menu";
import { ThemeButton } from "../../composables/theme-button";
import { AUTHOR } from "../../constants";

const meta: Meta<typeof HeaderContainer> = {
  title: "Layout Containers/HeaderContainer",
  component: HeaderContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `Header container with positioning and visual effects.

## Features
- Width variants: compact, relaxed, broad, full
- Optional sticky positioning
- Backdrop blur effect
- Show on scroll option
- Sidebar background colors`,
      },
    },
  },
  argTypes: {
    children: {
      control: false,
      description: "The header content to render within the container",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    variant: {
      control: { type: "select" },
      options: ["compact", "relaxed", "broad", "full"],
      description: "Controls the maximum width of the header container",
      table: {
        type: { summary: "compact | relaxed | broad | full" },
        defaultValue: { summary: "full" },
        category: "Layout",
      },
    },
    sticky: {
      control: { type: "boolean" },
      description: "Whether the header should stick to the top on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Positioning",
      },
    },
    blurred: {
      control: { type: "boolean" },
      description: "Whether the header should have a blurred background effect",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Visual",
      },
    },
    revealStylesOnScroll: {
      control: { type: "boolean" },
      description:
        "Whether to show border and background only on scroll. When true, the header starts transparent and gains styling on scroll",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
        category: "Visual",
      },
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes for styling customization",
      table: {
        type: { summary: "string" },
        category: "Styling",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="h-screen overflow-auto bg-background">
        <Story />
        <div className="p-4 space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} className="p-4 border rounded-lg bg-card">
              <h4>Content Block {i + 1}</h4>
              <p className="text-sm text-muted-foreground">
                This is sample content to demonstrate the sticky header
                behavior. Scroll to see how the header remains visible at the
                top with a blurred background effect. The header uses the same
                background styling as the sidebar for visual consistency.
              </p>
            </div>
          ))}
        </div>
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeaderContainer>;

export const Default: Story = {
  args: {
    sticky: true,
    blurred: true,
    children: SAMPLE_HEADER_CONTENT,
  },
};

export const ProfileHeader: Story = {
  args: {
    sticky: true,
    blurred: true,
    children: (() => {
      const links = [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Blog",
          href: "/blog",
        },
      ];

      const profile = {
        fullName: AUTHOR.name,
        initials: AUTHOR.name.charAt(0),
        displayPicture: `${AUTHOR.url}.png`,
      };

      return (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Drawer direction="left" modal onOpenChange={() => {}}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="medium" className="md:hidden">
                  <MenuIcon />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm list-container">
                  <div className="flex items-center justify-between">
                    <h3>{profile.fullName}</h3>
                    <DrawerClose asChild>
                      <Button variant="ghost" size="medium">
                        <XIcon />
                      </Button>
                    </DrawerClose>
                  </div>
                  <div className="list-container">
                    {links.map((link, index) => {
                      return (
                        <Link
                          key={`mobile-menu-item-${index}`}
                          href={link.href}
                        >
                          <Button size="medium" className="w-full">
                            {link.label}
                          </Button>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
            <Avatar className="hidden md:block">
              <AvatarImage src={profile.displayPicture} />
              <AvatarFallback>{profile.initials}</AvatarFallback>
            </Avatar>
            <h3>{profile.fullName}</h3>
          </div>
          <div className="flex items-center gap-3">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="gap-2">
                {links.map((link, index) => {
                  return (
                    <NavigationMenuItem key={`desktop-menu-item-${index}`}>
                      <NavigationMenuLink href={link.href}>
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
            <ThemeButton minimal variant="outline" align="end" size="medium" />
          </div>
        </div>
      );
    })(),
  },
};
