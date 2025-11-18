import { ChevronDown } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Select",
  icon: ChevronDown,
  description: "A dropdown menu for selecting a single option from a list.",
  category: "components",
  storyId: "components-select--default",
  slug: "select",
  importCode: `import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <div className="meta-container">
    <Label htmlFor="food-select">Select a food</Label>
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a food..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
          <SelectItem value="cauliflower">Cauliflower</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  </div>
</div>`,
};
