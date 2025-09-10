"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { type VariantProps } from "class-variance-authority";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button, buttonVariants } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";

export function ThemeButton({
  minimal = false,
  align = "end",
  variant = "ghost",
}: { minimal?: boolean; align?: "start" | "end" } & VariantProps<
  typeof buttonVariants
>) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="size-3.5" />;
      case "dark":
        return <Moon className="size-3.5" />;
      case "system":
      default:
        return <Monitor className="size-3.5" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "system":
      default:
        return "System";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          data-slot="theme-button"
          variant={variant}
          title={`Current: ${getLabel()}. Click to change theme.`}
        >
          {getIcon()}
          {!minimal && <span>{getLabel()}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={align}
        className="text-muted-foreground font-medium text-xs"
      >
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("light")}
        >
          <Sun className="size-3" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("dark")}
        >
          <Moon className="size-3" />
          <span className="text-muted-foreground">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("system")}
        >
          <Monitor className="size-3" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
