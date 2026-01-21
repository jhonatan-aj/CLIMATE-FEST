import HeroSection from "@/components/sections/HeroSection";
import Countdown from "@/components/Countdown";
import SobreNosotros from "@/components/sections/SobreNosotros";
import ElDesafio from "@/components/sections/ElDesafio";
import PublicoObjetivo from "@/components/sections/PublicoObjetivo";
import ProgramaInternacional from "@/components/sections/ProgramaInternacional";
import AgendaEvento from "@/components/sections/AgendaEvento";
import Alianzas from "@/components/sections/Alianzas";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <Countdown />
      <SobreNosotros />
      <ElDesafio />
      <PublicoObjetivo />
      <ProgramaInternacional />
      <AgendaEvento />
      <Alianzas />
      <CallToAction />
      <Footer />
    </main>
  );
}
