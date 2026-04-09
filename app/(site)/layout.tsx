import { type ReactNode } from "react";

import { MobileScrollProgress } from "@/components/layout/mobile-scroll-progress";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

type SiteLayoutProps = {
  children: ReactNode;
};

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <MobileScrollProgress />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}
