import type { StaticImageData } from "next/image";

import dimaImagePrimary from "@/media/dima1.jpg";
import dimaImageSecondary from "@/media/dima2.jpg";
import evaImagePrimary from "@/media/eva1.jpg";
import evaImageSecondary from "@/media/eva2.jpg";
import logoImage from "@/media/logo.jpg";
import merchPantsDetailDarkImage from "@/media/merch/red.jpg";
import merchPantsDetailLightImage from "@/media/merch/white.jpg";
import merchStreetBagCloseImage from "@/media/merch/photo_2025-09-28_00-20-58.jpg";
import merchStreetStudioImage from "@/media/merch/photo_2025-09-29_23-05-49.jpg";
import merchStreetCarWideImage from "@/media/merch/photo_2025-09-30_18-24-47.jpg";
import merchStreetCarBackImage from "@/media/merch/photo_2025-09-30_18-24-48.jpg";
import merchStreetGiftImage from "@/media/merch/photo_2025-10-02_22-16-49.jpg";
import merchStreetBasketballImage from "@/media/merch/photo_2025-10-02_23-35-59.jpg";
import merchStreetWallProfileImage from "@/media/merch/photo_2025-11-10_15-15-14.jpg";
import merchStreetWallBackImage from "@/media/merch/photo_2025-11-10_15-15-19.jpg";
import merchPantsImagePrimary from "@/media/merch/photo_2026-04-09_00-46-35.jpg";
import merchPantsImageSecondary from "@/media/merch/photo_2026-04-09_00-46-31.jpg";
import merchPantsImageGroup from "@/media/merch/photo_2026-04-09_00-46-38.jpg";
import merchPantsImageTeam from "@/media/merch/photo_2026-04-09_00-46-40.jpg";
import merchPantsImageThird from "@/media/merch/photo_2026-04-09_00-46-42.jpg";
import merchPantsImagePortrait from "@/media/merch/photo_2026-04-09_00-46-47.jpg";
import merchPantsImageFourth from "@/media/merch/photo_2026-04-09_00-46-49.jpg";
import merchPantsImageFloor from "@/media/merch/photo_2026-04-09_00-46-52.jpg";
import merchPantsImageSeat from "@/media/merch/photo_2026-04-09_00-46-55.jpg";
import merchPantsImagePose from "@/media/merch/photo_2026-04-09_00-46-58.jpg";
import merchPantsImageSixth from "@/media/merch/photo_2026-04-09_00-47-01.jpg";
import yanaImagePrimary from "@/media/yana1.jpg";
import yanaImageSecondary from "@/media/yana2.jpg";

export const siteSettings = {
  name: "Танцевальная Душа",
  tagline: "Студия танцев",
  description:
    "«Танцевальная Душа» — танцевальная студия в Севастополе для девушек от 16 лет. Направления, расписание, преподаватели, танцевальный лагерь и мерч.",
  signUpNote: "Подберём группу для первого занятия.",
  logo: logoImage,
} as const;

export const mainNavigation = [
  { href: "/", label: "Главная", hidden: false },
  { href: "/camp", label: "Танцевальный лагерь", hidden: false },
  { href: "/merch", label: "Мерч", hidden: false },
];

export const socialLinks = [
  { href: "https://t.me/miss_luzina", label: "Telegram" },
  { href: "https://vk.com/yanaluzina", label: "VK" },
] as const;

export const footerCredit = {
  label: "@yarik_and",
  url: "https://t.me/yarik_and",
} as const;

export const contactLines = [
  "Запись — в Telegram или VK",
  "Севастополь · проспект Генерала Острякова, 38",
  "Танцевальная Душа",
] as const;

export const studioHighlights = [
  "группы 16+, 18+ и Про",
  "занятия с преподавателем",
  "съёмки и танцевальный лагерь",
] as const;

export const homepageStats = [
  { value: "3", label: "основных направления" },
  { value: "3", label: "преподавателя в команде" },
  { value: "16+", label: "возраст участников" },
] as const;

