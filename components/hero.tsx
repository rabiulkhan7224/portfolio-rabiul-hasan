"use client"
import { ArrowDown, Github, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import BackgroundBeams from "./animations/background-beams";
import { AnimatedText, FadeUp, MouseRotate3D, ScaleOnHover } from "./animations/motion-animations";
import { WavyBackground } from "./animations/wavy-background";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {

  const aboutRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <section className="relative h-screen  flex items-center justify-center overflow-hidden">
     
      <BackgroundBeams className="absolute inset-0" />
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
           <FadeUp className="flex-1" delay={0.2}>
            <div className="text-xl md:text-2xl font-medium text-primary mb-2">
              <AnimatedText text="Hello, I'm" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <AnimatedText
                text="Md Rabiul Hasan"
                className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600"
                delay={0.5}
              />
            </h1>

            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-muted-foreground">
              <AnimatedText text="MERN Stack Developer" delay={0.8} />
            </h3>

            <FadeUp delay={1.1} className="text-lg mb-8 max-w-lg text-muted-foreground">
              Specializing in React.js, Node.js, Express.js and MongoDB, with foundational knowledge of TypeScript for
              building type-safe applications.
            </FadeUp>

            <FadeUp delay={1.4} className="flex flex-wrap items-center gap-4">
              <WavyBackground className="p-2 rounded-lg">
                <ScaleOnHover>
                  <Link
                      href="https://drive.google.com/file/d/1TwQ-9Y1lyrx9ikhf1sIvHSj3oLZh_m2Q/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="flex items-center gap-2">
                    <Button size="lg" className="gap-2 relative z-10">
                  
                    
                    
                    Download CV
                  </Button>
                      </Link>
                 
                </ScaleOnHover>
              </WavyBackground>

              <ScaleOnHover>
                <Button size="lg" variant="outline" className="gap-2" onClick={scrollToAbout}>
                  Explore My Work <ArrowDown className="h-4 w-4" />
                </Button>
              </ScaleOnHover>
            </FadeUp>
    
            <FadeUp delay={1.7} className="flex gap-4 mt-8">
              <ScaleOnHover>
                <Link
                  href="https://github.com/rabiulkhan7224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
              </ScaleOnHover>
              <ScaleOnHover>
                <Link
                  href="https://www.linkedin.com/in/md-rabiul-hasan7224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
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
