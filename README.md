# Passport UI

![Passport UI](https://storage.googleapis.com/praveentcom-public/projects/passport-ui/open_graph_dark%402x.png)

[![npm version](https://badge.fury.io/js/passport-ui.svg)](https://badge.fury.io/js/passport-ui)
[![npm downloads](https://img.shields.io/npm/dm/passport-ui.svg)](https://www.npmjs.com/package/passport-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-Docs-ff4785.svg)](https://passportui.com)

Built on top of shadcn/ui's excellent foundation, but designed as a complete library solution. Explore the collection of 75+ premium components, composed with Tailwind CSS, Radix UI, and Motion.

View documentation at [passportui.com](https://passportui.com). If you're someone who loves Storybook, you can view the components at [storybook.passportui.com](https://storybook.passportui.com).

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
@import "passport-ui/hljs-themes.css"; /* for code highlighting */
@import "passport-ui/tailwind-colors.css"; /* for runtime usage */
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

### Layout Containers

- [`ContentContainer`](https://passportui.com/layouts/content-container/)
- [`FooterContainer`](https://passportui.com/layouts/footer-container/)
- [`HeaderContainer`](https://passportui.com/layouts/header-container/)
- [`PageLayout`](https://passportui.com/layouts/page-layout/)

### Providers

- [`ThemeProvider`](https://passportui.com/providers/theme-provider/)

### Components

- [`Accordion`](https://passportui.com/components/accordion/)
- [`Alert`](https://passportui.com/components/alert/)
- [`AlertDialog`](https://passportui.com/components/alert-dialog/)
- [`Analytics`](https://passportui.com/components/analytics/)
- [`AspectRatio`](https://passportui.com/components/aspect-ratio/)
- [`Avatar`](https://passportui.com/components/avatar/)
- [`Badge`](https://passportui.com/components/badge/)
- [`Blockquote`](https://passportui.com/components/blockquote/)
- [`Breadcrumb`](https://passportui.com/components/breadcrumb/)
- [`BulletList`](https://passportui.com/components/bullet-list/)
- [`Button`](https://passportui.com/components/button/)
- [`Calendar`](https://passportui.com/components/calendar/)
- [`Card`](https://passportui.com/components/card/)
- [`Carousel`](https://passportui.com/components/carousel/)
- [`Checkbox`](https://passportui.com/components/checkbox/)
- [`CodeBlock`](https://passportui.com/components/code-block/)
- [`Collapsible`](https://passportui.com/components/collapsible/)
- [`Combobox`](https://passportui.com/components/combobox/)
- [`Command`](https://passportui.com/components/command/)
- [`ContextMenu`](https://passportui.com/components/context-menu/)
- [`DatePicker`](https://passportui.com/components/date-picker/)
- [`Dialog`](https://passportui.com/components/dialog/)
- [`Drawer`](https://passportui.com/components/drawer/)
- [`DropdownMenu`](https://passportui.com/components/dropdown-menu/)
- [`Form`](https://passportui.com/components/form/)
- [`HoverCard`](https://passportui.com/components/hover-card/)
- [`Input`](https://passportui.com/components/input/)
- [`InputOTP`](https://passportui.com/components/input-otp/)
- [`Label`](https://passportui.com/components/label/)
- [`LiveRegion`](https://passportui.com/components/live-region/)
- [`Markdown`](https://passportui.com/components/markdown/)
- [`Menubar`](https://passportui.com/components/menubar/)
- [`Pagination`](https://passportui.com/components/pagination/)
- [`Popover`](https://passportui.com/components/popover/)
- [`PrefetchLink`](https://passportui.com/components/prefetch-link/)
- [`Progress`](https://passportui.com/components/progress/)
- [`RadioGroup`](https://passportui.com/components/radio-group/)
- [`Resizable`](https://passportui.com/components/resizable/)
- [`ScrollArea`](https://passportui.com/components/scroll-area/)
- [`Select`](https://passportui.com/components/select/)
- [`Separator`](https://passportui.com/components/separator/)
- [`Sheet`](https://passportui.com/components/sheet/)
- [`Sidebar`](https://passportui.com/components/sidebar/)
- [`Skeleton`](https://passportui.com/components/skeleton/)
- [`Slider`](https://passportui.com/components/slider/)
- [`Sonner`](https://passportui.com/components/sonner/)
- [`StructuredData`](https://passportui.com/components/structured-data/)
- [`Switch`](https://passportui.com/components/switch/)
- [`Table`](https://passportui.com/components/table/)
- [`Tabs`](https://passportui.com/components/tabs/)
- [`Textarea`](https://passportui.com/components/textarea/)
- [`Toggle`](https://passportui.com/components/toggle/)
- [`ToggleSelect`](https://passportui.com/components/toggle-select/)
- [`Tooltip`](https://passportui.com/components/tooltip/)
- [`VisuallyHidden`](https://passportui.com/components/visually-hidden/)

### Hooks

- [`useIsMobile`](https://passportui.com/hooks/use-mobile/)
- [`useScroll`](https://passportui.com/hooks/use-scroll/)

### Composables

- [`EmptyState`](https://passportui.com/composables/empty-state/)
- [`ThemeButton`](https://passportui.com/composables/theme-button/)
- [`ThemeToggle`](https://passportui.com/composables/theme-toggle/)

### Motion Primitives

- [`AnimatedBackground`](https://passportui.com/motion-primitives/animated-background/)
- [`BlurIn`](https://passportui.com/motion-primitives/blur-in/)
- [`SequentialReveal`](https://passportui.com/motion-primitives/sequential-reveal/)
- [`TypewriterText`](https://passportui.com/motion-primitives/typewriter-text/)
