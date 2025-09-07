import type { Meta, StoryObj } from "@storybook/nextjs";
import { Card, CardContent, CardFooter, Progress } from "@/client";
import { Button } from "@/client";
import { MetaContainer } from "@/client";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component that can be used to display content in a card format. It accepts the `CardContent` and `CardFooter` components to get rendered. Optionally, accepts `borderTrail` param to show a running border trail over hover.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "object", disable: true },
      table: {
        type: {
          summary: "ReactNode",
          detail: "CardContent | CardFooter",
        },
      },
      description: "Contents of the card.",
    },
    borderTrail: {
      control: { type: "boolean" },
      options: [true, false],
      type: "boolean",
      description: "Whether to show a border trail.",
      table: {
        defaultValue: {
          summary: "false",
        },
        type: {
          summary: "boolean | BorderTrailProps",
        },
      },
    },
  },
  render: (args) => <Card {...args} />,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    borderTrail: false,
    children: [
      <CardContent key="content">
        <MetaContainer title="Card Title">
          This is the main content of the card. You can put any content here.
        </MetaContainer>
      </CardContent>,
      <CardFooter key="footer">
        <Button>Action</Button>
      </CardFooter>,
    ],
  },
};

export const ExampleProject: Story = {
  args: {
    borderTrail: false,
    children: [
      <CardContent key="content">
        <MetaContainer title="Project Alpha">
          A modern web application built with React and TypeScript.
        </MetaContainer>
        <MetaContainer>
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>75%</span>
          </div>
          <Progress value={75} />
        </MetaContainer>
      </CardContent>,
      <CardFooter key="footer">
        <div className="flex gap-2">
          <Button variant="outline">View</Button>
          <Button>Edit</Button>
        </div>
      </CardFooter>,
    ],
  },
};

export const ExampleProfile: Story = {
  args: {
    borderTrail: false,
    children: [
      <CardContent key="content">
        <MetaContainer>
          <div>📧 john.doe@example.com</div>
          <div>📍 San Francisco, CA</div>
          <div>🏢 Tech Corp Inc.</div>
        </MetaContainer>
      </CardContent>,
      <CardFooter key="footer">
        <Button variant="outline" size="medium" className="w-full">
          View Profile
        </Button>
      </CardFooter>,
    ],
  },
};
