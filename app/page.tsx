import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
// import { Hero } from "@/components/sections/Hero";
// import { About } from "@/components/sections/About";
// import { Team } from "@/components/sections/Team";
// import { HarvestCalendar } from "@/components/sections/HarvestCalendar";
// import { Products } from "@/components/sections/Products";
// import { Practices } from "@/components/sections/Practices";
// import { Gallery } from "@/components/sections/Gallery";
// import { Visit } from "@/components/sections/Visit";
// import { Contact } from "@/components/sections/Contact";

import {
  Hero,
  About,
  Team,
  HarvestCalendar,
  Products,
  Practices,
  Gallery,
  Visit,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Team />
        <HarvestCalendar />
        <Products />
        <Practices />
        <Gallery />
        <Visit />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
