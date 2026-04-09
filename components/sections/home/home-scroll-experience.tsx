"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { type ReactNode, useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type HomeScrollExperienceProps = {
  children: ReactNode;
};

export function HomeScrollExperience({ children }: HomeScrollExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;

      if (!root) {
        return;
      }

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const hasFinePointer = window.matchMedia(
        "(hover: hover) and (pointer: fine)",
      ).matches;

      if (prefersReducedMotion) {
        return;
      }

      const lenis = hasFinePointer
        ? new Lenis({
            anchors: { duration: 0.9, offset: -96 },
            duration: 0.9,
            smoothWheel: true,
            stopInertiaOnNavigate: true,
            syncTouch: false,
            wheelMultiplier: 0.9,
          })
        : null;
      const updateLenis = (time: number) => lenis?.raf(time * 1000);

      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(updateLenis);
      }

      const heroTimeline = gsap.timeline({
        defaults: { duration: 0.82, ease: "power3.out" },
      });

      heroTimeline
        .fromTo(
          "[data-hero-reveal]",
          { autoAlpha: 0, y: 34 },
          { autoAlpha: 1, y: 0, stagger: 0.09 },
          0.08,
        )
        .fromTo(
          "[data-hero-media]",
          { autoAlpha: 0, scale: 0.965, y: 22 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 1.05 },
          0.22,
        );

      gsap.utils.toArray<HTMLElement>("[data-home-chapter]").forEach((section) => {
        const heading = section.querySelector("h2");
        const revealTargets = section.querySelectorAll<HTMLElement>(
          "[data-scroll-reveal]",
        );

        ScrollTrigger.create({
          trigger: section,
          start: "top 56%",
          end: "bottom 56%",
          toggleClass: {
            targets: section,
            className: "is-scroll-focused",
          },
        });

        if (heading) {
          gsap.fromTo(
            heading,
            { autoAlpha: 0, y: 28 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.72,
              ease: "power3.out",
              scrollTrigger: {
                trigger: heading,
                start: "clamp(top 84%)",
                once: true,
              },
            },
          );
        }

        if (revealTargets.length > 0) {
          gsap.fromTo(
            revealTargets,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.62,
              ease: "power2.out",
              stagger: 0.07,
              scrollTrigger: {
                trigger: revealTargets[0],
                start: "clamp(top 86%)",
                once: true,
              },
            },
          );
        }
      });

      const mediaQuery = gsap.matchMedia();

      mediaQuery.add(
        "(min-width: 1024px) and (min-height: 720px) and (hover: hover) and (pointer: fine)",
        () => {
          const section = root.querySelector<HTMLElement>("[data-directions-section]");
          const pin = root.querySelector<HTMLElement>("[data-directions-pin]");
          const viewport = root.querySelector<HTMLElement>("[data-directions-viewport]");
          const track = root.querySelector<HTMLElement>("[data-directions-track]");

          if (!section || !pin || !viewport || !track) {
            return;
          }

          root.classList.add("home-motion-ready");
          const travel = () => Math.max(0, track.scrollWidth - viewport.clientWidth);

          gsap.to(track, {
            x: () => -travel(),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${travel() + window.innerWidth * 0.12}`,
              pin,
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          });

          gsap.utils.toArray<HTMLElement>("[data-space-mock]").forEach((item, index) => {
            gsap.fromTo(
              item,
              { yPercent: index % 2 === 0 ? 3 : -3 },
              {
                yPercent: index % 2 === 0 ? -4 : 4,
                ease: "none",
                scrollTrigger: {
                  trigger: item,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 0.8,
                },
              },
            );
          });

          return () => root.classList.remove("home-motion-ready");
        },
      );

      let isDisposed = false;
      document.fonts.ready.then(() => {
        if (!isDisposed) {
          ScrollTrigger.refresh();
        }
      });

      return () => {
        isDisposed = true;
        mediaQuery.revert();
        gsap.ticker.remove(updateLenis);
        lenis?.destroy();
      };
    },
    { scope: rootRef },
  );

  return (
    <div ref={rootRef} className="relative" data-home-scroll-root>
      {children}
    </div>
  );
}
