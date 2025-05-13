"use client"
import BackgroundBeams from "./animations/background-beams";
import { FadeUp } from "./animations/motion-animations";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* todo backgroundbeans  */}
      <BackgroundBeams className="absolute inset-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeUp className="flex-1" delay={0.2}>
            <div className="text-xl md:text-2xl font-medium text-primary mb-2">
              <h1>`${"Hello, I'm"}`</h1>
              {/* todo AnimatedText */}
              <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
               Md Rabiul Hasan 
              </h1>
               <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              {/* <AnimatedText text="MERN Stack Developer" delay={0.8} />
               */}
               MERN Stack Developer
            </h3>
            <FadeUp delay={1.1} className="text-lg mb-8 max-w-lg text-muted-foreground">
              Specializing in React.js, Node.js, Express.js and MongoDB, with foundational knowledge of TypeScript for
              building type-safe applications.
            </FadeUp>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
