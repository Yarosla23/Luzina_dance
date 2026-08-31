import Image from "next/image";
import Link from "next/link";

import { siteSettings } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
};

export function Logo({ className, markClassName }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-h-11 items-center gap-3 text-left transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
        className,
      )}
    >
      <span
        className={cn(
          "flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-black",
          markClassName,
        )}
      >
        <Image
          src={siteSettings.logo}
          alt={siteSettings.name}
          placeholder="blur"
          className="h-full w-full object-cover"
          sizes="44px"
        />
      </span>
      <span className="flex flex-col">
        <span className="font-serif text-lg leading-none text-white">
          {siteSettings.name}
        </span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
          {siteSettings.tagline}
        </span>
      </span>
    </Link>
  );
}
