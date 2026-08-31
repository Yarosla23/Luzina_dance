import type { Metadata } from "next";

import { campInfo } from "@/lib/site-data";

import { CampFinalCta } from "@/components/sections/camp/camp-final-cta";
import { CampHero } from "@/components/sections/camp/camp-hero";
import { CampStorySections } from "@/components/sections/camp/camp-story-sections";
import { CampCurvedTimeline } from "@/components/sections/camp/camp-curved-timeline";

export const metadata: Metadata = {
  title: "Танцевальный лагерь",
  description:
    "Dance Soul Camp: пять дней танцевальных классов, съёмок, отдыха и времени с командой.",
};

export default function CampPage() {
  return (
    <main className="relative pb-4">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(92,0,7,0.22),transparent_42%)]" />
      <div className="relative z-10">
        <CampHero />
        <CampCurvedTimeline items={campInfo.timeline} />
        <CampStorySections />
        <CampFinalCta />
      </div>
    </main>
  );
}
