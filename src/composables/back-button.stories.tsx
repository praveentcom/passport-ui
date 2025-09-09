import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardContent } from "../components/card";
import { MetaContainer, ContentContainer } from "@/client";
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
        component: `A reusable back button component that provides consistent navigation to previous pages or sections with proper accessibility.

## Features
- Consistent back navigation pattern across applications
- Customizable destination URLs and labels
- Built-in accessibility with proper ARIA labels
- Integration with Next.js routing system
- Semantic button styling with theme integration
- Keyboard navigation support
- Screen reader compatible with clear navigation context

## Usage
Use back buttons for:
- Breadcrumb-style navigation
- Form multi-step workflows
- Detail page navigation back to listings
- Modal and overlay dismissal
- Any interface requiring clear "go back" functionality

## Best Practices
- Always provide clear, descriptive labels
- Ensure the destination makes logical sense
- Consider the navigation context and user expectations
- Place consistently in your interface layout

## Accessibility
Back buttons provide proper navigation semantics and clear context for screen reader users about where the navigation leads.`,
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
    <ContentContainer>
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
    </ContentContainer>
  ),
  args: {
    href: "/dashboard",
    label: "Back to Dashboard",
  },
  parameters: {
    layout: "fullscreen",
  },
};
