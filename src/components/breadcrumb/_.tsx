"use client";

import React from "react";

import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, type LucideIcon, MoreHorizontal } from "lucide-react";

import { cn } from "../../lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../dropdown-menu";
import { PrefetchLink } from "../prefetch-link";

function BreadcrumbBase({ ...props }: React.ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />;
}

function BreadcrumbList({
  className,
  spacing = "gap-1.5 sm:gap-2.5",
  ...props
}: React.ComponentProps<"ol"> & { spacing?: string }) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        "text-muted-foreground flex flex-wrap items-center text-sm break-words",
        spacing,
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn("inline-flex items-center gap-1.5", className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<"a"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn(
        "hover:text-foreground hover:underline hover:underline-offset-4 decoration-muted-foreground/50 transition-all",
        className
      )}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn("text-foreground font-normal", className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn("flex size-9 items-center justify-center", className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export interface BreadcrumbPath {
  href: string;
  label: string;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb paths. The last item will be rendered as the current page.
   */
  path: BreadcrumbPath[];
  /**
   * Optional back button configuration
   */
  back?: {
    href: string;
  };
  /**
   * Custom separator component. Can be a Lucide icon or React element.
   * Defaults to ChevronRight icon.
   */
  separator?: LucideIcon | React.ReactElement;
  /**
   * Custom spacing between breadcrumb items.
   * Defaults to "gap-1.5 sm:gap-2.5".
   */
  spacing?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
}

/**
 * A breadcrumb component that automatically handles navigation paths.
 * If there are more than 4 paths, it shows the first, last two, and a dropdown for the middle items.
 *
 * @param path - Array of breadcrumb paths with href and label
 * @param back - Optional back button configuration
 * @param separator - Custom separator component (Lucide icon or React element)
 * @param spacing - Custom spacing between breadcrumb items
 * @param className - Additional CSS classes
 */
export function Breadcrumb({
  path,
  back,
  separator,
  spacing,
  className,
}: BreadcrumbProps) {
  if (!path || path.length === 0) {
    return null;
  }

  const shouldCollapse = path.length > 4;

  const renderSeparator = () => {
    if (!separator) {
      return <BreadcrumbSeparator />;
    }

    if (typeof separator === "function") {
      const IconComponent = separator;
      return (
        <BreadcrumbSeparator>
          <IconComponent />
        </BreadcrumbSeparator>
      );
    }

    return <BreadcrumbSeparator>{separator}</BreadcrumbSeparator>;
  };

  return (
    <BreadcrumbBase className={className}>
      <BreadcrumbList spacing={spacing}>
        {/* Back button if provided */}
        {back && (
          <>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <PrefetchLink href={back.href}>← Back</PrefetchLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {renderSeparator()}
          </>
        )}

        {/* Render breadcrumb items */}
        {shouldCollapse ? (
          <>
            {/* First item */}
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <PrefetchLink href={path[0].href}>{path[0].label}</PrefetchLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {renderSeparator()}

            {/* Dropdown for middle items */}
            <BreadcrumbItem>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1">
                  <BreadcrumbEllipsis className="size-4" />
                  <span className="sr-only">Show more</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {path.slice(1, -2).map((item, index) => (
                    <DropdownMenuItem key={index} asChild>
                      <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </BreadcrumbItem>
            {renderSeparator()}

            {/* Last two items */}
            {path.slice(-2).map((item, index, array) => (
              <React.Fragment key={index}>
                <BreadcrumbItem>
                  {index === array.length - 1 ? (
                    <BreadcrumbPage>{item.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < array.length - 1 && renderSeparator()}
              </React.Fragment>
            ))}
          </>
        ) : (
          /* Render all items normally when <= 4 items */
          path.map((item, index) => (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {index === path.length - 1 ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <PrefetchLink href={item.href}>{item.label}</PrefetchLink>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {index < path.length - 1 && renderSeparator()}
            </React.Fragment>
          ))
        )}
      </BreadcrumbList>
    </BreadcrumbBase>
  );
}
