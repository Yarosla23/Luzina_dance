import type { StaticImageData } from "next/image";

import dimaImagePrimary from "@/media/dima1.jpg";
import dimaImageSecondary from "@/media/dima2.jpg";
import evaImagePrimary from "@/media/eva1.jpg";
import evaImageSecondary from "@/media/eva2.jpg";
import logoImage from "@/media/logo.jpg";
import merchPantsDetailDarkImage from "@/media/merch/red.jpg";
import merchPantsDetailLightImage from "@/media/merch/white.jpg";
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
    "Современная танцевальная студия: направления, расписание, команда, танцевальный лагерь и мерч.",
  signUpNote: "Старт занятий с 27 апреля, запись осуществляется в лс",
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
  "Запись осуществляется в лс",
  "Севастополь · Проспект Генерала Острякова, 38",
  "Танцевальная Душа",
] as const;

export const studioHighlights = [
  "группы по направлениям и уровню",
  "мягкая, но собранная подача",
  "комьюнити, движение и стиль",
] as const;

export const homepageStats = [
  { value: "3", label: "основных направления" },
  { value: "6", label: "дней занятий в неделю" },
  { value: "3", label: "педагога в команде" },
] as const;

export const studioCapabilities = [
  {
    title: "Группы под уровень",
    description:
      "Расписание разделено по направлениям и темпу, чтобы каждый мог выбрать подходящую нагрузку без лишнего давления.",
  },
  {
    title: "Педагоги с характером",
    description:
      "У каждого направления свой преподаватель, визуальный стиль и понятная траектория роста внутри студии.",
  },
  {
    title: "Съемки и комьюнити",
    description:
      "Помимо классов есть практика, контент, лагерные форматы и среда, где движение становится частью жизни.",
  },
] as const;

