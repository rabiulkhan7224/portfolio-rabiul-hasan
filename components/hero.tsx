"use client"
import { ArrowDown } from "lucide-react";
import BackgroundBeams from "./animations/background-beams";
import { FadeUp, MouseRotate3D, ScaleOnHover } from "./animations/motion-animations";
import { Button } from "./ui/button";
import { useRef } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";

export default function Hero() {

  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }
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
             <FadeUp delay={1.4} className="flex flex-wrap gap-4">
              {/* <WavyBackground className="p-2 rounded-lg"> */}
                <ScaleOnHover>
                  <Button size="lg" className="gap-2 relative z-10">
                    Download CV
                  </Button>
                </ScaleOnHover>
              {/* </WavyBackground> */}

              <ScaleOnHover>
                <Button size="lg" variant="outline" className="gap-2" onClick={scrollToAbout}>
                  Explore My Work <ArrowDown className="h-4 w-4" />
                </Button>
              </ScaleOnHover>
            </FadeUp>
          </FadeUp>
         <FadeUp className="flex-1 flex justify-center" delay={0.5}>
            <MouseRotate3D intensity={7}>
              <CardContainer className="w-64 h-64 md:w-80 md:h-80">
                <CardBody className="relative group/card rounded-full overflow-hidden border-4 border-primary/20">
                  <CardItem translateZ={50}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                    <Image
                      src="/rabiul.jpg"
                      alt="Md Rabiul Hasan"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                    
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </MouseRotate3D>
          </FadeUp>

         {/* image section */}

        </div>
      </div>
       <FadeUp className="absolute bottom-10 left-1/2 transform -translate-x-1/2" delay={2}>
        <ScaleOnHover>
          <Button variant="ghost" size="icon" onClick={scrollToAbout}>
            <ArrowDown className="h-6 w-6" />
          </Button>
        </ScaleOnHover>
      </FadeUp>
      <div ref={aboutRef} className="absolute bottom-0 left-0 right-0 h-1" />
    </section>
  )
}
