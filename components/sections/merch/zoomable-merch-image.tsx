"use client";

import { Minus, Plus, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type ZoomableMerchImageProps = {
  image: StaticImageData;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  overlay?: ReactNode;
  priority?: boolean;
};

export function ZoomableMerchImage({
  image,
  alt,
  sizes,
  className,
  imageClassName,
  overlay,
  priority = false,
}: ZoomableMerchImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(false);
  const [zoom, setZoom] = useState(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");
    const updateFullscreenAvailability = () => {
      setIsFullscreenEnabled(mediaQuery.matches);

      if (!mediaQuery.matches) {
        setIsOpen(false);
      }
    };

    updateFullscreenAvailability();
    mediaQuery.addEventListener("change", updateFullscreenAvailability);

    return () => {
      mediaQuery.removeEventListener("change", updateFullscreenAvailability);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setZoom(1);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (event.key === "+" || event.key === "=") {
        setZoom((currentZoom) => Math.min(currentZoom + 0.25, 3));
      }

      if (event.key === "-") {
        setZoom((currentZoom) => Math.max(currentZoom - 0.25, 1));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const preview = (
    <>
      <Image
        src={image}
        alt={alt}
        fill
        priority={priority}
        placeholder="blur"
        className={cn(
          "object-cover transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.02] motion-reduce:transition-none",
          imageClassName,
        )}
        sizes={sizes}
      />
      {overlay}
    </>
  );

  return (
    <>
      {isFullscreenEnabled ? (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label={`Открыть изображение: ${alt}`}
          className={cn(
            "group relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset",
            className,
          )}
        >
          {preview}
        </button>
      ) : (
        <div
          className={cn(
            "group relative block h-full w-full overflow-hidden text-left",
            className,
          )}
        >
          {preview}
        </div>
      )}

      <AnimatePresence>
        {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.995 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.36,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(92,0,7,0.2),transparent_42%)]" />
          <div className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#13090c] p-1 text-white">
            <button
              type="button"
              aria-label="Уменьшить изображение"
              onClick={(event) => {
                event.stopPropagation();
                setZoom((currentZoom) => Math.max(currentZoom - 0.25, 1));
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40"
              disabled={zoom <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>

            <span className="min-w-12 text-center text-xs uppercase text-white/80">
              {Math.round(zoom * 100)}%
            </span>

            <button
              type="button"
              aria-label="Увеличить изображение"
              onClick={(event) => {
                event.stopPropagation();
                setZoom((currentZoom) => Math.min(currentZoom + 0.25, 3));
              }}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-40"
              disabled={zoom >= 3}
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Закрыть полноэкранный просмотр"
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#13090c] text-white transition hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative h-full max-h-[88vh] w-full">
              <Image
                src={image}
                alt={alt}
                fill
                priority
                placeholder="blur"
                className="object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
                sizes="100vw"
              />
            </div>
          </div>
        </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
