"use client";

import Link from "next/link";
import React, { ReactNode } from "react";

import { Button } from "@/components/button";
import { Card, CardContent } from "@/components/card";
import { cn } from "@/server";

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
    <Button asChild>
      <Link href={"/"}>Go home</Link>
    </Button>
  ),
  className,
}: PlaceholderCardProps) {
  return (
    <Card className={cn(className)}>
      <CardContent className="text-center px-8 py-3 md:px-12">
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
