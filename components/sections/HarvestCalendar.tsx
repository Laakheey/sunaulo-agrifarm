import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HARVEST_CALENDAR, SEASON_LABELS } from "@/data/harvest";
import type { Season } from "@/types";

/** Visual treatment for each of the terai's three working seasons. */
const SEASON_STYLES: Record<Season, { column: string; month: string; tag: string; dot: string }> = {
  monsoon: {
    column: "bg-gradient-to-b from-green/[0.07] to-transparent",
    month: "text-green",
    tag: "bg-green/15 text-green-deep",
    dot: "bg-green",
  },
  winter: {
    column: "bg-gradient-to-b from-terracotta/[0.07] to-transparent",
    month: "text-terracotta",
    tag: "bg-terracotta/15 text-green-deep",
    dot: "bg-terracotta",
  },
  spring: {
    column: "bg-gradient-to-b from-gold/[0.12] to-transparent",
    month: "text-[#b9821f]",
    tag: "bg-gold/25 text-green-deep",
    dot: "bg-gold",
  },
};

export function HarvestCalendar() {
  return (
    <section id="harvest" className="bg-cream py-22">
      <Container>
        <SectionHeading
          kicker="What's growing, when"
          title="Our year in the fields"
          description="Dang's terai gives us three working seasons. This is roughly what's being sown, tended or harvested across our plots each month — and a guide to when each crop is freshest at our farm gate."
        />

        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-12">
          {HARVEST_CALENDAR.map((entry) => {
            const styles = SEASON_STYLES[entry.season];
            return (
              <div
                key={entry.month}
                className={cn("flex min-h-65 flex-col bg-paper p-3.5", styles.column)}
              >
                <span className={cn("font-mono text-[0.68rem] uppercase tracking-widest", styles.month)}>
                  {entry.month}
                </span>
                <span className="mb-4 mt-1 min-h-[2.4em] font-display text-[0.95rem] font-semibold">
                  {entry.focus}
                </span>
                <div className="mt-auto flex flex-col gap-2">
                  {entry.crops.map((crop) => (
                    <span
                      key={crop}
                      className={cn(
                        "rounded-md px-2 py-1.5 text-center text-[0.74rem] font-semibold leading-tight",
                        styles.tag,
                      )}
                    >
                      {crop}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5.5 flex flex-wrap items-center gap-7 font-mono text-xs text-ink-soft">
          {(Object.keys(SEASON_LABELS) as Season[]).map((season) => (
            <span key={season} className="inline-flex items-center gap-2">
              <span className={cn("inline-block h-2.5 w-2.5 rounded-sm", SEASON_STYLES[season].dot)} />
              {SEASON_LABELS[season]}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
