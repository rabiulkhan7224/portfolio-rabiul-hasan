"use client"
import { motion } from 'motion/react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Spotlight } from './animations/spotlight';
import { MovingBorder } from './animations/moving-border';
import Image from 'next/image';
export default function About() {
 const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Spotlight className="relative">
              <MovingBorder className="h-full w-full">
                <div className="relative aspect-square rounded-xl overflow-hidden border border-border">
                  <Image
                    src="/about-me.jpg"
                    alt="Md Rabiul Hasan"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>
              </MovingBorder>
            </Spotlight>
          </motion.div>

          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <motion.h3 variants={item} className="text-2xl font-bold mb-4">
              MERN Stack Developer
            </motion.h3>

            <motion.p variants={item} className="text-muted-foreground mb-6">
              I'm a MERN Stack Developer specializing in React.js, Node.js, Express.js and MongoDB, with foundational
              knowledge of TypeScript for building type-safe applications. I have proven ability to develop full-stack
              solutions with secure authentication, RESTful APIs, and optimized performance. I'm passionate about
              writing clean, maintainable code and collaborating in agile teams.
            </motion.p>

            <motion.div variants={item} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <MapPin className="text-primary h-5 w-5" />
                  <span>Comilla, Bangladesh</span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <span className="truncate">mdrabiulkhanbabo@gmail.com</span>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-4 flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <span>+8801779893574</span>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} className="flex flex-wrap gap-2">
              <Badge className="px-3 py-1 hover:bg-primary/20 transition-colors duration-300">Problem-solving</Badge>
              <Badge className="px-3 py-1 hover:bg-primary/20 transition-colors duration-300">Team collaboration</Badge>
              <Badge className="px-3 py-1 hover:bg-primary/20 transition-colors duration-300">Time management</Badge>
              <Badge className="px-3 py-1 hover:bg-primary/20 transition-colors duration-300">Adaptability</Badge>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
