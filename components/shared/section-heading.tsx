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
      <p className="text-xs font-semibold uppercase text-[color:var(--accent-warm)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-4xl leading-[0.98] text-foreground sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-muted sm:text-lg">
        {description}
      </p>
    </div>
  );
}
