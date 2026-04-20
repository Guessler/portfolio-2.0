import Footer from "@/components/shared/Footer";
import { Experiance } from "@/components/ui/Experiance";
import { Portfolio } from "@/components/ui/Portfolio";
import { PrimarySection } from "@/components/ui/PrimarySection";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div >
      <PrimarySection />
      <Skills />
      <Experiance />
      <Portfolio />
      <Footer />
    </div>
  );
}
