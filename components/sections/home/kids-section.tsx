import { kidsGroups, kidsMedia } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function KidsSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[2.25rem] bg-[#f4efe8] px-6 py-8 text-stone-900 sm:px-8 sm:py-10 lg:px-10">
              <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
                Детские группы
              </p>
              <h2 className="mt-4 max-w-[11ch] font-serif text-4xl leading-[0.95] sm:text-5xl">
                Отдельная страница для детей уже встроена в структуру.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600">
                На главной показываем только краткий preview. Полный состав
                групп, программа и визуалы вынесены на отдельную страницу.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {kidsGroups.map((group) => (
                  <div
                    key={group.id}
                    className="rounded-[1.5rem] border border-stone-200 bg-white/80 p-4"
                  >
                    <p className="font-medium text-stone-900">{group.title}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">
                      {group.time}, {group.age}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ButtonLink
                  href="/kids"
                  className="border-stone-900 text-white"
                >
                  Открыть страницу детских групп
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <ImagePanel
              image={kidsMedia.hero}
              title="Дети"
              className="min-h-[420px] border-white/0"
              contentClassName="hidden"
              withShade={false}
            />
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
