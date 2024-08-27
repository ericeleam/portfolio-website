import Image from "next/image";
import ParticlesComponent from "./components/particle";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col container mx-auto px-5 py-5">
      <ParticlesComponent id="particles" />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactMe />
     
    </main>
  );
}
