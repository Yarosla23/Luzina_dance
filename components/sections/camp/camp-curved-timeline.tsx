"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { type CampTimelineItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type CampTimelineProps = {
  items: readonly CampTimelineItem[];
};

const statusClassNames: Record<CampTimelineItem["status"], string> = {
  архив: "border-white/15 bg-white/10 text-[#f8ebd7]",
  "ранний лист": "border-[#6cd9d5]/35 bg-[#6cd9d5]/12 text-[#dcfbf9]",
  "бронь скоро": "border-[#ffd36d]/35 bg-[#ffd36d]/12 text-[#fff3c8]",
  планирование: "border-[#ff8b66]/35 bg-[#ff8b66]/12 text-[#ffe5dc]",
};

function TimelineEntry({
  item,
  index,
}: {
  item: CampTimelineItem;
  index: number;
}) {
  const entryRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isLeftColumn = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: entryRef,
    offset: ["start 0.9", "center 0.6"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.8], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.8], [0.8, 1, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    [isLeftColumn ? -60 : 60, 0]
  );

  return (
    <div
      ref={entryRef}
      className={cn(
        "relative flex flex-col items-center py-16 lg:flex-row lg:py-28",
        isLeftColumn ? "lg:flex-row-reverse" : ""
      )}
    >
      {/* Central Point */}
      <div className="absolute left-1/2 top-0 z-20 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-[#ffd28e] bg-[#0a0a0a] shadow-[0_0_20px_rgba(255,210,142,0.5)] lg:top-1/2 lg:-translate-y-1/2">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute inset-1 rounded-full bg-[linear-gradient(135deg,#ffd28e,#6cd9d5)]"
        />
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "w-full px-4 sm:px-8 lg:w-1/2 lg:px-20",
          isLeftColumn ? "lg:text-right" : "lg:text-left"
        )}
      >
        <motion.article
          style={shouldReduceMotion ? undefined : { opacity, scale, x }}
          className="liquid-glass group relative overflow-hidden rounded-[2.5rem] p-5 sm:p-8"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[16/10]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              sizes="(max-width: 1024px) 90vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute left-6 top-6">
               <span
                className={cn(
                  "rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-xl",
                  statusClassNames[item.status]
                )}
              >
                {item.status}
              </span>
            </div>
          </div>

          <div className="mt-8">
            <div className={cn(
              "flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-[#f4c88b]",
              isLeftColumn ? "lg:flex-row-reverse" : ""
            )}>
              <span>{item.period}</span>
              <div className="h-px w-8 bg-[#f4c88b]/30" />
            </div>
            <h3 className="mt-4 font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
              {item.title}
            </h3>
            <p className="mt-6 text-base leading-relaxed text-[#e0d7cf] sm:text-lg">
              {item.note}
            </p>
          </div>
        </motion.article>
      </div>

      {/* Spacer for the other side on desktop */}
      <div className="hidden lg:block lg:w-1/2" />
    </div>
  );
}

export function CampCurvedTimeline({ items }: CampTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
  });

  return (
    <section id="timeline" className="relative overflow-hidden bg-[#080808] py-32 lg:py-56">
      {/* Background Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-[#ffb35c]/5 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[#6cd9d5]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-24 text-center lg:mb-40">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-[#f4c88b]"
          >
            History / Roadmap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 font-serif text-6xl leading-[0.85] text-foreground sm:text-8xl lg:text-[10rem]"
          >
            История <br /> <span className="text-white/20">в движении.</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="mx-auto mt-10 max-w-2xl text-lg text-muted"
          >
            От первых анонсов до больших финалов — каждая смена оставляет свой след в нашей общей истории. Листай ниже, чтобы прожить этот путь.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Curved Line SVG - Desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-40 -translate-x-1/2 lg:block">
            <svg
              viewBox="0 0 160 1000"
              preserveAspectRatio="none"
              className="h-full w-full opacity-30"
              fill="none"
            >
              <path
                d="M80 0 C 120 150, 40 300, 80 450 C 120 600, 40 750, 80 900 L 80 1000"
                stroke="white"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
              <motion.path
                d="M80 0 C 120 150, 40 300, 80 450 C 120 600, 40 750, 80 900 L 80 1000"
                stroke="url(#line-gradient-curved)"
                strokeWidth="3"
                style={{ pathLength }}
              />
              <defs>
                <linearGradient id="line-gradient-curved" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffd28e" />
                  <stop offset="50%" stopColor="#ff8b66" />
                  <stop offset="100%" stopColor="#6cd9d5" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Straight Line - Mobile */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/10 lg:hidden">
            <motion.div
              style={{ scaleY: pathLength, transformOrigin: "top" }}
              className="h-full w-full bg-[linear-gradient(180deg,#ffd28e,#ff8b66,#6cd9d5)] shadow-[0_0_15px_rgba(255,139,102,0.5)]"
            />
          </div>

          <div className="flex flex-col">
            {items.map((item, index) => (
              <TimelineEntry
                key={item.id}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
