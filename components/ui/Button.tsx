import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-gold text-green-deep hover:bg-terracotta hover:text-paper",
  ghost: "border border-ink text-ink hover:bg-ink hover:text-cream",
};

/** Pill-shaped call-to-action link in the site's primary or ghost style. */
export function Button({
  href,
  variant = "primary",
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition-all duration-150 hover:-translate-y-0.5",
        VARIANT_STYLES[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
