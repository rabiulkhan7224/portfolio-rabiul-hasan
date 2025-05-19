import Hero from "@/components/hero";
import About from "./../components/about";
import SkillsWithLogos from "@/components/skills";

export default function Home() {
  return (
    <>
   <main className="min-h-screen bg-background">
    <Hero />
    <About />
    <SkillsWithLogos />
    {/* <Projects /> */}
    {/* <Contact /> */}
    {/* <Footer /> */}
    {/* <BackgroundBeams className="absolute inset-0 z-0" /> */}
    
   </main>
    
    </>
  );
}

