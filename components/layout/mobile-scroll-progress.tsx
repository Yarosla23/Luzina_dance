"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function MobileScrollProgress() {
  const pathname = usePathname();
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const progress = progressRef.current;

    if (!progress) {
      return;
    }

    let animationFrame = 0;

    const updateProgress = () => {
      animationFrame = 0;

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 1;

      progress.style.transform = `scaleX(${Math.min(1, Math.max(0, scrollProgress))})`;
    };

    const requestProgressUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateProgress);
      }
    };

    const pageResizeObserver = new ResizeObserver(requestProgressUpdate);

    pageResizeObserver.observe(document.documentElement);
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);
    requestProgressUpdate();

    return () => {
      pageResizeObserver.disconnect();
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);

      if (animationFrame !== 0) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-black/35 lg:hidden"
    >
      <span
        ref={progressRef}
        className="block h-full origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-strong shadow-[0_0_12px_rgba(185,30,75,0.8)] will-change-transform"
      />
    </div>
  );
}
