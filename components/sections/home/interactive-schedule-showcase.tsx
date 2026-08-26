"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock3, Sparkles, Users2 } from "lucide-react";
import { type ReactNode, useState } from "react";

import { homeSchedule } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const directionOrder = Array.from(
  new Set(homeSchedule.flatMap((day) => day.sessions.map((session) => session.direction))),
);

const directionPalette: Record<string, string> = {
  Контемп: "from-white/12 via-transparent to-transparent text-foreground",
  "Женственный хип-хоп": "from-[#8b1538]/45 via-transparent to-transparent text-foreground",
  "Леди-хорео": "from-[#b91e4b]/28 via-transparent to-transparent text-foreground",
  Стрейтчинг: "from-white/10 via-transparent to-transparent text-foreground",
  "Здоровая спина": "from-[#8b1538]/30 via-transparent to-transparent text-foreground",
};

const compactDayLabels: Record<string, string> = {
  Вторник: "Вт",
  Среда: "Ср",
  Четверг: "Чт",
  Пятница: "Пт",
};

export function InteractiveScheduleShowcase() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDirection, setActiveDirection] = useState("Все направления");
  const shouldReduceMotion = useReducedMotion();

  const activeDay = homeSchedule[activeDayIndex];
  const availableDayEntries = homeSchedule
    .map((day, dayIndex) => ({ day, dayIndex }))
    .filter(
      ({ day }) =>
        activeDirection === "Все направления" ||
        day.sessions.some((session) => session.direction === activeDirection),
    );
  const visibleSessions =
    activeDirection === "Все направления"
      ? activeDay.sessions
      : activeDay.sessions.filter((session) => session.direction === activeDirection);

  const hasFilteredSessions = visibleSessions.length > 0;

  const handleDirectionChange = (direction: string) => {
    setActiveDirection(direction);

    if (
      direction !== "Все направления" &&
      !activeDay.sessions.some((session) => session.direction === direction)
    ) {
      const firstMatchingDayIndex = homeSchedule.findIndex((day) =>
        day.sessions.some((session) => session.direction === direction),
      );

      if (firstMatchingDayIndex >= 0) {
        setActiveDayIndex(firstMatchingDayIndex);
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#13090c] p-4 sm:p-6 lg:p-8">
      <div className="relative flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-muted">
              Переключение по дням
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-2xl leading-tight text-foreground sm:text-4xl">
              Выберите день и направление — покажем подходящие занятия.
            </h3>
          </div>

          <div className="-mx-4 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:overflow-visible sm:pb-0">
            <div className="flex w-max snap-x gap-2 px-4 sm:w-auto sm:flex-wrap sm:px-0">
              <DirectionChip
                label="Все направления"
                isActive={activeDirection === "Все направления"}
                onClick={() => handleDirectionChange("Все направления")}
              />
              {directionOrder.map((direction) => (
                <DirectionChip
                  key={direction}
                  label={direction}
                  isActive={activeDirection === direction}
                  onClick={() => handleDirectionChange(direction)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="grid auto-cols-fr grid-flow-col self-start auto-rows-[2.75rem] gap-1.5 sm:grid-flow-row sm:auto-cols-auto sm:auto-rows-[5rem] sm:grid-cols-2 sm:gap-3 xl:grid-cols-1">
            {availableDayEntries.map(({ day, dayIndex }, visibleIndex) => {
              const matchingCount = day.sessions.filter(
                (session) =>
                  activeDirection === "Все направления" ||
                  session.direction === activeDirection,
              ).length;

              const isActive = activeDayIndex === dayIndex;

              return (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setActiveDayIndex(dayIndex)}
                  aria-pressed={isActive}
                  aria-label={`${day.day}, ${
                    matchingCount > 0
                      ? `${matchingCount} ${getClassLabel(matchingCount)}`
                      : "нет занятий по выбранному направлению"
                  }`}
                  className={cn(
                    "group relative h-11 overflow-hidden rounded-xl border px-2 py-1 text-center transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-20 sm:rounded-2xl sm:px-5 sm:py-4 sm:text-left",
                    isActive
                      ? "border-accent-strong bg-accent text-white"
                      : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/[0.04]",
                  )}
                >
                  <div
                    className={cn(
                        "absolute inset-0 bg-[linear-gradient(135deg,rgba(185,30,75,0.24),transparent_55%)] transition duration-200",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  />
                  <div className="relative flex h-full items-center justify-center sm:h-auto sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground sm:text-lg sm:font-normal">
                        <span className="sm:hidden">{compactDayLabels[day.day] ?? day.day}</span>
                        <span className="hidden sm:inline">{day.day}</span>
                      </p>
                      <p className="mt-1 hidden text-sm text-muted sm:block">
                        {matchingCount > 0
                          ? `${matchingCount} ${getClassLabel(matchingCount)}`
                          : "Нет занятий по фильтру"}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "hidden rounded-full border px-3 py-1 text-xs font-semibold uppercase sm:inline-flex",
                        isActive
                          ? "border-white/20 bg-white/10 text-foreground"
                          : "border-white/10 bg-white/5 text-muted",
                      )}
                    >
                      {visibleIndex + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/14 bg-black/25 p-4 sm:rounded-3xl sm:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,21,56,0.24),transparent_58%)]" />
                <div className="relative flex flex-col gap-4 sm:gap-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase text-muted">
                        Активный день
                      </p>
                      <h4 className="mt-2 font-serif text-3xl text-foreground sm:mt-3 sm:text-4xl">
                        {activeDay.day}
                      </h4>
                      <p className="mt-3 hidden max-w-lg text-sm leading-7 text-muted sm:block sm:text-base">
                        {hasFilteredSessions
                          ? "Проверьте время, уровень и педагога. Перед первым визитом мы подтвердим наличие места."
                          : "По выбранному направлению в этот день занятий нет. Попробуйте соседний день или сбросьте фильтр."}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    key={`${activeDay.day}-${activeDirection}`}
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-3"
                  >
                    {hasFilteredSessions ? (
                      visibleSessions.map((session, index) => (
                        <article
                          key={`${activeDay.day}-${session.time}-${session.direction}`}
                          className={cn(
                            "relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.035] p-4 sm:rounded-2xl sm:p-5",
                            "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-100 before:content-['']",
                            directionPalette[session.direction] ?? "from-white/10 via-transparent to-transparent",
                          )}
                        >
                          <div className="relative flex flex-col gap-3 sm:gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-4">
                              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-foreground sm:flex">
                                <Clock3 className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="flex flex-wrap items-center gap-3">
                                  <p className="text-xl text-foreground sm:text-2xl">{session.time}</p>
                                  <span className="hidden rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold uppercase text-muted sm:inline-flex">
                                    Слот {index + 1}
                                  </span>
                                </div>
                                <p className="mt-1 text-base leading-6 text-foreground sm:mt-2 sm:text-lg sm:leading-7">
                                  {session.direction}
                                </p>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-2 lg:max-w-[340px] lg:justify-end">
                              <MetaPill icon={<Users2 className="h-4 w-4" />} text={session.level} />
                              <MetaPill
                                icon={<Sparkles className="h-4 w-4" />}
                                text={session.teacher}
                              />
                            </div>
                          </div>
                        </article>
                      ))
                    ) : (
                      <div className="rounded-2xl border border-dashed border-white/20 bg-white/[0.03] px-4 py-6 text-center sm:rounded-3xl sm:px-5 sm:py-10">
                        <p className="font-serif text-xl text-foreground sm:text-2xl">
                          В этот день пауза по выбранному направлению
                        </p>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
                          Проверьте соседний день или сбросьте фильтр, чтобы увидеть все занятия.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type DirectionChipProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

function DirectionChip({ label, isActive, onClick }: DirectionChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        "min-h-11 shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
        isActive
          ? "border-white/20 bg-white/10 text-foreground"
          : "border-white/10 bg-black/20 text-muted hover:border-white/20 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}

type MetaPillProps = {
  icon: ReactNode;
  text: string;
};

function MetaPill({ icon, text }: MetaPillProps) {
  return (
    <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-black/25 px-2.5 py-1.5 text-xs text-muted sm:px-3 sm:py-2 sm:text-sm">
      <span className="text-foreground">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function getClassLabel(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;

  if (mod10 === 1 && mod100 !== 11) {
    return "класс";
  }

  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) {
    return "класса";
  }

  return "классов";
}
