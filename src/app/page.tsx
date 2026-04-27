"use client";

import Footer from "@/components/shared/Footer";
import { Experiance } from "@/components/ui/Experiance";
import { Portfolio } from "@/components/ui/Portfolio";
import { PrimarySection } from "@/components/ui/PrimarySection";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <div id="hero">
        <PrimarySection />
      </div>
      <section id="experience" className="overflow-hidden scroll-mt-35">
        <Experiance />
      </section>
      <section id="portfolio" className="scroll-mt-35">
        <Portfolio />
      </section>
      <section id="skills" className="scroll-mt-35">
        <Skills />
      </section>
      <section id="contacts" className="scroll-mt-35">
        <Footer />
      </section>
    </div>
  );
}
