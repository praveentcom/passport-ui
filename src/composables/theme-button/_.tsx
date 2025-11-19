"use client";

import React, { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "../../components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/dropdown-menu";

export type ThemeButtonProps = {
  minimal?: boolean;
  align?: "start" | "end";
};

export function ThemeButton({
  minimal = false,
  align = "end",
}: ThemeButtonProps) {
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
        return <Sun />;
      case "dark":
        return <Moon />;
      case "system":
      default:
        return <Monitor />;
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
          <Sun />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("dark")}
        >
          <Moon />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("system")}
        >
          <Monitor />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
