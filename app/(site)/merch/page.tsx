import type { Metadata } from "next";

import { merchColorways, merchContact, merchGallery, merchItems } from "@/lib/site-data";

import { ZoomableMerchImage } from "@/components/sections/merch/zoomable-merch-image";
import { ButtonLink } from "@/components/shared/button-link";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export const metadata: Metadata = {
  title: "Мерч студии",
  description:
    "Мерч студии с актуальным товаром: штаны для танцев и галерея реальных фото.",
};

export default function MerchPage() {
  const merchItem = merchItems[0];
  const featuredGallery = merchGallery.slice(0, 3);
  const detailGallery = merchGallery.slice(3);

  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Мерч студии"
        title="Штаны для танцев"
        description="Сейчас в мерче студии доступны штаны для танцев. Это первый реальный айтем коллекции: свободная посадка, фирменная вышивка и выразительные лампасы, которые идеально смотрятся и в зале, и в уличном образе."
        image={merchItem.image}
        actions={
          <>
            <ButtonLink
              href={merchContact.telegramUrl}
              target="_blank"
              rel="noreferrer"
            >
              Уточнить
            </ButtonLink>
            <ButtonLink href="/" variant="secondary">
              На главную
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <SiteShell>
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-6">
            <Reveal>
              <ZoomableMerchImage
                image={featuredGallery[0].image}
                alt={featuredGallery[0].title}
                className="min-h-[320px] rounded-[2rem] border border-white/10 bg-white/[0.03] sm:min-h-[460px] sm:rounded-[2.25rem] lg:min-h-[580px]"
                sizes="(max-width: 1024px) 100vw, 52vw"
                overlay={
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.04),rgba(10,10,10,0.48))]" />
                }
                priority
              />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 sm:rounded-[2.25rem] sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#8e2323]/40 bg-[#8e2323]/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-[#f0d4d4]">
                    {merchItem.status}
                  </span>
                </div>

                <h2 className="mt-5 font-serif text-[2.15rem] leading-[0.95] text-foreground sm:mt-6 sm:text-5xl">
                  {merchItem.name}
                </h2>
                <p className="mt-4 text-[15px] leading-7 text-muted sm:mt-5 sm:text-base">
                  {merchItem.description}
                </p>

                <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted">
                      Формат
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground">
                      Тренировки, съемки, сцена и собранный повседневный образ.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-muted">
                      Размеры
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground">
                      {merchItem.sizes}
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-[1.5rem] border border-[#8e2323]/35 bg-[linear-gradient(180deg,rgba(142,35,35,0.18),rgba(255,255,255,0.03))] p-5 sm:rounded-[1.75rem] sm:p-6">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#f0d4d4]">
                    Цена и наличие
                  </p>

                  <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-xl text-[15px] leading-7 text-foreground sm:text-base">
                      {merchContact.note}
                    </p>

                    <ButtonLink
                      href={merchContact.telegramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full justify-center sm:w-auto"
                    >
                      Написать
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <SectionHeading
              eyebrow="Галерея"
              title="Штаны, которые выглядят сильно и в зале, и вне его"
              description="Первый айтем мерча Dance Soul собран под движение, стиль и уверенную подачу. Ниже показаны посадка, детали и то, как штаны смотрятся в кадре."
              className="mt-16"
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {featuredGallery.slice(1).map((item, index) => (
              <Reveal key={item.title} delay={0.06 * (index + 1)}>
                <figure className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <ZoomableMerchImage
                    image={item.image}
                    alt={item.title}
                    className="min-h-[360px] sm:min-h-[420px]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <figcaption className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-serif text-2xl text-foreground">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-4 overflow-hidden rounded-[2rem] border border-[#8e2323]/30 bg-[linear-gradient(180deg,rgba(142,35,35,0.16),rgba(255,255,255,0.03))]">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="p-6 sm:p-8">
                  <p className="text-[11px] uppercase tracking-[0.28em] text-[#f0d4d4]">
                    Доступно в двух цветах
                  </p>
                  <h3 className="mt-4 font-serif text-3xl text-foreground sm:text-4xl">
                    Выбирай акцент под свой образ
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-7 text-muted">
                    Штаны доступны в двух расцветках лампасов. Обе версии держат
                    фирменный характер Dance Soul, а актуальные размеры и
                    наличие лучше сразу уточнять в Telegram @miss_luzina.
                  </p>
                  <ButtonLink
                    href={merchContact.telegramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6"
                  >
                    Уточнить наличие
                  </ButtonLink>
                </div>

                <div className="grid gap-px bg-white/10 sm:grid-cols-2">
                  {merchColorways.map((item, index) => (
                    <div key={item.title} className="bg-black/20">
                      <ZoomableMerchImage
                        image={item.image}
                        alt={item.title}
                        className="min-h-[280px]"
                        imageClassName={index === 1 ? "object-top" : undefined}
                        sizes="(max-width: 1024px) 100vw, 25vw"
                        priority
                      />
                      <div className="p-5">
                        <p className="font-serif text-2xl text-foreground">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {detailGallery.map((item, index) => (
              <Reveal key={item.title} delay={0.08 * (index + 1)}>
                <figure className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
                  <ZoomableMerchImage
                    image={item.image}
                    alt={item.title}
                    className="min-h-[320px]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <figcaption className="flex flex-1 flex-col p-5 sm:p-6">
                    <p className="font-serif text-2xl text-foreground">{item.title}</p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </SiteShell>
      </section>
    </main>
  );
}
