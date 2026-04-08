import Image from "next/image";
import Link from "next/link";

import { siteSettings } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 text-left transition-opacity duration-300 hover:opacity-80",
        className,
      )}
    >
      <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-white/12 bg-black/40">
        <Image
          src={siteSettings.logo}
          alt={siteSettings.name}
          className="h-full w-full object-cover"
          sizes="44px"
        />
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-lg leading-none tracking-[0.04em] text-foreground">
          {siteSettings.name}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-[0.24em] text-muted">
          {siteSettings.tagline}
        </span>
      </span>
    </Link>
  );
}
