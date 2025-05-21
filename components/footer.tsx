"use client"
import { motion } from 'motion/react';

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { WavyBackground } from './animations/wavy-background';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative">
      <WavyBackground
        className="absolute inset-0"
        colors={["#3b82f680", "#6366f180", "#8b5cf680"]}
        waveWidth={100}
        backgroundFill="hsl(var(--muted))"
        blur={10}
        speed="slow"
        waveOpacity={0.5}
      />

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-2xl font-bold">Md Rabiul Hasan</h2>
            <p className="text-muted-foreground text-center">MERN Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex gap-4 mb-8"
          >
            <Button asChild size="icon" variant="ghost">
              <a href="https://github.com/rabiulkhan7224" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a
                href="https://linkedin.com/in/md-rabiul-hasan7224"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="icon" variant="ghost">
              <a href="mailto:mdrabiulkhanbabo@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-4">
              &copy; {new Date().getFullYear()} Md Rabiul Hasan. All rights reserved.
            </p>

            <Button variant="outline" size="icon" onClick={scrollToTop} className="rounded-full">
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
