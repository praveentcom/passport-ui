import Link from "next/link";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { MenuIcon, XIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { Button } from "@/components/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/navigation-menu";

import { SAMPLE_HEADER_CONTENT } from "../../.storybook/constants";
import { HeaderContainer } from "./header-container";

const meta: Meta<typeof HeaderContainer> = {
  title: "Layouts/HeaderContainer",
  component: HeaderContainer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `A flexible header container component designed to complement ContentContainer inside SidebarInset. Provides consistent header styling with advanced positioning and visual effects.

## Features
- Responsive width variants (compact, relaxed, full)
- Optional sticky positioning for persistent header visibility
- Backdrop blur effect for enhanced visual hierarchy
- Show on scroll option for progressive header appearance
- Seamless integration with the layout system
- Built-in accessibility with proper semantic markup
- Consistent spacing and styling with other layout components
- Uses sidebar background colors for visual consistency

## Sticky Positioning
When \`sticky={true}\`, the header remains visible at the top of the viewport during scroll, providing persistent navigation or key information access.

## Blur Effect
When \`blurred={true}\`, the header gains a backdrop blur effect with semi-transparent background, creating visual depth while maintaining content visibility underneath.

## Show on Scroll
When \`revealStylesOnScroll={true}\`, the header starts with a transparent background and no border. As the user scrolls, the header smoothly transitions to show its background color and border, creating a clean and modern effect. This is particularly effective when combined with \`sticky={true}\` and \`blurred={true}\` for a glass-morphism appearance that reveals itself on scroll.

## Variants
- **compact**: Maximum width of 384px (24rem) with centered alignment
- **relaxed**: Maximum width of 768px (48rem) with centered alignment  
- **full**: Full width spanning the entire container

## Usage
Use HeaderContainer for:
- Page titles and navigation
- Action bars and toolbar areas
- Breadcrumb navigation
- Search interfaces
- Any header content that needs consistent styling

## Best Practices
- Use sticky headers sparingly to avoid overwhelming the interface
- Combine blur effects with sticky positioning for modern glass-morphism aesthetics
- Ensure header content remains accessible and doesn't obstruct main content
- Consider mobile responsiveness when using compact variants

## Integration
HeaderContainer is designed to work seamlessly with PageLayout and ContentContainer, providing a complete layout solution for modern web applications.`,
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
      options: ["compact", "relaxed", "full"],
      description: "Controls the maximum width of the header container",
      table: {
        type: { summary: "compact | relaxed | full" },
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
        fullName: "Praveen Thirumurugan",
        initials: "PT",
        displayPicture: "https://github.com/praveentcom.png",
      };

      return (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Drawer direction="left" modal onOpenChange={() => {}}>
              <DrawerTrigger className="md:hidden" asChild>
                <Button variant="ghost" className="py-3.5">
                  <MenuIcon className="size-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm secondary-section-container">
                  <div className="flex items-center justify-between">
                    <h3>{profile.fullName}</h3>
                    <DrawerClose asChild>
                      <Button variant="ghost">
                        <XIcon className="text-muted-foreground" />
                      </Button>
                    </DrawerClose>
                  </div>
                  <div className="list-container">
                    {links.map((link, index) => {
                      return (
                        <Button
                          size="medium"
                          asChild
                          key={`mobile-menu-item-${index}`}
                        >
                          <Link href={link.href}>{link.label}</Link>
                        </Button>
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
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-2">
              {links.map((link, index) => {
                return (
                  <NavigationMenuItem key={`desktop-menu-item-${index}`}>
                    <NavigationMenuLink asChild>
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      );
    })(),
  },
};
