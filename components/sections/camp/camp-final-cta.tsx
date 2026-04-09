import { campInfo, siteSettings, socialLinks } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function CampFinalCta() {
  return (
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <SiteShell>
        <Reveal>
          <div className="liquid-glass relative overflow-hidden rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase text-[#fff0c9]">
                  Final CTA
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-[0.93] text-foreground sm:text-5xl lg:text-6xl">
                  {campInfo.cta.title}
                </h2>
                <p className="mt-5 text-base leading-7 text-[#f0e6dd] sm:text-lg">
                  {campInfo.cta.description}
                </p>

                <div className="mt-8 grid gap-3 text-sm leading-7 text-[#fff7ee] sm:grid-cols-3">
                  <div className="rounded-xl border border-white/12 bg-black/15 px-4 py-4">
                    <p className="text-xs font-semibold uppercase text-[#fff0c9]">
                      Даты
                    </p>
                    <p className="mt-2">{campInfo.placeholders.dates}</p>
                  </div>
                  <div className="rounded-xl border border-white/12 bg-black/15 px-4 py-4">
                    <p className="text-xs font-semibold uppercase text-[#fff0c9]">
                      Стоимость
                    </p>
                    <p className="mt-2">{campInfo.placeholders.price}</p>
                  </div>
                  <div className="rounded-xl border border-white/12 bg-black/15 px-4 py-4">
                    <p className="text-xs font-semibold uppercase text-[#fff0c9]">
                      Локация
                    </p>
                    <p className="mt-2">{campInfo.placeholders.location}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm leading-7 text-[#fff7ee]/80">
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
                  className="justify-center border-white/20 bg-black/15 text-[#fff7ee]"
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
