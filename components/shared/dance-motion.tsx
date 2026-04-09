"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type DanceMotionFieldProps = {
  className?: string;
  variant?: "hero" | "compact";
};

const beatDots = [
  { x: "12%", y: "68%", delay: 0 },
  { x: "24%", y: "42%", delay: 0.18 },
  { x: "38%", y: "58%", delay: 0.36 },
  { x: "54%", y: "34%", delay: 0.54 },
  { x: "69%", y: "50%", delay: 0.72 },
  { x: "83%", y: "26%", delay: 0.9 },
];

export function DanceMotionField({
  className,
  variant = "hero",
}: DanceMotionFieldProps) {
  const shouldReduceMotion = useReducedMotion();
  const isCompact = variant === "compact";

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        isCompact ? "opacity-45" : "opacity-65",
        className,
      )}
    >
      <motion.svg
        viewBox="0 0 1000 720"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.path
          d="M-80 500 C 120 360, 190 610, 340 430 S 560 180, 710 330 S 880 560, 1080 250"
          fill="none"
          stroke="url(#dancePathWarm)"
          strokeWidth={isCompact ? 1.4 : 2}
          strokeLinecap="round"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { pathLength: [0, 1, 1], opacity: [0, 0.72, 0.34] }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M-60 250 C 110 170, 210 290, 320 220 C 470 120, 580 430, 710 280 C 830 150, 900 220, 1060 130"
          fill="none"
          stroke="url(#dancePathCool)"
          strokeWidth={isCompact ? 1 : 1.5}
          strokeLinecap="round"
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          animate={
            shouldReduceMotion
              ? undefined
              : { pathLength: [0, 1, 1], opacity: [0, 0.5, 0.22] }
          }
          transition={{
            duration: 10,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <defs>
          <linearGradient id="dancePathWarm" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#e04d3c" stopOpacity="0" />
            <stop offset="46%" stopColor="#d59c61" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#78d1c7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="dancePathCool" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#78d1c7" stopOpacity="0" />
            <stop offset="55%" stopColor="#78d1c7" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#e04d3c" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

      {beatDots.map((dot, index) => (
        <motion.span
          key={`${dot.x}-${dot.y}`}
          className="absolute h-2 w-2 rounded-full border border-white/60 bg-[color:var(--accent-warm)] shadow-[0_0_24px_rgba(213,156,97,0.48)]"
          style={{ left: dot.x, top: dot.y }}
          initial={shouldReduceMotion ? false : { opacity: 0.18, scale: 0.82 }}
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: [0.18, 0.92, 0.22],
                  scale: [0.82, 1.38, 0.92],
                  y: [0, index % 2 === 0 ? -12 : 10, 0],
                }
          }
          transition={{
            duration: 2.8,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
