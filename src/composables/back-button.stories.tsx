import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardContent } from "../components/card";
import { MetaContainer, PageContainer } from "@/client";
import { BackButton } from "@/client";

const meta: Meta<typeof BackButton> = {
  title: "Composables/BackButton",
  component: BackButton,
  parameters: {
    layout: "centered",
    nextjs: {
      appDirectory: true,
    },
    docs: {
      description: {
        component:
          "A common back button component that provides navigation to a previous page or section.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: { type: "text" },
      description: "The URL to navigate to when the button is clicked.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: '"/"',
        },
      },
    },
    label: {
      control: { type: "text" },
      description: "The text label displayed on the button.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: {
          summary: '"Back to Home"',
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/",
    label: "Back to Home",
  },
};

export const PageContext: Story = {
  render: (args) => (
    <PageContainer>
      <BackButton {...args} />
      <Card>
        <CardContent>
          <MetaContainer title="Project Details">
            <p>
              This is an example of how the BackButton component would appear in
              a typical page layout. The button provides a clear way for users
              to navigate back to the previous page.
            </p>
          </MetaContainer>
        </CardContent>
      </Card>
    </PageContainer>
  ),
  args: {
    href: "/dashboard",
    label: "Back to Dashboard",
  },
  parameters: {
    layout: "fullscreen",
  },
};
