import type { ReactNode } from "react";

import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: StaticImageData;
  actions?: ReactNode;
  className?: string;
  light?: boolean;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions,
  className,
  light = false,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden pb-14 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-40",
        className,
      )}
    >
      <SiteShell>
        <div className="grid items-end gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          <Reveal className="max-w-3xl">
            <p
              className={cn(
                "text-[11px] uppercase tracking-[0.28em]",
                light ? "text-stone-500" : "text-muted",
              )}
            >
              {eyebrow}
            </p>
            <h1
              className={cn(
                "mt-4 font-serif text-5xl leading-[0.9] tracking-hero sm:text-7xl lg:text-[6rem]",
                light ? "text-stone-950" : "text-gradient",
              )}
            >
              {title}
            </h1>
            <p
              className={cn(
                "mt-6 max-w-2xl text-base leading-7 sm:text-lg",
                light ? "text-stone-600" : "text-muted",
              )}
            >
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>
            ) : null}
          </Reveal>

          {image ? (
            <Reveal delay={0.12}>
              <div className="relative min-h-[360px] overflow-hidden rounded-[2.25rem] border border-white/10 sm:min-h-[500px]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div
                  className={cn(
                    "absolute inset-0",
                    light
                      ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(245,239,232,0.24))]"
                      : "bg-[linear-gradient(180deg,rgba(5,5,5,0.1),rgba(5,5,5,0.48))]",
                  )}
                />
              </div>
            </Reveal>
          ) : null}
        </div>
      </SiteShell>
    </section>
  );
}
