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
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "../../components/sidebar";
import { SidebarProvider } from "../../providers/sidebar-provider";
import { SidebarContainer } from "../sidebar-container";
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
        "The page content (can include SidebarContainer, ContentContainer, etc.)",
      table: {
        type: { summary: "ReactNode" },
        category: "Content",
      },
    },
    sidebar: {
      control: false,
      description: "The sidebar content - should include SidebarContainer",
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
    <SidebarContainer
      sidebarHeader={
        <div className="meta-container">
          <h3>Passport UI</h3>
          <p>Version {pkg.version}</p>
        </div>
      }
      sidebarFooter={
        <Button>
          <Mail />
          Support
        </Button>
      }
      searchConfig={{
        searchText,
        setSearchText,
        placeholder: "Search navigation…",
      }}
    >
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
    </SidebarContainer>
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
