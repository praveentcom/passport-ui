import React, { Fragment, ReactNode, useState } from "react";

import { VariantProps, cva } from "class-variance-authority";

import { SidebarInset, SidebarProvider } from "@/components/sidebar";

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
   * The left sidebar content - should include SidebarContainer
   */
  leftSidebar?: ReactNode;
  /**
   * The right sidebar content - should include SidebarContainer
   */
  rightSidebar?: ReactNode;
  /**
   * The header content - will be wrapped in HeaderContainer
   */
  header?: ReactNode;
  /**
   * The footer content - will be wrapped in FooterContainer
   */
  footer?: ReactNode;
  /**
   * Additional class names for the layout wrapper
   */
  className?: string;
  /**
   * The variant of the content container
   */
  contentVariant?: ContentContainerVariant | 'custom';
  /**
   * Show blurIn animation for the content container
   */
  contentBlurIn?: boolean;
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
 * Users can compose SidebarContainer, HeaderContainer, FooterContainer, and ContentContainer as children.
 *
 * @param className - Additional CSS classes
 * @param children - The page content (can include SidebarContainer, ContentContainer, etc.)
 * @param leftSidebar - The left sidebar content (will be wrapped in SidebarProvider)
 * @param rightSidebar - The right sidebar content (will be wrapped in SidebarProvider)
 * @param header - The header content (will be wrapped in HeaderContainer)
 * @param footer - The footer content (will be wrapped in FooterContainer)
 * @param contentVariant - The variant of the content container
 * @param contentBlurIn - Show blurIn animation for the content container
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
  leftSidebar,
  rightSidebar,
  header,
  footer,
  contentVariant = "full",
  contentBlurIn = false,
  headerVariant = "full",
  headerSticky = true,
  headerBlurred = true,
  footerVariant = "full",
  footerSticky = false,
  footerBlurred = false,
  showSkipLinks = true,
  skipLinks,
}: PageLayoutProps): ReactNode {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  
  const defaultSkipLinks = [
    { href: "#main-content", label: "Skip to main content" },
    ...(leftSidebar ? [{ href: "#left-sidebar", label: "Skip to left navigation" }] : []),
    ...(rightSidebar ? [{ href: "#right-sidebar", label: "Skip to right navigation" }] : []),
    ...(header ? [{ href: "#header", label: "Skip to header" }] : []),
    ...(footer ? [{ href: "#footer", label: "Skip to footer" }] : []),
  ];
  const finalSkipLinks = skipLinks || defaultSkipLinks;
  const getRightPadding = () => {
    if (!rightSidebar) return "";
    return rightSidebarOpen ? "md:pr-[16rem]" : "md:pr-[3rem]";
  };

  const renderMainContent = () => (
    <>
      {header && (
        <HeaderContainer
          id="header"
          variant={headerVariant}
          sticky={headerSticky}
          blurred={headerBlurred}
        >
          {header}
        </HeaderContainer>
      )}
      <main id="main-content" className="flex-1">
        {contentVariant === 'custom' ? children : (
          <ContentContainer className={className} variant={contentVariant} blurIn={contentBlurIn}>
            {children}
          </ContentContainer>
        )}
      </main>
      {footer && (
        <FooterContainer
          id="footer"
          variant={footerVariant}
          sticky={footerSticky}
          blurred={footerBlurred}
        >
          {footer}
        </FooterContainer>
      )}
    </>
  );

  const renderRightSidebar = () => (
    <div 
      id="right-sidebar" 
      role="navigation" 
      aria-label="Right navigation"
      className="fixed right-0 top-0 h-full"
    >
      <SidebarProvider 
        defaultOpen={true}
        open={rightSidebarOpen}
        onOpenChange={setRightSidebarOpen}
      >
        {rightSidebar}
      </SidebarProvider>
    </div>
  );

  const contentClasses = `flex flex-col flex-1 max-h-screen overflow-y-auto overflow-x-hidden transition-[padding] duration-200 ${getRightPadding()}`;
  let layoutStructure: ReactNode;

  if (leftSidebar && rightSidebar) {
    layoutStructure = (
      <SidebarProvider 
        defaultOpen={true}
        open={leftSidebarOpen}
        onOpenChange={setLeftSidebarOpen}
      >
        <div id="left-sidebar" role="navigation" aria-label="Left navigation">
          {leftSidebar}
        </div>
        <SidebarInset className="flex min-h-screen">
          <div className={contentClasses}>
            {renderMainContent()}
          </div>
          {renderRightSidebar()}
        </SidebarInset>
      </SidebarProvider>
    );
  } else if (leftSidebar && !rightSidebar) {
    layoutStructure = (
      <SidebarProvider 
        defaultOpen={true}
        open={leftSidebarOpen}
        onOpenChange={setLeftSidebarOpen}
      >
        <div id="left-sidebar" role="navigation" aria-label="Left navigation">
          {leftSidebar}
        </div>
        <SidebarInset className="flex flex-col max-h-screen overflow-y-auto overflow-x-hidden">
          {renderMainContent()}
        </SidebarInset>
      </SidebarProvider>
    );
  } else if (!leftSidebar && rightSidebar) {
    layoutStructure = (
      <div className="flex min-h-screen">
        <div className={contentClasses}>
          {renderMainContent()}
        </div>
        {renderRightSidebar()}
      </div>
    );
  } else {
    layoutStructure = (
      <div className="flex flex-col min-h-screen max-h-screen overflow-y-auto overflow-x-hidden">
        {renderMainContent()}
      </div>
    );
  }

  return (
    <Fragment>
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
      <div data-slot="page-layout" className="min-h-screen w-full">
        {layoutStructure}
      </div>
    </Fragment>
  );
}
