import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Centers content and applies the site's max content width and side padding. */
export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-content px-7", className)}>{children}</div>
  );
}
