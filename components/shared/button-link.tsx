import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const buttonLinkVariants = cva(
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        primary:
          "border-accent-strong bg-accent text-white hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_18px_50px_rgba(92,0,7,0.42)]",
        secondary:
          "border-white/30 bg-transparent text-foreground hover:border-white hover:bg-white hover:text-black",
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
