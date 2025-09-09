import React, { Fragment, ReactNode, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { StructuredData } from "@/components/structured-data";
import { SidebarInset, SidebarProvider } from "@/components/sidebar";
import { ContentContainer, ContentContainerVariant } from "@/client";
import { HeaderContainer, HeaderContainerVariant } from "./header-container";
import { FooterContainer, FooterContainerVariant } from "./footer-container";

const pageLayoutVariants = cva("min-h-screen w-full");

export interface PageLayoutProps
  extends VariantProps<typeof pageLayoutVariants> {
  /**
   * The page content - can include ContentContainer, or any combination
   */
  children: ReactNode;
  /**
   * The sidebar content - should include SidebarContainer
   */
  sidebar?: ReactNode;
  /**
   * The header content - will be wrapped in HeaderContainer
   */
  header?: ReactNode;
  /**
   * The footer content - will be wrapped in FooterContainer
   */
  footer?: ReactNode;
  /**
   * Structured data for SEO
   */
  structuredData?: object;
  /**
   * Additional class names for the layout wrapper
   */
  className?: string;
  /**
   * The variant of the content container
   */
  contentVariant?: ContentContainerVariant;
  /**
   * The variant of the header container
   */
  headerVariant?: HeaderContainerVariant;
  /**
   * Whether the header should stick to the top on scroll
   */
  headerSticky?: boolean;
  /**
   * Whether the header should have a blurred background effect
   */
  headerBlurred?: boolean;
  /**
   * The variant of the footer container
   */
  footerVariant?: FooterContainerVariant;
  /**
   * Whether the footer should stick to the bottom on scroll
   */
  footerSticky?: boolean;
  /**
   * Whether the footer should have a blurred background effect
   */
  footerBlurred?: boolean;
}

/**
 * A top-level page layout component that provides structure for any page content.
 * Handles structured data, animations, and responsive max-width constraints.
 * Users can compose SidebarContainer, HeaderContainer, FooterContainer, and ContentContainer as children.
 *
 * @param className - Additional CSS classes
 * @param children - The page content (can include SidebarContainer, ContentContainer, etc.)
 * @param sidebar - The sidebar content (will be wrapped in SidebarProvider)
 * @param header - The header content (will be wrapped in HeaderContainer)
 * @param footer - The footer content (will be wrapped in FooterContainer)
 * @param structuredData - SEO structured data object
 * @param contentVariant - The variant of the content container
 * @param headerVariant - The variant of the header container
 * @param headerSticky - Whether the header should stick to the top on scroll
 * @param headerBlurred - Whether the header should have a blurred background effect
 * @param footerVariant - The variant of the footer container
 * @param footerSticky - Whether the footer should stick to the bottom on scroll
 * @param footerBlurred - Whether the footer should have a blurred background effect
 * @returns The complete page layout
 */
export function PageLayout({
  className,
  children,
  sidebar,
  header,
  footer,
  structuredData,
  contentVariant = "full",
  headerVariant = "full",
  headerSticky = true,
  headerBlurred = true,
  footerVariant = "full",
  footerSticky = false,
  footerBlurred = false,
}: PageLayoutProps): ReactNode {
  const [isSidebarOpen, setSidebarOpen] = useState(Boolean(sidebar));

  const handleSidebarOpenChange = (newOpen: boolean) => {
    setSidebarOpen(newOpen);
  };

  const layoutContent = (
    <Fragment>
      {structuredData && <StructuredData data={structuredData} />}
      <div className="min-h-screen w-full max-h-screen overflow-hidden">
        <SidebarProvider
          open={isSidebarOpen}
          onOpenChange={handleSidebarOpenChange}
        >
          {sidebar ? sidebar : null}
          <SidebarInset className="max-h-screen overflow-y-auto overflow-x-hidden">
            {header && (
              <HeaderContainer
                variant={headerVariant}
                sticky={headerSticky}
                blurred={headerBlurred}
              >
                {header}
              </HeaderContainer>
            )}
            <ContentContainer className={className} variant={contentVariant}>
              {children}
            </ContentContainer>
            {footer && (
              <FooterContainer
                variant={footerVariant}
                sticky={footerSticky}
                blurred={footerBlurred}
              >
                {footer}
              </FooterContainer>
            )}
          </SidebarInset>
        </SidebarProvider>
      </div>
    </Fragment>
  );

  return layoutContent;
}
