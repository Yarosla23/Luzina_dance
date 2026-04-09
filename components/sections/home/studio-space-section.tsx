import { MediaPlaceholder } from "@/components/shared/media-placeholder";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";

const studioMediaSlots = [
  {
    label: "Зал студии",
    note: "Широкий кадр с пространством и светом",
    className: "min-h-[430px] sm:min-h-[560px] lg:col-span-7 lg:row-span-2",
  },
  {
    label: "До начала класса",
    note: "Детали зала перед тренировкой",
    className: "min-h-[260px] lg:col-span-5",
  },
  {
    label: "Класс в движении",
    note: "Живой кадр с тренировки или репетиции",
    className: "min-h-[340px] lg:col-span-5",
  },
  {
    label: "После репетиции",
    note: "Backstage команды без постановочной позы",
    className: "min-h-[280px] lg:col-span-12",
  },
] as const;

export function StudioSpaceSection() {
  return (
    <section
      id="space"
      data-home-chapter
      className="section-band overflow-hidden py-16 sm:py-20 lg:py-28"
    >
      <SiteShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div data-scroll-reveal>
              <SectionHeading
                eyebrow="Пространство"
                title="Сначала почувствуй место. Потом — своё движение в нём."
                description="Ниже оставлены точные места для будущей съёмки студии. Форматы кадров уже заданы, поэтому новые фотографии легко встанут в композицию без переделки страницы."
              />
            </div>
          </Reveal>

          <div
            data-scroll-reveal
            className="border-l border-white/14 pl-6 lg:ml-auto lg:max-w-md"
          >
            <p className="font-serif text-2xl leading-tight text-white sm:text-3xl">
              Свет, зеркала, рабочий момент и тишина после музыки — четыре кадра
              одной атмосферы.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12 lg:auto-rows-[minmax(130px,auto)]">
          {studioMediaSlots.map((slot) => (
            <div
              key={slot.label}
              data-space-mock
              data-scroll-reveal
              className={`${slot.className} will-change-transform`}
            >
              <MediaPlaceholder
                label={slot.label}
                note={slot.note}
                className="h-full min-h-[inherit]"
              />
            </div>
          ))}
        </div>
      </SiteShell>
    </section>
  );
}
