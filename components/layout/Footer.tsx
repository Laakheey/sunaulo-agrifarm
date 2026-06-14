import { Container } from "@/components/ui/Container";
import { FOOTER_LINK_GROUPS, SITE } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-14 text-cream/80">
      <Container>
        <div className="grid gap-10 border-b border-cream/10 pb-9 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="mb-3 font-display text-xl text-cream">{SITE.name}</p>
            <p className="max-w-xs text-sm">{SITE.description}</p>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-gold">
                {group.title}
              </h4>
              <ul className="grid gap-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition-colors hover:text-gold">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-gold">
              Contact
            </h4>
            <ul className="grid gap-2.5 text-sm">
              <li>Ward 11, Ghorahi, Dang</li>
              <li>Lumbini Province, Nepal</li>
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-5 font-mono text-xs">
          <span>
            © {year} {SITE.name}, Ghorahi-11, Dang, Nepal.
          </span>
          <span>Grown in the terai. Sold close to home.</span>
        </div>
      </Container>
    </footer>
  );
}
