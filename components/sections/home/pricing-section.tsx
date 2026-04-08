import { siteSettings } from "@/lib/site-data";

import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

export function PricingSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <SiteShell>
        <Reveal>
          <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(158,22,22,0.18),rgba(255,255,255,0.03))] px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p className="text-[11px] uppercase tracking-[0.28em] text-muted">
              Старт занятий / запись
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-[0.95] text-foreground sm:text-5xl">
              {siteSettings.signUpNote}
            </h2>
          </div>
        </Reveal>
      </SiteShell>
    </section>
  );
}
