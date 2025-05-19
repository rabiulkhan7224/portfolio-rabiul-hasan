"use client"
import { Code, Cpu, Database, GitBranch, Layers, Layout, Server, Terminal } from "lucide-react"
import BackgroundBeams from "./animations/background-beams"
import { AnimatedText, FadeUp, ScaleOnHover, StaggerContainer, StaggerItem } from "./animations/motion-animations"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { LazyComponent } from "./lazy-component"
import { memo } from "react"
import { ImageWithSkeleton } from "./ui/image-with-skeleton"
import { motion } from 'motion/react';

const SkillItem = memo(function SkillItem({
  skill,
  index,
}: {
  skill: { name: string; logo: string }
  index: number
}) {
  return (
    <StaggerItem key={index} index={index}>
      <ScaleOnHover className="group flex flex-col items-center justify-center gap-2 p-4 transition-all duration-300">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-background p-2 shadow-md transition-all duration-300 group-hover:shadow-xl">
          <ImageWithSkeleton
            src={skill.logo || "/placeholder.svg"}
            alt={skill.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <motion.div
            className="absolute inset-0 rounded-xl bg-primary/5"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <span className="text-center text-sm font-medium">{skill.name}</span>
      </ScaleOnHover>
    </StaggerItem>
  )
})
const SkillCategory = memo(function SkillCategory({
  category,
  index,
}: {
  category: {
    name: string
    icon: JSX.Element
    skills: { name: string; logo: string }[]
  }
  index: number
}) {
  return (
    <FadeUp key={index} delay={index * 0.1}>
      <Card className="overflow-hidden border-none shadow-lg">
        <CardContent className="p-6">
          <div className="mb-6 flex items-center gap-3">
            <div className="rounded-full bg-primary/10 p-3 text-primary">{category.icon}</div>
            <h3 className="text-xl font-bold">{category.name}</h3>
          </div>

          <StaggerContainer
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
            staggerChildren={0.05}
          >
            {category.skills.map((skill, skillIndex) => (
              <SkillItem key={skillIndex} skill={skill} index={skillIndex} />
            ))}
          </StaggerContainer>
        </CardContent>
      </Card>
    </FadeUp>
  )
})
const SkillsWithLogos = () => {
  const skillCategories = [
    {
      name: "Frontend",
      icon: <Layout className="h-6 w-6" />,
      skills: [
        { name: "HTML5", logo: "https://img.icons8.com/?size=100&id=20909&format=png&color=000000" },
        { name: "CSS3", logo: "https://img.icons8.com/?size=100&id=21278&format=png&color=000000" },
        { name: "JavaScript", logo: "https://img.icons8.com/?size=100&id=108784&format=png&color=000000" },
        { name: "TypeScript", logo: "/icons8-typescript-144.png" },
        { name: "React.js", logo: "/react.webp" },
        { name: "Tailwind CSS", logo: "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000" },
      ],
    },
    {
      name: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: [
        { name: "Node.js", logo: "https://img.icons8.com/?size=100&id=54087&format=png&color=000000" },
        { name: "Express.js", logo: "https://img.icons8.com/?size=100&id=SDVmtZ6VBGXt&format=png&color=000000" },
        { name: "RESTful APIs", logo: "/rest-api.jpg" },
        { name: "JWT", logo: "https://img.icons8.com/?size=100&id=rHpveptSuwDz&format=png&color=000000" },
        { name: "mongoose", logo: "https://img.icons8.com/?size=100&id=gKfcEStXI1Hm&format=png&color=000000" },
      ],
    },
    {
      name: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "MongoDB", logo: "/MongoDB_ForestGreen.png" },
        { name: "Firebase", logo: "https://img.icons8.com/?size=100&id=62452&format=png&color=000000" },
      ],
    },
    {
      name: "Tools & Platforms",
      icon: <Terminal className="h-6 w-6" />,
      skills: [
        { name: "Git", logo: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000" },
        { name: "GitHub", logo: "https://img.icons8.com/?size=100&id=efFfwotdkiU5&format=png&color=000000" },
        { name: "Postman", logo: "https://img.icons8.com/?size=100&id=EPbEfEa7o8CB&format=png&color=000000" },
        { name: "Vercel", logo: "/vercel-logotype-dark.png" },
      ],
    },
  ]

  return (
    <section id="skills" className="relative py-20">
      <BackgroundBeams className="absolute inset-0" />

      <div className="container relative z-10 mx-auto px-4">
        <FadeUp className="mb-16 text-center">
          <Badge variant="outline" className="mb-4 px-4 py-1 text-sm">
            My Skills
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            <AnimatedText text="Technical Expertise" />
          </h2>
          <div className="mx-auto h-1 w-20 bg-primary"></div>
        </FadeUp>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <LazyComponent key={categoryIndex}>
              <SkillCategory category={category} index={categoryIndex} />
            </LazyComponent>
          ))}
        </div>

        <LazyComponent>
          <FadeUp delay={0.4} className="mt-16">
            <Card className="overflow-hidden border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="mb-6 text-center text-2xl font-bold">
                  <AnimatedText text="Development Process" delay={0.2} />
                </h3>

                <StaggerContainer
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4"
                  staggerChildren={0.1}
                >
                  {[
                    {
                      icon: <Code key="code" />,
                      title: "Clean Code",
                      description: "Writing maintainable, readable code",
                    },
                    {
                      icon: <Layers key="layers" />,
                      title: "Full Stack",
                      description: "End-to-end application development",
                    },
                    {
                      icon: <GitBranch key="gitbranch" />,
                      title: "Version Control",
                      description: "Organized code management",
                    },
                    { icon: <Cpu key="cpu" />, title: "Optimization", description: "Performance-focused solutions" },
                  ].map((process, index) => (
                    <StaggerItem key={index} index={index}>
                      <ScaleOnHover className="flex flex-col items-center p-4 text-center">
                        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">{process.icon}</div>
                        <h4 className="mb-2 font-bold">{process.title}</h4>
                        <p className="text-sm text-muted-foreground">{process.description}</p>
                      </ScaleOnHover>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </CardContent>
            </Card>
          </FadeUp>
        </LazyComponent>
      </div>
    </section>
  )
}

export default SkillsWithLogos