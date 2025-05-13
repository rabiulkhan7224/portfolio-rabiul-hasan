import { motion, useInView } from "motion/react";
import { ReactNode, useRef } from "react"

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

