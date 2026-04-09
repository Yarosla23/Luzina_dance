import { danceDirections } from "@/lib/site-data";

import { DanceMotionField } from "@/components/shared/dance-motion";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function DirectionsSection() {
  return (
    <section id="directions" className="section-band relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <DanceMotionField variant="compact" className="hidden lg:block" />
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Направления"
            title="Три направления, которые читаются с первого скролла."
            description="Каждое направление получает крупный визуал, понятный характер и короткое объяснение, чтобы посетитель быстро выбрал подходящий класс."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          {danceDirections.map((direction, index) => (
            <Reveal key={direction.slug} delay={0.08 * index}>
              <ImagePanel
                image={direction.image}
                title={direction.title}
                description={direction.description}
                className="min-h-[420px] sm:min-h-[520px]"
                overlay={
                  <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold uppercase text-white/85 backdrop-blur-xl">
                    0{index + 1}
                  </div>
                }
              />
            </Reveal>
          ))}
        </div>
      </SiteShell>
    </section>
  );
}
