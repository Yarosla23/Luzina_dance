import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonLinkVariants = cva(
  "group inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold uppercase transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "liquid-glass-strong text-white hover:-translate-y-0.5 hover:shadow-[0_28px_90px_rgba(224,77,60,0.34)]",
        secondary:
          "liquid-glass text-foreground hover:border-white/24 hover:bg-white/[0.08]",
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
