import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";

import { PrefetchLink } from "../prefetch-link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
} from "./_";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  decorators: [
    (Story) => (
      <SidebarProvider>
        <Story />
      </SidebarProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description: "The content of the sidebar layout.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex h-screen">
      <Sidebar {...args}>
        <SidebarHeader>
          <h2 className="px-4 text-lg font-semibold tracking-tight">
            App Name
          </h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <PrefetchLink href="#">Dashboard</PrefetchLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <PrefetchLink href="#">Analytics</PrefetchLink>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <PrefetchLink href="#">Settings</PrefetchLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
        <SidebarFooter>
          <p className="p-4 text-xs text-muted-foreground">
            © 2024 Your Company
          </p>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content Area</h1>
        <p>This is where the main content of your application will go.</p>
      </main>
    </div>
  ),
};
