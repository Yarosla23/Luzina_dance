import { MessageCircle } from "lucide-react";

import { siteSettings, studioTestimonials } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function PricingSection() {
  return (
    <section className="section-band py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <div className="liquid-glass rounded-2xl p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase text-[color:var(--accent-warm)]">
                  Доверие и запись
                </p>
                <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.98] text-foreground sm:text-5xl">
                  {siteSettings.signUpNote}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                  В блоке записи оставлен честный сценарий: человек переходит в
                  личные сообщения, уточняет группу, возраст и удобное время.
                </p>
                <ButtonLink href="/#contacts" className="mt-7">
                  Написать для записи
                </ButtonLink>
              </div>

              <div className="grid gap-3">
                {studioTestimonials.map((item) => (
                  <article
                    key={item.author}
                    className="rounded-xl border border-white/10 bg-black/20 p-5"
                  >
                    <MessageCircle className="h-5 w-5 text-[color:var(--accent-cool)]" />
                    <p className="mt-4 text-sm leading-7 text-foreground">
                      {item.quote}
                    </p>
                    <p className="mt-3 text-sm text-muted">{item.author}</p>
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
