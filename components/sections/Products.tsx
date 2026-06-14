import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PRODUCTS } from "@/data/products";

export function Products() {
  return (
    <section id="products" className="border-y border-line bg-paper py-22">
      <Container>
        <SectionHeading
          kicker="Farm gate & bulk orders"
          title="What we grow and sell"
          description="Everything below is grown or raised on our fields in Ghorahi-11. Vegetables and eggs are sold fresh daily; rice, lentils, oil and meat are best ordered ahead for larger quantities."
        />

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.name}
                className="flex flex-col gap-3.5 bg-paper p-7.5 transition-colors hover:bg-cream"
              >
                <Icon className="h-11.5 w-11.5 text-green" strokeWidth={1.5} />
                <h3 className="font-display text-[1.18rem] font-semibold">{product.name}</h3>
                <p className="grow text-[0.92rem] text-ink-soft">{product.description}</p>
                <div className="flex items-center justify-between border-t border-dashed border-line pt-3 font-mono text-[0.68rem] uppercase tracking-widest text-terracotta">
                  <span>{product.unit}</span>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
