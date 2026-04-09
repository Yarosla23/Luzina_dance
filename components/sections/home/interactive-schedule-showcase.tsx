"use client";

import { motion } from "framer-motion";
import { Clock3, Sparkles, Users2 } from "lucide-react";
import { type ReactNode, useState } from "react";

import { homeSchedule } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const directionOrder = Array.from(
  new Set(homeSchedule.flatMap((day) => day.sessions.map((session) => session.direction))),
);

const directionPalette: Record<string, string> = {
  Контемп: "from-white/20 via-white/5 to-transparent text-foreground",
  "Хип-хоп микс": "from-[#8f1717]/40 via-[#8f1717]/10 to-transparent text-foreground",
  "Хип-хоп герли": "from-[#d7b28a]/30 via-[#d7b28a]/10 to-transparent text-foreground",
  "Открытая хореография": "from-[#7d1010]/35 via-white/5 to-transparent text-foreground",
  "Практика / съемка": "from-[#b21818]/25 via-[#b21818]/5 to-transparent text-foreground",
  "Дополнительный класс": "from-[#f4efe8]/15 via-white/5 to-transparent text-foreground",
};

export function InteractiveScheduleShowcase() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [activeDirection, setActiveDirection] = useState("Все направления");

  const activeDay = homeSchedule[activeDayIndex];
  const visibleSessions =
    activeDirection === "Все направления"
      ? activeDay.sessions
      : activeDay.sessions.filter((session) => session.direction === activeDirection);

  const hasFilteredSessions = visibleSessions.length > 0;

  return (
    <div className="liquid-glass relative overflow-hidden rounded-2xl p-4 sm:p-6 lg:p-8">
      <div className="relative flex flex-col gap-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-muted">
              Переключение по дням
            </p>
            <h3 className="mt-3 max-w-xl font-serif text-3xl leading-tight text-foreground sm:text-4xl">
              Интерактивное расписание в ритме студии, а не в виде скучной таблицы.
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
                    "group relative overflow-hidden rounded-[1.75rem] border px-5 py-4 text-left transition duration-300",
                    isActive
                      ? "border-white/20 bg-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
                      : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.05]",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-[linear-gradient(135deg,rgba(178,24,24,0.24),transparent_55%)] transition duration-300",
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
              <div className="relative overflow-hidden rounded-2xl border border-white/14 bg-white/[0.06] p-6 sm:p-7">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(224,77,60,0.16),transparent_58%)]" />
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
                          ? "Выбранные занятия собраны в одном фокусе: время, возраст и педагог читаются за пару секунд."
                          : "По выбранному направлению в этот день занятий нет. Попробуйте соседний день или сбросьте фильтр."}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    key={`${activeDay.day}-${activeDirection}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-3"
                  >
                    {hasFilteredSessions ? (
                      visibleSessions.map((session, index) => (
                        <article
                          key={`${activeDay.day}-${session.time}-${session.direction}`}
                          className={cn(
                            "relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-5",
                            "before:absolute before:inset-0 before:bg-gradient-to-r before:opacity-100 before:content-['']",
                            directionPalette[session.direction] ?? "from-white/10 via-transparent to-transparent",
                          )}
                        >
                          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-foreground">
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
                              <MetaPill icon={<Users2 className="h-4 w-4" />} text={session.age} />
                              <MetaPill
                                icon={<Sparkles className="h-4 w-4" />}
                                text={session.teacher}
                              />
                            </div>
                          </div>
                        </article>
                      ))
                    ) : (
                      <div className="rounded-[1.75rem] border border-dashed border-white/14 bg-white/[0.03] px-5 py-10 text-center">
                        <p className="font-serif text-2xl text-foreground">
                          В этот день пауза по выбранному направлению
                        </p>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
                          Сетка остаётся гибкой: можно быстро проверить другие дни и найти подходящее окно без длинного скролла.
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
        "rounded-full border px-4 py-2 text-sm transition duration-300",
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
