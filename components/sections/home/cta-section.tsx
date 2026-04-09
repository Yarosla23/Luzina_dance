import { ButtonLink } from "@/components/shared/button-link";
import { DanceMotionField } from "@/components/shared/dance-motion";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function CtaSection() {
  return (
    <section className="section-band relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <DanceMotionField variant="compact" className="hidden lg:block" />
      <SiteShell>
        <Reveal>
          <div className="liquid-glass rounded-2xl px-6 py-10 text-center sm:px-8 sm:py-12 lg:px-12 lg:py-16">
            <p className="text-xs font-semibold uppercase text-[color:var(--accent-warm)]">
              Следующий шаг
            </p>
            <h2 className="mx-auto mt-4 max-w-[13ch] font-serif text-4xl leading-[0.98] text-foreground sm:text-5xl">
              Подберите группу и приходите на первый класс.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Напишите в личные сообщения: подскажем направление, возрастную
              группу, расписание и свободные места.
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
