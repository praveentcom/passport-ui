import type { Meta, StoryObj } from "@storybook/nextjs";
import Link from "next/link";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  MetaContainer,
} from "@/client";
import { COMMON_CONTROLS } from "../../.storybook/constants";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="passport-ui p-1">
            <MetaContainer title={title}>
              <p className="line-clamp-2">{children}</p>
            </MetaContainer>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

const meta: Meta<typeof NavigationMenu> = {
  title: "Components/NavigationMenu",
  component: NavigationMenu,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A sophisticated navigation menu component with dropdown support, hover states, and smooth animations, built on Radix UI NavigationMenu primitives.

## Features
- Hierarchical navigation with dropdown submenus
- Hover and click trigger support
- Smooth animations between menu states
- Full keyboard navigation with arrow keys
- Built-in accessibility with proper ARIA attributes
- Responsive design with mobile adaptations
- Portal-based dropdown rendering
- Active state management and visual feedback

## Composition
Navigation menus are composed of multiple components:
- **NavigationMenu**: Root container with state management
- **NavigationMenuList**: Container for navigation items
- **NavigationMenuItem**: Individual navigation elements
- **NavigationMenuTrigger**: Dropdown trigger elements
- **NavigationMenuContent**: Dropdown content containers
- **NavigationMenuLink**: Navigation link elements
- **NavigationMenuIndicator**: Visual active indicator
- **NavigationMenuViewport**: Content viewport for animations

## Usage
Use navigation menus for:
- Primary website navigation
- Application menu systems
- Hierarchical content organization
- Multi-level navigation structures
- Any navigation requiring dropdown functionality

## Best Practices
- Keep menu depth reasonable (2-3 levels max)
- Use clear, descriptive labels
- Group related items logically
- Consider mobile navigation patterns

## Accessibility
Navigation menus provide full keyboard navigation and screen reader support with proper menu semantics and focus management.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      description:
        "Navigation menu composition with NavigationMenuList and navigation items",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="list-container grid-cols-2 w-sm">
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="list-container grid-cols-2 w-sm">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/docs">Docs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icons</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MetaContainer>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-2">
                  <CircleHelpIcon />
                  Backlog
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-2">
                  <CircleIcon />
                  To Do
                </Link>
              </NavigationMenuLink>
              <NavigationMenuLink asChild>
                <Link href="#" className="flex-row items-center gap-2">
                  <CircleCheckIcon />
                  Done
                </Link>
              </NavigationMenuLink>
            </MetaContainer>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  ),
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
  args: {
    viewport: false,
  },
};
