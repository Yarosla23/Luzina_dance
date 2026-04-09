import { Check } from "lucide-react";

import { siteSettings } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function PricingSection() {
  const enrollmentDetails = [
    "Опыт занятий и комфортный уровень нагрузки",
    "Направление, которое хочется попробовать",
    "Удобные дни и время для тренировок",
  ];

  return (
    <section data-home-chapter className="section-band pb-16 pt-4 sm:pb-20 lg:pb-28">
      <SiteShell>
        <Reveal>
          <div data-scroll-reveal className="relative overflow-hidden rounded-[2rem_2rem_4rem_2rem] border border-white/14 bg-accent p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/65">
                  Запись на занятия
                </p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.94] text-white sm:text-6xl">
                  {siteSettings.signUpNote}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">
                  Напишите нам — подберём направление и уровень, сверим
                  расписание и расскажем, что взять на первое занятие.
                </p>
                <ButtonLink href="/#contacts" className="mt-7">
                  Написать для записи
                </ButtonLink>
              </div>

              <div className="grid gap-3">
                {enrollmentDetails.map((item, index) => (
                  <article
                    key={item}
                    className="flex items-start gap-4 border-t border-white/25 py-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 text-white">
                      <Check className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">0{index + 1}</p>
                      <p className="mt-2 text-base leading-7 text-white">{item}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </SiteShell>
    </section>
  );
}
