import type { Metadata } from "next";

import { kidsGroups, kidsLessonFocus, kidsMedia, siteSettings } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export const metadata: Metadata = {
  title: "Детские группы",
  description:
    "Страница детских групп студии Танцевальная Душа: расписание, возраст, педагоги и что будет на занятиях.",
};

export default function KidsPage() {
  return (
    <main className="pb-20">
      <PageHero
        eyebrow="Детские группы"
        title="Три стартовые группы для детей и подростков."
        description='На данный момент будет доступно 3 группы, но в дальнейшем этот список вырастет🔥'
        image={kidsMedia.hero}
        light
        className="bg-[#f5efe8] text-stone-900"
        actions={
          <>
            <ButtonLink href="/#contacts" className="border-stone-900 text-white">
              Записаться
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="secondary"
              className="border-stone-300 bg-white/70 text-stone-900 hover:bg-white"
            >
              На главную
            </ButtonLink>
          </>
        }
      />

      <section className="bg-[#f5efe8] py-16 text-stone-900 sm:py-20 lg:py-24">
        <SiteShell>
          <Reveal>
            <p className="max-w-4xl text-base leading-8 text-stone-600 sm:text-lg">
              На занятиях мы будем изучать базу, технику, различные
              хореографии, а также работать над физической подготовкой и
              растяжкой😍
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {kidsGroups.map((group, index) => (
              <Reveal key={group.id} delay={0.08 * index}>
                <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white">
                  <div className="relative h-72">
                    <ImagePanel
                      image={group.image}
                      title={group.title}
                      className="h-full min-h-0 rounded-none border-0"
                      contentClassName="hidden"
                      withShade={false}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[11px] uppercase tracking-[0.24em] text-stone-500">
                      {group.title},{" "}
                      {group.teachers.includes(" и ") ? "педагоги" : "педагог"}:{" "}
                      {group.teachers}
                    </p>
                    <div className="mt-5 space-y-2 text-sm leading-7 text-stone-600">
                      <p>
                        {group.schedule} {group.time}, {group.age}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </SiteShell>
      </section>

      <section className="bg-[#f5efe8] py-16 text-stone-900 sm:py-20 lg:py-24">
        <SiteShell>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 sm:p-8">
                <p className="text-[11px] uppercase tracking-[0.28em] text-stone-500">
                  Что будет на занятиях
                </p>
                <h2 className="mt-4 font-serif text-4xl text-stone-900">
                  Сильная база без перегруза.
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {kidsLessonFocus.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.25rem] border border-stone-200 bg-stone-50 px-4 py-4 text-sm font-medium text-stone-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 rounded-[1.5rem] bg-stone-900 px-5 py-4 text-sm leading-7 text-stone-100">
                  {siteSettings.signUpNote}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.08}>
                <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white">
                  <div className="relative min-h-[420px]">
                    <ImagePanel
                      image={kidsMedia.schedulePoster}
                      title="Расписание"
                      className="h-full min-h-[420px] rounded-none border-0"
                      contentClassName="hidden"
                      withShade={false}
                    />
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white">
                  <div className="relative min-h-[420px]">
                    <ImagePanel
                      image={kidsMedia.pricingPoster}
                      title="Прайс"
                      className="h-full min-h-[420px] rounded-none border-0"
                      contentClassName="hidden"
                      withShade={false}
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </SiteShell>
      </section>
    </main>
  );
}
