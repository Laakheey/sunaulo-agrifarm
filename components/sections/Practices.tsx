import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRACTICES } from "@/data/practices";

export function Practices() {
  return (
    <section id="practices" className="py-22">
      <Container>
        <SectionHeading
          kicker="How we farm"
          title="Practices that keep our land productive"
          description="Sunaulo Agrifarm leans on methods that have worked in Dang's terai for generations, paired with a few modern improvements where they help."
        />

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {PRACTICES.map((practice, index) => (
            <div
              key={practice.title}
              className="rounded-2xl border border-line bg-paper p-7"
            >
              <span className="font-mono text-xs tracking-widest text-terracotta">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="my-3.5 font-display text-[1.2rem] font-semibold">
                {practice.title}
              </h3>
              <p className="text-[0.93rem] text-ink-soft">{practice.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
