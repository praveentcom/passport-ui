import { ReactNode } from "react";

import { FileText, Home, Plus, Settings, Users } from "lucide-react";
import { action } from "storybook/internal/actions";
import { InputType } from "storybook/internal/csf";

import pkg from "../package.json";
import { Badge } from "../src/components/badge";
import { Button } from "../src/components/button";
import { Card, CardContent } from "../src/components/card";
import { ContentContainer } from "../src/layouts/content-container";

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
  <ContentContainer variant="broad">
    <div className="section-container">
      <div className="meta-container">
        <h3>Welcome to Passport UI</h3>
        <p>A modern React component library for building apps blazingly fast</p>
      </div>
      <div className="list-container md:grid-cols-2">
        <Card>
          <CardContent>
            <div className="meta-container">
              <h3>Accessible Components</h3>
              <p>Built on Radix UI primitives with accessibility support.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="meta-container">
              <h3>Theme System</h3>
              <p>Dark/light mode support with CSS custom properties.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="meta-container">
              <h3>Motion Primitives</h3>
              <p>Beautiful animations powered by Motion.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <div className="meta-container">
              <h3>TypeScript First</h3>
              <p>Fully typed components with good developer experience.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <div className="section-container">
      <div className="meta-container">
        <h3>The page contains long list of elements</h3>
        <p>Helps validate long page structures.</p>
      </div>
      {Array.from({ length: 100 }).map((_, index) => (
        <Card key={index}>
          <CardContent>
            <div className="meta-container">
              <h3>Element {index + 1}</h3>
              <p>This is a long list of elements.</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </ContentContainer>
);

export const SAMPLE_SIDEBAR_MENU_ITEMS = [
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
    <div className="meta-container">
      <h3>Dashboard</h3>
      <p>Last updated: {new Date().toLocaleDateString()}</p>
    </div>
    <div className="flex items-center gap-2">
      <Button variant="outline" size="regular">
        <Settings />
        Settings
      </Button>
      <Button size="regular">
        <Plus />
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
        <Badge variant="secondary">v{pkg.version}</Badge>
        <Badge variant="outline">Released</Badge>
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
