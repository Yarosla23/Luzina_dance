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
}: ImagePanelProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2rem] border border-white/10",
        className,
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,6,6,0.04),rgba(6,6,6,0.6))]" />
      ) : null}
      {overlay}
      <div className={cn("absolute inset-x-0 bottom-0 p-6 sm:p-7", contentClassName)}>
        <h3 className="font-serif text-3xl text-white">{title}</h3>
        {description ? (
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </article>
  );
}
