import { SlidersHorizontal } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Slider",
  icon: SlidersHorizontal,
  description: "A control for selecting a value from a range.",
  category: "components",
  storyId: "components-slider--default",
  slug: "slider",
  importCode: `import { Slider } from "passport-ui";
import { Label } from "passport-ui";
import { useState } from "react";`,
  usageCode: `function SliderExample() {
  const [value, setValue] = useState([50]);

  return (
    <div className="w-sm">
      <div className="meta-container">
        <Label>Slider</Label>
        <Slider 
          value={value} 
          onValueChange={setValue}
          max={100}
          step={1}
        />
        <p>Current value: {value.join(", ")}</p>
      </div>
    </div>
  );
}

{/* Range slider */}
function RangeSlider() {
  const [range, setRange] = useState([20, 80]);
  
  return (
    <Slider 
      value={range}
      onValueChange={setRange}
      max={100}
      step={1}
    />
  );
}`,
};
