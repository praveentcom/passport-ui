"use client";

import React from "react";
import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

import { Monitor, Moon, Sun } from "lucide-react";

import { ToggleSelect, ToggleSelectItem } from "../../components/toggle-select";

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
    { id: "light", icon: Sun, label: "Light theme" },
    { id: "dark", icon: Moon, label: "Dark theme" },
    { id: "system", icon: Monitor, label: "System theme" },
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
      {themes.map(({ id, icon: Icon, label }) => (
        <ToggleSelectItem value={id} key={id} aria-label={label}>
          <Icon className="size-4" />
        </ToggleSelectItem>
      ))}
    </ToggleSelect>
  );
}
