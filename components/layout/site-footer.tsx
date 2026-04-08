import Link from "next/link";

import {
  contactLines,
  mainNavigation,
  socialLinks,
  siteSettings,
} from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Logo } from "@/components/shared/logo";
import { SiteShell } from "@/components/shared/site-shell";

export function SiteFooter() {
  return (
    <footer
      id="contacts"
      className="border-t border-white/10 pb-8 pt-16 sm:pb-10 sm:pt-20"
    >
      <SiteShell>
        <div className="surface-panel overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Logo />
              <p className="mt-6 max-w-md text-sm leading-7 text-muted sm:text-base">
                Современная студия, где движение, стиль и комьюнити собираются в
                одну сильную атмосферу. Здесь дети и подростки развиваются через
                танец, музыку и уверенность в себе.
              </p>
              <div className="mt-8">
                <ButtonLink href="/#contacts">Записаться</ButtonLink>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Навигация
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-foreground">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="transition-colors duration-300 hover:text-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Контакты
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-foreground">
                  {contactLines.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Соцсети
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-foreground">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="transition-colors duration-300 hover:text-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-muted">
            {siteSettings.name}. Студия танцев для движения, роста и сильной
            энергии.
          </div>
        </div>
      </SiteShell>
    </footer>
  );
}
