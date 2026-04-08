import { coaches } from "@/lib/site-data";

import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function AboutSection() {
  const founder = coaches.find((coach) => coach.slug === "yana-luzina");

  if (!founder) {
    return null;
  }

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="О нас"
              title="Пространство, где дети и подростки раскрываются через движение."
              description='Мы создаем пространство, где дети и подростки развиваются в танце, учатся чувствовать музыку, работать с телом и раскрывать себя через движение.'
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ImagePanel
              image={founder.image}
              title={founder.name}
              description="Руководитель студии и носитель общего визуального характера проекта."
              className="min-h-[360px] sm:min-h-[500px]"
            />
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
