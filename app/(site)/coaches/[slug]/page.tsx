import type { Metadata } from "next";

import { notFound } from "next/navigation";

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
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <Reveal>
              <div className="surface-panel p-6">
                <p className="text-[11px] uppercase tracking-[0.26em] text-muted">
                  Опыт
                </p>
                <p className="mt-5 text-base leading-7 text-foreground">
                  {coach.experience}
                </p>
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
