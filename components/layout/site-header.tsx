"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { mainNavigation } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Logo } from "@/components/shared/logo";
import { SiteShell } from "@/components/shared/site-shell";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
        <SiteShell>
          <div className="flex items-center justify-between rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-2xl sm:px-5">
            <Logo />

            <nav className="hidden items-center gap-6 lg:flex">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-foreground ${
                    pathname === item.href ? "text-foreground" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <ButtonLink href="/#contacts" className="px-4 py-2.5 text-[11px]">
                Связаться
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground transition-colors duration-300 hover:bg-white/[0.08] lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </SiteShell>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-xl transition duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <SiteShell className="flex min-h-screen items-start pt-24">
          <div className="w-full rounded-[2rem] border border-white/10 bg-[#101010] p-6 shadow-soft">
            <div className="mb-8 flex items-center justify-between">
              <Logo />
              <button
                type="button"
                aria-label="Закрыть меню"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-3">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-2xl border border-white/8 px-4 py-4 font-serif text-2xl transition-colors duration-300 ${
                    pathname === item.href
                      ? "bg-white/[0.08] text-foreground"
                      : "bg-white/[0.03] text-foreground hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-8">
              <ButtonLink
                href="/#contacts"
                className="w-full justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Записаться на пробное
              </ButtonLink>
            </div>
          </div>
        </SiteShell>
      </div>
    </>
  );
}
