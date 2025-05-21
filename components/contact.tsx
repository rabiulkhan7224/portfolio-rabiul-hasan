'use client'
import { Mail, MapPin, Phone } from "lucide-react"
import BackgroundBeams from "./animations/background-beams"
import { FadeUp, StaggerContainer, StaggerItem } from "./animations/motion-animations"
import { Badge } from "./ui/badge"
import { motion } from 'motion/react';
import { MovingBorder } from "./animations/moving-border";
import { Card, CardContent } from "./ui/card";
import { ContactForm } from "./contact-form"

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      details: "Comilla, Bangladesh",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: "mdrabiulkhanbabo@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: "+8801779893574",
    },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeUp className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <FadeUp>
            <h3 className="text-2xl font-bold mb-6">Let's Talk</h3>

            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>

            <StaggerContainer className="space-y-6">
              {contactInfo.map((info, index) => (
                <StaggerItem  key={index} index={index}>
                  <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full text-primary">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeUp>

          <FadeUp delay={0.3}>
            <MovingBorder className="p-[1px] rounded-lg">
              <Card className="overflow-hidden border-none shadow-lg bg-background/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  <ContactForm />
                </CardContent>
              </Card>
            </MovingBorder>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
