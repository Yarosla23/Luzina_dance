import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonLinkVariants = cva(
  "group inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium tracking-[0.14em] uppercase transition duration-300",
  {
    variants: {
      variant: {
        primary:
          "border-transparent bg-[linear-gradient(135deg,rgba(166,24,24,1),rgba(107,16,16,1))] text-white shadow-soft hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(122,22,22,0.35)]",
        secondary:
          "border-white/12 bg-white/[0.03] text-foreground hover:border-white/20 hover:bg-white/[0.06]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> &
  LinkProps &
  VariantProps<typeof buttonLinkVariants> & {
    children: ReactNode;
    className?: string;
    withIcon?: boolean;
  };

export function ButtonLink({
  children,
  className,
  variant,
  withIcon = true,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonLinkVariants({ variant }), className)} {...props}>
      <span>{children}</span>
      {withIcon ? (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      ) : null}
    </Link>
  );
}
