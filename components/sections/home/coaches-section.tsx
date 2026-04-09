import Link from "next/link";

import { coaches } from "@/lib/site-data";

import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function CoachesSection() {
  return (
    <section id="team" data-home-chapter className="section-band py-16 sm:py-20 lg:py-28">
      <SiteShell>
        <Reveal>
          <SectionHeading
            eyebrow="Команда"
            title="Педагоги задают ритм, стиль и уверенность."
            description="Каждый педагог работает со своим направлением, но команда держит общий принцип: база, внимание к телу и пространство для собственного характера."
          />
        </Reveal>

        <div data-scroll-reveal className="mt-10 grid gap-4 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <Reveal key={coach.slug} delay={0.08 * index}>
              <Link href={`/coaches/${coach.slug}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                <ImagePanel
                  image={coach.image}
                  title={coach.name}
                  description={coach.shortBio}
                  className="min-h-[420px]"
                  overlay={
                    <div className="absolute right-3 top-3 rounded-full border border-white/15 bg-[#080607]/90 px-4 py-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-md">
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
