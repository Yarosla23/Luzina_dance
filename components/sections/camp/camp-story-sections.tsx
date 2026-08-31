import Image from "next/image";

import { campInfo } from "@/lib/site-data";
import { cn } from "@/lib/utils";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function CampStorySections() {
  return (
    <section id="program" className="relative overflow-hidden border-b border-white/10 bg-black py-24 lg:py-36">
      <div className="pointer-events-none absolute inset-0 leopard-pattern opacity-15" />
      <SiteShell className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Программа смены"
            title="От первого знакомства до общего финала."
            description="Знакомство, занятия, съёмки и общий финал — без перегруженного расписания."
          />
        </Reveal>

        <div className="mt-14 grid gap-8">
          {campInfo.storyScenes.map((scene, index) => {
            const imageOnLeft = index % 2 === 1;

            return (
              <article
                key={scene.id}
                className="grid overflow-hidden rounded-[2rem_2rem_4rem_2rem] border border-white/14 lg:min-h-[680px] lg:grid-cols-2"
              >
                <Reveal
                  className={cn(
                    "relative min-h-[420px] overflow-hidden lg:min-h-full",
                    imageOnLeft ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  <Image
                    src={scene.image}
                    alt={scene.title}
                    fill
                    placeholder="blur"
                    className="object-cover transition duration-700 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,6,7,0.05),rgba(8,6,7,0.5))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-accent px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white">
                    0{index + 1}
                  </div>
                </Reveal>

                <Reveal
                  delay={0.08}
                  className={cn(
                    "flex items-center bg-[#13090c] p-7 sm:p-10 lg:p-14",
                    imageOnLeft ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">
                      {scene.kicker}
                    </p>
                    <h2 className="mt-6 font-serif text-4xl leading-[0.9] text-white sm:text-6xl">
                      {scene.title}
                    </h2>
                    <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
                      {scene.description}
                    </p>
                    <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/14 pt-5">
                      {scene.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:bg-accent-strong"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </SiteShell>
    </section>
  );
}