export const studioCapabilities = [
  {
    title: "Подходящая группа",
    description:
      "Расскажи о своём опыте и удобном времени — подскажем, с какой группы начать.",
  },
  {
    title: "Свой фокус у каждого педагога",
    description:
      "Дима работает с базой и грувом, Ева — с пластикой и телом, Яна — с женственным хип-хопом и леди-хорео.",
  },
  {
    title: "Съёмки и жизнь студии",
    description:
      "Кроме регулярных занятий, студия проводит съёмки и танцевальный лагерь.",
  },
] as const;

// Меняй тексты главной и карточек направлений здесь.
export const danceDirections = [
  {
    slug: "hip-hop-mix",
    title: "Хип-хоп микс",
    description:
      "Разбираем базу и грув, учимся слышать бит и собирать движения в уверенную подачу.",
    image: dimaImagePrimary,
  },
  {
    slug: "hip-hop-girlie",
    title: "Хип-хоп герли",
    description:
      "Работаем с пластикой, акцентами и уверенной подачей в хип-хоп-хореографии.",
    image: yanaImagePrimary,
  },
  {
    slug: "contemporary",
    title: "Контемп",
    description:
      "Учимся лучше чувствовать тело, работать с пластикой и передавать эмоцию через движение.",
    image: evaImagePrimary,
  },
] as const;

// Меняй карточки преподавателей и их персональные страницы здесь.
export const coaches = [
  {
    slug: "dima-belov",
    name: "Дима Белов",
    role: "Хип-хоп микс",
    shortBio:
      "На занятиях Димы — база, грув и работа с музыкальностью в хип-хоп-миксе.",
    longBio:
      "Дима ведёт хип-хоп-микс: разбирает базу, грув и музыкальность, а затем помогает собрать движения в уверенную подачу.",
    experience: "Танцует более 6 лет, преподаёт около года.",
    image: dimaImagePrimary,
    gallery: [dimaImagePrimary, dimaImageSecondary],
  },
  {
    slug: "eva-kabajda",
    name: "Ева Кабайда",
    role: "Контемп",
    shortBio:
      "На занятиях Евы — техника контемпа, пластика и внимание к тому, как тело чувствует движение.",
    longBio:
      "Ева ведёт контемп и помогает лучше чувствовать тело в движении. На занятиях — техника, работа с корпусом, пластика и музыкальность.",
    experience: "Танцует около 5 лет, преподаёт около полугода.",
    image: evaImagePrimary,
    gallery: [evaImagePrimary, evaImageSecondary],
  },
  {
    slug: "yana-luzina",
    name: "Яна Лузина",
    role: "Руководитель и преподаватель",
    shortBio:
      "Руководит студией, ведёт женственный хип-хоп и леди-хорео, собирает команду и программу.",
    longBio:
      "Яна руководит студией и ведёт женственный хип-хоп и леди-хорео. На занятиях работает с пластикой, акцентами и уверенной подачей.",
    experience: "Танцует более 10 лет, преподаёт около 3 лет.",
    image: yanaImagePrimary,
    gallery: [yanaImagePrimary, yanaImageSecondary],
  },
] as const;

// Меняй расписание главной здесь.
// Структура: день -> занятия -> время / направление / педагог / уровень.
export const homeSchedule = [
  {
    day: "Вторник",
    sessions: [
      {
        time: "10:00–11:00",
        direction: "Здоровая спина",
        teacher: "Ева",
        level: "16+",
      },
      {
        time: "17:00–18:00",
        direction: "Женственный хип-хоп",
        teacher: "Яна",
        level: "16+",
      },
      {
        time: "18:00–19:00",
        direction: "Контемп",
        teacher: "Ева",
        level: "16+",
      },
      {
        time: "19:00–20:00",
        direction: "Женственный хип-хоп",
        teacher: "Яна",
        level: "18+",
      },
    ],
  },
  {
    day: "Среда",
    sessions: [
      {
        time: "10:00–11:00",
        direction: "Стретчинг",
        teacher: "Ева",
        level: "16+",
      },
      {
        time: "18:00–19:00",
        direction: "Леди-хорео",
        teacher: "Яна",
        level: "16+",
      },
      {
        time: "19:00–20:00",
        direction: "Женственный хип-хоп",
        teacher: "Яна",
        level: "Про",
      },
    ],
  },
  {
    day: "Четверг",
    sessions: [
      {
        time: "10:00–11:00",
        direction: "Здоровая спина",
        teacher: "Ева",
        level: "16+",
      },
      {
        time: "17:00–18:00",
        direction: "Женственный хип-хоп",
        teacher: "Яна",
        level: "16+",
      },
      {
        time: "18:00–19:00",
        direction: "Контемп",
        teacher: "Ева",
        level: "16+",
      },
      {
        time: "19:00–20:00",
        direction: "Женственный хип-хоп",
        teacher: "Яна",
        level: "18+",
      },
    ],
  },
  {
    day: "Пятница",
    sessions: [
      {
        time: "10:00–11:00",
        direction: "Стретчинг",
        teacher: "Ева",
        level: "16+",
      },
      {
        time: "18:00–19:00",
        direction: "Леди-хорео",
        teacher: "Яна",
        level: "16+",
      },
      {
        time: "19:00–20:00",
        direction: "Женственный хип-хоп",
        teacher: "Яна",
        level: "Про",
      },
    ],
  },
] as const;

