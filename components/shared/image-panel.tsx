import type { ReactNode } from "react";

import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type ImagePanelProps = {
  image: StaticImageData;
  title: string;
  description?: string;
  className?: string;
  priority?: boolean;
  overlay?: ReactNode;
  contentClassName?: string;
  withShade?: boolean;
  contentPosition?: "overlay" | "below";
};

export function ImagePanel({
  image,
  title,
  description,
  className,
  priority = false,
  overlay,
  contentClassName,
  withShade = true,
  contentPosition = "overlay",
}: ImagePanelProps) {
  const hasContent = contentClassName !== "hidden";

  return (
    <article
      className={cn(
        "group liquid-glass relative overflow-hidden rounded-2xl",
        className,
      )}
    >
      <div
        className={cn(
          "relative min-h-[inherit]",
          contentPosition === "below" && hasContent ? "min-h-[320px]" : "h-full",
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          priority={priority}
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
        {withShade ? (
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.02),rgba(6,6,6,0.68))]" />
        ) : null}
        {overlay}
        {contentPosition === "overlay" && hasContent ? (
          <div className={cn("absolute inset-x-0 bottom-0 p-6 sm:p-7", contentClassName)}>
            <h3 className="font-serif text-3xl text-white">{title}</h3>
            {description ? (
              <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      {contentPosition === "below" && hasContent ? (
        <div className={cn("relative border-t border-white/10 p-6 sm:p-7", contentClassName)}>
          <h3 className="font-serif text-3xl text-foreground">{title}</h3>
          {description ? (
            <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
