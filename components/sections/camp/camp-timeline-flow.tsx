"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const flowSpring = {
  stiffness: 90,
  damping: 32,
  mass: 0.55,
};

export function CampTimelineFlow() {
  const flowRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: flowRef,
    offset: ["start end", "end 0.8"],
  });
  const flowProgress = useSpring(scrollYProgress, flowSpring);
  const flowOpacity = useTransform(
    flowProgress,
    [0, 0.76, 0.94, 1],
    [1, 1, 0.32, 0],
  );

  const flowStyle = {
    scaleY: flowProgress,
    opacity: flowOpacity,
    transformOrigin: "top",
  };

  return (
    <div
      ref={flowRef}
      className="relative isolate h-[42rem] overflow-hidden sm:h-[48rem] lg:h-[56rem]"
    >
      <motion.svg
        aria-hidden="true"
        style={flowStyle}
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        className="absolute inset-0 hidden h-full w-full drop-shadow-[0_22px_28px_rgba(185,30,75,0.2)] motion-reduce:hidden lg:block"
      >
        <defs>
          <linearGradient id="campFlowDesktop" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8b1538" />
            <stop offset="50%" stopColor="#97183f" />
            <stop offset="82%" stopColor="#aa1b46" />
            <stop offset="100%" stopColor="#b91e4b" />
          </linearGradient>
          <linearGradient id="campFlowDesktopEdge" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="72%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 0H1440V70C1190 150 1030 286 886 430C790 526 749 687 724 900H716C691 687 650 526 554 430C410 286 250 150 0 70V0Z"
          fill="url(#campFlowDesktop)"
        />
        <path
          d="M1440 70C1190 150 1030 286 886 430C790 526 749 687 724 900"
          fill="none"
          stroke="url(#campFlowDesktopEdge)"
          strokeWidth="2"
        />
      </motion.svg>

      <motion.svg
        aria-hidden="true"
        style={flowStyle}
        viewBox="0 0 375 672"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full drop-shadow-[0_18px_24px_rgba(185,30,75,0.2)] motion-reduce:hidden lg:hidden"
      >
        <defs>
          <linearGradient id="campFlowMobile" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#8b1538" />
            <stop offset="48%" stopColor="#97183f" />
            <stop offset="82%" stopColor="#aa1b46" />
            <stop offset="100%" stopColor="#b91e4b" />
          </linearGradient>
          <linearGradient id="campFlowMobileEdge" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="72%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 0H375V68C274 126 161 217 94 326C59 383 44 512 38 672H34C30 526 18 426 0 366V0Z"
          fill="url(#campFlowMobile)"
        />
        <path
          d="M375 68C274 126 161 217 94 326C59 383 44 512 38 672"
          fill="none"
          stroke="url(#campFlowMobileEdge)"
          strokeWidth="1.5"
        />
      </motion.svg>

      <div
        aria-hidden="true"
        className="editorial-grid pointer-events-none absolute inset-0 z-10 opacity-20"
      />

      <div className="relative z-20 mx-auto flex h-full max-w-7xl items-start justify-center px-6 pt-28 text-center sm:pt-32 lg:pt-40">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs font-bold uppercase tracking-[0.16em] text-white/70 motion-reduce:!translate-y-0 motion-reduce:!opacity-100"
          >
            History / Roadmap
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.08,
              duration: 0.76,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-8 font-serif text-6xl leading-[0.85] text-white motion-reduce:!translate-y-0 motion-reduce:!opacity-100 sm:text-8xl lg:text-[9rem]"
          >
            История <br /> <span className="text-white/45">в движении.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.16,
              duration: 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-10 max-w-2xl text-base leading-7 text-white/75 motion-reduce:!translate-y-0 motion-reduce:!opacity-100 sm:text-lg"
          >
            От первого набора до следующей большой смены — здесь собраны
            прошедшие этапы и ближайшие планы лагеря.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
