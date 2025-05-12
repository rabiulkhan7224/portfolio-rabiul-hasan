import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useMotionValue } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function AnimatedTooltip({ items, }: {
    items: {
        id: number
        name: string;
        designation: string
        image: string
    }[]
}) {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const springConfig = { stiffness: 100, damping: 15 }
    const x = useMotionValue(0)
    return (
        <div className="flex flex-row items-center justify-between gap-2 py-2">

            {items.map((item, idx) => (
                <div key={idx} className="relative group-[]"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
<AnimatePresence>
    {
        hoveredIndex===idx && (
           <motion.div
           initial={{ opacity: 0, y: 20, scale: 0.6 }}
           animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: "-50%",
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16  left-1/2  z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
           >
             <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="relative z-30 text-base font-bold text-white">{item.name}</div>
             <div className="text-xs text-white/80">{item.designation}</div>
           </motion.div>
        )
    }
</AnimatePresence>
<motion.div
            style={{ x }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", ...springConfig }}
            className={cn(
              "relative h-14 w-14 rounded-full bg-gradient-to-r from-primary/80 to-primary p-1",
              hoveredIndex === idx && "z-30 border border-white/20",
            )}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              width={500}
              height={400}
              className="h-full w-full rounded-full object-cover"
            />
          </motion.div>
                </div>
            ))}
        </div>
    )
}
