import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";
import { DanceMotionField } from "@/components/shared/dance-motion";

import { InteractiveScheduleShowcase } from "./interactive-schedule-showcase";

export function ScheduleSection() {
  return (
    <section id="schedule" className="section-band relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <DanceMotionField variant="compact" className="hidden lg:block" />
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Расписание"
            title="Расписание работает как инструмент выбора, а не как таблица."
            description="Можно переключать дни, фильтровать направления и быстро видеть возраст, время и педагога без длинного поиска по странице."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <InteractiveScheduleShowcase />
        </Reveal>
      </SiteShell>
    </section>
  );
}
