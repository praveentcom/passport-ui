"use client";

import React, { Fragment, ReactNode } from "react";

import { VariantProps, cva } from "class-variance-authority";

import { SidebarInset } from "../../components/sidebar";
import { FooterContainer, FooterContainerVariant } from "../footer-container";
import { HeaderContainer, HeaderContainerVariant } from "../header-container";

const pageLayoutVariants = cva("min-h-screen w-full");

export interface HeaderOptions {
  /**
   * The variant of the header container
   */
  variant?: HeaderContainerVariant;
  /**
   * Whether the header should stick to the top on scroll
   */
  sticky?: boolean;
  /**
   * Whether the header should have a blurred background effect
   */
  blurred?: boolean;
  /**
   * Whether to show header border and background only on scroll
   */
  revealStylesOnScroll?: boolean;
}

export interface FooterOptions {
  /**
   * The variant of the footer container
   */
  variant?: FooterContainerVariant;
  /**
   * Whether the footer should stick to the bottom on scroll
   */
  sticky?: boolean;
  /**
   * Whether the footer should have a blurred background effect
   */
  blurred?: boolean;
}

export interface PageLayoutProps
  extends VariantProps<typeof pageLayoutVariants> {
  /**
   * The page content - can include ContentContainer, or any combination
   */
  children: ReactNode;
  /**
   * The sidebar content - should use Sidebar component directly
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
   * Additional class names for the layout wrapper
   */
  className?: string;
  /**
   * Header configuration options
   */
  headerOptions?: HeaderOptions;
  /**
   * Footer configuration options
   */
  footerOptions?: FooterOptions;
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
 * Users can compose Sidebar, HeaderContainer, FooterContainer, and ContentContainer as children.
 *
 * @param className - Additional CSS classes
 * @param children - The page content (can include Sidebar, ContentContainer, etc.)
 * @param sidebar - The sidebar content (will be wrapped in SidebarProvider)
 * @param header - The header content (will be wrapped in HeaderContainer)
 * @param footer - The footer content (will be wrapped in FooterContainer)
 * @param headerOptions - Header configuration options (variant, sticky, blurred, revealStylesOnScroll)
 * @param footerOptions - Footer configuration options (variant, sticky, blurred)
 * @param showSkipLinks - Whether to show skip links for accessibility
 * @param skipLinks - Custom skip link configuration
 * @returns The complete page layout
 */
export function PageLayout({
  className,
  children,
  sidebar,
  header,
  footer,
  headerOptions = {
    variant: "full",
    sticky: true,
    blurred: true,
    revealStylesOnScroll: false,
  },
  footerOptions = {
    variant: "full",
    sticky: false,
    blurred: false,
  },
  showSkipLinks = true,
  skipLinks,
}: PageLayoutProps): ReactNode {
  const defaultSkipLinks = [
    { href: "#main-content", label: "Skip to main content" },
    ...(sidebar ? [{ href: "#sidebar", label: "Skip to sidebar" }] : []),
    ...(header ? [{ href: "#header", label: "Skip to header" }] : []),
    ...(footer ? [{ href: "#footer", label: "Skip to footer" }] : []),
  ];
  const finalSkipLinks = skipLinks || defaultSkipLinks;

  const renderMainContent = () => (
    <div className="flex flex-col min-h-screen">
      {header && (
        <HeaderContainer
          id="header"
          variant={headerOptions.variant}
          sticky={headerOptions.sticky}
          blurred={headerOptions.blurred}
          revealStylesOnScroll={headerOptions.revealStylesOnScroll}
        >
          {header}
        </HeaderContainer>
      )}
      <main id="main-content" className="flex-1">
        <div className={className}>{children}</div>
      </main>
      {footer && (
        <FooterContainer
          id="footer"
          variant={footerOptions.variant}
          sticky={footerOptions.sticky}
          blurred={footerOptions.blurred}
        >
          {footer}
        </FooterContainer>
      )}
    </div>
  );

  let layoutStructure: ReactNode;

  if (sidebar) {
    layoutStructure = (
      <div className="flex min-h-screen w-full">
        <div id="sidebar" role="navigation" aria-label="Sidebar navigation">
          {sidebar}
        </div>
        <SidebarInset className="flex flex-1">
          {renderMainContent()}
        </SidebarInset>
      </div>
    );
  } else {
    layoutStructure = renderMainContent();
  }

  return (
    <Fragment>
      {showSkipLinks && finalSkipLinks.length > 0 && (
        <div className="sr-only focus-within:not-sr-only">
          {finalSkipLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="absolute top-4 left-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div data-slot="page-layout" className="page-layout">
        {layoutStructure}
      </div>
    </Fragment>
  );
}
