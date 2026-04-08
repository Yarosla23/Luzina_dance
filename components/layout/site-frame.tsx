import { type ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-white/[0.05]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-px bg-white/[0.05]" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
