import type { Metadata } from "next";

import { merchItems } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export const metadata: Metadata = {
  title: "Мерч студии",
  description:
    "Страница мерча студии с заготовкой под одежду, карточками категорий и местом для будущих дропов.",
};

export default function MerchPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Мерч студии"
        title="Мерч студии"
        description="Стиль и одежда студии собираются как отдельное направление бренда. Пока это сильная заготовка под будущий ассортимент."
        image={merchItems[1].image}
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
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {merchItems.map((item, index) => (
              <Reveal key={item.slug} delay={0.06 * index}>
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <div className="relative min-h-[320px]">
                    <ImagePanel
                      image={item.image}
                      title={item.name}
                      className="h-full min-h-[320px] rounded-none border-0"
                      contentClassName="hidden"
                      withShade={false}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h2 className="font-serif text-3xl text-foreground">
                        {item.name}
                      </h2>
                      <span className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-muted">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                    <p className="mt-4 text-sm text-foreground">Размеры: {item.sizes}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(148,20,20,0.18),rgba(255,255,255,0.03))] px-6 py-8 sm:px-8">
              <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
                Drop
              </p>
              <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
                Скоро дроп новой одежды.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Пока в карточках использованы подходящие lifestyle-фотографии из
                media. Когда появятся реальные фото одежды, их можно заменить
                прямо в массиве `merchItems` без переделки страницы.
              </p>
            </div>
          </Reveal>
        </SiteShell>
      </section>
    </main>
  );
}
