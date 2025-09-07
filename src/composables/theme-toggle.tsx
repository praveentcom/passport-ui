"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { ToggleSelect, ToggleSelectItem } from "@/components/toggle-select";

export interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themes = [
    { id: "light", icon: Sun },
    { id: "dark", icon: Moon },
    { id: "system", icon: Monitor },
  ];

  return (
    <ToggleSelect
      className={className}
      value={theme}
      onValueChange={(newTheme) => {
        if (newTheme) {
          setTheme(newTheme);
        }
      }}
    >
      {themes.map(({ id, icon: Icon }) => (
        <ToggleSelectItem value={id} key={id}>
          <Icon className="size-4" />
        </ToggleSelectItem>
      ))}
    </ToggleSelect>
  );
}
