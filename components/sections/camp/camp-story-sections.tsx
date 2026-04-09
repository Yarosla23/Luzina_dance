"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import { campInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function CinematicScene({
  scene,
  index,
  total,
  scrollYProgress,
}: {
  scene: (typeof campInfo.storyScenes)[number];
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  
  const opacity = useTransform(
    scrollYProgress,
    [start, start + 0.1, end - 0.1, end],
    [0, 1, 1, 0]
  );
  
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1.1, 1.0]
  );

  const textY = useTransform(
    scrollYProgress,
    [start, start + 0.2, end - 0.2, end],
    [60, 0, 0, -60]
  );

  return (
    <motion.div
      style={{ opacity, pointerEvents: index === 0 ? "auto" : "none" }}
      className="absolute inset-0 h-full w-full"
    >
      <motion.div style={{ scale }} className="absolute inset-0 h-full w-full">
        <Image
          src={scene.image}
          alt={scene.title}
          fill
          className="object-cover"
          priority={index === 0}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </motion.div>

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <motion.div
          style={{ y: textY }}
          className="max-w-5xl text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-[#f4c88b]">
            {scene.kicker}
          </p>
          <h2 className="mt-8 font-serif text-6xl leading-[0.85] text-white sm:text-8xl lg:text-[11rem]">
            {scene.title}
          </h2>
          <p className="mx-auto mt-12 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-2xl">
            {scene.description}
          </p>
          
          <div className="mt-14 flex flex-wrap justify-center gap-4">
            {scene.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-8 py-3 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-2xl">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <SceneGalleryElements sceneIndex={index} scrollYProgress={scrollYProgress} start={start} end={end} />
    </motion.div>
  );
}

function SceneGalleryElements({ 
  sceneIndex, 
  scrollYProgress, 
  start, 
  end 
}: { 
  sceneIndex: number, 
  scrollYProgress: MotionValue<number>,
  start: number,
  end: number
}) {
  const highlights = campInfo.galleryHighlights.slice(sceneIndex * 2, (sceneIndex * 2) + 2);
  
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      {highlights.map((item, i) => {
        const itemStart = start + (i * 0.05) + 0.1;
        const itemOpacity = useTransform(scrollYProgress, [itemStart, itemStart + 0.1, end - 0.1], [0, 1, 0]);
        const itemRotate = i === 0 ? -6 : 6;
        const itemX = i === 0 
          ? useTransform(scrollYProgress, [itemStart, end], ["-100%", "10%"])
          : useTransform(scrollYProgress, [itemStart, end], ["100%", "-10%"]);
        
        return (
          <motion.div
            key={item.title}
            style={{ 
              opacity: itemOpacity, 
              x: itemX, 
              rotate: itemRotate,
              top: i === 0 ? "15%" : "60%",
              left: i === 0 ? "0" : "auto",
              right: i === 0 ? "auto" : "0"
            }}
            className={cn(
              "absolute hidden h-64 w-80 overflow-hidden rounded-[2rem] border border-white/20 bg-black/40 p-2 shadow-2xl backdrop-blur-3xl lg:block"
            )}
          >
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#f4c88b]">{item.title}</p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export function CampStoryCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative h-[800vh] w-full bg-black">
      {/* Sticky wrapper that fills the viewport */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        {campInfo.storyScenes.map((scene, index) => (
          <CinematicScene
            key={scene.id}
            scene={scene}
            index={index}
            total={campInfo.storyScenes.length}
            scrollYProgress={smoothProgress}
          />
        ))}

        {/* HUD Elements */}
        <div className="absolute bottom-12 left-12 z-40 hidden lg:block">
          <div className="flex items-center gap-6">
            <div className="h-px w-24 bg-gradient-to-r from-[#f4c88b] to-transparent" />
            <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#f4c88b]">Chapter focus</p>
          </div>
        </div>

        {/* Navigation / Progress Indicator */}
        <div className="absolute right-12 top-0 bottom-0 z-40 flex flex-col justify-center gap-8">
           {campInfo.storyScenes.map((_, i) => {
             const start = i / campInfo.storyScenes.length;
             const end = (i + 1) / campInfo.storyScenes.length;
             return (
               <motion.div
                 key={i}
                 className="h-1.5 w-1.5 rounded-full border border-white/20"
                 style={{
                   backgroundColor: "#f4c88b",
                   opacity: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0.2, 1, 1, 0.2]),
                   scale: useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [1, 1.5, 1.5, 1])
                 }}
               />
             );
           })}
        </div>
      </div>
    </section>
  );
}

function MobileStoryScene({ scene, index }: { scene: (typeof campInfo.storyScenes)[number], index: number }) {
  return (
    <article className="relative min-h-[100vh] w-full py-24 px-8 flex flex-col justify-center border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <Image src={scene.image} alt={scene.title} fill className="object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>
      
      <div className="relative z-10">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#f4c88b]">Scene 0{index + 1}</p>
        <h2 className="mt-8 font-serif text-5xl leading-[0.9] text-white">{scene.title}</h2>
        <p className="mt-8 text-lg leading-relaxed text-white/60">{scene.description}</p>
      </div>
    </article>
  );
}

export function CampStorySections() {
  return (
    <div id="program">
      <div className="hidden lg:block">
        <CampStoryCinematic />
      </div>
      <div className="block lg:hidden bg-black">
        {campInfo.storyScenes.map((scene, index) => (
          <MobileStoryScene key={scene.id} scene={scene} index={index} />
        ))}
      </div>
    </div>
  );
}