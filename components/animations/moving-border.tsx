"use client"

import React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1.75rem",
  colors = ["#2563eb", "#4f46e5", "#8b5cf6", "#a855f7"],
  as: Component = "div",
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  className?: string
  containerClassName?: string
  borderRadius?: string
  colors?: string[]
  as?: any
  [key: string]: any
}) => {
  const borderRef = React.useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = React.useState(false)

  React.useEffect(() => {
    const animateBorder = () => {
      if (borderRef.current) {
        const borderElement = borderRef.current
        const duration = isHovered ? 1500 : 3000 // Faster animation when hovered

        borderElement.animate([{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }], {
          duration: duration,
          iterations: Number.POSITIVE_INFINITY,
          easing: "linear",
        })
      }
    }

    animateBorder()
  }, [isHovered])

  return (
    <Component
      className={cn("relative p-[1px] overflow-hidden", containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...otherProps}
    >
      <div
        ref={borderRef}
        className="absolute inset-0 z-[-1]"
        style={{
          background: `conic-gradient(from 0deg, ${colors.join(", ")})`,
          borderRadius: `calc(${borderRadius} * 2)`,
          width: "200%",
          height: "200%",
          left: "-50%",
          top: "-50%",
        }}
      />
      <div
        className={cn("h-full w-full", className)}
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
