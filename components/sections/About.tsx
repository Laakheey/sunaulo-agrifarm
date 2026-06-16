import { Container } from "@/components/ui/Container";

const VALUES = [
  {
    number: "01",
    title: "Our fields",
    description:
      "Paddy, lentil and vegetable plots spread across the fertile flats of Ghorahi-11, fed by the local irrigation canal.",
  },
  {
    number: "02",
    title: "Our animals",
    description:
      "A small herd of goats and cattle, plus free-range poultry, raised alongside the crops in an integrated system.",
  },
  {
    number: "03",
    title: "Our market",
    description:
      "Produce sold at our farm gate and delivered to households, hotels and shops across Ghorahi Bazaar and nearby wards.",
  },
];

const About = () => {
  return (
    <section id="about" className="border-y border-line bg-paper py-22">
      <Container className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            About the farm
          </span>
          <h2 className="mb-6 mt-1.5 font-display text-[clamp(2rem,4vw,2.8rem)] font-bold leading-[1.15]">
            Rooted in Ghorahi-11, grown for Dang
          </h2>
          <ul className="grid gap-4.5">
            {VALUES.map((value) => (
              <li key={value.number} className="grid grid-cols-[28px_1fr] gap-3.5">
                <span className="pt-0.5 font-mono text-[0.78rem] text-terracotta">
                  {value.number}
                </span>
                <div>
                  <strong className="mb-0.5 block font-display text-base font-semibold">
                    {value.title}
                  </strong>
                  <span className="text-[0.94rem] text-ink-soft">{value.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid gap-4.5 text-ink-soft">
          <p>
            Sunaulo Agrifarm began as a single family plot in Ghorahi-11 and has grown, season by
            season, into a working farm that supplies rice, lentils, mustard oil, vegetables,
            eggs, dairy and goat meat to homes and shops across Dang district.
          </p>
          <p>
            The name <strong className="text-ink">Sunaulo</strong> — &ldquo;golden&rdquo; —
            describes the ripe paddy fields that surround Ghorahi every autumn, and the standard
            we hold our produce to: grown carefully, harvested at the right time, and sold close
            to where it was grown.
          </p>
          <p>
            Every plot is planned around the terai&apos;s natural rhythm — monsoon rice, winter
            lentils and mustard, and a steady run of vegetables in between. Our animals graze on
            farm by-products and return manure to the same fields, keeping the whole system close
            to the land.
          </p>
          <p>
            Whether you&apos;re a household in Ghorahi looking for fresh vegetables, or a shop
            owner needing sacks of rice and lentils by the season, Sunaulo Agrifarm is set up to
            supply it — straight from Ghorahi-11.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;