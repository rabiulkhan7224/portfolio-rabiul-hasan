"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Code, Zap, Brain, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function Experience() {
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
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const timelineItem = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            My Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Live Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mb-12 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-mono">{currentTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span className="font-medium">BD Bangladesh</span>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Single Role (Current Job) */}
          <motion.div variants={item}>
            <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-purple-500 hidden md:block" />
              
              {/* Timeline Dot */}
              <div className="absolute left-4 top-4 w-3 h-3 bg-primary rounded-full z-10 hidden md:block" />

              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between md:gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold flex items-center gap-2">
                      <Code className="h-6 w-6 text-primary" />
                      Frontend Developer
                    </CardTitle>
                    <CardDescription className="text-base flex items-center gap-2 mt-1">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      SM Technology — Digital Agency & Web Development
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="whitespace-nowrap self-start mt-1">
                    July 2025 — Present
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span> Block D, Police Park, House #05 Rd 10, Banasree, Dhaka 1219, Bangladesh</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-2">
                {/* Responsibilities */}
                <motion.div variants={timelineItem} className="space-y-3">
                  <h4 className="font-semibold text-primary flex items-center gap-2">
                    <Brain className="h-5 w-5" />
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Led frontend development for client projects using Next.js and TypeScript, implementing SSR/ISR for SEO-optimized e-commerce platforms with multi-category product catalogs.",
                      "Integrated real-time features via WebSockets for admin-user chat support, enabling seamless order queries and resolutions in high-traffic dashboards.",
                      "Developed AI-powered components, including OpenAI API chatbots for product recommendations, enhancing user engagement and conversion rates by 25%.",
                      "Built responsive UIs with ShadCN and Framer Motion, handling cart, wishlist, user dashboards, and order management systems with secure JWT authentication.",
                      "Collaborated with backend teams to deploy on VPS/Google Cloud, optimizing performance with CI/CD pipelines via GitHub Actions for zero-downtime updates.",
                    ].map((resp, i) => (
                      <li key={i} className="flex items-start gap-2 pl-2 border-l border-border">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Achievements */}
                <motion.div variants={timelineItem} className="space-y-3">
                  <h4 className="font-semibold text-primary flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Notable Achievements
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {[
                      "Delivered 'Pantalla Verde' e-commerce platform: Multi-vendor support, real-time inventory, and AI-driven suggestions, resulting in 40% faster user onboarding.",
                      "Engineered 'Dream Canvas Art' AI tool: Credit-based generation with Stripe/Coinbase payments, processing 1K+ monthly generations with 99.9% uptime.",
                      "Optimized legacy MERN apps (e.g., Medical Camp System, Car Rental) for mobile-first responsiveness, reducing load times by 35% via code splitting and lazy loading.",
                      "Mentored junior devs on TypeScript best practices, contributing to a 20% reduction in production bugs through rigorous testing with Jest and RTK Query.",
                    ].map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 pl-2 border-l border-green-200 dark:border-green-800">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed font-medium text-green-700 dark:text-green-300">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Tech Stack */}
                <motion.div variants={timelineItem} className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {[
                    "Next.js (SSR/ISR/SSG)",
                    "TypeScript",
                    "React.js",
                    "ShadCN UI",
                    "Framer Motion",
                    "WebSocket",
                    "OpenAI API",
                    "JWT Auth",
                    "Stripe/Coinbase",
                    "MongoDB",
                    "Tailwind CSS",
                    "GitHub Actions",
                  ].map((tech) => (
                    <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Placeholder for Future Roles */}
          <motion.div variants={item} className="text-center text-muted-foreground">
            <p className="italic">More experiences coming soon... </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}