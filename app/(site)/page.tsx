import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/home/about-section";
import { CoachesSection } from "@/components/sections/home/coaches-section";
import { DirectionsSection } from "@/components/sections/home/directions-section";
import { HomeHero } from "@/components/sections/home/home-hero";
import { HomeScrollExperience } from "@/components/sections/home/home-scroll-experience";
import { LocationSection } from "@/components/sections/home/location-section";
import { MediaSection } from "@/components/sections/home/media-section";
import { PricingSection } from "@/components/sections/home/pricing-section";
import { ScheduleSection } from "@/components/sections/home/schedule-section";
import { StudioSpaceSection } from "@/components/sections/home/studio-space-section";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Танцевальная Душа: направления, расписание, преподаватели, танцевальный лагерь и мерч студии.",
};

export default function HomePage() {
  return (
    <HomeScrollExperience>
      <main>
        <HomeHero />
        <DirectionsSection />
        <AboutSection />
        <ScheduleSection />
        <StudioSpaceSection />
        <CoachesSection />
        <MediaSection />
        <LocationSection />
        <PricingSection />
      </main>
    </HomeScrollExperience>
  );
}
