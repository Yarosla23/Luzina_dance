import type { Metadata } from "next";

import { campInfo } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export const metadata: Metadata = {
  title: "Танцевальный лагерь",
  description:
    "Заготовка страницы танцевального лагеря: программа, формат, галерея и будущие детали по датам, стоимости и локации.",
};

export default function CampPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Танцевальный лагерь"
        title="Танцевальный лагерь"
        description={campInfo.description}
        image={campInfo.gallery[1]}
        actions={
          <>
            <ButtonLink href="/#contacts">Записаться</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              На главную
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <SiteShell>
          <div className="grid gap-4 lg:grid-cols-3">
            <Reveal>
              <div className="surface-panel p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Для кого лагерь
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  {campInfo.audience.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="surface-panel p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Что ждет участников
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  {campInfo.activities.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="surface-panel p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Подробности скоро
                </p>
                <div className="mt-5 space-y-3 text-sm leading-7 text-muted">
                  <p>{campInfo.placeholders.dates}</p>
                  <p>{campInfo.placeholders.price}</p>
                  <p>{campInfo.placeholders.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </SiteShell>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <SiteShell>
          <Reveal>
            <div className="mb-10 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Программа / активности
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Полноценная структура без пустоты.
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            {campInfo.gallery.map((image, index) => (
              <Reveal key={`${index}-${image.src}`} delay={0.08 * index}>
                <ImagePanel
                  image={image}
                  title={index % 2 === 0 ? "Camp Mood" : "Dance Energy"}
                  description="Здесь позже можно подменить реальные фотографии лагеря, не меняя структуру секции."
                  className="min-h-[360px] sm:min-h-[460px]"
                />
              </Reveal>
            ))}
          </div>
        </SiteShell>
      </section>
    </main>
  );
}
