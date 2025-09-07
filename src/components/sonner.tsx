import { useTheme } from "next-themes";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--success-bg": "var(--success-muted)",
          "--success-text": "var(--success-muted-foreground)",
          "--success-border": "var(--success)",
          "--error-bg": "var(--destructive-muted)",
          "--error-text": "var(--destructive-muted-foreground)",
          "--error-border": "var(--destructive)",
          "--warning-bg": "var(--warning-muted)",
          "--warning-text": "var(--warning-muted-foreground)",
          "--warning-border": "var(--warning)",
          "--info-bg": "var(--info-muted)",
          "--info-text": "var(--info-muted-foreground)",
          "--info-border": "var(--info)",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
