import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(148,20,20,0.18),rgba(255,255,255,0.03))] px-6 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              CTA
            </p>
            <h2 className="mx-auto mt-4 max-w-[11ch] font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
              Запишитесь и начните путь в танце без лишней сложности.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Сайт уже собран так, чтобы потом было легко обновлять тексты,
              расписание, фото и отдельные продуктовые страницы.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ButtonLink href="/#contacts">Записаться</ButtonLink>
              <ButtonLink href="/kids" variant="secondary">
                Открыть детские группы
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </SiteShell>
    </section>
  );
}
