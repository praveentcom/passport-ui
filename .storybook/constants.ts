import { InputType } from "storybook/internal/csf";

export const COMMON_CONTROLS: Record<string, InputType> = {
  asChild: {
    name: "asChild",
    control: { type: "boolean" },
    options: [true, false],
    description: "Merges its props onto its immediate child.",
    table: {
      defaultValue: {
        summary: "false",
      },
      type: {
        summary: "boolean",
      },
      category: "React props",
    },
    type: "boolean",
  },
  className: {
    name: "className",
    control: { type: "text" },
    description: "The className of the component.",
    table: {
      type: {
        summary: "HTMLAttributes<T>.className",
      },
      category: "React props",
    },
    type: "string",
  },
};
