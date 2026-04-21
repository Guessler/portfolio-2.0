import Footer from "@/components/shared/Footer";
import { Experiance } from "@/components/ui/Experiance";
import { Portfolio } from "@/components/ui/Portfolio";
import { PrimarySection } from "@/components/ui/PrimarySection";
import Skills from "@/components/ui/Skills";

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-25">
      <PrimarySection />
      <Skills />
      <Experiance />
      <Portfolio />
      <Footer />
    </div>
  );
}
