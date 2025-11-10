import Hero from "@/components/hero";
import About from "./../components/about";
import SkillsWithLogos from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import BackgroundBeams from "@/components/animations/background-beams";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <>
   <main className="min-h-screen bg-background">
    <Hero />
    <About />
    <Experience />
    <SkillsWithLogos />
    <Projects />
    <Contact />
    <Footer />
    <BackgroundBeams className="absolute inset-0 z-0" />
    
   </main>
    
    </>
  );
}

