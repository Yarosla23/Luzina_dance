import { MapPinned, Navigation } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

const studioAddress = "Севастополь, проспект Генерала Острякова, 38";
const yandexMapsUrl = "https://yandex.ru/maps/-/CTDxBM0f";
const yandexWidgetUrl =
  "https://yandex.ru/map-widget/v1/?ll=33.517631%2C44.583251&mode=search&oid=51244316278&ol=biz&z=18.45";

export function LocationSection() {
  return (
    <section id="location" data-home-chapter className="section-band pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Локация"
            title="Встретимся в студии."
            description="Мы находимся на проспекте Генерала Острякова, 38. Откройте маршрут в Яндекс Картах или напишите нам перед первым занятием."
          />
        </Reveal>

        <div data-scroll-reveal className="mt-10 grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
          <Reveal>
            <div className="surface-panel h-full p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-accent text-white">
                <MapPinned className="h-5 w-5" />
              </div>
              <p className="mt-6 text-xs font-semibold uppercase text-muted">
                Адрес студии
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-foreground">
                {studioAddress}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Перед первым визитом уточните время своей группы — мы подскажем,
                как найти вход и что взять с собой.
              </p>

              <div className="mt-8">
                <ButtonLink href={yandexMapsUrl} target="_blank" rel="noreferrer">
                  Открыть в Яндекс Картах
                </ButtonLink>
              </div>

              <div className="mt-8 border-t border-white/14 pt-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/25 text-foreground">
                    <Navigation className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-foreground">Студия уже отмечена на карте</p>
                    <p className="mt-1 text-xs uppercase text-muted">
                      Танцевальная Душа · Генерала Острякова 38
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] border border-white/14 bg-[#13090c] p-2">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
                <iframe
                  title="Яндекс Карта студии Танцевальная Душа"
                  src={yandexWidgetUrl}
                  width="100%"
                  height="520"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block w-full border-0"
                />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(7,7,7,0.18),rgba(7,7,7,0.44))]" />
                <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/15 bg-black/80 px-4 py-3 sm:left-6 sm:top-6">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="absolute h-4 w-4 rounded-full bg-[#b21818]/30 blur-[4px]" />
                      <span className="relative block h-3 w-3 rounded-full border border-white bg-[#b21818]" />
                    </span>
                    <p className="text-xs font-semibold uppercase text-white/80">
                      Студия Танцевальная Душа
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
