"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useRef, useState, useEffect } from "react"

interface SpotlightProps {
  className?: string
  children?: React.ReactNode
}

export const Spotlight = ({ children, className = "" }: SpotlightProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mousePosition = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const containerSize = useRef({ w: 0, h: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const onMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const { w, h } = containerSize.current
    const x = ev.clientX - rect.left
    const y = ev.clientY - rect.top
    mousePosition.current = { x, y }

    // Calculate the spotlight position as a percentage of the container
    mouse.current = { x: x / w, y: y / h }
  }

  const updateContainerSize = () => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    containerSize.current = { w: rect.width, h: rect.height }
  }

  useEffect(() => {
    updateContainerSize()
    window.addEventListener("resize", updateContainerSize)

    return () => {
      window.removeEventListener("resize", updateContainerSize)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={onMouseMove}
      className={cn("relative overflow-hidden  rounded-md", className)}
    >
      {/* Spotlight overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10  transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(
            circle at ${mouse.current.x * 100}% ${mouse.current.y * 100}%, 
            rgba(255, 255, 255, 0.15) 0%, 
            transparent 40%
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-20">{children}</div>
    </div>
  )
}
