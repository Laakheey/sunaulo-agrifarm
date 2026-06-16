import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FARM_GALLERY } from "@/data/gallery";

const Gallery = () => {
  return (
    <section id="gallery" className="border-y border-line bg-paper py-22">
      <Container>
        <SectionHeading
          kicker="Around the farm"
          title="A look at Sunaulo Agrifarm"
          description="A few scenes from our fields and farmyard in Ghorahi-11 — paddy and mustard through the seasons, our vegetable plots, livestock shed, and the farm gate where everything is sold fresh."
        />

        <div className="grid grid-cols-1 gap-5.5 sm:grid-cols-2 lg:grid-cols-3">
          {FARM_GALLERY.map((image) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-2xl border border-line bg-cream"
            >
              {/* Plain <img> is used for these local decorative SVG
                  illustrations; swap for next/image with real photos. */}
              <img src={image.src} alt={image.alt} loading="lazy" className="h-57.5 w-full object-cover" />
              <figcaption className="border-t border-line px-4 py-3 font-mono text-[0.85rem] text-ink-soft">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;