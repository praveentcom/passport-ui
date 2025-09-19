import React, { ReactNode } from "react";

import Link from "next/link";

import { Button } from "../../components/button";
import { Card, CardContent } from "../../components/card";
import { MetaContainer } from "../meta-container";

export interface PlaceholderCardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
}

export function PlaceholderCard({
  title = "Section not found.",
  subtitle = "This section is currently unavailable.",
  children = (
    <Link href={"/"}>
      <Button>Go home</Button>
    </Link>
  ),
  className,
}: PlaceholderCardProps) {
  return (
    <Card data-slot="placeholder-card" className={className}>
      <CardContent className="text-center px-8 py-3 md:px-12">
        <div className="grid items-center justify-center gap-4">
          <MetaContainer className="grid items-center">
            <h4>{title}</h4>
            <p className="text-muted-foreground">{subtitle}</p>
          </MetaContainer>
          {children ? (
            <div className="flex gap-1.5 mx-auto">{children}</div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}

export default PlaceholderCard;
