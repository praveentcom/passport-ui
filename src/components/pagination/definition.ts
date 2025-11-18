import { ChevronLeft } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Pagination",
  icon: ChevronLeft,
  description: "A component for navigating between pages of content.",
  category: "components",
  storyId: "components-pagination",
  slug: "pagination",
  importCode: `import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "passport-ui";`,
  usageCode: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#">
        <span>Previous</span>
      </PaginationPrevious>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#">
        <span>Next</span>
      </PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination>`,
};
