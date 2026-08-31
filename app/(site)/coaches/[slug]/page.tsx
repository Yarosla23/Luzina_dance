import type { Metadata } from "next";

import { notFound } from "next/navigation";
import { Award, Camera, Sparkles } from "lucide-react";

import { coaches, socialLinks } from "@/lib/site-data";

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

const coachPageCopy = {
  "dima-belov": {
    cta: "Узнать о занятиях Димы",
    focusTitle: "База, грув и уверенная подача.",
    focusDescription:
      "На занятиях движение разбирается от основы к музыкальности и цельной хореографии.",
    features: ["База и грув", "Музыкальность и подача"],
  },
  "eva-kabajda": {
    cta: "Узнать о занятиях Евы",
    focusTitle: "Техника, пластика и внимание к телу.",
    focusDescription:
      "На занятиях важны работа с корпусом, качество движения и связь с музыкой.",
    features: ["Работа с корпусом", "Музыкальность и выразительность"],
  },
  "yana-luzina": {
    cta: "Узнать о занятиях Яны",
    focusTitle: "Женственный хип-хоп, леди-хорео и характер студии.",
    focusDescription:
      "На занятиях Яна работает с пластикой, акцентами и уверенной подачей.",
    features: ["Пластика и акценты", "Хореография и подача"],
  },
} as const;

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

  const pageCopy = coachPageCopy[coach.slug];

  return (
    <main className="pb-20">
      <PageHero
        eyebrow={coach.role}
        title={coach.name}
        description={coach.longBio}
        image={coach.image}
        actions={
          <>
            <ButtonLink
              href={socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
            >
              {pageCopy.cta}
            </ButtonLink>
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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-accent text-white">
                  <Award className="h-5 w-5" />
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.14em] text-[color:var(--accent-warm)]">
                  Опыт и фокус
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-foreground">
                  {pageCopy.focusTitle}
                </h2>
                <p className="mt-5 text-base leading-7 text-foreground">
                  {coach.experience}
                </p>
                <p className="mt-5 text-sm leading-7 text-muted">
                  {pageCopy.focusDescription}
                </p>

                <div className="mt-8 grid gap-3">
                  <div className="border-t border-white/14 py-4">
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-4 w-4 text-[color:var(--accent-warm)]" />
                      <p className="text-sm text-foreground">{pageCopy.features[0]}</p>
                    </div>
                  </div>
                  <div className="border-t border-white/14 py-4">
                    <div className="flex items-center gap-3">
                      <Camera className="h-4 w-4 text-[color:var(--accent-warm)]" />
                      <p className="text-sm text-foreground">{pageCopy.features[1]}</p>
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
