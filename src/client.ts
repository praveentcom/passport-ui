// UI components
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/accordion";
export { Alert, alertVariants, type AlertProps } from "./components/alert";
export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "./components/alert-dialog";
export { AspectRatio } from "./components/aspect-ratio";
export { Badge, badgeVariants } from "./components/badge";
export { Button, buttonVariants } from "./components/button";
export { Card, CardContent, CardFooter } from "./components/card";
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
} from "./components/dropdown-menu";
export { Label } from "./components/label";
export { Separator } from "./components/separator";
export { Toggle, toggleVariants } from "./components/toggle";
export {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./components/tooltip";
export { StructuredData } from "./page/structured-data";

// Widget Components
export { BackButton } from "./widgets/back-button";
export { BulletList } from "./widgets/bullet-list";
export { MetaContainer } from "./widgets/meta-container";
export {
  PlaceholderCard,
  type PlaceholderCardProps,
} from "./widgets/placeholder-card";

// Motion Primitives
export {
  AnimatedBackground,
  type AnimatedBackgroundProps,
} from "./motion-primitives/animated-background";
export { BlurIn } from "./motion-primitives/blur-in";
export { BorderTrail } from "./motion-primitives/border-trail";

// Theme Components
export { ThemeProvider } from "./theme/theme-provider";
export { ThemeToggle } from "./theme/theme-toggle";

// Page components
export { PrefetchLink, type PrefetchLinkProps } from "./page/prefetch-link";
export { StructuredPage } from "./page/structured-page";
