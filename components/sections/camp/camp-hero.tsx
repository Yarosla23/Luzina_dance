import Image from "next/image";

import { campInfo } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { DanceMotionField } from "@/components/shared/dance-motion";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function CampHero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 editorial-grid opacity-25" />
      <DanceMotionField variant="compact" className="hidden lg:block" />

      <SiteShell>
        <div className="relative grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <Reveal className="max-w-3xl">
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-warm)] before:h-px before:w-10 before:bg-accent-strong">
              Dance Soul Camp · 2025–2026
            </p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.86] text-white sm:text-7xl lg:text-[6.3rem]">
              {campInfo.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#e2d8ce] sm:text-lg">
              {campInfo.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/camp#program">Смотреть программу</ButtonLink>
              <ButtonLink href="/#contacts" variant="secondary">
                Забронировать
              </ButtonLink>
              <ButtonLink href="/camp#gallery" variant="secondary">
                Галерея
              </ButtonLink>
            </div>

            <div className="mt-10 grid border-y border-white/14 sm:grid-cols-3">
              {campInfo.heroStats.map((item, index) => (
                <Reveal
                  key={item.label}
                  delay={0.08 * (index + 1)}
                  className="h-full"
                >
                  <div className="h-full border-b border-white/14 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:last:border-r-0">
                    <p className="font-serif text-3xl text-foreground">{item.value}</p>
                    <p className="mt-2 text-xs uppercase text-[#e2d8ce]">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="relative">
              <div className="dance-sweep relative min-h-[420px] overflow-hidden rounded-[2rem_2rem_5rem_2rem] border border-white/15 bg-[#13090c] sm:min-h-[540px]">
                <Image
                  src={campInfo.heroImage}
                  alt="Атмосфера танцевального лагеря Dance Soul Camp"
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.08),rgba(10,10,10,0.45))]" />

                <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/80 px-4 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md sm:px-6">
                  Classes / Team / Movement
                </div>
              </div>

              <div className="mt-3 rounded-3xl border border-white/15 bg-accent p-4 sm:p-5 xl:absolute xl:bottom-7 xl:right-7 xl:mt-0 xl:max-w-[18rem]">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                  Ритм смены
                </p>
                <p className="mt-3 font-serif text-3xl leading-none text-white">
                  Общий темп.
                </p>
                <p className="mt-2 text-sm leading-6 text-white/80">
                  Дневные классы, съемки, общение и время восстановиться между занятиями.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
