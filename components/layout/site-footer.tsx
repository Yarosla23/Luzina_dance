import Link from "next/link";

import {
  contactLines,
  footerCredit,
  mainNavigation,
  socialLinks,
  siteSettings,
} from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Logo } from "@/components/shared/logo";
import { SiteShell } from "@/components/shared/site-shell";

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M21.4 4.6a1.5 1.5 0 0 0-1.57-.23L3.78 10.8a1.5 1.5 0 0 0 .11 2.82l3.96 1.34 1.35 4a1.5 1.5 0 0 0 2.52.63l2.2-2.12 3.86 2.82a1.5 1.5 0 0 0 2.35-.88l2.26-13.2a1.5 1.5 0 0 0-.99-1.6ZM9.3 14.3l-.59 3.1-.97-2.87 8.08-6.97-6.52 7.1Z" />
    </svg>
  );
}

function VkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M4.76 7.95c.12 5.83 3.04 9.34 8.18 9.34h.3V14.1c1.8.18 3.16 1.5 3.7 3.19h2.54c-.7-2.55-2.53-3.96-3.67-4.5 1.14-.66 2.74-2.28 3.12-4.84h-2.31c-.5 2.08-1.98 3.7-3.38 3.88V7.95h-2.31v6.8c-1.42-.36-3.22-2.1-3.3-6.8H4.76Z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Telegram") {
    return <TelegramIcon />;
  }

  if (label === "VK") {
    return <VkIcon />;
  }

  return null;
}

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
                <p className="text-xs font-semibold uppercase text-muted">
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
                <p className="text-xs font-semibold uppercase text-muted">
                  Контакты
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm leading-6 text-foreground">
                  {contactLines.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-muted">
                  Соцсети
                </p>
                <div className="mt-4 flex flex-col gap-3 text-sm text-foreground">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 transition-colors duration-300 hover:text-muted"
                    >
                      <SocialIcon label={item.label} />
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs uppercase text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>
              {siteSettings.name}. Студия танцев для движения, роста и сильной
              энергии.
            </p>
            <p>
              Сделан благодаря{" "}
              <Link
                href={footerCredit.url}
                target="_blank"
                rel="noreferrer"
                className="text-foreground transition-colors duration-300 hover:text-muted"
              >
                {footerCredit.label}
              </Link>
            </p>
          </div>
        </div>
      </SiteShell>
    </footer>
  );
}
