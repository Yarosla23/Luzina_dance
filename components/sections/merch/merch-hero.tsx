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

import { ButtonLink } from "@/components/shared/button-link";
import { SiteShell } from "@/components/shared/site-shell";

type MerchHeroProps = {
  product: {
    status: string;
    description: string;
    image: StaticImageData;
  };
  supportingImages: readonly {
    image: StaticImageData;
    alt: string;
    heroImageClassName?: string;
  }[];
  telegramUrl: string;
};

const heroEase = [0.22, 1, 0.36, 1] as const;
const carouselKeyframes = [0, 0.25, 0.5, 0.75, 1];
const merchButtonClassName =
  "border-[#5c0007] bg-[#5c0007] text-white hover:border-[#5c0007] hover:bg-[#5c0007] hover:text-white";

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
  imageClassName?: string;
  index: number;
  isReducedMotion: boolean;
  isPrimary?: boolean;
  scrollProgress: MotionValue<number>;
};

function CarouselImage({
  alt,
  image,
  imageClassName,
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
      <div className="relative h-full overflow-hidden rounded-[1.5rem_1.5rem_5rem_1.5rem] border border-white/15 bg-surface shadow-soft sm:rounded-[2rem_2rem_7rem_2rem]">
        <Image
          src={image}
          alt={alt}
          fill
          priority={isPrimary}
          placeholder="blur"
          className={`object-cover ${imageClassName ?? ""}`}
          sizes="(max-width: 1023px) calc(100vw - 2.5rem), 52vw"
        />
        {isPrimary ? (
          <>
            <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(8,6,7,0.64))]" />
            <span className="absolute bottom-0 left-0 top-0 w-1.5 bg-accent-strong" />
          </>
        ) : null}
      </div>
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
      className="relative isolate h-[200svh] overflow-clip border-b border-white/10 bg-[#1f1f1f] motion-reduce:h-auto motion-reduce:min-h-[100svh]"
      onPointerLeave={resetPointer}
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="leopard-pattern sticky top-0 h-svh opacity-20 [mask-image:none]" />
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-[27%] h-px w-[44vw] origin-left bg-accent-strong/80"
        initial={prefersReducedMotion ? false : { scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.76, delay: 0.1, ease: heroEase }}
      />

      <SiteShell className="relative sticky top-0 flex h-svh items-stretch pb-5 pt-24 sm:pb-8 sm:pt-28 lg:items-center lg:py-24 motion-reduce:static">
        <div className="relative grid h-full w-full lg:h-auto lg:grid-cols-12 lg:items-center lg:gap-8">
          <motion.div
            className="absolute inset-x-0 bottom-0 z-50 px-5 pb-5 sm:px-8 sm:pb-8 lg:relative lg:inset-auto lg:col-span-5 lg:z-10 lg:px-0 lg:pb-0"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.08, ease: heroEase }}
          >
            <p className="text-xs font-bold uppercase text-[color:var(--accent-warm)]">
              {product.status}
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-[clamp(3.25rem,15vw,4.25rem)] leading-[0.8] text-white lg:mt-6 lg:text-[clamp(5rem,6.7vw,7rem)] xl:text-[clamp(6rem,8vw,8.75rem)]">
              Штаны
              <span className="block  italic ">
                для танцев
              </span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-white/75 sm:text-base lg:mt-7 lg:text-lg lg:leading-7 lg:text-muted">
              Вливайся в нашу танцевальную семью.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-8 lg:flex-col lg:items-start xl:flex-row xl:items-stretch">
              <ButtonLink
                href={telegramUrl}
                target="_blank"
                rel="noreferrer"
                className={`${merchButtonClassName} w-full sm:w-auto`}
              >
                Узнать цену и наличие
              </ButtonLink>
              <ButtonLink
                href="#details"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Смотреть фото
              </ButtonLink>
            </div>
          </motion.div>

          <div className="absolute bottom-4 left-3 right-3 top-1 min-h-0 sm:bottom-6 sm:left-5 sm:right-5 lg:relative lg:inset-auto lg:col-span-7 lg:min-h-[clamp(480px,72svh,700px)]">
            <motion.div
              className="absolute inset-0 z-10 lg:left-[14%] lg:right-[9%]"
              style={prefersReducedMotion ? undefined : { x: imageX, y: imageY, rotate: imageRotate }}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, scale: 1.04 }
              }
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.86, delay: 0.18, ease: heroEase }}
            >
              <div className="absolute inset-0">
                <CarouselImage
                  image={product.image}
                  alt="Штаны Dance Soul на танцорах студии"
                  index={0}
                  isPrimary
                  isReducedMotion={Boolean(prefersReducedMotion)}
                  scrollProgress={carouselProgress}
                />
                {supportingImages
                  .slice(0, 2)
                  .map(({ image, alt, heroImageClassName }, index) => (
                    <CarouselImage
                      key={image.src}
                      image={image}
                      alt={alt}
                      imageClassName={heroImageClassName}
                      index={index + 1}
                      isReducedMotion={Boolean(prefersReducedMotion)}
                      scrollProgress={carouselProgress}
                    />
                  ))}
              </div>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-40 bg-[linear-gradient(180deg,rgba(8,6,7,0.04)_20%,rgba(8,6,7,0.3)_50%,rgba(8,6,7,0.96)_100%)] lg:hidden"
              />
            </motion.div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
