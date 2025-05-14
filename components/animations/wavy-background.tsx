"use client"

import { cn } from "@/lib/utils"
import type React from "react"
import { useEffect, useRef } from "react"

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
  [key: string]: any
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return

    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const computedStyle = window.getComputedStyle(container)
    const computedWidth = Number.parseInt(computedStyle.width, 10)
    const computedHeight = Number.parseInt(computedStyle.height, 10)

    canvas.width = computedWidth
    canvas.height = computedHeight

    const waves = [
      {
        frequency: 0.005,
        amplitude: 20,
        speed: speed === "fast" ? 0.002 : 0.0005,
        color: colors?.[0] || "#38bdf8",
      },
      {
        frequency: 0.015,
        amplitude: 15,
        speed: speed === "fast" ? 0.003 : 0.001,
        color: colors?.[1] || "#818cf8",
      },
      {
        frequency: 0.01,
        amplitude: 25,
        speed: speed === "fast" ? 0.001 : 0.0005,
        color: colors?.[2] || "#c084fc",
      },
    ]

    let animationFrameId: number
    const startTime = Date.now()

    const render = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (backgroundFill) {
        ctx.fillStyle = backgroundFill
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      const currentTime = Date.now()
      const elapsedTime = currentTime - startTime

      waves.forEach((wave) => {
        ctx.fillStyle = wave.color
        ctx.globalAlpha = waveOpacity
        ctx.beginPath()

        const width = waveWidth || canvas.width
        const height = canvas.height

        // Start at the left edge
        ctx.moveTo(0, height)

        // Draw wave
        for (let x = 0; x < width; x++) {
          const y = height / 2 + Math.sin(x * wave.frequency + elapsedTime * wave.speed) * wave.amplitude

          ctx.lineTo(x, y)
        }

        // Complete the path
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [colors, waveWidth, backgroundFill, blur, speed, waveOpacity])

  return (
    <div
      ref={containerRef}
      className={cn("relative flex h-full flex-col items-center justify-center overflow-hidden", containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{
          filter: `blur(${blur}px)`,
        }}
        {...props}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  )
}
