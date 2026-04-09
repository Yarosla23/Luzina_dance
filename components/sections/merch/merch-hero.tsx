"use client";

import type { PointerEvent } from "react";
import type { StaticImageData } from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

import { ZoomableMerchImage } from "@/components/sections/merch/zoomable-merch-image";
import { ButtonLink } from "@/components/shared/button-link";
import { SiteShell } from "@/components/shared/site-shell";

type MerchHeroProps = {
  product: {
    status: string;
    image: StaticImageData;
  };
  supportingImages: StaticImageData[];
  telegramUrl: string;
};

const heroEase = [0.22, 1, 0.36, 1] as const;

export function MerchHero({
  product,
  supportingImages,
  telegramUrl,
}: MerchHeroProps) {
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const imageX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]), {
    damping: 26,
    stiffness: 180,
  });
  const imageY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-8, 8]), {
    damping: 26,
    stiffness: 180,
  });
  const imageRotate = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-1.4, 1.4]),
    { damping: 24, stiffness: 170 },
  );

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (prefersReducedMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:min-h-[860px] lg:pb-20 lg:pt-40"
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
    >
      <div className="editorial-grid pointer-events-none absolute inset-0 opacity-40" />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[27%] h-px w-[44vw] origin-left bg-accent-strong/80"
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.76, delay: 0.1, ease: heroEase }}
      />

      <SiteShell className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <motion.div
            className="relative z-10 lg:col-span-5"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: heroEase }}
          >
            <p className="text-xs font-bold uppercase text-[color:var(--accent-warm)]">
              Мерч студии / первый дроп
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(4.25rem,13vw,6.75rem)] leading-[0.8] text-white lg:text-[clamp(6rem,8vw,8.75rem)]">
              Штаны
              <span className="block pl-[0.42em] italic text-foreground/85">
                для танцев
              </span>
            </h1>

            <dl className="mt-9 grid grid-cols-2 border-y border-white/14 py-5 sm:grid-cols-3">
              <div>
                <dt className="text-[11px] font-bold uppercase text-muted">
                  Лампасы
                </dt>
                <dd className="mt-2 text-sm text-white">2 варианта</dd>
              </div>
              <div className="border-l border-white/14 pl-5">
                <dt className="text-[11px] font-bold uppercase text-muted">
                  Цвет
                </dt>
                <dd className="mt-2 text-sm text-white">Чёрный</dd>
              </div>
              <div className="col-span-2 mt-5 border-t border-white/14 pt-5 sm:col-span-1 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                <dt className="text-[11px] font-bold uppercase text-muted">
                  Статус
                </dt>
                <dd className="mt-2 text-sm text-white">{product.status}</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={telegramUrl} target="_blank" rel="noreferrer">
                Уточнить наличие
              </ButtonLink>
              <ButtonLink href="#gallery" variant="secondary">
                Смотреть фото
              </ButtonLink>
            </div>
          </motion.div>

          <div className="relative min-h-[460px] sm:min-h-[620px] lg:col-span-7 lg:min-h-[700px]">
            {supportingImages.slice(0, 2).map((image, index) => (
              <motion.div
                key={image.src}
                className={`absolute hidden overflow-hidden border border-white/15 bg-surface shadow-soft lg:block ${
                  index === 0
                    ? "left-0 top-[8%] h-[43%] w-[31%] rounded-[1.5rem_1.5rem_1.5rem_4rem]"
                    : "bottom-[4%] right-0 h-[36%] w-[28%] rounded-[3.5rem_1.5rem_1.5rem]"
                }`}
                initial={
                  prefersReducedMotion
                    ? false
                    : {
                        opacity: 0,
                        x: index === 0 ? -44 : 44,
                        y: index === 0 ? 28 : -28,
                        rotate: index === 0 ? -5 : 5,
                      }
                }
                animate={{ opacity: 1, x: 0, y: 0, rotate: index === 0 ? -4 : 4 }}
                transition={{
                  duration: 0.62,
                  delay: 0.44 + index * 0.14,
                  ease: heroEase,
                }}
              >
                <ZoomableMerchImage
                  image={image}
                  alt={`Дополнительное фото мерча Dance Soul ${index + 1}`}
                  className="h-full w-full"
                  sizes="20vw"
                />
              </motion.div>
            ))}

            <motion.div
              className="absolute inset-x-0 bottom-0 top-[3%] z-10 ml-[4%] lg:left-[14%] lg:right-[9%] lg:ml-0"
              style={prefersReducedMotion ? undefined : { x: imageX, y: imageY, rotate: imageRotate }}
              initial={
                prefersReducedMotion
                  ? false
                  : { clipPath: "inset(0 100% 0 0)", scale: 1.06 }
              }
              animate={{ clipPath: "inset(0 0% 0 0)", scale: 1 }}
              transition={{ duration: 0.86, delay: 0.18, ease: heroEase }}
            >
              <ZoomableMerchImage
                image={product.image}
                alt="Штаны Dance Soul на танцорах студии"
                className="h-full min-h-[430px] rounded-[1.5rem_1.5rem_5rem_1.5rem] border border-white/15 bg-surface sm:rounded-[2rem_2rem_7rem_2rem]"
                sizes="(max-width: 1024px) 100vw, 52vw"
                overlay={
                  <>
                    <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(8,6,7,0.64))]" />
                    <span className="absolute bottom-0 left-0 top-0 w-1.5 bg-accent-strong" />
                  </>
                }
                priority
              />
              <p className="pointer-events-none absolute bottom-6 right-6 font-serif text-6xl leading-none text-white sm:bottom-8 sm:right-8 sm:text-8xl">
                01
              </p>
            </motion.div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
