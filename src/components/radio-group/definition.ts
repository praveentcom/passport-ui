import { Circle } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Radio Group",
  icon: Circle,
  description: "Component description",
  category: "components",
  storyId: "components-radio-group--default",
  slug: "radio-group",
  importCode: `import { RadioGroup, RadioGroupItem } from "passport-ui";
import { Label } from "passport-ui";`,
  usageCode: `<div className="meta-container">
  <Label htmlFor="radio">Choose an option</Label>
  <RadioGroup defaultValue="option_2" id="radio">
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option_1" id="option_1" />
      <Label htmlFor="option_1" className="text-muted-foreground">
        Option 1
      </Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option_2" id="option_2" />
      <Label htmlFor="option_2" className="text-muted-foreground">
        Option 2
      </Label>
    </div>
    <div className="flex items-center gap-2">
      <RadioGroupItem value="option_3" id="option_3" />
      <Label htmlFor="option_3" className="text-muted-foreground">
        Option 3
      </Label>
    </div>
  </RadioGroup>
</div>`,
};
