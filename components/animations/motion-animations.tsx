import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import { MouseEvent, ReactNode, useRef } from "react"

export const FadeUp = ({ children, className, delay = 0, duration = 0.5, once = true, }: {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    once?: boolean
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref,{once})
    const variants={
        hidden:{opacite:0,y:20},
        visible:{
            opacite:1,y:0,
            transition:{
                duration,
                delay,
                ease:"easeOut"
            }
        }
    }
    return (
        
        <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView?"visible":"hidden"}
        variants={variants}
        className={className}
        >
            {children}
        </motion.div>
    )
}

// Scale animation on hover
export const ScaleOnHover = ({
  children,
  className,
  scale = 1.05,
  duration = 0.3,
}: {
  children: React.ReactNode
  className?: string
  scale?: number
  duration?: number
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        transition: { duration },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  )
}

// 3D rotation on mouse move
export const MouseRotate3D = ({
  children,
  className,
  intensity = 10,
}: {
  children: ReactNode
  className?: string
  intensity?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const { left, top, width, height } = ref.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / (width / 2)
    const y = (e.clientY - top - height / 2) / (height / 2)

    ref.current.style.transform = `perspective(1000px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg)`
  }

  const handleMouseLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg)`
  }

  return (
    <motion.div
      ref={ref}
      className={cn("transition-transform duration-200", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
// Text animation that reveals one character at a time
export const AnimatedText = ({
  text,
  className,
  once = true,
  delay = 0,
}: {
  text: string
  className?: string
  once?: boolean
  delay?: number
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: 0.5 })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={cn("flex flex-wrap", className)}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="mr-1 inline-block">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span key={letterIndex} variants={child} className="inline-block">
              {letter}
            </motion.span>
          ))}
          {index !== words.length - 1 && <span>&nbsp;</span>}
        </motion.span>
      ))}
    </motion.div>
  )
}