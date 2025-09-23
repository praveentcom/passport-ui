import { SunMoon } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "ThemeProvider",
  icon: SunMoon,
  description: "A provider that manages theme switching for the application.",
  category: "providers",
  storyId: "providers-themeprovider--default",
  slug: "theme-provider",
  importCode: `import { ThemeProvider } from "passport-ui";`,
  usageCode: `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
  {/* Your app content */}
</ThemeProvider>`,
};
