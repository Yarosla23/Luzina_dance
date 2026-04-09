import type { Metadata } from "next";

import {
  merchColorways,
  merchContact,
  merchGallery,
  merchItems,
  merchPhotoGallery,
} from "@/lib/site-data";

import { MerchEditorialGallery } from "@/components/sections/merch/merch-editorial-gallery";
import { MerchHero } from "@/components/sections/merch/merch-hero";
import { MerchProductOverview } from "@/components/sections/merch/merch-product-overview";

export const metadata: Metadata = {
  title: "Мерч студии",
  description:
    "Первый дроп мерча Танцевальной Души: штаны для танцев, два варианта лампасов и реальные фото посадки.",
};

export default function MerchPage() {
  const merchItem = merchItems[0];

  return (
    <main>
      <MerchHero
        product={merchItem}
        supportingImages={merchPhotoGallery.slice(1, 3).map((item) => item.image)}
        telegramUrl={merchContact.telegramUrl}
      />
      <MerchProductOverview
        product={merchItem}
        image={merchGallery[0]}
        contact={merchContact}
      />
      <MerchEditorialGallery
        colorways={merchColorways}
        gallery={merchPhotoGallery}
        telegramUrl={merchContact.telegramUrl}
      />
    </main>
  );
}
