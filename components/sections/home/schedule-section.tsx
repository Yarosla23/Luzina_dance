import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";
import { DanceMotionField } from "@/components/shared/dance-motion";

import { InteractiveScheduleShowcase } from "./interactive-schedule-showcase";

export function ScheduleSection() {
  return (
    <section id="schedule" data-home-chapter className="section-band relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <DanceMotionField variant="compact" className="hidden lg:block" />
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Расписание"
            title="Найди занятия под свой график."
            description="В расписании указаны время, группа и преподаватель. Наличие мест уточним перед первым занятием."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div data-scroll-reveal>
            <InteractiveScheduleShowcase />
          </div>
        </Reveal>
      </SiteShell>
    </section>
  );
}
