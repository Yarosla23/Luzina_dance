"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import { type CampTimelineItem } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { CampTimelineFlow } from "@/components/sections/camp/camp-timeline-flow";

type CampTimelineProps = {
  items: readonly CampTimelineItem[];
};

const statusClassNames: Record<CampTimelineItem["status"], string> = {
  архив: "border-white/20 bg-black/45 text-white/70",
  "ранний лист": "border-white/35 bg-white/10 text-white",
  "бронь скоро": "border-[#5c0007] bg-[#5c0007]/90 text-white",
  планирование: "border-[#5c0007] bg-[#5c0007]/60 text-white",
};

function TimelineEntry({
  item,
  index,
}: {
  item: CampTimelineItem;
  index: number;
}) {
  const entryRef = useRef<HTMLDivElement | null>(null);
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
        "relative grid gap-y-7 py-12 pl-12 sm:py-16 sm:pl-16 lg:grid-cols-[minmax(0,1fr)_5rem_minmax(0,1fr)] lg:items-center lg:gap-y-0 lg:py-20 lg:pl-0"
      )}
    >
      {/* Central Point */}
      <div className="absolute left-3 top-12 z-20 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[#5c0007] bg-[#080607] shadow-[0_0_20px_rgba(92,0,7,0.45)] sm:left-4 sm:top-16 lg:left-1/2 lg:top-1/2 lg:h-6 lg:w-6 lg:-translate-y-1/2">
        <motion.div
          style={{ scale: scrollYProgress }}
          className="absolute inset-1 rounded-full bg-[#5c0007] motion-reduce:!transform-none"
        />
      </div>

      {/* Content Card */}
      <div
        className={cn(
          "min-w-0 lg:row-start-1",
          isLeftColumn
            ? "lg:col-start-1 lg:pr-0 lg:text-right"
            : "lg:col-start-3 lg:pl-0 lg:text-left"
        )}
      >
        <motion.article
          style={{ opacity, scale, x }}
          className="group relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#13090c] p-5 motion-reduce:!transform-none motion-reduce:!opacity-100 sm:p-8"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:aspect-[16/10]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              placeholder="blur"
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
              "flex items-center gap-4 text-xs font-bold uppercase tracking-[0.16em] text-white/70",
              isLeftColumn ? "lg:flex-row-reverse" : ""
            )}>
              <span>{item.period}</span>
              <div className="h-px w-8 bg-[#5c0007]/50" />
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

      <aside
        aria-label={`Дополнительная информация: ${item.title}`}
        className={cn(
          "min-w-0 border-l border-white/20 pl-5 lg:row-start-1 lg:max-w-md lg:border-l-0 lg:border-t lg:pt-7",
          isLeftColumn
            ? "lg:col-start-3 lg:pl-8"
            : "lg:col-start-1 lg:ml-auto lg:pr-8 lg:text-right"
        )}
      >
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/70">
          В фокусе · 0{index + 1}
        </p>
        <h4 className="mt-4 font-serif text-3xl leading-[1.05] text-white sm:text-4xl">
          {item.details.title}
        </h4>
        <p className="mt-5 text-base leading-7 text-white/65">
          {item.details.description}
        </p>
        <ul className="mt-6 space-y-3">
          {item.details.highlights.map((highlight) => (
            <li
              key={highlight}
              className={cn(
                "flex items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-white/75",
                !isLeftColumn && "lg:flex-row-reverse"
              )}
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#5c0007]"
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

export function CampCurvedTimeline({ items }: CampTimelineProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.2"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
  });

  return (
    <section
      id="timeline"
      className="relative -mt-px overflow-hidden border-b border-white/10 bg-[#080607] pb-28 lg:pb-40"
    >
      <CampTimelineFlow />

      <div className="relative mx-auto max-w-7xl px-6">
        <div ref={containerRef} className="relative">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-3 top-0 w-px -translate-x-1/2 bg-white/10 sm:left-4 lg:left-1/2"
          >
            <motion.div
              style={{ scaleY: pathLength, transformOrigin: "top" }}
              className="h-full w-full bg-[linear-gradient(180deg,#5c0007,#5c0007,#ffffff)] shadow-[0_0_15px_rgba(92,0,7,0.45)] motion-reduce:!transform-none"
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
