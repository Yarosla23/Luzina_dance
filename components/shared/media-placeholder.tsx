import { ImagePlus } from "lucide-react";

import { cn } from "@/lib/utils";

type MediaPlaceholderProps = {
  label: string;
  note?: string;
  className?: string;
};

export function MediaPlaceholder({
  label,
  note = "Фото будет добавлено позже",
  className,
}: MediaPlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label}. ${note}`}
      className={cn(
        "group relative flex min-h-[280px] overflow-hidden rounded-[2rem_2rem_4.5rem_2rem] border border-dashed border-white/20 bg-[#13090c] p-6",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 leopard-pattern opacity-20" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-accent/25 blur-3xl" />
      <div className="pointer-events-none absolute left-6 top-6 flex items-center gap-3 text-[10px] font-bold uppercase text-white/45">
        <span className="h-2 w-2 rounded-full border border-white/50" />
        Место для фото
      </div>

      <div className="relative mt-auto flex w-full items-end justify-between gap-5 border-t border-white/14 pt-5">
        <div>
          <p className="font-serif text-3xl text-white">{label}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{note}</p>
        </div>
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white">
          <ImagePlus aria-hidden="true" className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
}