// Меняй структуру лагеря здесь: даты, стоимость, локацию, программу и условия участия.
export const campInfo = {
  title: "Танцевальный лагерь",
  description:
    "Пять дней занятий, съёмок, отдыха и времени с командой.",
  heroTitle: "Пять дней танца, съёмок и жизни одной командой.",
  heroDescription:
    "Днём — классы и практика, вечером — съёмки, музыка и время с командой. Нагрузка чередуется с отдыхом, чтобы сил хватило на всю смену.",
  heroImage: yanaImageSecondary,
  heroStats: [
    { value: "5 дней", label: "занятия и время на отдых" },
    { value: "Техника", label: "и фристайл в программе" },
    { value: "Съёмка", label: "общий результат смены" },
  ],
  timeline: [
    {
      id: "2025-open-call",
      period: "Май 2025",
      title: "Первый анонс",
      status: "архив",
      note: "Открыли анкету, рассказали о формате и начали собирать первую команду.",
      details: {
        title: "Знакомство и сбор команды",
        description:
          "На первом этапе участники знакомятся с форматом, задают вопросы и делятся ожиданиями от смены.",
        highlights: ["Открытая анкета", "Знакомство с форматом", "Сбор пожеланий"],
      },
      image: yanaImagePrimary,
    },
    {
      id: "2025-city-session",
      period: "Июль 2025",
      title: "Городская смена",
      status: "архив",
      note: "Дневные классы, прогулка, вечерняя свободная практика и тестовая съёмка.",
      details: {
        title: "Город как часть сцены",
        description:
          "Занятия чередовались с прогулкой и свободной практикой без перегруженного расписания.",
        highlights: ["Дневные классы", "Городская прогулка", "Свободная практика"],
      },
      image: dimaImagePrimary,
    },
    {
      id: "2025-sunset-week",
      period: "Август 2025",
      title: "Смена на закате",
      status: "архив",
      note: "Неделя хореографии, командной работы и съёмок в вечернем свете.",
      details: {
        title: "Хореография в вечернем свете",
        description:
          "Этап строится вокруг общей постановки: от первых связок до цельного материала для командной съёмки.",
        highlights: ["Постановочная работа", "Съёмка на закате", "Командный материал"],
      },
      image: yanaImageSecondary,
    },
    {
      id: "2026-early-list",
      period: "Февраль 2026",
      title: "Предзапись",
      status: "ранний лист",
      note: "Предзапись для тех, кто хочет первыми получить даты, формат и бронь.",
      details: {
        title: "Ранний доступ к деталям",
        description:
          "В листе ожидания участники первыми получают обновления о датах, составе программы и старте бронирования.",
        highlights: ["Первый анонс дат", "Описание программы", "Старт бронирования"],
      },
      image: evaImagePrimary,
    },
    {
      id: "2026-main-camp",
      period: "Июнь 2026",
      title: "Главная летняя смена",
      status: "бронь скоро",
      note: "Основная летняя смена: техника, фристайл, съёмки, восстановление и время с командой.",
      details: {
        title: "Главная смена сезона",
        description:
          "Пять дней с понятным чередованием нагрузки и отдыха: учимся, пробуем новое и собираем общий результат.",
        highlights: ["Техника и фристайл", "Съёмочный день", "Время на восстановление"],
      },
      image: evaImageSecondary,
    },
    {
      id: "2026-festival-finale",
      period: "Август 2026",
      title: "Финал сезона",
      status: "планирование",
      note: "Финальная смена сезона с большими постановками, итоговым показом и вечерним джемом.",
      details: {
        title: "Общий финал",
        description:
          "Заключительный этап соединяет постановки разных групп в один день показов и свободный вечерний танец.",
        highlights: ["Большие постановки", "Итоговый показ", "Вечерний джем"],
      },
      image: dimaImageSecondary,
    },
  ],
  audience: [
    "для тех, кто хочет больше времени посвятить танцу",
    "для тех, кому важны занятия, общение и работа в команде",
    "для тех, кто хочет совместить обучение и отдых",
  ],
  activities: [
    "танцевальные классы",
    "творческие задания",
    "фото- и видеосъёмки",
    "командные активности",
    "вечерние события",
  ],
  pillars: [
    {
      title: "Программа дня",
      description:
        "Утренняя подготовка тела, дневные классы и вечерняя программа, где танец чередуется с отдыхом и общением.",
    },
    {
      title: "Атмосфера лагеря",
      description:
        "Летний ритм, музыка, съёмки на закате и команда, с которой комфортно учиться новому.",
    },
    {
      title: "Фото- и видеосъёмки",
      description:
        "Короткие съёмочные сессии помогают закрепить материал и сохранить общий результат смены.",
    },
    {
      title: "Педагоги и кураторы",
      description:
        "Ведущие студии собирают программу так, чтобы в ней были и техника, и подача, и место для свободы движения.",
    },
  ],
  formatCards: [
    {
      title: "Локация",
      description:
        "Пространство под лагерь подбирается с упором на свет, воздух, удобные залы и зоны для отдыха между классами.",
    },
    {
      title: "Формат участия",
      description:
        "Подходит тем, кто хочет совместить занятия, отдых, съёмки и время с командой.",
    },
    {
      title: "Ритм смены",
      description:
        "Каждый день сочетает тренировку, практику, свободное время и совместные активности.",
    },
    {
      title: "Даты и условия",
      description:
        "Даты, стоимость, точную локацию и условия участия сообщим перед стартом записи.",
    },
  ],
  editorialCards: [
    {
      label: "Program / format",
      title: "Пять дней занятий, съёмок и времени с командой.",
      description:
        "Утром участники готовятся к нагрузке, днём занимаются, а вечером отдыхают, общаются и снимают общий материал.",
      image: evaImageSecondary,
    },
    {
      label: "Sunset / community",
      title: "Съёмки на закате и свободная практика.",
      description:
        "После классов остаётся время на музыку, общение, свободное движение и командные съёмки.",
      image: dimaImagePrimary,
    },
  ],
  storyScenes: [
    {
      id: "scene-arrival",
      kicker: "Этап 1 · знакомство",
      title: "Знакомство и общий старт.",
      description:
        "В первый день участники знакомятся, узнают программу и постепенно входят в ритм смены.",
      image: evaImageSecondary,
      tags: ["знакомство", "команда", "разминка"],
      note: "Спокойный старт помогает познакомиться и подготовиться к занятиям.",
      metrics: [
        { label: "tempo", value: "slow rise" },
        { label: "focus", value: "team sync" },
      ],
    },
    {
      id: "scene-training",
      kicker: "Этап 2 · занятия",
      title: "Техника, хореография и практика.",
      description:
        "Подготовка тела, классы, работа с музыкальностью, паузы на восстановление и повтор материала.",
      image: dimaImagePrimary,
      tags: ["техника", "музыкальность", "практика"],
      note: "Нагрузка чередуется с паузами, чтобы сохранить силы на всю смену.",
      metrics: [
        { label: "blocks", value: "3 phases" },
        { label: "energy", value: "high / clean" },
      ],
    },
    {
      id: "scene-content",
      kicker: "Этап 3 · съёмки",
      title: "Съёмки и вечерняя программа.",
      description:
        "Во второй половине дня — съёмки, свободная практика, музыка и время с командой.",
      image: yanaImageSecondary,
      tags: ["съёмка", "свободная практика", "вечерняя программа"],
      note: "Съёмка становится частью программы и помогает сохранить общий результат.",
      metrics: [
        { label: "light", value: "sunset" },
        { label: "mood", value: "open flow" },
      ],
    },
  ],
  placeholders: {
    dates: "Даты следующей смены уточняются",
    price: "Сообщим перед стартом записи",
    location: "Сообщим вместе с датами",
  },
  gallery: [yanaImageSecondary, evaImagePrimary, dimaImageSecondary],
  galleryHighlights: [
    {
      title: "Утренний разогрев",
      description:
        "День начинается с подготовки тела, базы и настройки на работу в команде.",
      image: evaImagePrimary,
      size: "large",
    },
    {
      title: "Командная работа",
      description:
        "В программе важны не только классы, но и совместная работа внутри смены.",
      image: dimaImageSecondary,
      size: "tall",
    },
    {
      title: "Практика на закате",
      description:
        "Короткие вечерние сессии дают время повторить материал и снять общие кадры.",
      image: yanaImagePrimary,
      size: "compact",
    },
    {
      title: "Сценическая подача",
      description:
        "На съёмке соединяются хореография, музыкальность и уверенная подача.",
      image: dimaImageSecondary,
      size: "compact",
    },
    {
      title: "После класса",
      description:
        "Между классами остаётся время на отдых, музыку и общение.",
      image: evaImageSecondary,
      size: "wide",
    },
  ],
  moodGallery: [
    {
      title: "Утренний класс",
      description: "Плавный старт дня с вниманием к телу, дыханию и пластике.",
      image: evaImageSecondary,
    },
    {
      title: "Дневная практика",
      description: "Техника, хореография и повтор материала в группе.",
      image: dimaImagePrimary,
    },
    {
      title: "Портреты участников",
      description: "Люди и кадры, которые остаются после смены.",
      image: yanaImageSecondary,
    },
    {
      title: "Вечерний джем",
      description: "Свободное движение, музыка и время с командой.",
      image: evaImageSecondary,
    },
  ],
  cta: {
    title: "Хочешь узнать о следующей смене первой?",
    description:
      "Напиши нам, чтобы уточнить даты, программу, стоимость и локацию следующего Dance Soul Camp.",
  },
} as const;

