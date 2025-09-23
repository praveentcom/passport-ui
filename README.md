# Passport UI

![Passport UI](./src/images/open_graph@2x.png)

[![npm version](https://badge.fury.io/js/passport-ui.svg)](https://badge.fury.io/js/passport-ui)
[![npm downloads](https://img.shields.io/npm/dm/passport-ui.svg)](https://www.npmjs.com/package/passport-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Storybook](https://img.shields.io/badge/Storybook-Docs-ff4785.svg)](https://passportui.com)

A React UI component library with motion primitives and theme support built with TypeScript, Tailwind CSS v4, and shadcn/ui components.

View components and documentation at [storybook.passportui.com](https://storybook.passportui.com). Installation guide available at [passportui.com](https://passportui.com).

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

### Layouts

- [`ContentContainer`](https://passportui.com/?path=/docs/layouts-contentcontainer)
- [`FooterContainer`](https://passportui.com/?path=/docs/layouts-footercontainer)
- [`HeaderContainer`](https://passportui.com/?path=/docs/layouts-headercontainer)
- [`PageLayout`](https://passportui.com/?path=/docs/layouts-pagelayout)
- [`SidebarContainer`](https://passportui.com/?path=/docs/layouts-sidebarcontainer)

### Providers

- [`ThemeProvider`](https://passportui.com/?path=/docs/providers-themeprovider)

### Components

- [`Accordion`](https://passportui.com/?path=/docs/components-accordion)
- [`Alert`](https://passportui.com/?path=/docs/components-alert)
- [`AlertDialog`](https://passportui.com/?path=/docs/components-alertdialog)
- [`Analytics`](https://passportui.com/?path=/docs/components-analytics)
- [`AspectRatio`](https://passportui.com/?path=/docs/components-aspectratio)
- [`Avatar`](https://passportui.com/?path=/docs/components-avatar)
- [`Badge`](https://passportui.com/?path=/docs/components-badge)
- [`Blockquote`](https://passportui.com/?path=/docs/components-blockquote)
- [`Breadcrumb`](https://passportui.com/?path=/docs/components-breadcrumb)
- [`BulletList`](https://passportui.com/?path=/docs/components-bulletlist)
- [`Button`](https://passportui.com/?path=/docs/components-button)
- [`Calendar`](https://passportui.com/?path=/docs/components-calendar)
- [`Card`](https://passportui.com/?path=/docs/components-card)
- [`Carousel`](https://passportui.com/?path=/docs/components-carousel)
- [`Checkbox`](https://passportui.com/?path=/docs/components-checkbox)
- [`CodeBlock`](https://passportui.com/?path=/docs/components-codeblock)
- [`Collapsible`](https://passportui.com/?path=/docs/components-collapsible)
- [`Combobox`](https://passportui.com/?path=/docs/components-combobox)
- [`Command`](https://passportui.com/?path=/docs/components-command)
- [`ContextMenu`](https://passportui.com/?path=/docs/components-contextmenu)
- [`DatePicker`](https://passportui.com/?path=/docs/components-datepicker)
- [`Dialog`](https://passportui.com/?path=/docs/components-dialog)
- [`Drawer`](https://passportui.com/?path=/docs/components-drawer)
- [`DropdownMenu`](https://passportui.com/?path=/docs/components-dropdownmenu)
- [`Form`](https://passportui.com/?path=/docs/components-form)
- [`HoverCard`](https://passportui.com/?path=/docs/components-hovercard)
- [`Input`](https://passportui.com/?path=/docs/components-input)
- [`InputOTP`](https://passportui.com/?path=/docs/components-inputotp)
- [`Label`](https://passportui.com/?path=/docs/components-label)
- [`LiveRegion`](https://passportui.com/?path=/docs/components-liveregion)
- [`Markdown`](https://passportui.com/?path=/docs/components-markdown)
- [`Menubar`](https://passportui.com/?path=/docs/components-menubar)
- [`Pagination`](https://passportui.com/?path=/docs/components-pagination)
- [`Popover`](https://passportui.com/?path=/docs/components-popover)
- [`PrefetchLink`](https://passportui.com/?path=/docs/components-prefetchlink)
- [`Progress`](https://passportui.com/?path=/docs/components-progress)
- [`RadioGroup`](https://passportui.com/?path=/docs/components-radiogroup)
- [`Resizable`](https://passportui.com/?path=/docs/components-resizable)
- [`ScrollArea`](https://passportui.com/?path=/docs/components-scrollarea)
- [`Select`](https://passportui.com/?path=/docs/components-select)
- [`Separator`](https://passportui.com/?path=/docs/components-separator)
- [`Sheet`](https://passportui.com/?path=/docs/components-sheet)
- [`Sidebar`](https://passportui.com/?path=/docs/components-sidebar)
- [`Skeleton`](https://passportui.com/?path=/docs/components-skeleton)
- [`Slider`](https://passportui.com/?path=/docs/components-slider)
- [`Sonner`](https://passportui.com/?path=/docs/components-sonner)
- [`StructuredData`](https://passportui.com/?path=/docs/components-structureddata)
- [`Switch`](https://passportui.com/?path=/docs/components-switch)
- [`Table`](https://passportui.com/?path=/docs/components-table)
- [`Tabs`](https://passportui.com/?path=/docs/components-tabs)
- [`Textarea`](https://passportui.com/?path=/docs/components-textarea)
- [`Toggle`](https://passportui.com/?path=/docs/components-toggle)
- [`ToggleSelect`](https://passportui.com/?path=/docs/components-toggleselect)
- [`Tooltip`](https://passportui.com/?path=/docs/components-tooltip)
- [`VisuallyHidden`](https://passportui.com/?path=/docs/components-visuallyhidden)

### Hooks

- [`useIsMobile`](https://passportui.com/?path=/docs/hooks-useismobile)
- [`useScroll`](https://passportui.com/?path=/docs/hooks-usescroll)

### Composables

- [`EmptyState`](https://passportui.com/?path=/docs/composables-emptystate)
- [`MobileSidebarTrigger`](https://passportui.com/?path=/docs/composables-mobilesidebartrigger)
- [`ThemeButton`](https://passportui.com/?path=/docs/composables-themebutton)
- [`ThemeToggle`](https://passportui.com/?path=/docs/composables-themetoggle)

### Motion Primitives

- [`AnimatedBackground`](https://passportui.com/?path=/docs/motion-primitives-animatedbackground)
- [`BlurIn`](https://passportui.com/?path=/docs/motion-primitives-blurin)
- [`SequentialReveal`](https://passportui.com/?path=/docs/motion-primitives-sequentialreveal)
- [`TypewriterText`](https://passportui.com/?path=/docs/motion-primitives-typewritertext)
