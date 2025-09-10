import type { Meta, StoryObj } from "@storybook/nextjs";

import { COMMON_CONTROLS } from "../../.storybook/constants";
import { Card, CardContent, MetaContainer } from "../../src";

const meta: Meta<typeof MetaContainer> = {
  title: "Composables/MetaContainer",
  component: MetaContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A versatile container component for displaying structured metadata, information, and content with optional title and consistent spacing.

## Features
- Optional title with semantic heading structure
- Consistent spacing and typography from design system
- Flexible content layout supporting various data types
- Integration with cards and other container components
- Responsive design with proper text flow
- Clean visual hierarchy for metadata presentation

## Usage
Perfect for displaying:
- User information and profiles
- Project metadata and statistics
- Contact details and structured data
- Any content requiring title-content organization
- Information cards and data presentation

The component automatically handles spacing and typography to maintain consistency across your application.`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description:
        "Optional title displayed above the content with proper heading semantics",
      table: {
        type: { summary: "string" },
        category: "Content",
      },
    },
    children: {
      control: { type: "text" },
      description:
        "The content to display within the container - text, elements, or complex structures",
      table: {
        type: { summary: "React.ReactNode" },
        category: "Content",
      },
    },
    className: COMMON_CONTROLS.className,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Information",
    children:
      "This is some metadata information that can contain multiple lines of content.",
  },
};

export const ProjectStats: Story = {
  render: (args) => (
    <div className="section-container w-sm mx-auto">
      <MetaContainer {...args}>
        <div className="flex justify-between">
          <span>Files</span>
          <span>1,234</span>
        </div>
        <div className="flex justify-between">
          <span>Lines of code</span>
          <span>45,678</span>
        </div>
        <div className="flex justify-between">
          <span>Contributors</span>
          <span>8</span>
        </div>
      </MetaContainer>
    </div>
  ),
  args: {
    title: "Project Stats",
  },
};

export const InCards: Story = {
  render: () => (
    <div className="section-container w-sm mx-auto">
      <Card>
        <CardContent>
          <MetaContainer title="Personal Information">
            <p>Jane Smith</p>
            <p>jane.smith@company.com</p>
            <p>Senior Developer</p>
          </MetaContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <MetaContainer title="Contact Details">
            <p>📞 +1 (555) 123-4567</p>
            <p>🇮🇳 Bangalore, KA, India</p>
            <p>🏢 Passport UI Corp.</p>
          </MetaContainer>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <MetaContainer title="Activity">
            <p>Last login: 2 minutes ago</p>
            <p>Status: Active</p>
            <p>Role: Administrator</p>
          </MetaContainer>
        </CardContent>
      </Card>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
  },
};
