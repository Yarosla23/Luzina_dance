import { siteSettings, studioHighlights } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-40"
    >
      <SiteShell>
        <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.95fr] lg:gap-14">
          <Reveal className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Современная студия танцев
            </p>
            <h1 className="mt-4 max-w-[9ch] font-serif text-5xl leading-[0.88] tracking-hero text-gradient sm:text-7xl lg:text-[7rem]">
              {siteSettings.name}. Движение, стиль и энергия.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Яркий, адаптивный сайт студии с отдельными страницами для детских
              групп, танцевального лагеря и мерча. Визуальный язык собран на
              реальных материалах студии.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              <ButtonLink href="/kids" className="justify-center">
                Детские группы
              </ButtonLink>
              <ButtonLink href="/camp" variant="secondary" className="justify-center">
                Танцевальный лагерь
              </ButtonLink>
              <ButtonLink href="/merch" variant="secondary" className="justify-center">
                Мерч
              </ButtonLink>
              <ButtonLink href="/#contacts" variant="secondary" className="justify-center">
                Записаться
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {studioHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 text-sm leading-6 text-muted"
                >
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <ImagePanel
              image={siteSettings.logo}
              title={siteSettings.tagline}
              description="Айдентика студии уже встроена в интерфейс. Дальше контент можно масштабировать без перелома структуры."
              className="min-h-[360px] sm:min-h-[520px]"
              priority
              overlay={
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(178,24,24,0.32),transparent_24%),linear-gradient(180deg,rgba(6,6,6,0.04),rgba(6,6,6,0.72))]" />
              }
            />
          </Reveal>
        </div>
      </SiteShell>
    </section>
  );
}
