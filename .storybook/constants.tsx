import { ReactNode } from "react";

import { FileText, Home, Plus, Settings, Users } from "lucide-react";
import { action } from "storybook/internal/actions";
import { InputType } from "storybook/internal/csf";

import {
  Badge,
  Button,
  Card,
  CardContent,
  MetaContainer,
  SidebarContainerMenuItem,
} from "../src";

export const COMMON_CONTROLS: Record<string, InputType> = {
  asChild: {
    name: "asChild",
    control: { type: "boolean" },
    options: [true, false],
    description: "Merges its props onto its immediate child.",
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
      category: "React props",
    },
    type: "boolean",
  },
  className: {
    name: "className",
    control: { type: "text" },
    description: "The className of the component.",
    table: {
      type: {
        summary: "HTMLAttributes<T>.className",
      },
      category: "React props",
    },
    type: "string",
  },
};

export const SAMPLE_CONTENT_CONTAINER: ReactNode = (
  <div className="section-container">
    <MetaContainer title="Welcome to Passport UI">
      A modern React component library for Next.js applications
    </MetaContainer>
    <div className="list-container md:grid-cols-2">
      <Card>
        <CardContent>
          <MetaContainer title="Accessible Components">
            Built on Radix UI primitives with full keyboard navigation and
            screen reader support.
          </MetaContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <MetaContainer title="Theme System">
            Complete dark/light mode support with CSS custom properties.
          </MetaContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <MetaContainer title="Motion Primitives">
            Beautiful animations powered by Framer Motion.
          </MetaContainer>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <MetaContainer title="TypeScript First">
            Fully typed components with excellent developer experience.
          </MetaContainer>
        </CardContent>
      </Card>
    </div>
    <MetaContainer title="The page contains long list of elements">
      Helps validate long page structures.
    </MetaContainer>
    {Array.from({ length: 100 }).map((_, index) => (
      <Card key={index}>
        <CardContent>
          <MetaContainer title={`Element ${index + 1}`}>
            This is a long list of elements.
          </MetaContainer>
        </CardContent>
      </Card>
    ))}
  </div>
);

export const SAMPLE_SIDEBAR_MENU_ITEMS: SidebarContainerMenuItem[] = [
  {
    title: "Dashboard",
    icon: Home,
    href: "#dashboard",
  },
  {
    title: "Users",
    icon: Users,
    subItems: [
      {
        title: "All Users",
        href: "#users/all",
      },
      {
        title: "Active Users",
        href: "#users/active",
      },
      {
        title: "Inactive Users",
        href: "#users/inactive",
      },
    ],
  },
  {
    title: "Documents",
    icon: FileText,
    subItems: [
      {
        title: "Recent",
        href: "#documents/recent",
      },
      {
        title: "Shared",
        href: "#documents/shared",
      },
      {
        title: "Archived",
        onClick: action("archived-clicked"),
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    onClick: action("settings-clicked"),
    subItems: [
      {
        title: "Profile",
        href: "#settings/profile",
      },
      {
        title: "Preferences",
        href: "#settings/preferences",
      },
      {
        title: "Security",
        href: "#settings/security",
      },
    ],
  },
];

export const SAMPLE_HEADER_CONTENT: ReactNode = (
  <div className="flex items-center justify-between">
    <MetaContainer title="Dashboard">
      Last updated: {new Date().toLocaleDateString()}
    </MetaContainer>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="regular">
        <Settings className="size-3.5" />
        Settings
      </Button>
      <Button size="regular">
        <Plus className="size-3.5" />
        New Project
      </Button>
    </div>
  </div>
);

export const SAMPLE_FOOTER_CONTENT: ReactNode = (
  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex flex-col gap-1">
      <p className="text-sm font-medium">Passport UI</p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Badge variant="secondary">v1.0.0</Badge>
        <Badge variant="outline">Beta</Badge>
      </div>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <button className="hover:text-foreground transition-colors">
          Privacy
        </button>
        <span>•</span>
        <button className="hover:text-foreground transition-colors">
          Terms
        </button>
        <span>•</span>
        <button className="hover:text-foreground transition-colors">
          Support
        </button>
      </div>
    </div>
  </div>
);
