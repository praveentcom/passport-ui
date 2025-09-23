import type { Metadata } from "next";

import { Analytics as VercelAnalytics } from "@vercel/analytics/next";

import { Analytics } from "../../src/components/analytics";
import { ThemeProvider } from "../../src/providers/theme-provider";
import { ClientLayout } from "../components/client-layout";
import { SITE_CONFIG } from "../constants";
import "./globals.css";

export const metadata: Metadata = {
  title: "Passport UI - Docs",
  description:
    "Docs for Passport UI - a React UI component library built on top of shadcn/ui with Tailwind CSS, Radix UI, and Framer Motion.",
  keywords: [
    "Passport UI",
    "React Components",
    "Tailwind CSS",
    "Radix UI",
    "Framer Motion",
    "Next.js",
    "Component Library",
    "Design System",
    "Installation Guide",
    "Docs",
    "Documentation",
  ],
  authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
  creator: SITE_CONFIG.author.name,
  publisher: "Passport UI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://passportui.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Passport UI - Docs",
    description:
      "Docs for Passport UI - a React UI component library built on top of shadcn/ui with Tailwind CSS, Radix UI, and Framer Motion.",
    url: "https://passportui.com",
    siteName: "Passport UI",
    images: [
      {
        url: "https://storage.googleapis.com/praveentcom-projects/passport-ui/open_graph%402x.png",
        width: 1200,
        height: 630,
        alt: "Passport UI - Docs",
      },
      {
        url: "https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_dark%401x.png",
        width: 512,
        height: 512,
        alt: "Passport UI - Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Passport UI - Docs",
    description: "Docs for Passport UI - a React UI component library built on top of shadcn/ui.",
    images: [
      "https://storage.googleapis.com/praveentcom-projects/passport-ui/open_graph%402x.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png",
    shortcut:
      "https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png",
    apple:
      "https://storage.googleapis.com/praveentcom-projects/passport-ui/logo_external_light%401x.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics
          providers={{
            googleAnalytics: {
              trackingId: "G-Z3S77KHWEJ",
            },
          }}
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
        <VercelAnalytics />
      </body>
    </html>
  );
}
