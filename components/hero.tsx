"use client"
import { FadeUp } from "./animations/motion-animations";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* todo backgroundbeans  */}
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <FadeUp className="flex-1" delay={0.2}>
            <div className="text-xl md:text-2xl font-medium text-primary mb-2">
              <h1>`${"Hello, I'm"}`</h1>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
               Md Rabiul Hasan 
              </h1>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
