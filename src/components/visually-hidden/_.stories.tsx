import React from "react";

import type { Meta, StoryObj } from "@storybook/nextjs";
import { definition } from "./definition";
import { AlertCircle } from "lucide-react";

import { Button } from "../button";
import { Input } from "../input";
import { Label } from "../label";
import { VisuallyHidden } from "./_";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Components/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `${definition.description}

## Components
- **VisuallyHidden**: Hides content visually while keeping it accessible

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
      description: "The content to be visually hidden but accessible.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold">Visually Hidden</h1>
      <p>
        The text &quot;This is visually hidden&quot; is present in the DOM but
        not visible on the screen.
      </p>
      <VisuallyHidden {...args}>
        <p>This is visually hidden but accessible to screen readers.</p>
      </VisuallyHidden>
      <p>Inspect the DOM to see the hidden element.</p>
    </div>
  ),
};

export const WithIconButton: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold">Icon Button</h1>
      <p>This button only has an icon, but its label is accessible.</p>
      <Button variant="outline" size="regular">
        <AlertCircle className="size-4" />
        <VisuallyHidden {...args}>Show Alert</VisuallyHidden>
      </Button>
    </div>
  ),
};

export const WithFormField: Story = {
  render: (args) => (
    <div className="flex flex-col items-center gap-4 text-center">
      <h1 className="text-2xl font-bold">Form Field</h1>
      <p>This input field has a visually hidden label.</p>
      <div className="w-64">
        <Label htmlFor="search-input">
          <VisuallyHidden {...args}>Search</VisuallyHidden>
        </Label>
        <Input id="search-input" type="search" placeholder="Search..." />
      </div>
    </div>
  ),
};
