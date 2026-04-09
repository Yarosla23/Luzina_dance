"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { campInfo } from "@/lib/site-data";

import { DanceMotionField } from "@/components/shared/dance-motion";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

function GalleryScene({
  item,
  index,
}: {
  item: (typeof campInfo.galleryHighlights)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.88", "end 0.28"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [64, -28]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    [index % 2 === 0 ? -2.4 : 2.4, 0],
  );
  const opacity = useTransform(scrollYProgress, [0, 0.26, 1], [0.2, 1, 1]);

  return (
    <motion.article
      ref={ref}
      style={shouldReduceMotion ? undefined : { y, rotate, opacity }}
      className="liquid-glass group relative min-h-[420px] overflow-hidden rounded-2xl sm:min-h-[520px] lg:min-h-[620px]"
    >
      <motion.div
        style={shouldReduceMotion ? undefined : { scale: imageScale }}
        className="absolute inset-0"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 58vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.72))]" />
      <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/30 px-4 py-2 text-xs font-semibold uppercase text-white/80 backdrop-blur-xl sm:left-6 sm:top-6">
        Scene 0{index + 1}
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="font-serif text-4xl leading-none text-white sm:text-5xl">
          {item.title}
        </p>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function CampMotionGallery() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const stripX = useTransform(scrollYProgress, [0, 1], ["0%", "-28%"]);

  return (
    <section id="gallery" className="section-band relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <DanceMotionField variant="compact" className="hidden lg:block" />
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Галерея"
            title="Галерея как scroll-клип: каждый кадр раскрывается в своем темпе."
            description="Вместо обычной сетки фото блок работает как серия сцен: крупный sticky-заголовок, кинематографичные карточки и mood-лента, которая мягко движется на скролле."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-12">
          <div className="lg:sticky lg:top-28 lg:h-[calc(100vh-8rem)] lg:self-start">
            <Reveal>
              <div className="liquid-glass rounded-2xl p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase text-[#f4c88b]">
                  Motion gallery
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-[0.96] text-foreground sm:text-5xl">
                  Фото двигаются как хореография: вход, акцент, пауза.
                </h3>
                <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                  Такой блок ближе к MotionSites-подаче: не перегружает страницу,
                  но превращает галерею в отдельный момент сайта.
                </p>
                <div className="mt-8 grid grid-cols-3 gap-2">
                  {["Flow", "Beat", "Frame"].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-4 text-center text-xs font-semibold uppercase text-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5">
            {campInfo.galleryHighlights.map((item, index) => (
              <GalleryScene key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>

        <div ref={trackRef} className="liquid-glass mt-6 overflow-hidden rounded-2xl p-6 sm:p-8">
          <Reveal>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase text-[#f4c88b]">
                  Mood strip
                </p>
                <h3 className="mt-4 font-serif text-4xl leading-[0.96] text-foreground">
                  Горизонтальная лента двигается мягко, как закулисный монтаж.
                </h3>
              </div>
              <p className="max-w-md text-sm leading-7 text-muted">
                На десктопе лента получает scroll-parallax, на мобильных
                остается удобной горизонтальной галереей.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <motion.div
              style={shouldReduceMotion ? undefined : { x: stripX }}
              className="flex w-max snap-x gap-4"
            >
              {campInfo.moodGallery.map((item, index) => (
                <figure
                  key={item.title}
                  className="group w-[280px] snap-start overflow-hidden rounded-2xl border border-white/10 bg-black/20 sm:w-[340px]"
                >
                  <div className="relative min-h-[360px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 85vw, 340px"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0.02),rgba(10,10,10,0.58))]" />
                  </div>
                  <figcaption className="p-5">
                    <p className="font-serif text-[2rem] leading-none text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {item.description}
                    </p>
                    <p className="mt-4 text-xs font-semibold uppercase text-[#f4c88b]">
                      0{index + 1} / {campInfo.moodGallery.length}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
