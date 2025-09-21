# Passport UI

![Passport UI](./src/images/open_graph@2x.png)

[![npm version](https://badge.fury.io/js/passport-ui.svg)](https://badge.fury.io/js/passport-ui)
[![npm downloads](https://img.shields.io/npm/dm/passport-ui.svg)](https://www.npmjs.com/package/passport-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-Docs-ff4785.svg)](https://passportui.com)

A React UI component library with motion primitives and theme support built with TypeScript, Tailwind CSS v4, and shadcn/ui components.

View components and documentation at [passportui.com](https://passportui.com). Installation guide available at [install.passportui.com](https://install.passportui.com).

## Installation

```bash
npm install passport-ui
```

### Using PostCSS

Add the PostCSS plugin to your `postcss.config.mjs`:

```js
export default {
  plugins: ["@tailwindcss/postcss"],
};
```

### Import Styles

Import the library styles in your main CSS file:

```css
@source "../../node_modules/passport-ui/src"
@import "passport-ui/styles.css";

/* Optional styles based on requirement */
@import "passport-ui/hljs-themes.css"; /* Optional: for code highlighting */
@import "passport-ui/tailwind-colors.css"; /* Optional: dynamic usage of tailwind colors */
```

- For themed syntax highlighting in `CodeBlock` and `Markdown` components, import the theme styles.
- For dynamic usage of tailwind colors, import the tailwind colors styles.

## Import Pattern

Passport UI uses **individual component exports** for optimal tree-shaking and React Server Components compatibility. Import components individually:

```tsx
import { Button } from "passport-ui/button";
import { Card, CardContent } from "passport-ui/card";

function App() {
  return (
    <Card>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

## With Theme Support

```tsx
import { ThemeButton } from "passport-ui/theme-button";
import { ThemeProvider } from "passport-ui/theme-provider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeButton />
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

## Available Themes

- `Light` - Light theme
- `Dark` - Dark theme
- `System` - System theme

Use `ThemeProvider` to wrap your app and `ThemeButton` to toggle between themes.

## Available Components
