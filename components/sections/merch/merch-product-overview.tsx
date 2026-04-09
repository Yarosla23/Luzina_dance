import type { StaticImageData } from "next/image";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";
import { ZoomableMerchImage } from "@/components/sections/merch/zoomable-merch-image";

type MerchProductOverviewProps = {
  product: {
    name: string;
    sizes: string;
  };
  image: {
    image: StaticImageData;
    title: string;
  };
  contact: {
    note: string;
    telegramUrl: string;
  };
};

const productDetails = [
  {
    label: "Посадка",
    value: "Свободная.",
  },
  {
    label: "Детали",
    value: "Вышивка Dance Soul и лампасы в двух вариантах.",
  },
] as const;

export function MerchProductOverview({
  product,
  image,
  contact,
}: MerchProductOverviewProps) {
  return (
    <section id="details" className="bg-foreground py-16 text-background sm:py-24 lg:py-32">
      <SiteShell>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <ZoomableMerchImage
              image={image.image}
              alt={image.title}
              className="min-h-[520px] rounded-[1.5rem_1.5rem_1.5rem_5rem] bg-surface sm:min-h-[720px] lg:min-h-[820px] lg:rounded-[2rem_2rem_2rem_7rem]"
              imageClassName="object-center"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9 lg:flex lg:items-center" delay={0.08}>
            <div className="w-full">
              <p className="text-xs font-bold uppercase text-accent-strong">
                Описание
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.9] sm:text-6xl">
                Штаны
                <span className="block italic text-accent">Dance Soul</span>
              </h2>

              <dl className="mt-10 border-t border-background/20">
                {productDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid gap-2 border-b border-background/20 py-5 sm:grid-cols-[7rem_1fr]"
                  >
                    <dt className="text-xs font-bold uppercase text-background/55">
                      {detail.label}
                    </dt>
                    <dd className="text-sm leading-6">{detail.value}</dd>
                  </div>
                ))}
                <div className="grid gap-2 border-b border-background/20 py-5 sm:grid-cols-[7rem_1fr]">
                  <dt className="text-xs font-bold uppercase text-background/55">
                    Размеры
                  </dt>
                  <dd className="text-sm leading-6">{product.sizes}</dd>
                </div>
              </dl>

              <p className="mt-7 text-sm leading-6 text-background/65">
                {contact.note}
              </p>
              <ButtonLink
                href={contact.telegramUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6"
              >
                Написать в Telegram
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
