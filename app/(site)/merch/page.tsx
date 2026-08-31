import type { Metadata } from "next";

import {
  merchColorways,
  merchContact,
  merchItems,
  merchPhotoGallery,
  merchStreetGallery,
} from "@/lib/site-data";

import { MerchEditorialGallery } from "@/components/sections/merch/merch-editorial-gallery";
import { MerchHero } from "@/components/sections/merch/merch-hero";
import { MerchProductOverview } from "@/components/sections/merch/merch-product-overview";

export const metadata: Metadata = {
  title: "Мерч студии",
  description:
    "Первый дроп мерча Танцевальной Души: штаны для танцев, два варианта лампасов и фотографии из студии и города.",
  alternates: {
    canonical: "/merch",
  },
  openGraph: {
    title: "Мерч студии | Танцевальная Душа",
    description:
      "Первый дроп мерча Танцевальной Души: штаны для танцев, два варианта лампасов и фотографии из студии и города.",
    url: "/merch",
    siteName: "Танцевальная Душа",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: merchItems[0].image.src,
        width: merchItems[0].image.width,
        height: merchItems[0].image.height,
        alt: "Танцоры студии в штанах Dance Soul",
      },
    ],
  },
};

export default function MerchPage() {
  const merchItem = merchItems[0];

  return (
    <main className="merch-scroll-snap">
      <MerchHero
        product={merchItem}
        supportingImages={merchStreetGallery.slice(1, 3)}
        telegramUrl={merchContact.telegramUrl}
      />
      <MerchProductOverview
        product={merchItem}
        photos={merchPhotoGallery}
        contact={merchContact}
      />
      <MerchEditorialGallery
        colorways={merchColorways}
        streetGallery={merchStreetGallery}
        telegramUrl={merchContact.telegramUrl}
      />
    </main>
  );
}
