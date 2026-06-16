import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import PaddyFieldIllustration from "@/components/icons/PaddyFieldIllustration";
import { HERO_STATS } from "@/data/site";

const Hero = () => {
  return (
    <section>
      <Container className="grid items-center gap-12 pb-14 pt-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="mb-5 inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-terracotta before:h-px before:w-7 before:bg-terracotta">
            Family-run farm · Ghorahi-11, Dang
          </span>
          <h1 className="mb-5 font-display text-[clamp(2.8rem,6.2vw,5.2rem)] font-bold leading-[1.02] tracking-tight">
            Golden harvests from the heart of{" "}
            <em className="font-medium italic text-green">Dang&apos;s</em> terai
          </h1>
          <p className="mb-8 max-w-120 text-lg text-ink-soft">
            Sunaulo Agrifarm grows rice, lentils, mustard oil and seasonal vegetables on our
            family fields in Ghorahi-11 — sold fresh at our farm gate and delivered around Dang.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="#products">See our produce</Button>
            <Button href="#visit" variant="ghost">
              Visit the farm
            </Button>
          </div>
        </div>

        <div className="relative aspect-4/5 overflow-hidden rounded-[28px] bg-linear-to-br from-green to-green-deep shadow-[0_30px_60px_-28px_rgba(31,51,34,0.55)]">
          <PaddyFieldIllustration className="h-full w-full" />
          <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl bg-paper/90 px-4.5 py-4">
            <div>
              <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
                Farm location
              </span>
              <span className="font-display text-lg font-semibold">Ghorahi-11, Dang</span>
            </div>
            <div>
              <span className="mb-1 block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-soft">
                Open daily
              </span>
              <span className="font-display text-lg font-semibold">7 AM – 6 PM</span>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-y border-line bg-paper">
        <Container className="flex flex-wrap justify-between gap-9 py-5.5">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-display text-[1.9rem] font-bold text-green">
                {stat.value}
              </span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-soft">
                {stat.label}
              </span>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}

export default Hero;