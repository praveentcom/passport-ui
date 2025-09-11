import * as React from "react";

import { cn } from "@/lib/utils";

export interface LiveRegionProps extends React.ComponentProps<"div"> {
  /**
   * The politeness level of the live region
   * @default "polite"
   */
  politeness?: "polite" | "assertive" | "off";
  /**
   * Whether the live region should be visually hidden
   * @default true
   */
  visuallyHidden?: boolean;
  /**
   * The message to announce to screen readers
   */
  message?: string;
  /**
   * Whether to announce atomic changes (entire content) or just additions
   * @default false
   */
  atomic?: boolean;
}

/**
 * A live region component for announcing dynamic content changes to screen readers.
 *
 * ## Features
 * - Announces content changes to assistive technologies
 * - Configurable politeness levels (polite, assertive, off)
 * - Option to be visually hidden or visible
 * - Atomic announcements support
 *
 * ## Usage
 * Use live regions to announce:
 * - Form validation errors
 * - Loading states and completion
 * - Dynamic content updates
 * - Status messages
 *
 * ## Accessibility
 * Live regions provide crucial feedback for screen reader users about dynamic content changes.
 */
function LiveRegion({
  className,
  politeness = "polite",
  visuallyHidden = true,
  message,
  atomic = false,
  children,
  ...props
}: LiveRegionProps) {
  return (
    <div
      role="status"
      aria-live={politeness}
      aria-atomic={atomic}
      data-slot="live-region"
      className={cn(visuallyHidden && "sr-only", className)}
      {...props}
    >
      {message || children}
    </div>
  );
}

/**
 * A hook for managing live region announcements
 * @param politeness - The politeness level for announcements
 * @returns A function to announce messages
 */
export function useLiveRegion(politeness: "polite" | "assertive" = "polite") {
  const [message, setMessage] = React.useState<string>("");
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const announce = React.useCallback((newMessage: string, delay = 100) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setMessage("");

    timeoutRef.current = setTimeout(() => {
      setMessage(newMessage);
    }, delay);
  }, []);

  const clear = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setMessage("");
  }, []);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const LiveRegionComponent = React.useMemo(
    () => <LiveRegion politeness={politeness} message={message} />,
    [politeness, message]
  );

  return {
    announce,
    clear,
    message,
    LiveRegion: LiveRegionComponent,
  };
}

export { LiveRegion };
