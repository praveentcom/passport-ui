"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export interface PlaceholderCardProps {
  title?: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PlaceholderCard({
  title = "Not published.",
  subtitle = "This section is not available currently.",
  children = (
    <Button asChild>
      <Link href={"/"}>Go home</Link>
    </Button>
  ),
}: PlaceholderCardProps) {
  return (
    <Card>
      <CardContent className="text-center py-4">
        <div className="grid items-center justify-center gap-4">
          <div className="grid items-center max-w-md text-sm">
            <h4 className="text-foreground font-medium">{title}</h4>
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

export default PlaceholderCard;