export const merchContact = {
  telegramHandle: "@miss_luzina",
  telegramUrl: "https://t.me/miss_luzina",
  note: "Цена и наличие — в Telegram @miss_luzina.",
} as const;

// Данные актуального мерча студии.
export const merchItems = [
  {
    slug: "dance-pants",
    name: "Штаны для танцев",
    description:
      "Один свободный силуэт — для тренировок, съёмок и города. Плотный 100% хлопок держит форму и не мешает движению, а красный или белый лампас задаёт настроение.",
    sizes: "Единый 42–56 · на рост от 150 до 210 см",
    status: "Сейчас в мерче",
    image: merchPantsImageFourth,
  },
] as const;

export const merchGallery = [
  {
    image: merchPantsImageThird,
    title: "Штаны Dance Soul в движении",
  },
  {
    image: merchPantsImageSecondary,
    title: "Штаны Dance Soul",
  },
  {
    image: merchPantsImagePrimary,
    title: "Штаны Dance Soul в кадре",
  },
  {
    image: merchPantsImageTeam,
    title: "Командный образ Dance Soul",
  },
  {
    image: merchPantsImageSixth,
    title: "Штаны Dance Soul со спины",
  },
] as const;

export const merchColorways = [
  {
    image: merchPantsDetailDarkImage,
    title: "Красный лампас",
    alt: "Чёрные штаны Dance Soul с красным лампасом",
  },
  {
    image: merchPantsDetailLightImage,
    title: "Светлый лампас",
    alt: "Чёрные штаны Dance Soul со светлым лампасом",
  },
] as const;

