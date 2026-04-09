import { campInfo, siteSettings, socialLinks } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function CampFinalCta() {
  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <SiteShell>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem_2rem_4rem_2rem] border border-white/14 bg-accent p-6 sm:p-8 lg:p-10">
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">
                  Следующая смена
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-[0.93] text-foreground sm:text-5xl lg:text-6xl">
                  {campInfo.cta.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-white/75 sm:text-lg">
                  {campInfo.cta.description}
                </p>

                <div className="mt-8 grid gap-3 text-sm leading-7 text-white sm:grid-cols-3">
                  <div className="border-t border-white/30 px-1 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                      Даты
                    </p>
                    <p className="mt-2">{campInfo.placeholders.dates}</p>
                  </div>
                  <div className="border-t border-white/30 px-1 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                      Стоимость
                    </p>
                    <p className="mt-2">{campInfo.placeholders.price}</p>
                  </div>
                  <div className="border-t border-white/30 px-1 py-4">
                    <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/60">
                      Локация
                    </p>
                    <p className="mt-2">{campInfo.placeholders.location}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-white/75">
                  {siteSettings.signUpNote}
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:min-w-[16rem]">
                <ButtonLink href="/#contacts" className="justify-center">
                  Оставить заявку
                </ButtonLink>
                <ButtonLink
                  href={socialLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="justify-center border-white/30 bg-transparent text-white"
                >
                  Узнать детали
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </SiteShell>
    </section>
  );
}
