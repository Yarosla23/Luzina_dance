import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { Award, Camera, Sparkles } from "lucide-react";

import { coaches } from "@/lib/site-data";

import { ButtonLink } from "@/components/shared/button-link";
import { ImagePanel } from "@/components/shared/image-panel";
import { PageHero } from "@/components/shared/page-hero";
import { Reveal } from "@/components/shared/reveal";
import { SiteShell } from "@/components/shared/site-shell";

type CoachPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return coaches.map((coach) => ({ slug: coach.slug }));
}

export async function generateMetadata({
  params,
}: CoachPageProps): Promise<Metadata> {
  const { slug } = await params;
  const coach = coaches.find((item) => item.slug === slug);

  if (!coach) {
    return {
      title: "Преподаватель не найден",
    };
  }

  return {
    title: coach.name,
    description: `${coach.name} — ${coach.role}. ${coach.shortBio}`,
  };
}

export default async function CoachPage({ params }: CoachPageProps) {
  const { slug } = await params;
  const coach = coaches.find((item) => item.slug === slug);

  if (!coach) {
    notFound();
  }

  return (
    <main className="pb-20">
      <PageHero
        eyebrow={coach.role}
        title={coach.name}
        description={coach.longBio}
        image={coach.image}
        actions={
          <>
            <ButtonLink href="/#contacts">Записаться</ButtonLink>
            <ButtonLink href="/" variant="secondary">
              На главную
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <SiteShell>
          <div className="grid gap-6 lg:grid-cols-[0.76fr_1.24fr]">
            <Reveal>
              <div className="surface-panel h-full p-6 sm:p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[color:var(--accent-warm)]">
                  <Award className="h-5 w-5" />
                </div>
                <p className="mt-6 text-xs font-semibold uppercase text-[color:var(--accent-warm)]">
                  Опыт и фокус
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-foreground">
                  {coach.role} с понятной траекторией роста.
                </h2>
                <p className="mt-5 text-base leading-7 text-foreground">
                  {coach.experience}
                </p>
                <p className="mt-5 text-sm leading-7 text-muted">
                  Страница преподавателя работает как доверительный блок:
                  ученик видит направление, стиль подачи, опыт и реальные
                  фотографии до перехода к записи.
                </p>

                <div className="mt-8 grid gap-3">
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-[color:var(--accent-cool)]" />
                      <p className="text-sm text-foreground">Музыкальность и подача</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                    <div className="flex items-center gap-3">
                      <Camera className="h-4 w-4 text-[color:var(--accent-cool)]" />
                      <p className="text-sm text-foreground">Фото и галерея педагога</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {coach.gallery.map((image, index) => (
                <Reveal key={`${coach.slug}-${index}`} delay={0.08 * index}>
                  <ImagePanel
                    image={image}
                    title={coach.name}
                    className="min-h-[420px]"
                    contentClassName="hidden"
                    withShade={false}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </SiteShell>
      </section>
    </main>
  );
}
