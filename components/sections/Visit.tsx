import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_DETAILS } from "@/data/site";

export function Visit() {
  return (
    <section id="visit" className="bg-green-deep py-22 text-cream">
      <Container>
        <SectionHeading
          kicker="Visit the farm"
          title="Find us in Ghorahi-11"
          tone="light"
          className="mb-10"
        />

        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          <div className="grid gap-5.5">
            {CONTACT_DETAILS.map((detail) => {
              const Icon = detail.icon;
              return (
                <div key={detail.label} className="grid grid-cols-[28px_1fr] gap-3.5">
                  <Icon className="mt-0.5 h-5.5 w-5.5 text-gold" />
                  <div>
                    <strong className="mb-1 block font-display text-base font-semibold">
                      {detail.label}
                    </strong>
                    <span className="text-[0.93rem] text-cream/70">{detail.value}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="min-h-85 overflow-hidden rounded-2xl border border-cream/15">
            <iframe
              title="Map of Ghorahi-11, Dang, Nepal"
              src="https://www.openstreetmap.org/export/embed.html?bbox=82.470%2C28.020%2C82.530%2C28.060&layer=mapnik&marker=28.040%2C82.500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-85 w-full border-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
