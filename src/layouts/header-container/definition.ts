import { PanelTop } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Header Container",
  icon: PanelTop,
  description: "A layout container for the header section of a page.",
  category: "layout",
  storyId: "layouts-header-container--default",
  slug: "header-container",
  importCode: `import { HeaderContainer } from "passport-ui";
import { Button } from "passport-ui";
import { ThemeToggle } from "passport-ui";`,
  usageCode: `<HeaderContainer
  sticky={true}
  blurred={true}
  variant="full"
>
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
      <h2>My Application</h2>
    </div>
    
    <div className="flex items-center gap-3">
      <nav className="flex items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/home">Home</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/about">About</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/contact">Contact</Link>
        </Button>
      </nav>
      <ThemeToggle />
    </div>
  </div>
</HeaderContainer>

{/* With reveal on scroll */}
<HeaderContainer
  sticky={true}
  blurred={true}
  revealStylesOnScroll={true}
  variant="broad"
>
  <div className="flex justify-between items-center">
    <h2>Reveal Header</h2>
    <Button>Action</Button>
  </div>
</HeaderContainer>`,
};
