
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import VisionMission from "@/components/sections/VisionMission";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Career from "@/components/sections/Career";
import Footer from "@/components/layout/Footer";
import ParticlesBackground from "@/components/layout/ParticlesBackground";

const Index = () => {
  useEffect(() => {
    document.title = "Gagan Labs - India's Startup Accelerator";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <About />
        <Team />
        <Career />
      </main>
      <Footer />
      <ParticlesBackground />
    </div>
  );
};

export default Index;