export const merchPhotoGallery = [
  {
    image: merchPantsImageFourth,
    alt: "Танцоры студии в штанах Dance Soul",
    previewClassName: "sm:col-span-2 lg:col-span-7 lg:row-span-2",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 58vw",
  },
  {
    image: merchPantsImageSecondary,
    alt: "Танцоры показывают свободную посадку штанов Dance Soul",
    previewClassName: "lg:col-span-5 lg:row-span-3",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw",
  },
  {
    image: merchPantsImageThird,
    alt: "Акробатический кадр в штанах Dance Soul",
    previewClassName: "lg:col-span-4 lg:row-span-3",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw",
  },
  {
    image: merchPantsImagePrimary,
    alt: "Три танцора в штанах Dance Soul",
    previewClassName: "lg:col-span-8 lg:row-span-2",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchPantsImagePortrait,
    alt: "Портрет танцоров в мерче Dance Soul",
    previewClassName: "lg:col-span-5 lg:row-span-3",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchPantsImageSixth,
    alt: "Три танцора показывают мерч Dance Soul со спины",
    previewClassName: "sm:col-span-2 lg:col-span-3 lg:row-span-3",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 33vw",
  },
  {
    image: merchPantsImageGroup,
    alt: "Командный кадр с мерчем студии",
    previewClassName: "lg:col-span-4 lg:row-span-2",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchPantsImageTeam,
    alt: "Танцоры в мерче Dance Soul",
    previewClassName: "lg:col-span-8 lg:row-span-2",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 67vw",
  },
  {
    image: merchPantsImageFloor,
    alt: "Танцоры в штанах Dance Soul сидят на полу",
    previewClassName: "lg:col-span-4 lg:row-span-2",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchPantsImageSeat,
    alt: "Групповой кадр в мерче Dance Soul",
    previewClassName: "lg:col-span-5 lg:row-span-3",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 42vw",
  },
  {
    image: merchPantsImagePose,
    alt: "Танцоры позируют в штанах Dance Soul",
    previewClassName: "lg:col-span-3 lg:row-span-3",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw",
  },
] as const;

