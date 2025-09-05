# Passport UI

A modern, customizable UI component library with motion primitives and theme support built with React, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Installation

```bash
npm install passport-ui @tailwindcss/postcss tailwindcss
```

## Usage

### Setup PostCSS

Add the PostCSS plugin to your `postcss.config.mjs`:

```js
export default {
  plugins: ["@tailwindcss/postcss"],
};
```

### Import Styles

Import the library styles in your main CSS file:

```css
@import "passport-ui/styles.css";
```

### Import Components

```tsx
import { Button, Card, ThemeProvider } from 'passport-ui/client';
```

### Basic Example

```tsx
import { Button, Card, CardContent, CardHeader, CardTitle } from 'passport-ui/client';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}
```

### With Theme Support

```tsx
import { ThemeProvider, ThemeToggle } from 'passport-ui/client';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <ThemeToggle />
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

## Components

### UI Components
- `Button` - Interactive button with variants
- `Badge` - Status and category indicators
- `Card` - Content containers with optional border trail
- `Label` - Form labels
- `Separator` - Visual dividers
- `Toggle` - Toggle switches
- `Tooltip` - Contextual information
- `DropdownMenu` - Dropdown menus and actions

### Motion Primitives
- `AnimatedBackground` - Animated background transitions
- `BlurIn` - Blur-in animation effects
- `BorderTrail` - Animated border trails
- `InView` - Trigger animations on scroll
- `ProgressiveBlur` - Progressive blur effects

### Theme Components
- `ThemeProvider` - Theme context provider
- `ThemeToggle` - Theme switcher component

## Framework Integration

### Next.js

For Next.js projects, add the PostCSS configuration and import styles in your global CSS file:

```css
/* app/globals.css or styles/globals.css */
@import "passport-ui/styles.css";

/* Your custom styles */
```

### Vite

For Vite projects, you can use either PostCSS or the Vite plugin:

**Option 1: PostCSS (recommended)**
```js
// postcss.config.mjs
export default {
  plugins: ["@tailwindcss/postcss"],
};
```

**Option 2: Vite Plugin**
```js
// vite.config.ts
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
});
```

### Tailwind CSS v4 Features

This library leverages Tailwind CSS v4's new features:
- **CSS-first configuration** - No `tailwind.config.js` required
- **Automatic content detection** - Template files discovered automatically  
- **Built-in import support** - No additional PostCSS plugins needed
- **Modern CSS features** - Uses cascade layers, registered custom properties, and `color-mix()`

## Development

This package is built with:
- React 18+
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Framer Motion (motion)
- next-themes

## License

MIT © Praveen Thirumurugan
