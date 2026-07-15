"use client";

import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import BackgroundBeams from "./animations/background-beams";
import {
  AnimatedText,
  FadeUp,
  MouseRotate3D,
  ScaleOnHover,
} from "./animations/motion-animations";
import { WavyBackground } from "./animations/wavy-background";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const [currentTime, setCurrentTime] = useState("");

  // Live Bangladesh Time (UTC+6)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const bdTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
      );
      const formatted = bdTime.toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen  flex items-center justify-center overflow-hidden">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto p-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left: Text Content */}
          <FadeUp className="flex-1 text-center md:text-left" delay={0.2}>
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
              <AnimatedText text="Full Stack Developer" delay={0.8} />
            </h3>

            <FadeUp
              delay={1.1}
              className="text-lg mb-6 max-w-lg text-muted-foreground leading-relaxed"
            >
              Full Stack Developer with 1+ years of experience architecting and
              deploying high-performance web applications — React.js, Next.js,
              TypeScript, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma.
              I build SEO-optimized, scalable platforms with integrated AI
              functionality and real-time communication, and care about clean
              architecture, type safety, and 99.9% uptime.
            </FadeUp>

            {/* Live Info: Time + Country */}
            <FadeUp
              delay={1.3}
              className="mb-2 text-sm text-gray-300 space-y-1"
            >
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-yellow-400">Current time:</span>
                <span className="font-mono text-xs md:text-sm">
                  {currentTime}
                </span>
              </div>
            </FadeUp>

            {/* Action Buttons */}
            <FadeUp
              delay={1.4}
              className="flex flex-wrap justify-center md:justify-start items-center gap-4"
            >
              <WavyBackground className="p-2 rounded-lg">
                <ScaleOnHover>
                  <Button size="lg" className="gap-2" asChild>
                    <Link
                      href="https://drive.google.com/uc?export=download&id=1TwQ-9Y1lyrx9ikhf1sIvHSj3oLZh_m2Q"
                      target="_blank"
                      rel="noopener noreferrer"
                      download="Md_Rabiul_Hasan_CV.pdf"
                    >
                      <Download className="h-5 w-5" />
                      Download CV
                    </Link>
                  </Button>
                </ScaleOnHover>
              </WavyBackground>

              <ScaleOnHover>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2"
                  onClick={scrollToAbout}
                >
                  Explore My Work <ArrowDown className="h-4 w-4" />
                </Button>
              </ScaleOnHover>
            </FadeUp>

            {/* Social Links */}
            <FadeUp
              delay={1.7}
              className="flex justify-center md:justify-start gap-6 mt-8"
            >
              <ScaleOnHover>
                <Link
                  href="https://github.com/rabiulkhan7224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <Github className="h-7 w-7" />
                </Link>
              </ScaleOnHover>
              <ScaleOnHover>
                <Link
                  href="https://www.linkedin.com/in/md-rabiul-hasan7224"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="h-7 w-7" />
                </Link>
              </ScaleOnHover>
            </FadeUp>
          </FadeUp>

          {/* Right: 3D Image */}
          <FadeUp className="flex-1 flex justify-center" delay={0.5}>
            <MouseRotate3D intensity={7}>
              <CardContainer className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                <CardBody className="relative group/card rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                  <CardItem translateZ={60} className="w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-purple-600/20 opacity-60 group-hover/card:opacity-80 transition-opacity" />
                    <Image
                      src="/rabiul-3.jpg"
                      alt="Md Rabiul Hasan"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-full"
                      // priority
                    />
                  </CardItem>
                </CardBody>
              </CardContainer>
            </MouseRotate3D>
          </FadeUp>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeUp
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        delay={2}
      >
        <ScaleOnHover>
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToAbout}
            aria-label="Scroll to About"
          >
            <ArrowDown className="h-6 w-6 animate-bounce" />
          </Button>
        </ScaleOnHover>
      </FadeUp>

      {/* About Section Anchor */}
      <div ref={aboutRef} className="absolute bottom-0 left-0 right-0 h-1" />
    </section>
  );
}
