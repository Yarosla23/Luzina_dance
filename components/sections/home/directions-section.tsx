import { danceDirections } from "@/lib/site-data";

import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function DirectionsSection() {
  return (
    <section id="directions" className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Направления"
            title="Три основных направления в первой версии сайта."
            description="Карточки уже собраны на реальных визуалах студии. Позже список легко расширяется через единый массив данных."
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
              />
            </Reveal>
          ))}
        </div>
      </SiteShell>
    </section>
  );
}
