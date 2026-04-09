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
    <section id="about" data-home-chapter className="section-band py-16 sm:py-20 lg:py-28">
      <SiteShell>
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <Reveal className="stage-rule pt-7">
            <div data-scroll-reveal>
              <SectionHeading
                eyebrow="Как всё устроено"
                title="Свобода в танце начинается с понятной опоры."
                description="Подходящий уровень, внимательный педагог и регулярный ритм занятий дают базу, на которой появляется собственная подача."
              />
            </div>

            <div className="mt-8 grid gap-3">
              {studioCapabilities.map((item, index) => {
                const Icon = icons[index] ?? Activity;

                return (
                  <div key={item.title} className="border-t border-white/14 py-5">
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-accent text-white">
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
            <div data-scroll-reveal>
              <ImagePanel
                image={founder.image}
                title={founder.name}
                description="Руководитель студии. Собирает команду, направление и атмосферу пространства."
                className="min-h-[360px] sm:min-h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
