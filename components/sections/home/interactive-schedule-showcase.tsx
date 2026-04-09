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
  "Хип-хоп микс": "from-[#a8193d]/28 via-transparent to-transparent text-foreground",
  "Хип-хоп герли": "from-[#641326]/45 via-transparent to-transparent text-foreground",
  "Открытая хореография": "from-[#a8193d]/22 via-transparent to-transparent text-foreground",
  "Практика / съемка": "from-white/10 via-transparent to-transparent text-foreground",
  "Дополнительный класс": "from-[#641326]/30 via-transparent to-transparent text-foreground",
};

export function InteractiveScheduleShowcase() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDirection, setActiveDirection] = useState("Все направления");
  const shouldReduceMotion = useReducedMotion();

  const activeDay = homeSchedule[activeDayIndex];
  const visibleSessions =
    activeDirection === "Все направления"
      ? activeDay.sessions
      : activeDay.sessions.filter((session) => session.direction === activeDirection);

  const hasFilteredSessions = visibleSessions.length > 0;

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#13090c] p-4 sm:p-6 lg:p-8">
      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-muted">
              Переключение по дням
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Выберите день и направление — покажем подходящие занятия.
            </h3>
          </div>

          <div className="flex flex-wrap gap-2">
            <DirectionChip
              label="Все направления"
              isActive={activeDirection === "Все направления"}
              onClick={() => setActiveDirection("Все направления")}
            />
            {directionOrder.map((direction) => (
              <DirectionChip
                key={direction}
                label={direction}
                isActive={activeDirection === direction}
                onClick={() => setActiveDirection(direction)}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-5 xl:grid-cols-[320px_minmax(0,1fr)]">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
            {homeSchedule.map((day, index) => {
              const matchingCount =
                activeDirection === "Все направления"
                  ? day.sessions.length
                  : day.sessions.filter((session) => session.direction === activeDirection).length;

              const isActive = activeDayIndex === index;

              return (
                <button
                  key={day.day}
                  type="button"
                  onClick={() => setActiveDayIndex(index)}
                  className={cn(
                    "group relative min-h-20 overflow-hidden rounded-2xl border px-5 py-4 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
                    isActive
                      ? "border-accent-strong bg-accent text-white"
                      : "border-white/10 bg-black/20 hover:border-white/30 hover:bg-white/[0.04]",
                  )}
                >
                  <div
                    className={cn(
                        "absolute inset-0 bg-[linear-gradient(135deg,rgba(168,25,61,0.24),transparent_55%)] transition duration-200",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100",
                    )}
                  />
                  <div className="relative flex items-start justify-between gap-4">
                    <div>
                      <p className="text-lg text-foreground">{day.day}</p>
                      <p className="mt-1 text-sm text-muted">
                        {matchingCount > 0
                          ? `${matchingCount} ${getClassLabel(matchingCount)}`
                          : "Нет занятий по фильтру"}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-xs font-semibold uppercase",
                        isActive
                          ? "border-white/20 bg-white/10 text-foreground"
                          : "border-white/10 bg-white/5 text-muted",
                      )}
                    >
                      {index + 1}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5">
              <div className="relative overflow-hidden rounded-3xl border border-white/14 bg-black/25 p-6 sm:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(100,19,38,0.24),transparent_58%)]" />
                <div className="relative flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase text-muted">
                        Активный день
                      </p>
                      <h4 className="mt-3 font-serif text-4xl text-foreground">
                        {activeDay.day}
                      </h4>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-muted sm:text-base">
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
                            "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-5",
                            "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-100 before:content-['']",
                            directionPalette[session.direction] ?? "from-white/10 via-transparent to-transparent",
                          )}
                        >
                          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black/30 text-foreground">
                                <Clock3 className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="flex flex-wrap items-center gap-3">
                                  <p className="text-2xl text-foreground">{session.time}</p>
                                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-semibold uppercase text-muted">
                                    Слот {index + 1}
                                  </span>
                                </div>
                                <p className="mt-2 text-lg leading-7 text-foreground">
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
                      <div className="rounded-3xl border border-dashed border-white/20 bg-white/[0.03] px-5 py-10 text-center">
                        <p className="font-serif text-2xl text-foreground">
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
      className={cn(
        "min-h-11 rounded-full border px-4 py-2 text-sm transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
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
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 text-sm text-muted">
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
