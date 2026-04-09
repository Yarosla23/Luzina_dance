import { MapPinned, Navigation } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

const studioAddress = "Севастополь, ул. Степаненко, 8";
const mapQuery = encodeURIComponent(studioAddress);
const yandexMapsUrl = `https://yandex.ru/maps/?text=${mapQuery}`;
const yandexWidgetUrl = `https://yandex.ru/map-widget/v1/?text=${mapQuery}&z=17`;

export function LocationSection() {
  return (
    <section id="location" className="pb-16 sm:pb-20 lg:pb-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Локация"
            title="Студия на карте сразу под рукой, без лишних переходов."
            description="В финале главной оставили адрес и карту, чтобы человек мог быстро понять, где мы находимся, и сразу открыть маршрут в Яндекс.Картах."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 xl:grid-cols-[360px_minmax(0,1fr)]">
          <Reveal>
            <div className="surface-panel h-full p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#8b1414]/20 text-foreground">
                <MapPinned className="h-5 w-5" />
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-[0.24em] text-muted">
                Адрес студии
              </p>
              <h3 className="mt-3 font-serif text-3xl leading-tight text-foreground">
                {studioAddress}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Удобно для первого касания: адрес виден сразу, карта рядом, а
                маршрут можно открыть в один клик без поиска вручную.
              </p>

              <div className="mt-8">
                <ButtonLink href={yandexMapsUrl} target="_blank" rel="noreferrer">
                  Открыть в Яндекс Картах
                </ButtonLink>
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-black/20 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground">
                    <Navigation className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm text-foreground">Студия уже отмечена на карте</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">
                      Танцевальная Душа · Степаненко 8
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
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
                <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/12 bg-black/65 px-4 py-2 backdrop-blur-xl sm:left-6 sm:top-6">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-4 w-4 shrink-0 items-center justify-center">
                      <span className="absolute h-4 w-4 rounded-full bg-[#b21818]/30 blur-[4px]" />
                      <span className="relative block h-3 w-3 rounded-full border border-white bg-[#b21818]" />
                    </span>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-white/80">
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
