"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import {
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

type StudioPhoto = {
  image: StaticImageData;
  title: string;
  alt: string;
  previewClassName?: string;
  previewSizes?: string;
};

type StudioPhotoGalleryProps = {
  photos: readonly StudioPhoto[];
};

export function StudioPhotoGallery({ photos }: StudioPhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const pointerStartRef = useRef<number | null>(null);
  const focusTimeoutRef = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isOpen = activeIndex !== null;
  const activePhoto = photos[activeIndex ?? 0];
  const previewPhotos = photos
    .map((photo, index) => ({ photo, index }))
    .filter(({ photo }) => photo.previewClassName);

  const showPrevious = useCallback(() => {
    setDirection(-1);
    setActiveIndex((currentIndex) =>
      currentIndex === null
        ? currentIndex
        : (currentIndex - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);

  const showNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((currentIndex) =>
      currentIndex === null ? currentIndex : (currentIndex + 1) % photos.length,
    );
  }, [photos.length]);

  const closeGallery = useCallback(() => {
    const trigger = triggerRef.current;
    setActiveIndex(null);

    if (focusTimeoutRef.current !== null) {
      window.clearTimeout(focusTimeoutRef.current);
    }

    focusTimeoutRef.current = window.setTimeout(
      () => {
        trigger?.focus({ preventScroll: true });
        focusTimeoutRef.current = null;
      },
      shouldReduceMotion ? 0 : 340,
    );
  }, [shouldReduceMotion]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
        return;
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        showNext();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
    };
  }, [closeGallery, isOpen, showNext, showPrevious]);

  useEffect(
    () => () => {
      if (focusTimeoutRef.current !== null) {
        window.clearTimeout(focusTimeoutRef.current);
      }
    },
    [],
  );

  if (photos.length === 0) {
    return null;
  }

  const openGallery = (
    index: number,
    event: ReactMouseEvent<HTMLButtonElement>,
  ) => {
    if (focusTimeoutRef.current !== null) {
      window.clearTimeout(focusTimeoutRef.current);
      focusTimeoutRef.current = null;
    }

    triggerRef.current = event.currentTarget;
    setDirection(0);
    setActiveIndex(index);
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    pointerStartRef.current = event.clientX;
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (pointerStartRef.current === null) {
      return;
    }

    const travel = event.clientX - pointerStartRef.current;
    pointerStartRef.current = null;

    if (Math.abs(travel) < 48) {
      return;
    }

    if (travel > 0) {
      showPrevious();
    } else {
      showNext();
    }
  };

  return (
    <>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[280px]">
        {previewPhotos.map(({ photo, index }) => (
          <figure
            key={photo.title}
            data-space-mock
            data-scroll-reveal
            className={`group relative overflow-hidden rounded-[2rem_2rem_4.5rem_2rem] border border-white/14 bg-[#13090c] will-change-transform ${photo.previewClassName}`}
          >
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label={`Открыть фотографию «${photo.title}»`}
              onClick={(event) => openGallery(index, event)}
              className="relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset"
            >
              <Image
                src={photo.image}
                alt={photo.alt}
                fill
                sizes={photo.previewSizes ?? "100vw"}
                className="object-cover transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none"
              />
              <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(8,6,7,0.72)_100%)]" />
              <span className="pointer-events-none absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur-sm transition-colors duration-160 group-hover:bg-white group-hover:text-black">
                <Maximize2 aria-hidden="true" className="h-4 w-4" />
              </span>
            </button>
            <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-xs font-bold uppercase tracking-[0.16em] text-white sm:p-6">
              {photo.title}
            </figcaption>
          </figure>
        ))}
      </div>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {isOpen && activePhoto ? (
                <motion.div
                  ref={dialogRef}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="studio-gallery-title"
                  aria-describedby="studio-gallery-counter"
                  className="fixed inset-0 z-[100] bg-black/95 p-3 backdrop-blur-md sm:p-6"
                  initial={shouldReduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.32,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  onClick={closeGallery}
                >
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(139,21,56,0.24),transparent_38%)]" />

                  <div
                    className="relative mx-auto flex h-full max-w-7xl items-center justify-center pb-20 pt-16 sm:px-20 sm:pb-16 sm:pt-12"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <p
                      id="studio-gallery-counter"
                      aria-live="polite"
                      className="absolute left-1 top-1 z-20 rounded-full border border-white/20 bg-[#13090c]/90 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white sm:left-0 sm:top-0"
                    >
                      {(activeIndex ?? 0) + 1} / {photos.length}
                    </p>

                    <button
                      ref={closeButtonRef}
                      type="button"
                      aria-label="Закрыть галерею"
                      onClick={closeGallery}
                      className="absolute right-1 top-1 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#13090c] text-white transition duration-160 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-0 sm:top-0"
                    >
                      <X aria-hidden="true" className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      aria-label="Предыдущая фотография"
                      onClick={showPrevious}
                      className="absolute bottom-1 left-1 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#13090c] text-white transition duration-160 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-auto sm:left-0 sm:top-1/2 sm:-translate-y-1/2"
                    >
                      <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                    </button>

                    <AnimatePresence initial={false} mode="wait" custom={direction}>
                      <motion.div
                        key={activeIndex}
                        custom={direction}
                        className="relative h-full w-full touch-pan-y"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, scale: 0.985, x: direction * 24 }
                        }
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={
                          shouldReduceMotion
                            ? { opacity: 1 }
                            : { opacity: 0, scale: 0.99, x: direction * -18 }
                        }
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.34,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        onPointerDown={handlePointerDown}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={() => {
                          pointerStartRef.current = null;
                        }}
                      >
                        <Image
                          src={activePhoto.image}
                          alt={activePhoto.alt}
                          fill
                          priority
                          sizes="100vw"
                          className="select-none object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="pointer-events-none absolute inset-x-16 bottom-1 z-20 text-center sm:bottom-0">
                      <h2
                        id="studio-gallery-title"
                        className="truncate font-serif text-lg text-white sm:text-2xl"
                      >
                        {activePhoto.title}
                      </h2>
                      <p className="mt-1 hidden text-xs uppercase tracking-[0.12em] text-white/55 sm:block">
                        Листайте стрелками или клавишами ← →
                      </p>
                    </div>

                    <button
                      type="button"
                      aria-label="Следующая фотография"
                      onClick={showNext}
                      className="absolute bottom-1 right-1 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-[#13090c] text-white transition duration-160 hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-auto sm:right-0 sm:top-1/2 sm:-translate-y-1/2"
                    >
                      <ChevronRight aria-hidden="true" className="h-5 w-5" />
                    </button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}
