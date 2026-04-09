import type { Metadata } from "next";
import { type ReactNode } from "react";

import { SiteFrame } from "@/components/layout/site-frame";
import { siteSettings } from "@/lib/site-data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luzina-studio.vercel.app"),
  title: {
    default: `${siteSettings.name} | ${siteSettings.tagline}`,
    template: `%s | ${siteSettings.name}`,
  },
  description: siteSettings.description,
  keywords: [
    "танцевальная студия",
    "детская хореография",
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
    <html lang="ru" suppressHydrationWarning>
      <body
        className="bg-background font-sans text-foreground antialiased"
      >
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
