import { RootProvider } from "fumadocs-ui/provider";
import { JetBrains_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./global.css";

export const metadata = {
  // PWA
  applicationName: "Rehooks",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Rehooks",
  },
  formatDetection: {
    telephone: false,
  },

  title: {
    default: "Rehooks",
    template: "%s - Rehooks",
  },
  description:
    "An optimized, lightweight, and reusable react production-ready hooks library written in TypeScript.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
} satisfies Metadata;

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="dark:selection:text-fd-foreground selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-800">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
