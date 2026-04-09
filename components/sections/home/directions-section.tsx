import { ArrowRight } from "lucide-react";

import { danceDirections } from "@/lib/site-data";

import { DanceMotionField } from "@/components/shared/dance-motion";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function DirectionsSection() {
  return (
    <section
      id="directions"
      data-home-chapter
      data-directions-section
      className="section-band relative overflow-hidden"
    >
      <DanceMotionField variant="compact" className="hidden lg:block" />
      <div data-directions-pin className="py-16 sm:py-20 lg:flex lg:min-h-screen lg:items-center lg:py-28">
        <SiteShell>
          <div data-scroll-reveal className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Первый шаг · направления"
                title="Не выбирай стиль по названию. Выбирай по ощущению."
                description="Три разных характера движения: грув и база, уверенная пластика или эмоциональная свобода. Посмотри, какой язык тела ближе именно тебе."
              />
            </Reveal>

            <div className="home-directions-scroll-hint items-center gap-3 pb-1 text-xs font-bold uppercase text-muted">
              Скролл ведёт по направлениям
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white">
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </div>
          </div>

          <div data-directions-viewport className="mt-10 overflow-visible lg:mt-12">
            <div data-directions-track className="home-directions-track gap-4">
              {danceDirections.map((direction) => (
                <div key={direction.slug} data-scroll-reveal className="home-direction-card">
                  <ImagePanel
                    image={direction.image}
                    title={direction.title}
                    description={direction.description}
                    className="min-h-[430px] sm:min-h-[520px] lg:min-h-[min(58vh,570px)]"
                  />
                </div>
              ))}
            </div>
          </div>
        </SiteShell>
      </div>
    </section>
  );
}
