"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import { type PointerEvent, useEffect, useRef, useState } from "react";

type MerchPhoto = {
  image: StaticImageData;
  title?: string;
  alt: string;
};

type MerchPhotoCarouselProps = {
  photos: readonly MerchPhoto[];
};

export function MerchPhotoCarousel({ photos }: MerchPhotoCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pointerStart, setPointerStart] = useState<number | null>(null);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const didSwipeRef = useRef(false);
  const shouldReduceMotion = useReducedMotion();
  const activePhoto = photos[activeIndex];

  useEffect(() => {
    if (!isFullscreenOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isFullscreenOpen]);

  useEffect(() => {
    if (photos.length < 2 || shouldReduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((currentIndex) => (currentIndex + 1) % photos.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [photos.length, shouldReduceMotion]);

  if (!activePhoto) {
    return null;
  }

  const showPhoto = (nextIndex: number) => {
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveIndex((nextIndex + photos.length) % photos.length);
  };

  const showPrevious = () => showPhoto(activeIndex - 1);
  const showNext = () => showPhoto(activeIndex + 1);

  const openFullscreen = () => {
    setIsFullscreenOpen(true);
    dialogRef.current?.showModal();
    closeButtonRef.current?.focus();
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart === null) {
      return;
    }

    const travel = event.clientX - pointerStart;
    setPointerStart(null);

    if (Math.abs(travel) < 48) {
      return;
    }

    didSwipeRef.current = true;

    if (travel > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };

  return (
    <div
      role="region"
      aria-roledescription="карусель"
      aria-label="Фотографии посадки штанов Dance Soul"
      className="group relative min-h-[520px] overflow-hidden rounded-[1.5rem_1.5rem_1.5rem_5rem] bg-black sm:min-h-[720px] lg:min-h-[820px] lg:rounded-[2rem_2rem_2rem_7rem]"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={activeIndex}
          custom={direction}
          className="absolute inset-0 touch-pan-y"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, x: direction * 24 }
          }
          animate={{ opacity: 1, x: 0 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: direction * -18 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.34,
            ease: [0.22, 1, 0.36, 1],
          }}
          onPointerDown={(event) => {
            didSwipeRef.current = false;
            setPointerStart(event.clientX);
          }}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => setPointerStart(null)}
        >
          <Image
            src={activePhoto.image}
            alt={activePhoto.alt}
            fill
            draggable={false}
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 58vw"
            className={`select-none transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none ${
              activePhoto.image.width >= activePhoto.image.height
                ? "object-contain"
                : "object-cover"
            }`}
          />
          <button
            type="button"
            aria-label={`Открыть полноэкранный просмотр: ${activePhoto.alt}`}
            onClick={() => {
              if (didSwipeRef.current) {
                didSwipeRef.current = false;
                return;
              }

              openFullscreen();
            }}
            className="absolute inset-0 cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
          />
        </motion.div>
      </AnimatePresence>

      <dialog
        ref={dialogRef}
        aria-label="Полноэкранный просмотр фотографий мерча"
        onClose={() => setIsFullscreenOpen(false)}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            showPrevious();
          }

          if (event.key === "ArrowRight") {
            showNext();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-black/95 p-0 text-white backdrop:bg-black/95"
      >
        <motion.div
          className="relative h-full w-full"
          initial={false}
          animate={
            isFullscreenOpen
              ? { opacity: 1, scale: 1 }
              : { opacity: 0, scale: 0.985 }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : 0.36,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src={activePhoto.image}
            alt={activePhoto.alt}
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-contain"
          />

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Закрыть полноэкранный просмотр"
            onClick={() => dialogRef.current?.close()}
            className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition duration-160 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X aria-hidden="true" className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Предыдущая фотография"
            onClick={showPrevious}
            className="absolute left-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition duration-160 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Следующая фотография"
            onClick={showNext}
            className="absolute right-6 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur-sm transition duration-160 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </motion.div>
      </dialog>
    </div>
  );
}
