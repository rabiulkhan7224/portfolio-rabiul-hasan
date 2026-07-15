"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github, ArrowRight, Clock, MapPin } from "lucide-react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundBeams from "./animations/background-beams";

export default function Projects() {
  const projects = [
    {
      title: "Dream Canvas Art",
      description:
        "An AI-powered creative platform that allows users to generate images, videos, and audio using multiple AI models. Features a credit and subscription system with secure payments via Coinbase.",
      image: "/dream-canvas-art.webp", // Replace with actual screenshot
      features: [
        "AI image, video, and audio generation with multiple models",
        "Credit-based system with top-up via Coinbase",
        "Subscription plans for unlimited generation",
        "Real-time preview and download",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "ShadCN UI",
        "Framer Motion",
        "AI API",
        "Stripe",
        "Coinbase Commerce",
      ],
      liveLink: "https://dream-canvas.art", // Replace with real link
      clientRepo: null,
      serverRepo: null,
    },

    {
      title: "Pantalla Verde",
      description:
        "A multi-category e-commerce platform with SEO-optimized SSR/ISR, user dashboard for cart, wishlist, order controls, and stats. Includes real-time admin-to-user chat support, admin product management, and AI chatbot for product suggestions and queries.",
      image: "/e-commerce.webp", // Replace with actual screenshot
      features: [
        "Multi-category products with cart, wishlist, and order management",
        "User dashboard for order controls and stats viewing",
        "Real-time chat support (WebSocket) between admin and users",
        "Admin dashboard for product addition and website control",
        "AI chatbot (OpenAI) for product recommendations and queries",
        "SEO-optimized with Next.js SSR/ISR",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "ShadCN UI",
        "WebSocket",
        "OpenAI API",
      ],
      liveLink: "https://www.pantallaverde.com",
      clientRepo: null,
      serverRepo: null,
    },
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
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveLink: "https://medicamps.netlify.app",
      clientRepo: "https://github.com/rabiulkhan7224/medicamps-client",
      serverRepo: "https://github.com/rabiulkhan7224/medicamps-server",
    },

    {
      title: "Car Rental System",
      description:
        "A full-stack car rental booking platform featuring real-time availability updates, user booking history, and admin panel for managing reservations and dynamic pricing.",
      image: "/car rentals.webp",
      features: [
        "User authentication and booking history tracking",
        "Admin panel for managing cars, users, and reservations",
        "Real-time availability and pricing updates",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveLink: "https://car-rent-a11-15.netlify.app",
      clientRepo: "https://github.com/rabiulkhan7224/car-rent",
      serverRepo: "https://github.com/rabiulkhan7224/car-rent-server",
    },
  ];

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
    <section
      id="projects"
      className="py-10 bg-muted/30 relative overflow-hidden"
    >
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-5"
        >
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            My Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/10 to-purple-600/10">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  {project.clientRepo === null && (
                    <Badge className="absolute top-3 right-3 bg-purple-600 text-white">
                      Client Project
                    </Badge>
                  )}
                </div>

                <CardHeader className="flex-1">
                  <CardTitle className="text-2xl font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">
                      Key Features:
                    </h4>
                    <ul className="space-y-1.5">
                      {project.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="px-2.5 py-1 text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex flex-wrap gap-3 pt-4 border-t">
                  <Button asChild size="sm" className="gap-2">
                    <Link
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>

                  {project.clientRepo && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <Link
                        href={project.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Client
                      </Link>
                    </Button>
                  )}

                  {project.serverRepo && (
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="gap-2"
                    >
                      <Link
                        href={project.serverRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                        Server
                      </Link>
                    </Button>
                  )}

                  {!project.clientRepo && !project.serverRepo && (
                    <span className="text-xs text-muted-foreground self-center">
                      Source code private (Client project)
                    </span>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" variant="outline" className="gap-2">
            <a
              href="https://github.com/rabiulkhan7224"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              View More Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
