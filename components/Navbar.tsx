"use client"
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import AnimatedTooltip from './ui/animated-tooltip';
import { ModeToggle } from './mode-toggle';
export default function Navbar() {

    const [isSrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const NavItems = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ]

    const people = [
        {
            id: 1,
            name: "Md Rabiul Hasan",
            designation: "MERN Stack Developer",
            image: "/rabiul.jpg"

        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)

            } else {
                setIsScrolled(false)

            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)

    }, [])

    const scrollToSection = (href: string) => {
        setIsMenuOpen(false)
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSrolled ? "bg-background/80 backdrop-blur-md shadow-md " : "bg-transparent"
                    } `}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center"
                        >
                            <AnimatedTooltip items={people} />
                            <span className="font-bold text-xl ml-2">
                                Rabiul<span className="text-primary">.</span>
                            </span>
                        </motion.div>
                        <nav className='hidden md:flex items-center space-x-1'>
                            {
                                NavItems.map((item, index) => (
                                    <div key={index}>

                                        <Button variant={"ghost"} onClick={() => {
                                            scrollToSection(item.href)
                                        }} className='text-sm font-medium'>

                                            {item.name}
                                        </Button>
                                    </div>
                                ))
                            }
                            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 }}
              >
                <ModeToggle />
              </motion.div>
                        </nav>
                        <div className="flex items-center md:hidden">
                            <ModeToggle />
                            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-2">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </div>

                    </div>
                </div>
            </motion.header>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-background md:hidden"
                    >
                        <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <div className="font-bold text-xl">
                  Rabiul<span className="text-primary">.</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                {NavItems.map((item) => (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="justify-start text-lg"
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </Button>
                ))}
              </nav>
            </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </>
    )
}
