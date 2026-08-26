"use client";

import Image, { type StaticImageData } from "next/image";
import { type PointerEvent, useRef } from "react";
import {
  type MotionValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
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
const carouselKeyframes = [0, 0.25, 0.5, 0.75, 1];

type CarouselPath = {
  x: string[];
  y: string[];
  scale: number[];
  rotate: number[];
  zIndex: number[];
};

const carouselPaths: CarouselPath[] = [
  {
    x: ["0%", "24%", "48%", "0%", "-56%"],
    y: ["0%", "14%", "28%", "-38%", "-24%"],
    scale: [1, 0.7, 0.4, 0.34, 0.43],
    rotate: [0, 2, 4, 0, -4],
    zIndex: [30, 25, 20, 10, 10],
  },
  {
    x: ["-56%", "-28%", "0%", "24%", "48%"],
    y: ["-24%", "-12%", "0%", "14%", "28%"],
    scale: [0.43, 0.72, 1, 0.7, 0.4],
    rotate: [-4, -2, 0, 2, 4],
    zIndex: [10, 25, 30, 25, 20],
  },
  {
    x: ["48%", "0%", "-56%", "-28%", "0%"],
    y: ["28%", "-38%", "-24%", "-12%", "0%"],
    scale: [0.4, 0.34, 0.43, 0.72, 1],
    rotate: [4, 0, -4, -2, 0],
    zIndex: [20, 10, 10, 25, 30],
  },
];

type CarouselImageProps = {
  alt: string;
  image: StaticImageData;
  index: number;
  isReducedMotion: boolean;
  isPrimary?: boolean;
  scrollProgress: MotionValue<number>;
};

function CarouselImage({
  alt,
  image,
  index,
  isReducedMotion,
  isPrimary = false,
  scrollProgress,
}: CarouselImageProps) {
  const path = carouselPaths[index];
  const x = useTransform(scrollProgress, carouselKeyframes, path.x);
  const y = useTransform(scrollProgress, carouselKeyframes, path.y);
  const scale = useTransform(scrollProgress, carouselKeyframes, path.scale);
  const rotate = useTransform(scrollProgress, carouselKeyframes, path.rotate);
  const zIndex = useTransform(scrollProgress, carouselKeyframes, path.zIndex);

  const staticStyle = {
    x: path.x[0],
    y: path.y[0],
    scale: path.scale[0],
    rotate: path.rotate[0],
    zIndex: path.zIndex[0],
  };

  return (
    <motion.div
      className="absolute inset-0 origin-center"
      style={isReducedMotion ? staticStyle : { x, y, scale, rotate, zIndex }}
    >
      <ZoomableMerchImage
        image={image}
        alt={alt}
        className="h-full rounded-[2rem_2rem_7rem_2rem] border border-white/15 bg-surface shadow-soft"
        sizes="(max-width: 1024px) 100vw, 52vw"
        overlay={
          isPrimary ? (
            <>
              <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(8,6,7,0.64))]" />
              <span className="absolute bottom-0 left-0 top-0 w-1.5 bg-accent-strong" />
            </>
          ) : undefined
        }
        priority={isPrimary}
      />
    </motion.div>
  );
}

export function MerchHero({
  product,
  supportingImages,
  telegramUrl,
}: MerchHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const carouselProgress = useTransform(
    scrollYProgress,
    [0.06, 0.94],
    [0, 1],
  );
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
      ref={sectionRef}
      className="relative isolate overflow-clip border-b border-white/10 pb-12 pt-28 sm:pb-16 sm:pt-32 lg:h-[200svh] lg:py-0 motion-reduce:lg:h-auto motion-reduce:lg:min-h-[860px] motion-reduce:lg:pb-20 motion-reduce:lg:pt-40"
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

      <SiteShell className="relative lg:sticky lg:top-0 lg:flex lg:h-svh lg:items-start lg:pb-6 lg:pt-28 motion-reduce:lg:static motion-reduce:lg:h-auto motion-reduce:lg:py-0">
        <div className="grid w-full gap-12 lg:grid-cols-12 lg:items-start lg:gap-8">
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={telegramUrl} target="_blank" rel="noreferrer">
                Уточнить наличие
              </ButtonLink>
              <ButtonLink href="#gallery" variant="secondary">
                Смотреть фото
              </ButtonLink>
            </div>
          </motion.div>

          <div className="relative min-h-[460px] sm:min-h-[620px] lg:col-span-7 lg:min-h-[clamp(480px,72svh,700px)]">
            <motion.div
              className="absolute inset-x-0 bottom-0 top-[3%] z-10 ml-[4%] lg:left-[14%] lg:right-[9%] lg:ml-0"
              style={prefersReducedMotion ? undefined : { x: imageX, y: imageY, rotate: imageRotate }}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 1.04 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.86, delay: 0.18, ease: heroEase }}
            >
              <div className="absolute inset-0 lg:hidden">
                {supportingImages.slice(0, 2).map((image, index) => (
                  <div
                    key={image.src}
                    aria-hidden="true"
                    className={`absolute h-[72%] w-[56%] overflow-hidden border border-white/15 bg-surface shadow-soft sm:h-[76%] sm:w-[52%] ${
                      index === 0
                        ? "left-0 top-8 -rotate-[5deg] rounded-[1.5rem_1.5rem_4rem_1.5rem] sm:top-10"
                        : "right-0 top-14 rotate-[4deg] rounded-[3.5rem_1.5rem_1.5rem] sm:top-16"
                    }`}
                  >
                    <Image
                      src={image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 56vw, 52vw"
                    />
                    <span className="absolute inset-0 bg-background/20" />
                  </div>
                ))}

                <div className="absolute inset-x-[7%] bottom-0 top-[12%] z-10 sm:inset-x-[10%] sm:top-[10%]">
                  <ZoomableMerchImage
                    image={product.image}
                    alt="Штаны Dance Soul на танцорах студии"
                    className="h-full rounded-[1.5rem_1.5rem_5rem_1.5rem] border border-white/15 bg-surface shadow-soft sm:rounded-[2rem_2rem_6rem_2rem]"
                    sizes="(max-width: 640px) 86vw, 80vw"
                    overlay={
                      <>
                        <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(8,6,7,0.64))]" />
                        <span className="absolute bottom-0 left-0 top-0 w-1.5 bg-accent-strong" />
                      </>
                    }
                    priority
                  />
                </div>
              </div>

              <div className="absolute inset-0 hidden lg:block">
                <CarouselImage
                  image={product.image}
                  alt="Штаны Dance Soul на танцорах студии"
                  index={0}
                  isPrimary
                  isReducedMotion={Boolean(prefersReducedMotion)}
                  scrollProgress={carouselProgress}
                />
                {supportingImages.slice(0, 2).map((image, index) => (
                  <CarouselImage
                    key={image.src}
                    image={image}
                    alt={`Дополнительное фото мерча Dance Soul ${index + 1}`}
                    index={index + 1}
                    isReducedMotion={Boolean(prefersReducedMotion)}
                    scrollProgress={carouselProgress}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
