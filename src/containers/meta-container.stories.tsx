import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardContent, MetaContainer } from "@/client";

const meta: Meta<typeof MetaContainer> = {
  title: "Containers/MetaContainer",
  component: MetaContainer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A container component for displaying metadata with an optional title and structured content layout.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Optional title displayed above the content.",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    children: {
      control: { type: "text" },
      description: "The content to display within the container.",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
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
