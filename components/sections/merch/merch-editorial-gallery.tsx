import type { StaticImageData } from "next/image";

import { StudioPhotoGallery } from "@/components/sections/home/studio-photo-gallery";
import { ZoomableMerchImage } from "@/components/sections/merch/zoomable-merch-image";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

type Colorway = {
  image: StaticImageData;
  title: string;
  alt: string;
};

type Photo = {
  image: StaticImageData;
  title: string;
  alt: string;
  previewClassName?: string;
  previewSizes?: string;
};

type MerchEditorialGalleryProps = {
  colorways: readonly Colorway[];
  streetGallery: readonly Photo[];
  telegramUrl: string;
};

export function MerchEditorialGallery({
  colorways,
  streetGallery,
  telegramUrl,
}: MerchEditorialGalleryProps) {
  return (
    <>
      <section
        id="lampas"
        className="relative isolate h-svh overflow-hidden border-t border-white/10 bg-surface"
      >
        <div
          aria-hidden="true"
          className="leopard-pattern pointer-events-none absolute inset-0 opacity-25 [mask-image:none]"
        />

        <SiteShell className="relative z-10 h-full py-8 sm:py-10 lg:py-[4svh]">
          <div className="flex h-full flex-col">
            <Reveal className="shrink-0 pt-4 sm:pt-6 lg:pt-[3svh]">
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(13rem,22rem)] sm:items-end sm:gap-8 lg:grid-cols-12">
                <div className="sm:col-span-1 lg:col-span-9">
                  <h2 className="font-serif text-5xl leading-[0.9] text-white sm:text-7xl">
                    Два лампаса.
                    <span className="block italic text-muted lg:inline">
                      {" "}
                      Один ритм.
                    </span>
                  </h2>
                </div>
                <p className="hidden max-w-sm text-xs font-bold uppercase text-[color:var(--accent-warm)] sm:block lg:col-span-3 lg:justify-self-end">
                  Красный или светлый?
                </p>
              </div>
            </Reveal>

            <div className="relative mt-5 min-h-0 flex-1 sm:mt-6 lg:grid lg:grid-cols-2 lg:items-center lg:gap-[clamp(2rem,8vw,8rem)]">
              {colorways.map((colorway, index) => (
                <Reveal
                  key={colorway.title}
                  delay={index * 0.08}
                  className={`absolute w-[62vw] max-w-[16rem] sm:w-[38vw] sm:max-w-none lg:static lg:w-full lg:max-w-[48svh] ${
                    index === 0
                      ? "left-0 top-0 z-10 lg:justify-self-end"
                      : "bottom-0 right-0 z-20 lg:justify-self-start"
                  }`}
                >
                  <figure className="relative">
                    <ZoomableMerchImage
                      image={colorway.image}
                      alt={colorway.alt}
                      className={`aspect-[3/4] border border-white/20 bg-background shadow-soft ${
                        index === 0
                          ? "rounded-[1.25rem_1.25rem_4rem_1.25rem] sm:rounded-[2rem_2rem_7rem_2rem]"
                          : "rounded-[4rem_1.25rem_1.25rem_1.25rem] sm:rounded-[7rem_2rem_2rem_2rem]"
                      }`}
                      imageClassName={index === 1 ? "object-top" : undefined}
                      sizes="(max-width: 639px) 62vw, (max-width: 1023px) 38vw, min(42vw, 48svh)"
                      overlay={
                        <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-[linear-gradient(180deg,transparent,rgba(8,6,7,0.88))] px-4 pb-4 pt-16 text-left text-white sm:px-6 sm:pb-6">
                          <span className="text-sm font-semibold sm:text-lg">
                            {colorway.title}
                          </span>
                          <span className="text-xs font-bold text-white/65">
                            0{index + 1}
                          </span>
                        </span>
                      }
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </SiteShell>
      </section>

      <section
        id="street-gallery"
        className="flex min-h-[100svh] items-center border-t border-white/10 bg-background pb-16 pt-20 sm:pb-24 sm:pt-28 lg:pb-20"
      >
        <SiteShell>
          <Reveal>
            <div className="grid gap-6 border-b border-white/14 pb-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="text-xs font-bold uppercase text-[color:var(--accent-warm)]">
                  Из зала — в город
                </p>
                <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.9] text-white sm:text-7xl">
                  Мерч становится частью образа
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-muted lg:col-span-4 lg:justify-self-end">
                Уличная серия, детали лампасов и упаковка первого дропа.
                Открой фото и листай всю историю.
              </p>
            </div>
          </Reveal>

          <StudioPhotoGallery
            photos={streetGallery}
            showAllPhotos
            fitImages
            featuredFirst
            hideCaptions
          />
        </SiteShell>
      </section>

      <section className="flex min-h-[100svh] items-center py-8 sm:py-12">
        <SiteShell>
          <Reveal>
            <div className="relative overflow-hidden rounded-[1.5rem_1.5rem_4rem_1.5rem] bg-accent px-6 py-12 sm:rounded-[2rem_2rem_6rem_2rem] sm:px-10 sm:py-20 lg:px-16 lg:py-24">
              <div className="relative grid gap-10 sm:gap-12 lg:items-stretch">
                <div className="lg:col-span-8 lg:flex lg:flex-col lg:justify-center">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/65">
                    Цена · размеры · наличие
                  </p>
                  <h2 className="mt-5 max-w-3xl text-balance font-serif text-[2.75rem] leading-[0.92] text-white sm:text-7xl sm:leading-[0.9]">
                    Найди свою пару Dance Soul
                  </h2>
                </div>
                <ButtonLink
                  href={telegramUrl}
                  target="_blank"
                  rel="noreferrer"
                  variant="secondary"
                  className="w-full justify-self-start border-white text-white hover:border-white sm:w-auto lg:col-span-3 lg:col-start-10 lg:h-2/3 lg:w-full lg:self-center"
                >
                  Узнать цену и наличие
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </SiteShell>
      </section>
    </>
  );
}
