import { PanelBottom } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Footer Container",
  icon: PanelBottom,
  description: "Component description",
  category: "layout",
  storyId: "layouts-footercontainer--default",
  slug: "footer-container",
  importCode: `import { FooterContainer } from "passport-ui";`,
  usageCode: `<FooterContainer
  sticky={true}
  blurred={true}
  variant="full"
>
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="flex flex-col md:flex-row items-center gap-4">
      <p>&copy; 2024 My Company. All rights reserved.</p>
    </div>
    
    <div className="flex items-center gap-4">
      <Link href="/privacy" className="text-sm hover:underline">
        Privacy Policy
      </Link>
      <Link href="/terms" className="text-sm hover:underline">
        Terms of Service
      </Link>
      <Link href="/contact" className="text-sm hover:underline">
        Contact
      </Link>
    </div>
  </div>
</FooterContainer>

{/* Different variants */}
<FooterContainer variant="compact">
  <p className="text-center">Compact footer</p>
</FooterContainer>

<FooterContainer variant="broad" sticky={false}>
  <div className="text-center">
    <p>Non-sticky broad footer</p>
  </div>
</FooterContainer>`,
};
