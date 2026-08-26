import studioEntranceImage from "@/media/studio/photo_2026-08-27_16-52-26.jpg";
import studioShelfImage from "@/media/studio/photo_2026-08-27_16-52-28.jpg";
import studioWardrobeImage from "@/media/studio/photo_2026-08-27_16-52-31.jpg";
import studioWaitingAreaImage from "@/media/studio/photo_2026-08-27_16-52-33.jpg";
import studioAwardsImage from "@/media/studio/photo_2026-08-27_16-52-44.jpg";
import studioEquipmentImage from "@/media/studio/photo_2026-08-27_16-52-46.jpg";
import studioSoundImage from "@/media/studio/photo_2026-08-27_16-52-48.jpg";
import studioRedLightImage from "@/media/studio/photo_2026-08-27_16-52-54.jpg";
import studioPropsImage from "@/media/studio/photo_2026-08-27_16-52-55.jpg";
import studioMainHallImage from "@/media/studio/photo_2026-08-27_16-53-00.jpg";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { SiteShell } from "@/components/shared/site-shell";
import { StudioPhotoGallery } from "@/components/sections/home/studio-photo-gallery";

const studioPhotos = [
  {
    image: studioMainHallImage,
    title: "Главный зал",
    alt: "Танцевальный зал с зеркальной стеной и красным светом",
    previewClassName:
      "min-h-[480px] sm:col-span-2 lg:col-span-7 lg:row-span-2 lg:min-h-0",
    previewSizes: "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 58vw",
  },
  {
    image: studioEntranceImage,
    title: "Входная зона",
    alt: "Входная зона танцевальной студии с бордовой стеной",
    previewClassName: "min-h-[360px] lg:col-span-5 lg:min-h-0",
    previewSizes: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw",
  },
  {
    image: studioRedLightImage,
    title: "Световая сцена",
    alt: "Красное сценическое освещение в танцевальном зале",
    previewClassName: "min-h-[360px] lg:col-span-5 lg:min-h-0",
    previewSizes: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw",
  },
  {
    image: studioWaitingAreaImage,
    title: "Зона ожидания",
    alt: "Зона ожидания с креслами рядом с танцевальным залом",
    previewClassName: "min-h-[340px] lg:col-span-4 lg:min-h-0",
    previewSizes: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: studioWardrobeImage,
    title: "Гардероб",
    alt: "Гардеробная зона танцевальной студии",
    previewClassName: "min-h-[340px] lg:col-span-4 lg:min-h-0",
    previewSizes: "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: studioAwardsImage,
    title: "История студии",
    alt: "Кубки и дипломы учеников танцевальной студии",
    previewClassName:
      "min-h-[340px] sm:col-span-2 lg:col-span-4 lg:min-h-0",
    previewSizes: "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 33vw",
  },
  {
    image: studioShelfImage,
    title: "Детали пространства",
    alt: "Полка с принадлежностями в танцевальной студии",
  },
  {
    image: studioEquipmentImage,
    title: "Инвентарь",
    alt: "Тренировочный инвентарь у стены танцевального зала",
  },
  {
    image: studioSoundImage,
    title: "Звук и свет",
    alt: "Акустическая система и световое оборудование танцевального зала",
  },
  {
    image: studioPropsImage,
    title: "Для занятий",
    alt: "Сложенный инвентарь для занятий в танцевальной студии",
  },
];

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
                title="Зал, в котором движение становится своим."
                description="Зеркала, свободный пол и два сценария света — нейтральный для регулярных занятий и красный для съемок и атмосферы."
              />
            </div>
          </Reveal>

          <div
            data-scroll-reveal
            className="border-l border-white/14 pl-6 lg:ml-auto lg:max-w-md"
          >
            <p className="font-serif text-2xl leading-tight text-white sm:text-3xl">
              Пространство продумано и для работы над техникой, и для кадров,
              которые хочется сохранить.
            </p>
          </div>
        </div>

        <StudioPhotoGallery photos={studioPhotos} />
      </SiteShell>
    </section>
  );
}
