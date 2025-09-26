import Link from "next/link";
import { Github } from "lucide-react";

import { Button } from "../../src/components/button";
import { Card } from "../../src/components/card";
import { StructuredData } from "../../src/components/structured-data";
import { ContentContainer } from "../../src/layouts/content-container";
import { SITE_CONFIG, createPageStructuredData } from "../constants";
import { Separator } from "../../src/components/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../src/components/tooltip";
import { HoverDotsGL } from "../components/hero/HoverDotsGL";
import { SequentialReveal } from "../../src/motion-primitives/sequential-reveal";

export default function HomePage() {
  return (
    <>
      <StructuredData
        data={createPageStructuredData({
          name: "Passport UI - React Component Library",
          description:
            "75+ elegant UI components with motion primitives and theme support. Built with React, TypeScript, Tailwind CSS, and Radix UI.",
          url: SITE_CONFIG.baseUrl,
          breadcrumbName: "Home",
          breadcrumbUrl: SITE_CONFIG.baseUrl,
        })}
      />

      <div className="relative h-[calc(100vh-100px)] w-full">
        <HoverDotsGL />
        <div className="absolute inset-0 flex items-center justify-center">
          <Card className="w-max pt-10 pb-14 px-8 md:px-12 mb-12 mx-8">
            <SequentialReveal className="section-container text-center">
              <div className="list-container pb-4">
                <h1 className="tracking-tight leading-normal">
                  Build Faster. <br className="md:hidden" /> Ship Effortlessly.
                </h1>
                <p className="max-w-lg mx-auto text-muted-foreground">
                  Built on top of shadcn/ui's excellent foundation, but as a complete library solution.
                  Explore the collection of 75+ premium components, composed with Tailwind CSS, Radix UI, and Motion.
                </p>
              </div>
              <div className="grid md:flex gap-3 justify-center items-center">
                <Button variant="primary" asChild>
                  <Link href="/installation">
                    Get Started →
                  </Link>
                </Button>
                
                <div className="flex gap-3 justify-center items-center">
                <Button asChild>
                  <Link href={SITE_CONFIG.storybook} target="_blank" rel="noopener noreferrer">
                    Storybook {"\u2197"}
                  </Link>
                </Button>
                
                <Button asChild>
                  <Link href={SITE_CONFIG.repository} target="_blank" rel="noopener noreferrer">
                    <Github />
                    GitHub {"\u2197"}
                  </Link>
                </Button>
              </div>
              </div>
              <div className="flex gap-3 justify-center items-center opacity-60">
                <Link href={`${SITE_CONFIG.repository}/blob/main/LICENSE.md`} target="_blank" rel="noopener noreferrer">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="flex items-center gap-3 underline-offset-4 cursor-pointer underline decoration-muted-foreground/50 hover:decoration-muted-foreground">
                        100% Open Source
                      </span>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="center"
                    >
                      <span className="text-xs">Covered under MIT License</span>
                    </TooltipContent>
                  </Tooltip>
                </Link>
                <span className="hidden md:flex items-center gap-3 before:block before:content-['•']">Fully Typed</span>
              </div>
              </SequentialReveal>
          </Card>
        </div>
      </div>
      
      <ContentContainer variant="broad">
        <Separator fadedEdges className="mt-12 mb-8" />
      </ContentContainer>
    </>
  );
}
