import { clsx, type ClassValue } from "clsx";

/**
 * Merge class names conditionally. A thin wrapper around `clsx` so call
 * sites read naturally: `cn("base", isActive && "active")`.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}
