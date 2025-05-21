"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { memo, useMemo } from "react"
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton"
import BackgroundBeams from './animations/background-beams';
import { LazyComponent } from './lazy-component';
import { motion } from 'motion/react';
import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "Medical Camp Management System (MCMS)",
      description:
        "A MERN stack platform enabling medical camp organizers to manage registrations, volunteers, and payments securely through JWT authentication with admin analytics dashboard.",
      image: "/medicamp.webp",
      features: [
        "Secure user authentication for organizers and participants",
        "Admin dashboard to manage camps, volunteers, and registrations",
        "Payment integration for camp fees and donations",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://medicamps.netlify.app",
      clientRepo: "https://github.com/rabiulkhan7224/medicamps-client",
      serverRepo: "https://github.com/rabiulkhan7224/medicamps-server",
    },
    {
      title: "Car Rental System",
      description:
        "A Full-stack car rental booking platform featuring real-time availability updates, user booking history, and admin panel for managing reservations and dynamic pricing.",
      image: "/car rentals.webp",
      features: [
        "User authentication and booking history tracking",
        "Admin panel for managing cars, users, and reservations",
        "Real-time availability and pricing updates",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveLink: "https://car-rent-a11-15.netlify.app",
      clientRepo: "https://github.com/rabiulkhan7224/car-rent",
      serverRepo: "https://github.com/rabiulkhan7224/car-rent-server",
    },
  ]

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
    <section id="projects" className="py-20 bg-muted/30 relative">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card>
                    <div className="relative overflow-hidden aspect-video">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    </div>
                 

                 
                    <CardHeader>
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="text-base">{project.description}</CardDescription>
                    </CardHeader>
                 

                    <CardContent className="flex-grow">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1 mb-4">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ArrowRight className="h-4 w-4 mt-1 text-primary" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="secondary" className="px-2 py-1 text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="flex flex-wrap gap-3">
                      <Button asChild size="sm" variant="default" className="gap-2">
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="gap-2">
                        <Link href={project.clientRepo} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Client Repo
                        </Link>
                      </Button>
                      <Button asChild size="sm" variant="outline" className="gap-2">
                        <Link href={project.serverRepo} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Server Repo
                        </Link>
                      </Button>
                    </CardFooter>
            
            </Card></motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a href="https://github.com/rabiulkhan7224" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              View More Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
