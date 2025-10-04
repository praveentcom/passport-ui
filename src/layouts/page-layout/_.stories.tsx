import { ReactNode, useState } from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { FileText, Home, Mail, Settings, Users } from "lucide-react";

import { PageLayout } from ".";
import {
  COMMON_CONTROLS,
  SAMPLE_CONTENT_CONTAINER,
  SAMPLE_FOOTER_CONTENT,
  SAMPLE_HEADER_CONTENT,
} from "../../../.storybook/constants";
import pkg from "../../../package.json";
import { Button } from "../../components/button";
import { PrefetchLink } from "../../components/prefetch-link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "../../components/sidebar";
import { definition } from "./definition";

const meta: Meta<typeof PageLayout> = {
  title: "Layout Containers/PageLayout",
  component: PageLayout,
  decorators: [
    (Story) => (
      <SidebarProvider defaultOpen={true}>
        <Story />
      </SidebarProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **PageLayout**: Comprehensive layout structure for pages

## Code
\`\`\`tsx import
${definition.importCode}
\`\`\`

\`\`\`tsx usage
${definition.usageCode}
\`\`\`
`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: false,
      description:
        "The page content (can include Sidebar, ContentContainer, etc.)",
      table: {
        type: { summary: "ReactNode" },
        category: "Content",
      },
    },
    sidebar: {
      control: false,
      description:
        "The sidebar content - should use Sidebar component directly",
      table: {
        type: { summary: "ReactNode" },
        category: "Sidebar",
      },
    },
    header: {
      control: false,
      description: "The header content - will be wrapped in HeaderContainer",
      table: {
        type: { summary: "ReactNode" },
        category: "Header",
      },
    },
    footer: {
      control: false,
      description: "The footer content - will be wrapped in FooterContainer",
      table: {
        type: { summary: "ReactNode" },
        category: "Footer",
      },
    },
    headerOptions: {
      control: { type: "object" },
      description:
        "Header configuration options (variant, sticky, blurred, revealStylesOnScroll)",
      table: {
        type: { summary: "HeaderOptions" },
        defaultValue: {
          summary:
            '{ variant: "full", sticky: true, blurred: true, revealStylesOnScroll: false }',
        },
        category: "Header",
      },
    },
    footerOptions: {
      control: { type: "object" },
      description: "Footer configuration options (variant, sticky, blurred)",
      table: {
        type: { summary: "FooterOptions" },
        defaultValue: {
          summary: '{ variant: "full", sticky: false, blurred: false }',
        },
        category: "Footer",
      },
    },
    className: COMMON_CONTROLS.className,
  },
  render: (args) => <PageLayout {...args} />,
};

export default meta;
type Story = StoryObj<typeof PageLayout>;

function SampleSidebar() {
  const [searchText, setSearchText] = useState("");

  // Filter menu items based on search
  const filteredItems = [
    { title: "Dashboard", icon: Home, href: "#dashboard" },
    {
      title: "Users",
      icon: Users,
      subItems: ["All Users", "Active Users", "Inactive Users"],
    },
    {
      title: "Documents",
      icon: FileText,
      subItems: ["Recent", "Shared", "Archived"],
    },
    {
      title: "Settings",
      icon: Settings,
      subItems: ["Profile", "Preferences", "Security"],
    },
  ].filter(
    (item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase()) ||
      item.subItems?.some((sub) =>
        sub.toLowerCase().includes(searchText.toLowerCase())
      )
  );

  return (
    <Sidebar
      variant="sidebar"
      side="left"
      collapsible={true}
      blurred={false}
      mobileOnly={false}
    >
      <SidebarHeader className="group-data-[state=collapsed]:hidden">
        <div className="meta-container">
          <h3>Passport UI</h3>
          <p>Version {pkg.version}</p>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarInput
          type="search"
          placeholder="Search navigation…"
          value={searchText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchText(e.target.value)
          }
          className="group-data-[state=collapsed]:hidden"
        />

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild={!!item.href}>
                    {item.href ? (
                      <PrefetchLink href={item.href}>
                        <item.icon className="size-4" />
                        {item.title}
                      </PrefetchLink>
                    ) : (
                      <>
                        <item.icon className="size-4" />
                        {item.title}
                      </>
                    )}
                  </SidebarMenuButton>
                  {item.subItems && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem}>
                          <SidebarMenuSubButton asChild>
                            <PrefetchLink
                              href={`#${item.title.toLowerCase()}/${subItem.toLowerCase().replace(" ", "-")}`}
                            >
                              {subItem}
                            </PrefetchLink>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center justify-between group-data-[state=collapsed]:justify-center">
          <div className="flex-1 group-data-[state=collapsed]:opacity-0 group-data-[state=collapsed]:invisible group-data-[state=collapsed]:w-0 transition-all duration-200">
            <Button>
              <Mail />
              Support
            </Button>
          </div>
          <SidebarTrigger />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

const sampleSidebar: ReactNode = <SampleSidebar />;

export const Default: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
    sidebar: sampleSidebar,
    header: SAMPLE_HEADER_CONTENT,
    footer: SAMPLE_FOOTER_CONTENT,
    headerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
      revealStylesOnScroll: false,
    },
    footerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
    },
  },
};

export const NoSidebar: Story = {
  args: {
    children: SAMPLE_CONTENT_CONTAINER,
    header: SAMPLE_HEADER_CONTENT,
    footer: SAMPLE_FOOTER_CONTENT,
    headerOptions: {
      variant: "full",
      sticky: true,
      blurred: true,
      revealStylesOnScroll: false,
    },
    footerOptions: {
      variant: "full",
      sticky: false,
      blurred: false,
    },
  },
};
