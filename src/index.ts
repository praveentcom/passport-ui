// Utility functions
export { cn } from "./lib/utils";

// UI Components
export { Badge, badgeVariants } from "./components/ui/badge";
export { Button, buttonVariants } from "./components/ui/button";
export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
export { Label } from "./components/ui/label";
export { Separator } from "./components/ui/separator";
export { StructuredData } from "./components/ui/structured-data";
export { Toggle, toggleVariants } from "./components/ui/toggle";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

// Motion Primitives
export { AnimatedBackground } from "./components/motion-primitives/animated-background";
export { BlurIn } from "./components/motion-primitives/blur-in";
export { BorderTrail } from "./components/motion-primitives/border-trail";
export { InView } from "./components/motion-primitives/in-view";
export { ProgressiveBlur } from "./components/motion-primitives/progressive-blur";

// Theme Components
export { ThemeProvider } from "./components/theme/theme-provider";
export { ThemeToggle } from "./components/theme/theme-toggle";

// Page Tools
export { PageWithStructuredData } from "./components/ui/page-tools";
export { BackButton } from "./components/ui/page-tools";
export { BulletList } from "./components/ui/page-tools";
export { MetaCard } from "./components/ui/page-tools";

// Prefetch Link
export { PrefetchLink } from "./components/ui/prefetch-link";

// Placeholder Card
export { PlaceholderCard } from "./components/ui/placeholder-card";

// Types (if any are exported from the components)
export type { AnimatedBackgroundProps } from "./components/motion-primitives/animated-background";
export type { PrefetchLinkProps } from "./components/ui/prefetch-link";
export type { PlaceholderCardProps } from "./components/ui/placeholder-card";