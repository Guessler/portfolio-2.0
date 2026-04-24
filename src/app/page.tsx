"use client";

import Footer from "@/components/shared/Footer";
import { Experiance } from "@/components/ui/Experiance";
import { Portfolio } from "@/components/ui/Portfolio";
import { PrimarySection } from "@/components/ui/PrimarySection";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div className="space-y-16 lg:space-y-24">
      <section id="hero">
        <PrimarySection />
      </section>
      <section id="experience" className="overflow-hidden">
        <Experiance />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contacts">
        <Footer />
      </section>
    </div>
  );
}