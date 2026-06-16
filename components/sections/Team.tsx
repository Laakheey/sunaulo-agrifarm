import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TEAM } from "@/data/team";

/** Derives display initials from a person's name, e.g. "Santosh Rawat" -> "SR". */
function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return "";
  const first = words[0][0];
  const last = words[words.length - 1][0];
  return `${first}${last}`.toUpperCase();
}

/**
 * Renders the farm's staff and their posts from `data/team.ts`. Add, remove,
 * or reorder entries in that file — this component requires no changes.
 */
const Team = () => {
  return (
    <section id="team" className="border-y border-line bg-paper py-22">
      <Container>
        <SectionHeading
          kicker="Who runs the farm"
          title="The people behind Sunaulo Agrifarm"
          description="A small year-round team looks after our fields, animals and farm gate — here's who you'll meet when you visit or place an order."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className="flex gap-4 rounded-2xl border border-line bg-cream p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-13 w-13 flex-none items-center justify-center rounded-full bg-green font-display text-base font-semibold text-paper"
              >
                {getInitials(member.name)}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-tight">
                  {member.name}
                </h3>
                <span className="mb-2 mt-1.5 inline-block rounded-full bg-gold/20 px-3 py-1 font-mono text-[0.66rem] uppercase tracking-widest text-terracotta">
                  {member.role}
                </span>
                {member.bio ? (
                  <p className="text-[0.9rem] text-ink-soft">{member.bio}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Team;