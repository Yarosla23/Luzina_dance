import { Activity, Camera, HeartHandshake } from "lucide-react";

import { coaches, studioCapabilities } from "@/lib/site-data";

import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

export function AboutSection() {
  const founder = coaches.find((coach) => coach.slug === "yana-luzina");
  const icons = [Activity, HeartHandshake, Camera];

  if (!founder) {
    return null;
  }

  return (
    <section id="about" className="section-band py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="О нас"
              title="Пространство, где ученики раскрываются через движение."
              description="Студия собрана вокруг понятной системы: подходящий возраст, сильный педагог, регулярный ритм занятий и визуальная культура, которая делает прогресс заметным."
            />

            <div className="mt-8 grid gap-3">
              {studioCapabilities.map((item, index) => {
                const Icon = icons[index] ?? Activity;

                return (
                  <div key={item.title} className="liquid-glass rounded-2xl p-5">
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-[color:var(--accent-warm)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-muted">{item.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ImagePanel
              image={founder.image}
              title={founder.name}
              description="Руководитель студии и носитель общего визуального характера проекта."
              className="min-h-[360px] sm:min-h-[500px]"
            />
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
