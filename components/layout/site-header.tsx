"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { mainNavigation } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { Logo } from "@/components/shared/logo";
import { SiteShell } from "@/components/shared/site-shell";

const visibleNavigation = mainNavigation.filter((item) => !item.hidden);

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeMenuOnEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-4">
        <SiteShell>
          <div className="flex min-h-[68px] items-center justify-between rounded-3xl border border-white/12 bg-[#080607]/95 px-4 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:px-5 lg:rounded-full">
            <Logo markClassName="hidden lg:flex" />

            <nav className="hidden h-[68px] items-center gap-8 lg:flex">
              {visibleNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={`relative flex h-full items-center text-[11px] font-bold uppercase tracking-[0.12em] transition-colors duration-200 hover:text-white after:absolute after:inset-x-0 after:bottom-2 after:h-[3px] after:rounded-full after:bg-accent-strong after:transition-transform ${
                    pathname === item.href
                      ? "text-white after:scale-x-100"
                      : "text-muted after:scale-x-0"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:block">
              <ButtonLink href="/#contacts" className="px-4 py-2.5 text-[10px]">
                Связаться
              </ButtonLink>
            </div>

            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
              onClick={() => setIsMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-foreground transition-colors duration-200 hover:border-white hover:bg-white hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </SiteShell>
      </header>

      <div
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        className={`fixed inset-0 z-40 bg-[#080607] transition duration-300 lg:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <SiteShell className="flex min-h-screen items-start pt-24">
          <div className="w-full rounded-3xl border border-white/14 bg-[#13090c] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.38)] sm:p-6">
            <div className="border-b border-white/14 pb-4">
              <p className="text-[11px] font-bold uppercase text-[color:var(--accent-warm)]">
                Навигация
              </p>
              <p className="mt-1 text-sm text-muted">Выберите раздел</p>
            </div>

            <nav aria-label="Основная навигация" className="flex flex-col">
              {visibleNavigation.map((item, index) => {
                const isCurrentPage = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isCurrentPage ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`grid min-h-20 grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 border-b px-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isCurrentPage
                        ? "border-accent-strong bg-white/[0.035] text-white"
                        : "border-white/10 text-foreground hover:border-white/30 hover:bg-white/[0.025]"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`text-[11px] font-bold tabular-nums ${
                        isCurrentPage
                          ? "text-[color:var(--accent-warm)]"
                          : "text-white/35"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-[1.75rem] leading-none sm:text-3xl">
                      {item.label}
                    </span>
                    {isCurrentPage ? (
                      <span
                        aria-hidden="true"
                        className="h-2 w-2 rounded-full bg-accent-strong shadow-[0_0_12px_rgba(168,25,61,0.75)]"
                      />
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-6">
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
