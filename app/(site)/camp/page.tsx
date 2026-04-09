import type { Metadata } from "next";

import { campInfo } from "@/lib/site-data";

import { CampFinalCta } from "@/components/sections/camp/camp-final-cta";
import { CampHero } from "@/components/sections/camp/camp-hero";
import { CampStorySections } from "@/components/sections/camp/camp-story-sections";
import { CampCurvedTimeline } from "@/components/sections/camp/camp-curved-timeline";

export const metadata: Metadata = {
  title: "Танцевальный лагерь",
  description:
    "Страница танцевального лагеря Dance Soul Camp: выразительный hero, timeline 2025–2026, летние галереи, программа и финальный CTA.",
};

export default function CampPage() {
  return (
    <main className="relative pb-4">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,179,92,0.12),transparent_34%),linear-gradient(245deg,rgba(108,217,213,0.08),transparent_28%)]" />
      <div className="relative z-10">
        <CampHero />
        <CampCurvedTimeline items={campInfo.timeline} />
        <CampStorySections />
        <CampFinalCta />
      </div>
    </main>
  );
}
