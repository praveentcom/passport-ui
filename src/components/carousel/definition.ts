import { Images } from "lucide-react";

import type { ComponentDefinition } from "../../types/definition";

export const definition: ComponentDefinition = {
  name: "Carousel",
  icon: Images,
  description: "Component description",
  category: "components",
  storyId: "components-carousel--default",
  slug: "carousel",
  importCode: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "passport-ui";
import { Card, CardContent } from "passport-ui";`,
  usageCode: `<div className="w-sm">
  <Carousel orientation="horizontal">
    <CarouselContent>
      {Array.from({ length: 5 }).map((_, index) => (
        <CarouselItem key={index}>
          <Card>
            <CardContent>
              <div className="meta-container">
                <h3>Slide {index + 1}</h3>
                <p>Move using buttons</p>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>

{/* Vertical carousel */}
<div className="w-sm">
  <Carousel orientation="vertical">
    <CarouselContent className="h-24">
      {Array.from({ length: 3 }).map((_, index) => (
        <CarouselItem key={index}>
          <Card>
            <CardContent>
              <h3>Slide {index + 1}</h3>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>
</div>`,
};
