import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  description?: string;
  /** Use on dark-background sections so accent colors stay legible. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Shared heading pattern: a small mono "kicker" label above a display
 * title, with an optional intro paragraph aligned to the right on
 * wide screens.
 */
export function SectionHeading({
  kicker,
  title,
  description,
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 flex flex-wrap items-end justify-between gap-6", className)}>
      <div>
        <span
          className={cn(
            "font-mono text-xs uppercase tracking-[0.18em]",
            tone === "light" ? "text-gold" : "text-terracotta",
          )}
        >
          {kicker}
        </span>
        <h2 className="mt-1.5 font-display text-[clamp(2rem,4vw,2.9rem)] font-bold tracking-tight">
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-105 text-base",
            tone === "light" ? "text-cream/70" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
