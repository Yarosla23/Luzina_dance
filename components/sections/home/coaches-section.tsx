import Link from "next/link";

import { coaches } from "@/lib/site-data";

import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function CoachesSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Команда"
            title="У каждого преподавателя уже есть своя маршрутная основа."
            description="Это не просто карточки. Структура заложена так, чтобы у каждого преподавателя была отдельная страница с фото, описанием и галереей."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <Reveal key={coach.slug} delay={0.08 * index}>
              <Link href={`/coaches/${coach.slug}`} className="block">
                <ImagePanel
                  image={coach.image}
                  title={coach.name}
                  description={coach.shortBio}
                  className="min-h-[420px]"
                  overlay={
                    <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-white/85">
                      {coach.role}
                    </div>
                  }
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </SiteShell>
    </section>
  );
}