// Меняй тексты главной и карточек направлений здесь.
export const danceDirections = [
  {
    slug: "hip-hop-mix",
    title: "Хип-хоп микс",
    description:
      "Энергичное направление, сочетающее базу, грув, подачу и современные элементы уличной хореографии.",
    image: dimaImagePrimary,
  },
  {
    slug: "hip-hop-girlie",
    title: "Хип-хоп герли",
    description:
      "Женственная, яркая и уверенная подача, пластика, акценты, характер и стиль.",
    image: yanaImagePrimary,
  },
  {
    slug: "contemporary",
    title: "Контемп",
    description:
      "Техника, пластика, эмоции, работа с телом, музыкальностью и выразительностью.",
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
      "Педагог по направлению хип хоп микс. Дает сильную базу, грув и современную подачу.",
    longBio:
      "Дима помогает ученикам почувствовать ритм, уверенность и свободу движения. На занятиях много внимания уделяется базе, музыкальности и собранной подаче.",
    experience: "Танцует более 6 лет, преподает около года.",
    image: dimaImagePrimary,
    gallery: [dimaImagePrimary, dimaImageSecondary],
  },
  {
    slug: "eva-kabajda",
    name: "Ева Кабайда",
    role: "Контемп",
    shortBio:
      "Педагог по направлению контемп. Работает с техникой, пластикой и выразительностью.",
    longBio:
      "Ева ведет занятия через качество движения, телесную осознанность и музыкальность. В фокусе техника, работа с корпусом и эмоциональная выразительность.",
    experience: "Танцует около 5 лет, преподает около полугода.",
    image: evaImagePrimary,
    gallery: [evaImagePrimary, evaImageSecondary],
  },
  {
    slug: "yana-luzina",
    name: "Яна Лузина",
    role: "Руководитель студии",
    shortBio:
      "Руководитель и мама нашей танцевальной студии. Формирует атмосферу, стиль и визуальный характер проекта.",
    longBio:
      "Яна отвечает за развитие студии, визуальную культуру и общую атмосферу пространства. Это человек, который задает тон проекту и собирает вокруг него комьюнити.",
    experience: "Танцует более 10 лет, преподает около 3 лет.",
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
        direction: "Стрейтчинг",
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
        direction: "Стрейтчинг",
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
    "Танцевальный лагерь — это пространство движения, творчества, новых знакомств и ярких впечатлений. Здесь участники смогут погрузиться в атмосферу танца, развития и командной энергии.",
  heroTitle: "Пять дней, чтобы войти в движение глубже.",
  heroDescription:
    "Dance Soul Camp собирает лето вокруг танца: дневные классы, съемки, музыка, команда и пространство, в котором можно пробовать новое без спешки.",
  heroImage: yanaImageSecondary,
  heroStats: [
    { value: "5 дней", label: "интенсив и атмосфера" },
    { value: "2025–2026", label: "roadmap смен и сезонов" },
    { value: "1 команда", label: "общий ритм смены" },
  ],
  timeline: [
    {
      id: "2025-open-call",
      period: "Май 2025",
      title: "Open Call / первый анонс",
      status: "архив",
      note: "Запуск summer-листа, сбор первой команды и анонс формата лагеря.",
      details: {
        title: "Знакомство и сбор команды",
        description:
          "Первый этап помогает познакомиться с форматом, задать вопросы и понять, каким участники хотят видеть общее лето.",
        highlights: ["Открытая анкета", "Знакомство с форматом", "Сбор пожеланий"],
      },
      image: yanaImagePrimary,
    },
    {
      id: "2025-city-session",
      period: "Июль 2025",
      title: "City Session",
      status: "архив",
      note: "Классы днем, прогулки, jam-вечер и тестовая съемочная программа.",
      details: {
        title: "Город как часть сцены",
        description:
          "Дневной ритм соединяет занятия, прогулочные маршруты и свободную практику без перегруженного расписания.",
        highlights: ["Дневные классы", "Городская прогулка", "Вечерний jam"],
      },
      image: dimaImagePrimary,
    },
    {
      id: "2025-sunset-week",
      period: "Август 2025",
      title: "Sunset Week",
      status: "архив",
      note: "Неделя с упором на хореографию, команду и визуальный контент в golden hour.",
      details: {
        title: "Хореография в вечернем свете",
        description:
          "Этап строится вокруг общей постановки: от первых связок до цельного материала для командной съёмки.",
        highlights: ["Постановочная работа", "Golden-hour съёмка", "Командный материал"],
      },
      image: yanaImageSecondary,
    },
    {
      id: "2026-early-list",
      period: "Февраль 2026",
      title: "Early List",
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
      title: "Main Summer Camp",
      status: "бронь скоро",
      note: "Основная летняя смена: техника, freestyle, съемки, recovery и комьюнити-программа.",
      details: {
        title: "Главная смена сезона",
        description:
          "Пять дней с понятным чередованием нагрузки и отдыха: учимся, пробуем новое и собираем общий результат.",
        highlights: ["Техника и freestyle", "Съёмочный день", "Время на recovery"],
      },
      image: evaImageSecondary,
    },
    {
      id: "2026-festival-finale",
      period: "Август 2026",
      title: "Festival Finale",
      status: "планирование",
      note: "Финальная смена сезона с большими постановками, showcase-днем и вечерним closing jam.",
      details: {
        title: "Общий финал",
        description:
          "Заключительный этап соединяет постановки разных групп в один день показов и свободный вечерний танец.",
        highlights: ["Большие постановки", "Showcase-день", "Closing jam"],
      },
      image: dimaImageSecondary,
    },
  ],
  audience: [
    "для тех, кто любит танец и хочет провести время в сильной творческой среде",
    "для участников, которым важны движение, общение и командный опыт",
    "для тех, кто хочет совмещать обучение, отдых и яркие впечатления",
  ],
  activities: [
    "танцевальные классы",
    "творческие задания",
    "съемки и контент",
    "командные активности",
    "вечерние события",
  ],
  pillars: [
    {
      title: "Программа дня",
      description:
        "Утренний body prep, дневные классы по направлениям и вечерние сборки, где танец сочетается с отдыхом и общением.",
    },
    {
      title: "Атмосфера лагеря",
      description:
        "Летний ритм, light sunset mood, музыка, воздух и комьюнити, в котором комфортно расти и раскрываться.",
    },
    {
      title: "Съемки и контент",
      description:
        "Контент-дни и короткие съемочные сессии помогают закреплять материал и оставляют после смены сильный визуальный след.",
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
        "Подходит тем, кто хочет не просто поездку, а собранную летнюю среду с танцем, командой и визуальной атмосферой.",
    },
    {
      title: "Ритм смены",
      description:
        "Каждый день строится вокруг баланса: тренировка, практика, свободное время, совместные активности и вечерний вайб.",
    },
    {
      title: "Что можно менять позже",
      description:
        "Даты, стоимость, точную локацию и условия участия удобно обновлять точечно, не переписывая структуру страницы.",
    },
  ],
  editorialCards: [
    {
      label: "Program / format",
      title: "Не просто сбор, а летняя история вокруг танца.",
      description:
        "Dance Soul Camp задуман как смена, где у танца есть сцена, у команды есть энергия, а у каждого дня есть свой темп: от собранной утренней подготовки до мягкого заката после класса.",
      image: evaImageSecondary,
    },
    {
      label: "Sunset / community",
      title: "Golden hour, съемки, jam и ощущение свободы.",
      description:
        "Лагерь собирает атмосферу фестивального лета: яркие классы, теплый свет, сильные кадры, музыка на фоне и команда, которая проживает смену вместе, а не параллельно.",
      image: dimaImagePrimary,
    },
  ],
  storyScenes: [
    {
      id: "scene-arrival",
      kicker: "Scene 01 / arrival",
      title: "Заезд начинается как мягкий вход в общий ритм.",
      description:
        "Первый день не перегружает. Участники знакомятся, настраиваются на темп смены, входят в пространство и постепенно собираются в одну команду.",
      image: evaImageSecondary,
      tags: ["welcome", "team", "warm-up"],
      note: "Мягкий старт нужен, чтобы не ломать состояние, а переводить в движение.",
      metrics: [
        { label: "tempo", value: "slow rise" },
        { label: "focus", value: "team sync" },
      ],
    },
    {
      id: "scene-training",
      kicker: "Scene 02 / training",
      title: "Днем лагерь переключается в плотную работу с телом и подачей.",
      description:
        "Классы и практика идут блоками: body prep, хореография, музыкальность, паузы на восстановление и повтор материала в понятном ритме.",
      image: dimaImagePrimary,
      tags: ["groove", "technique", "practice"],
      note: "Важен баланс между интенсивом и воздухом, иначе лагерь превращается в обычный интенсив.",
      metrics: [
        { label: "blocks", value: "3 phases" },
        { label: "energy", value: "high / clean" },
      ],
    },
    {
      id: "scene-content",
      kicker: "Scene 03 / content",
      title: "К вечеру история становится визуальной: кадры, sunset и ощущение свободы.",
      description:
        "Вторая половина дня работает на атмосферу. Съемки, короткие jams, разговоры и golden hour собирают тот самый образ лагеря, который хочется пересматривать.",
      image: yanaImageSecondary,
      tags: ["golden hour", "camera", "jam"],
      note: "Контент здесь не отдельно от лагеря, а часть общего переживания смены.",
      metrics: [
        { label: "light", value: "sunset" },
        { label: "mood", value: "open flow" },
      ],
    },
  ],
  placeholders: {
    dates: "Июнь–август 2026",
    price: "Стоимость откроем вместе с бронью",
    location: "Локация анонсируется отдельным релизом",
  },
  gallery: [yanaImageSecondary, evaImagePrimary, dimaImageSecondary],
  galleryHighlights: [
    {
      title: "Утренний разогрев",
      description:
        "День начинается мягко, но собранно: body prep, база и настрой на работу в команде.",
      image: evaImagePrimary,
      size: "large",
    },
    {
      title: "Командная энергия",
      description:
        "В лагерной программе важны не только классы, но и чувство общей волны внутри смены.",
      image: dimaImageSecondary,
      size: "tall",
    },
    {
      title: "Golden hour practice",
      description:
        "Короткие sunset-сессии создают ту самую летнюю атмосферу и сильный визуальный след.",
      image: yanaImagePrimary,
      size: "compact",
    },
    {
      title: "Сценическая подача",
      description:
        "Хореография, музыкальность и уверенность в кадре собираются в один ритм.",
      image: dimaImageSecondary,
      size: "compact",
    },
    {
      title: "После класса",
      description:
        "В лагере важны паузы, воздух, разговоры, музыка и все, что делает смену живой.",
      image: evaImageSecondary,
      size: "wide",
    },
  ],
  moodGallery: [
    {
      title: "Sunrise flow",
      description: "Плавный старт дня с вниманием к телу, дыханию и пластике.",
      image: evaImageSecondary,
    },
    {
      title: "Studio heat",
      description: "Интенсивные классы, где техника встречается с характером и драйвом.",
      image: dimaImagePrimary,
    },
    {
      title: "Camp portraits",
      description: "Люди, настроение и кадры, которые хочется пересматривать после смены.",
      image: yanaImageSecondary,
    },
    {
      title: "Evening jam",
      description: "Свободное движение, музыка и тот самый фестивальный летний вайб.",
      image: evaImageSecondary,
    },
  ],
  cta: {
    title: "Забронируй интерес к следующей смене уже сейчас.",
    description:
      "Можно оставить заявку заранее, чтобы первыми получить даты, формат участия, локацию и старт бронирования по Dance Soul Camp.",
  },
} as const;

export const merchContact = {
  telegramHandle: "@miss_luzina",
  telegramUrl: "https://t.me/miss_luzina",
  note: "Цену и наличие уточняйте в Telegram @miss_luzina.",
} as const;

// Данные актуального мерча студии.
export const merchItems = [
  {
    slug: "dance-pants",
    name: "Штаны для танцев",
    description:
      "Чёрные штаны с вышивкой Dance Soul и двумя вариантами лампасов.",
    sizes: "Актуальные размеры уточняйте в Telegram.",
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
    title: "Вишнёвый лампас",
  },
  {
    image: merchPantsDetailLightImage,
    title: "Светлый лампас",
  },
] as const;

export const merchPhotoGallery = [
  { image: merchPantsImageFourth, alt: "Танцоры студии в штанах Dance Soul" },
  { image: merchPantsImageSecondary, alt: "Образ в штанах Dance Soul" },
  { image: merchPantsImagePrimary, alt: "Движение в штанах Dance Soul" },
  { image: merchPantsImageGroup, alt: "Командный кадр с мерчем студии" },
  { image: merchPantsImageTeam, alt: "Танцоры в мерче Dance Soul" },
  { image: merchPantsImageThird, alt: "Акробатический кадр в штанах Dance Soul" },
  { image: merchPantsImagePortrait, alt: "Портрет танцоров в мерче студии" },
  { image: merchPantsImageFloor, alt: "Танцоры в штанах Dance Soul на полу" },
  { image: merchPantsImageSeat, alt: "Групповой кадр в мерче Dance Soul" },
  { image: merchPantsImagePose, alt: "Позирование в штанах Dance Soul" },
  { image: merchPantsImageSixth, alt: "Штаны Dance Soul со спины" },
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
