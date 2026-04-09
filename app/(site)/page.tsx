import type { Metadata } from "next";

import { AboutSection } from "@/components/sections/home/about-section";
import { CoachesSection } from "@/components/sections/home/coaches-section";
import { CtaSection } from "@/components/sections/home/cta-section";
import { DirectionsSection } from "@/components/sections/home/directions-section";
import { HomeHero } from "@/components/sections/home/home-hero";
import { KidsSection } from "@/components/sections/home/kids-section";
import { LocationSection } from "@/components/sections/home/location-section";
import { MediaSection } from "@/components/sections/home/media-section";
import { PricingSection } from "@/components/sections/home/pricing-section";
import { ScheduleSection } from "@/components/sections/home/schedule-section";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Главная страница студии Танцевальная Душа: направления, расписание, детские группы, лагерь и мерч.",
};

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <AboutSection />
      <DirectionsSection />
      <CoachesSection />
      <ScheduleSection />
      <PricingSection />
      <KidsSection />
      <MediaSection />
      <CtaSection />
      <LocationSection />
    </main>
  );
}
