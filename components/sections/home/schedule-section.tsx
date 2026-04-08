import { homeSchedule } from "@/lib/site-data";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Расписание"
            title="Демонстрационный вариант с удобной заменой данных."
            description="Расписание вынесено в отдельный массив в lib/site-data.ts. Чтобы обновить время, педагога или возраст, нужно менять только данные, а не верстку."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 xl:grid-cols-3">
          {homeSchedule.map((day, index) => (
            <Reveal key={day.day} delay={0.05 * index}>
              <article className="surface-panel h-full p-6">
                <p className="font-serif text-3xl text-foreground">{day.day}</p>
                <div className="mt-6 space-y-3">
                  {day.sessions.map((session) => (
                    <div
                      key={`${day.day}-${session.time}-${session.direction}`}
                      className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <p className="text-lg text-foreground">{session.time}</p>
                        <p className="text-xs uppercase tracking-[0.22em] text-muted">
                          {session.age}
                        </p>
                      </div>
                      <p className="mt-3 text-sm leading-6 text-foreground">
                        {session.direction}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        Педагог: {session.teacher}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </SiteShell>
    </section>
  );
}
