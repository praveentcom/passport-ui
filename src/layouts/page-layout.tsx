import React, { Fragment, ReactNode, useState } from "react";

import { VariantProps, cva } from "class-variance-authority";

import { SidebarInset, SidebarProvider } from "@/components/sidebar";
import { StructuredData } from "@/components/structured-data";

import {
  ContentContainer,
  ContentContainerVariant,
} from "../layouts/content-container";
import { FooterContainer, FooterContainerVariant } from "./footer-container";
import { HeaderContainer, HeaderContainerVariant } from "./header-container";

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
  /**
   * Whether to show skip links for accessibility
   * @default true
   */
  showSkipLinks?: boolean;
  /**
   * Custom skip link configuration
   */
  skipLinks?: Array<{
    href: string;
    label: string;
  }>;
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
  showSkipLinks = true,
  skipLinks,
}: PageLayoutProps): ReactNode {
  const [isSidebarOpen, setSidebarOpen] = useState(Boolean(sidebar));

  const handleSidebarOpenChange = (newOpen: boolean) => {
    setSidebarOpen(newOpen);
  };

  // Default skip links
  const defaultSkipLinks = [
    { href: "#main-content", label: "Skip to main content" },
    ...(sidebar ? [{ href: "#sidebar", label: "Skip to navigation" }] : []),
    ...(header ? [{ href: "#header", label: "Skip to header" }] : []),
    ...(footer ? [{ href: "#footer", label: "Skip to footer" }] : []),
  ];

  const finalSkipLinks = skipLinks || defaultSkipLinks;

  const layoutContent = (
    <Fragment>
      {structuredData && <StructuredData data={structuredData} />}
      {showSkipLinks && finalSkipLinks.length > 0 && (
        <div className="sr-only focus-within:not-sr-only">
          {finalSkipLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="absolute top-4 left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div
        data-slot="page-layout"
        className="min-h-screen w-full max-h-screen overflow-hidden"
      >
        <SidebarProvider
          open={isSidebarOpen}
          onOpenChange={handleSidebarOpenChange}
        >
          {sidebar ? (
            <div id="sidebar" role="navigation" aria-label="Main navigation">
              {sidebar}
            </div>
          ) : null}
          <SidebarInset className="max-h-screen overflow-y-auto overflow-x-hidden">
            {header && (
              <div id="header">
                <HeaderContainer
                  variant={headerVariant}
                  sticky={headerSticky}
                  blurred={headerBlurred}
                >
                  {header}
                </HeaderContainer>
              </div>
            )}
            <main id="main-content">
              <ContentContainer className={className} variant={contentVariant}>
                {children}
              </ContentContainer>
            </main>
            {footer && (
              <div id="footer">
                <FooterContainer
                  variant={footerVariant}
                  sticky={footerSticky}
                  blurred={footerBlurred}
                >
                  {footer}
                </FooterContainer>
              </div>
            )}
          </SidebarInset>
        </SidebarProvider>
      </div>
    </Fragment>
  );

  return layoutContent;
}
