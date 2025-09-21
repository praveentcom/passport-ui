import React, { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../../components/button";
import { Card, CardContent } from "../../components/card";

export interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function EmptyState({
  title = "Section not found.",
  subtitle = "This section is currently unavailable.",
  children = (
    <Link href={"/"}>
      <Button>Go home</Button>
    </Link>
  ),
  className,
}: EmptyStateProps) {
  return (
    <Card data-slot="empty-placeholder-card" className={className}>
      <CardContent className="text-center px-8 py-3 md:px-12">
        <div className="grid items-center justify-center gap-4">
          <div className="meta-container items-center">
            <h4>{title}</h4>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
          {children ? (
            <div className="flex gap-1.5 mx-auto">{children}</div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default EmptyState;
