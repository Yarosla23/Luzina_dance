import { ArrowDown } from "lucide-react";

import { coaches, homepageStats, siteSettings, studioHighlights } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { DanceMotionField } from "@/components/shared/dance-motion";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function HomeHero() {
  const heroImage = coaches.find((coach) => coach.slug === "yana-luzina")?.gallery[1];

  if (!heroImage) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden border-b border-white/10 pb-12 pt-28 sm:pt-32 lg:pt-36"
    >
      <DanceMotionField className="hidden lg:block" />
      <SiteShell>
        <div className="grid min-h-[calc(100svh-9rem)] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
          <Reveal className="max-w-3xl">
            <p data-hero-reveal className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-warm)] before:h-px before:w-10 before:bg-accent-strong">
              Севастополь · Генерала Острякова, 38
            </p>
            <h1 data-hero-reveal className="mt-6 max-w-[11ch] font-serif text-6xl leading-[0.84] text-white sm:text-8xl lg:text-[7.3rem]">
              Движение, в котором слышно тебя.
            </h1>
            <p data-hero-reveal className="mt-7 max-w-xl border-l-2 border-accent-strong pl-5 text-base leading-7 text-muted sm:text-lg">
              {siteSettings.name} — пространство, где техника, музыкальность и
              собственный характер растут вместе.
            </p>

            <div data-hero-reveal className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/#directions">
                Выбрать направление
              </ButtonLink>
              <ButtonLink href="/camp" variant="secondary" className="justify-center">
                Танцевальный лагерь
              </ButtonLink>
            </div>

            <div data-hero-reveal className="mt-11 grid border-y border-white/14 sm:grid-cols-3">
              {homepageStats.map((item) => (
                <div
                  key={item.label}
                  className="border-b border-white/14 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0"
                >
                  <p className="font-serif text-4xl leading-none text-foreground">
                    {item.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div data-hero-media className="relative will-change-transform">
              <ImagePanel
                image={heroImage}
                title={siteSettings.name}
                description="Техника дает опору. Музыкальность — свободу. Команда помогает не останавливаться."
                className="dance-sweep min-h-[500px] rounded-[2rem_2rem_6rem_2rem] sm:min-h-[680px]"
                priority
                overlay={
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.02),rgba(6,6,6,0.72))]" />
                }
              />

              <div className="absolute right-0 top-8 hidden rounded-l-2xl bg-accent px-5 py-4 text-right lg:block">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">Dance soul</p>
                <p className="mt-1 font-serif text-2xl text-white">Studio / 2026</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div data-hero-reveal className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid gap-x-8 gap-y-3 sm:grid-cols-3">
              {studioHighlights.map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.1em] text-muted before:h-1.5 before:w-1.5 before:bg-accent-strong"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#directions"
              className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-foreground transition-colors hover:text-[color:var(--accent-warm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Смотреть направления
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </SiteShell>
    </section>
  );
}
