import { campInfo, merchItems } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function MediaSection() {
  return (
    <section className="section-band py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Дополнительные направления сайта"
            title="Лагерь и мерч работают как отдельные продуктовые ветки."
            description="На главной остаются сильные preview-блоки, а подробности вынесены в отдельные маршруты, чтобы первый экран не превращался в длинный каталог."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <ImagePanel
              image={campInfo.gallery[0]}
              title="Танцевальный лагерь"
              description="Отдельная лагерная страница с выразительным hero, timeline 2025–2026, атмосферными галереями и сильным финальным CTA."
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
              description="Отдельная страница мерча с реальными фото актуального товара: штанов для танцев и контактной точкой для уточнения наличия."
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
