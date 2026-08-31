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
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  actions,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/10 pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40",
        className,
      )}
    >
      <SiteShell>
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-warm)] before:h-px before:w-10 before:bg-accent-strong">
              {eyebrow}
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.88] text-white sm:text-7xl lg:text-[6.25rem]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              {description}
            </p>
            {actions ? (
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">{actions}</div>
            ) : null}
          </Reveal>

          {image ? (
            <Reveal delay={0.12}>
              <div className="dance-sweep relative min-h-[360px] overflow-hidden rounded-[2rem_2rem_4.5rem_2rem] border border-white/15 bg-[#13090c] sm:min-h-[520px] lg:rounded-[2.5rem_2.5rem_6rem_2.5rem]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  placeholder="blur"
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,7,0.05),rgba(8,6,7,0.58))]" />
                <div className="absolute inset-y-10 left-0 w-1.5 rounded-r-full bg-accent" />
              </div>
            </Reveal>
          ) : null}
        </div>
      </SiteShell>
    </section>
  );
}
