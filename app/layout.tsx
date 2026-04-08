import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { type ReactNode } from "react";

import { SiteFrame } from "@/components/layout/site-frame";
import { siteSettings } from "@/lib/site-data";

import "./globals.css";

const fontSans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const fontSerif = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
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
        className={`${fontSans.variable} ${fontSerif.variable} bg-background font-sans text-foreground antialiased`}
      >
        <SiteFrame>{children}</SiteFrame>
      </body>
    </html>
  );
}
