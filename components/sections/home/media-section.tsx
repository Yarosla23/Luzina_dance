import { campInfo, merchItems } from "@/lib/site-data";

import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function MediaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Дополнительные направления сайта"
            title="Лагерь и мерч уже показаны как отдельные ветки продукта."
            description="На главной это preview-блоки. Полное наполнение вынесено на отдельные страницы, чтобы не перегружать первый экран и сохранить читаемость."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <Reveal>
            <ImagePanel
              image={campInfo.gallery[0]}
              title="Танцевальный лагерь"
              description="Структурная страница-заготовка с hero, программой, галереей и местом под даты, стоимость и локацию."
              className="min-h-[420px]"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <ImagePanel
              image={merchItems[0].image}
              title="Мерч студии"
              description="Стильная страница под одежду и будущие дропы, где текущие lifestyle-фото можно заменить на реальные карточки товаров."
              className="min-h-[420px]"
            />
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
