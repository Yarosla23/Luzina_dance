import type { StaticImageData } from "next/image";

import { ZoomableMerchImage } from "@/components/sections/merch/zoomable-merch-image";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

type Colorway = {
  image: StaticImageData;
  title: string;
};

type Photo = {
  image: StaticImageData;
  alt: string;
};

type MerchEditorialGalleryProps = {
  colorways: readonly Colorway[];
  gallery: readonly Photo[];
  telegramUrl: string;
};

const photoLayouts = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
] as const;

export function MerchEditorialGallery({
  colorways,
  gallery,
  telegramUrl,
}: MerchEditorialGalleryProps) {
  return (
    <>
      <section className="border-t border-white/10 py-16 sm:py-24 lg:py-32">
        <SiteShell>
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-b border-white/14 pb-8">
              <div>
                <p className="text-xs font-bold uppercase text-[color:var(--accent-warm)]">
                  Лампасы
                </p>
                <h2 className="mt-4 font-serif text-5xl leading-[0.9] text-white sm:text-7xl">
                  Два варианта
                </h2>
              </div>
              <p className="hidden text-sm text-muted sm:block">Выбери акцент</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:gap-6">
            {colorways.map((colorway, index) => (
              <Reveal key={colorway.title} delay={index * 0.06}>
                <figure>
                  <ZoomableMerchImage
                    image={colorway.image}
                    alt={colorway.title}
                    className="aspect-[4/5] min-h-[420px] rounded-[1.5rem_1.5rem_4rem_1.5rem] border border-white/14 bg-surface sm:min-h-[620px]"
                    imageClassName={index === 1 ? "object-top" : undefined}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <figcaption className="mt-4 border-t border-white/14 pt-4 font-serif text-2xl text-white">
                    {colorway.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </SiteShell>
      </section>

      <section id="gallery" className="bg-surface py-16 sm:py-24 lg:py-32">
        <SiteShell>
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-b border-white/14 pb-8">
              <div>
                <p className="text-xs font-bold uppercase text-[color:var(--accent-warm)]">
                  Фотогалерея
                </p>
                <h2 className="mt-4 font-serif text-5xl leading-[0.9] text-white sm:text-7xl">
                  Фото мерча
                </h2>
              </div>
              <p className="hidden text-sm text-muted sm:block">
                Нажми на фото, чтобы открыть
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:auto-rows-[14rem] lg:grid-cols-12 lg:gap-5">
            {gallery.map((photo, index) => (
              <Reveal
                key={photo.alt}
                className={photoLayouts[index] ?? "lg:col-span-4"}
                delay={(index % 3) * 0.04}
              >
                <ZoomableMerchImage
                  image={photo.image}
                  alt={photo.alt}
                  className={`h-full min-h-[280px] border border-white/10 bg-background sm:min-h-[360px] lg:min-h-0 ${
                    index % 3 === 0
                      ? "rounded-[1.5rem_3.5rem_1.5rem_1.5rem]"
                      : "rounded-[1.5rem]"
                  }`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </Reveal>
            ))}
          </div>
        </SiteShell>
      </section>

      <section className="py-8 sm:py-12">
        <SiteShell>
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem_2rem_5rem_2rem] bg-accent px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase text-white/65">
                    Цена, размер, наличие
                  </p>
                  <h2 className="mt-5 font-serif text-5xl leading-[0.9] text-white sm:text-7xl">
                    Напиши нам
                  </h2>
                </div>
                <ButtonLink
                  href={telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="border-white/50 text-white hover:border-white"
                >
                  Уточнить в Telegram
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </SiteShell>
      </section>
    </>
  );
}
