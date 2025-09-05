"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle({ minimal = false }: { minimal?: boolean }) {
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
        return <Sun className="size-4" />;
      case "dark":
        return <Moon className="size-4" />;
      case "system":
      default:
        return <Monitor className="size-4" />;
    }
  };

  const getLabel = () => {
    switch (theme) {
      case "light":
        return "Light mode";
      case "dark":
        return "Dark mode";
      case "system":
      default:
        return "System preference";
    }
  };

  if (minimal) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="rounded-xs text-muted-foreground hover:text-foreground p-2 transition-all duration-200 ease-out cursor-pointer hover:bg-card hover:dark:bg-card/50 border border-transparent hover:border-border/75">
            {getIcon()}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="text-muted-foreground font-medium text-sm"
        >
          <DropdownMenuItem
            className="flex gap-2"
            onClick={() => setTheme("light")}
          >
            <Sun className="size-4" />
            <span>Light</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-2"
            onClick={() => setTheme("dark")}
          >
            <Moon className="size-4" />
            <span>Dark</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex gap-2"
            onClick={() => setTheme("system")}
          >
            <Monitor className="size-4" />
            <span>System</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-6 w-auto px-2 gap-1.5 text-muted-foreground hover:text-foreground cursor-pointer"
          title={`Current: ${getLabel()}. Click to change theme.`}
        >
          {getIcon()}
          <span className="text-xs font-medium">
            {getLabel().replace(" mode", "").replace(" preference", "")}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="text-muted-foreground font-medium text-sm"
      >
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("light")}
        >
          <Sun className="size-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("dark")}
        >
          <Moon className="size-4" />
          <span className="text-muted-foreground">Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex gap-2"
          onClick={() => setTheme("system")}
        >
          <Monitor className="size-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