export const merchStreetGallery = [
  {
    image: merchStreetCarWideImage,
    title: "Ночной город",
    alt: "Танцовщица в мерче Dance Soul рядом с автомобилем вечером",
    previewClassName: "sm:col-span-2 lg:col-span-8",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 67vw",
  },
  {
    image: merchStreetCarBackImage,
    title: "Спиной к камере",
    alt: "Танцовщица показывает принт Dance Soul на футболке у автомобиля",
    previewClassName: "lg:col-span-4",
    previewImageClassName:
      "lg:aspect-[7/8] lg:object-cover lg:object-bottom",
    heroImageClassName: "grayscale",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  
  {
    image: merchStreetBasketballImage,
    title: "Городской ритм",
    alt: "Танцовщица в штанах Dance Soul у баскетбольного щита",
    previewClassName: "lg:col-span-4",
    previewSizes:
    "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchStreetGiftImage,
    title: "Упаковка дропа",
    alt: "Чёрный пакет Dance Soul с красной лентой",
    previewClassName: "lg:col-span-4",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchStreetWallBackImage,
    title: "Светлый лампас",
    alt: "Танцовщица у бетонной стены показывает светлый лампас на штанах",
    previewClassName: "lg:col-span-4",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchStreetStudioImage,
    title: "После класса",
    alt: "Три танцора в мерче Dance Soul в студии с красным светом",
    previewClassName: "sm:col-span-2 lg:col-span-4",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 100vw, 33vw",
  },
  {
    image: merchStreetWallProfileImage,
    title: "Вишнёвый лампас",
    alt: "Танцовщица у бетонной стены показывает вишнёвый лампас на штанах",
    previewClassName: "lg:col-span-4",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
  {
    image: merchStreetBagCloseImage,
    title: "Детали",
    alt: "Штаны и пакет с логотипом Dance Soul крупным планом",
    previewClassName: "lg:col-span-4",
    previewSizes:
      "(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw",
  },
] as const;

export type Coach = (typeof coaches)[number];
export type Direction = (typeof danceDirections)[number];
export type MerchItem = (typeof merchItems)[number];
export type CampGalleryItem = StaticImageData;
export type CampTimelineItem = {
  id: string;
  period: string;
  title: string;
  status: "архив" | "ранний лист" | "бронь скоро" | "планирование";
  note: string;
  details: {
    title: string;
    description: string;
    highlights: readonly string[];
  };
  image: StaticImageData;
};
export type CampPillar = (typeof campInfo.pillars)[number];
export type CampStoryScene = (typeof campInfo.storyScenes)[number];
