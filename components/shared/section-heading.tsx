import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-[color:var(--accent-warm)] before:h-px before:w-10 before:bg-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-serif text-4xl leading-[0.94] text-white sm:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
