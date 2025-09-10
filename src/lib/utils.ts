import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes with clsx and tailwind-merge
 *
 * This function combines the power of clsx for conditional class names with
 * tailwind-merge to intelligently merge conflicting Tailwind classes.
 *
 * @param inputs - Array of class values (strings, objects, arrays, etc.)
 * @returns A merged and deduplicated string of CSS classes
 *
 * @example
 * ```tsx
 * cn("px-2 py-1", "px-4") // Returns "py-1 px-4" (px-2 is overridden)
 * cn("text-red-500", condition && "text-blue-500") // Conditionally applies classes
 * cn({ "bg-primary": isActive, "bg-secondary": !isActive }) // Object syntax
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
