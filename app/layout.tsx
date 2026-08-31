import type { Metadata } from "next";
import localFont from "next/font/local";
import { type ReactNode } from "react";

import { SiteFrame } from "@/components/layout/site-frame";
import { siteSettings } from "@/lib/site-data";

import "lenis/dist/lenis.css";
import "./globals.css";

const montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat-Variable.ttf",
      style: "normal",
      weight: "100 900",
    },
    {
      path: "./fonts/Montserrat-Italic-Variable.ttf",
      style: "italic",
      weight: "100 900",
    },
  ],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luzina-studio.vercel.app"),
  title: {
    default: `${siteSettings.name} | ${siteSettings.tagline}`,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.description,
  keywords: [
    "танцевальная студия",
    "уроки танцев",
    "танцевальный лагерь",
    "мерч студии",
    "hip-hop",
    "контемп",
  ],
  openGraph: {
    title: `${siteSettings.name} | ${siteSettings.tagline}`,
    description: siteSettings.description,
    type: "website",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className={montserrat.variable} suppressHydrationWarning>
      <body className="bg-background font-sans text-foreground antialiased">
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
