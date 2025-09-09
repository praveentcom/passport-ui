import type { Metadata } from 'next'
import { ThemeProvider } from '../../src/providers/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Install Passport UI',
  description: 'Installation guide and documentation for Passport UI component library',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
