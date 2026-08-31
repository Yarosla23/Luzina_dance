import type { StaticImageData } from "next/image";

import { MerchPhotoCarousel } from "@/components/sections/merch/merch-photo-carousel";
import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

type MerchProductOverviewProps = {
  product: {
    name: string;
    description: string;
    sizes: string;
  };
  photos: readonly {
    image: StaticImageData;
    title?: string;
    alt: string;
  }[];
  contact: {
    telegramUrl: string;
  };
};

const productDetails = [
  {
    label: "Посадка",
    value: "Свободная",
  },
  {
    label: "Материал",
    value: "100% хлопок",
  },
  {
    label: "Лампасы",
    value: "Красные или белые",
  },
] as const;

export function MerchProductOverview({
  product,
  photos,
  contact,
}: MerchProductOverviewProps) {
  return (
    <section
      id="details"
      className="flex min-h-[100svh] items-center bg-foreground py-16 text-background sm:py-24 lg:py-20"
    >
      <SiteShell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <MerchPhotoCarousel photos={photos} />
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:flex lg:items-center" delay={0.08}>
            <div className="w-full">
              <p className="text-xs font-bold uppercase text-accent-strong">
                О модели
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.9] sm:text-6xl">
                {product.name}
                <span className="block italic text-accent">Dance Soul</span>
              </h2>

              <p className="mt-7 text-base leading-7 text-background/70">
                {product.description}
              </p>

              <dl className="mt-8 border-t border-background/20">
                {productDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid gap-1 border-b border-background/20 py-4 sm:grid-cols-[5.75rem_1fr] sm:items-baseline sm:gap-x-3"
                  >
                    <dt className="text-xs font-bold uppercase text-background/55">
                      {detail.label}
                    </dt>
                    <dd className="text-sm leading-6">{detail.value}</dd>
                  </div>
                ))}
                <div className="grid gap-1 border-b border-background/20 py-4 sm:grid-cols-[5.75rem_1fr] sm:items-baseline sm:gap-x-3">
                  <dt className="text-xs font-bold uppercase text-background/55">
                    Размеры
                  </dt>
                  <dd className="text-sm leading-6">{product.sizes}</dd>
                </div>
              </dl>

              <ButtonLink
                href={contact.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-8"
              >
                Заказ в телеграм
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
