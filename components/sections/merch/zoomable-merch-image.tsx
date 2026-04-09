"use client";

import { Minus, Plus, X } from "lucide-react";
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
  const [zoom, setZoom] = useState(1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`Открыть изображение: ${alt}`}
        className={cn(
          "relative block h-full w-full cursor-zoom-in overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-inset",
          className,
        )}
      >
        <Image
          src={image}
          alt={alt}
          fill
          priority={priority}
          className={cn("object-cover", imageClassName)}
          sizes={sizes}
        />
        {overlay}
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-black/95 p-4 backdrop-blur-md sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setIsOpen(false)}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(100,19,38,0.2),transparent_42%)]" />

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
                className="object-contain transition-transform duration-200"
                style={{ transform: `scale(${zoom})` }}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
