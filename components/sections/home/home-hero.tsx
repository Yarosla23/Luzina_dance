import { ArrowDown, CalendarDays, Sparkles, Users2 } from "lucide-react";

import { homepageStats, siteSettings, studioHighlights } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { DanceMotionField } from "@/components/shared/dance-motion";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-20 lg:pt-36"
    >
      <DanceMotionField className="hidden lg:block" />
      <SiteShell>
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase text-[color:var(--accent-warm)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Современная студия танцев
            </div>
            <h1 className="mt-5 max-w-[12ch] font-serif text-5xl leading-[0.92] tracking-hero text-gradient sm:text-7xl lg:text-[6.6rem]">
              {siteSettings.name}: танец, стиль и команда.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Детские и подростковые группы, контемп, hip-hop, лагерные смены
              и мерч студии в одном живом пространстве. Первый экран сразу
              показывает бренд, движение и следующий шаг для записи.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/kids" className="justify-center">
                Детские группы
              </ButtonLink>
              <ButtonLink href="/camp" variant="secondary" className="justify-center">
                Танцевальный лагерь
              </ButtonLink>
              <ButtonLink href="/#contacts" variant="secondary" className="justify-center">
                Записаться
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {homepageStats.map((item) => (
                <div
                  key={item.label}
                  className="liquid-glass rounded-2xl p-5"
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
            <div className="relative">
              <ImagePanel
                image={siteSettings.logo}
                title={siteSettings.tagline}
                description="Айдентика, классы, команда и визуальный характер студии собраны в цельную landing-page систему."
                className="dance-sweep min-h-[420px] sm:min-h-[620px]"
                priority
                overlay={
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.02),rgba(6,6,6,0.72))]" />
                }
              />

              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:pointer-events-none xl:absolute xl:inset-x-4 xl:bottom-4 xl:top-4 xl:mt-0 xl:block">
                <div className="liquid-glass rounded-2xl p-4 xl:absolute xl:left-0 xl:top-0 xl:max-w-[15rem]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Users2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Community first</p>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        Группы, съемки, лагерь и события.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl p-4 xl:absolute xl:bottom-0 xl:right-0 xl:max-w-[17rem]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <CalendarDays className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Запись в лс</p>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        Быстрый переход к контактам и расписанию.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap gap-2">
              {studioHighlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#directions"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase text-foreground transition-colors hover:text-[color:var(--accent-warm)]"
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
