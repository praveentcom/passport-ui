// Client-only exports (components with React hooks, Context, or Radix UI)
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
export { Toggle, toggleVariants } from "./components/ui/toggle";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/ui/tooltip";

// Motion Primitives (all client-only)
export { AnimatedBackground, type AnimatedBackgroundProps } from "./components/motion-primitives/animated-background";
export { BlurIn } from "./components/motion-primitives/blur-in";
export { BorderTrail } from "./components/motion-primitives/border-trail";
export { InView } from "./components/motion-primitives/in-view";
export { ProgressiveBlur } from "./components/motion-primitives/progressive-blur";

// Theme Components (client-only)
export { ThemeProvider } from "./components/theme/theme-provider";
export { ThemeToggle } from "./components/theme/theme-toggle";

// Other client components
export { PageWithStructuredData, BackButton, BulletList, MetaCard } from "./components/ui/page-tools";
export { PrefetchLink, type PrefetchLinkProps } from "./components/ui/prefetch-link";
export { PlaceholderCard, type PlaceholderCardProps } from "./components/ui/placeholder-card";
