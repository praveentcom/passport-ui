import type { Meta, StoryObj } from "@storybook/nextjs";
import { SettingsIcon } from "lucide-react";

import { SidebarProvider } from "../../components/sidebar";
import { MobileSidebarTrigger } from "./_";

const meta: Meta<typeof MobileSidebarTrigger> = {
  title: "Composables/MobileSidebarTrigger",
  component: MobileSidebarTrigger,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <SidebarProvider>
        <div className="flex items-center gap-4 p-4">
          <Story />
          <span className="text-muted-foreground text-sm">
            (Only visible on mobile - resize your browser to test)
          </span>
        </div>
      </SidebarProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomIcon: Story = {
  args: {
    icon: SettingsIcon,
  },
};

export const WithCustomStyling: Story = {
  args: {
    className: "bg-primary text-primary-foreground hover:bg-primary/90",
  },
};
