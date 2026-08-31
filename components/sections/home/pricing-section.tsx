import { Check } from "lucide-react";

import { siteSettings, socialLinks } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function PricingSection() {
  const enrollmentDetails = [
    "Твой опыт в танцах",
    "Направление, которое хочется попробовать",
    "Удобные дни и время",
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
                  Напиши, какое направление хочется попробовать и когда удобно
                  заниматься. Сверим расписание и подскажем, с чего начать.
                </p>
                <ButtonLink
                  href={socialLinks[0].href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7"
                >
                  Написать в Telegram
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
