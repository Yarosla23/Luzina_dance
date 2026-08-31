import { type ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
      <div className="pointer-events-none absolute inset-0 leopard-pattern opacity-25" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
