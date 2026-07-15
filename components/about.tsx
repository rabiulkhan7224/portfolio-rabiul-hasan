"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, MapPin } from "lucide-react";
import { Spotlight } from "@/components/animations/spotlight";
import { MovingBorder } from "@/components/animations/moving-border";
import Image from "next/image";
import GithubStat from "@/components/githubStat";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { useState, useEffect } from "react";

export default function About() {
  const [currentTime, setCurrentTime] = useState("");

  // Live Bangladesh Time (UTC+6)
  useEffect(() => {
    const updateTime = () => {
      const bdTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZoneName: "short",
      });
      setCurrentTime(bdTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Spotlight className="relative">
              <MovingBorder className="h-full w-full">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border shadow-2xl">
                  <Image
                    src="/about-me.jpg"
                    alt="Md Rabiul Hasan"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                    priority
                  />
                </div>
              </MovingBorder>
            </Spotlight>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Title */}
            <motion.h3 variants={item} className="text-2xl font-bold">
              Full Stack Developer
            </motion.h3>

            {/* Career Objective */}
            <motion.div
              variants={item}
              className="text-muted-foreground leading-relaxed"
            >
              Full Stack Developer with 1+ years of experience architecting and
              deploying high-performance web applications —{" "}
              <PointerHighlight
                rectangleClassName="bg-green-100 dark:bg-green-900 border-green-300 dark:border-green-700"
                pointerClassName="text-green-500 h-3 w-3"
                containerClassName="inline-block"
              >
                <span className="relative z-10">
                  React.js, Next.js, TypeScript, Node.js, Express.js, Nest.js,
                  MongoDB, PostgreSQL, and Prisma , typeorm.
                </span>
              </PointerHighlight>
              I build SEO-optimized, scalable platforms with integrated AI
              functionality and real-time communication, and care about clean
              architecture, type safety, and 99.9% uptime.
            </motion.div>

            {/* Live Info */}

            {/* GitHub Stats */}
            <motion.div variants={item}>
              <GithubStat />
            </motion.div>

            {/* Skills */}

            {/* Soft Skills */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {[
                "Problem-solving",
                "Team collaboration",
                "Time management",
                "Adaptability",
              ].map((skill) => (
                <Badge
                  key={skill}
                  className="px-3 py-1 hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
