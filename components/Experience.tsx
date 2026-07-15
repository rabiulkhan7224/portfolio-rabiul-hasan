"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Code, Zap, Brain, Users } from "lucide-react";

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="experience" className="py-2 bg-muted/30">
      <div className="container mx-auto ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <Badge variant="outline" className="mb-3 px-4 py-1 text-sm">
            My Journey
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Live Info */}

        {/* Experience Card */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={item}>
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      Full‑stack Developer
                    </CardTitle>
                    <CardDescription className="text-sm flex items-center gap-1.5 mt-1">
                      <Zap className="h-3.5 w-3.5 text-yellow-500" />
                      SM Technology — Digital Agency & Web Development
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    July 2025 — Present
                  </Badge>
                </div>
                <div className="flex items-center gap-1.5 mt-2 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>
                    Block D, Police Park, House #05 Rd 10, Banasree, Dhaka 1219,
                    Bangladesh
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-5 pt-1">
                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-1.5 text-sm mb-2">
                    <Brain className="h-4 w-4" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {[
                      "Built full‑stack applications with Next.js (App Router), TypeScript, Node.js/Express, PostgreSQL (Prisma) and MongoDB (Mongoose), using SSR/ISR for SEO and performance.",
                      "Developed REST APIs, JWT authentication, and secure data flows; integrated OpenAI for AI‑powered chatbots and product recommendations.",
                      "Implemented real‑time admin‑user chat via WebSocket (Socket.IO), handling server‑side events and client state sync.",
                      "Designed responsive, animated UIs with ShadCN UI, Framer Motion, and Tailwind CSS; managed state using Redux Toolkit / RTK Query.",
                      "Automated CI/CD with GitHub Actions → Vercel/GCP, configured production databases, and maintained 99.9% uptime.",
                    ].map((resp, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-primary flex items-center gap-1.5 text-sm mb-2">
                    <Users className="h-4 w-4" />
                    Notable Achievements
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                    {[
                      "Delivered Pantalla Verde – a multi‑vendor e‑commerce platform with real‑time inventory and AI recommendations.",
                      "Built Yurumein AI – trilingual AI chatbot with LangChain/OpenAI, Stripe payments, and a PostgreSQL‑based community archive.",
                      "Optimized multiple MERN apps for mobile‑first performance, cutting load times by 35% and raising Lighthouse scores above 90.",
                    ].map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed font-medium text-green-700 dark:text-green-300">
                          {ach}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {[
                    "Next.js (App Router)",
                    "TypeScript",
                    "Node.js",
                    "Express",
                    "PostgreSQL",
                    "Prisma",
                    "MongoDB",
                    "Mongoose",
                    "Redux/RTK Query",
                    "Socket.IO",
                    "OpenAI API",
                    "JWT Auth",
                    "Stripe",
                    "Tailwind CSS",
                    "GitHub Actions",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Placeholder */}
          <motion.div
            variants={item}
            className="text-center text-muted-foreground mt-4 text-xs"
          >
            <p className="italic">More experiences coming soon…</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
