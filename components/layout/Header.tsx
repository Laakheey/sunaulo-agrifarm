"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/data/site";
import Image from "next/image";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/85 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6 py-4">
        <Link
          href="#top"
          className="flex items-center gap-3 text-ink"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/favicon.png"
            alt={`${SITE.name} logo`}
            width={36}
            height={36}
            className="flex-none"
            style={{ height: "auto", width: "auto" }}
          />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight">
              {SITE.name}
            </span>
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-green">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-terracotta"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" className="px-4.5 py-2.5 text-sm">
            Order produce
          </Button>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded-full border border-line p-2 text-ink lg:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-cream lg:hidden"
        >
          <Container className="flex flex-col gap-4 py-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-semibold text-ink-soft"
              >
                {link.label}
              </a>
            ))}
            <Button
              href="#contact"
              className="w-fit"
              onClick={() => setMenuOpen(false)}
            >
              Order produce
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
