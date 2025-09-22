import { ChevronsUpDown } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Combobox",
  icon: ChevronsUpDown,
  description: "An input field that combines a text input with a dropdown list of suggestions.",
  category: "components",
  storyId: "components-combobox--default",
  slug: "combobox",
  importCode: `import { Combobox } from "passport-ui";
import { useState } from "react";`,
  usageCode: `const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

function ComboboxExample() {
  const [value, setValue] = useState<string>("");

  return (
    <div className="w-sm">
      <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Select framework..."
        searchPlaceholder="Search frameworks..."
        emptyText="No framework found."
      />
    </div>
  );
}`,
};
