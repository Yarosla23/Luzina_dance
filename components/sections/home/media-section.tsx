import { campInfo, merchItems } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function MediaSection() {
  return (
    <section data-home-chapter className="section-band py-16 sm:py-20 lg:py-28">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="За пределами класса"
            title="Танец продолжается в поездках, съемках и вещах."
            description="Лагерь соединяет интенсивную практику с командным летом, а мерч переносит характер студии в тренировочный и повседневный образ."
          />
        </Reveal>

        <div data-scroll-reveal className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <ImagePanel
              image={campInfo.gallery[0]}
              title="Танцевальный лагерь"
              description="Классы, командные активности, съемки и летний ритм для тех, кто хочет глубже войти в танец."
              className="min-h-[420px]"
              contentPosition="below"
              overlay={
                <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                  <ButtonLink href="/camp" variant="secondary" className="px-4 py-2 text-xs">
                    Открыть
                  </ButtonLink>
                </div>
              }
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ImagePanel
              image={merchItems[0].image}
              title="Мерч студии"
              description="Свободные чёрные штаны с фирменными лампасами — для тренировок, съемок и повседневного движения."
              className="min-h-[420px]"
              contentPosition="below"
              overlay={
                <div className="absolute right-4 top-4 sm:right-5 sm:top-5">
                  <ButtonLink href="/merch" variant="secondary" className="px-4 py-2 text-xs">
                    Открыть
                  </ButtonLink>
                </div>
              }
            />
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
