"use client"
import { cn } from '@/lib/utils'
import type React from 'react'
import { createContext, MouseEvent, useContext, useEffect, useRef, useState } from "react"

const MouseEnterContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined>(undefined)
type CardContainerProps = {
    children?: React.ReactNode;
    className?: string;
    containerclassName?: string;

}
export const CardContainer = ({
    children,
    className,
    containerclassName
}: CardContainerProps) => {
    const containerRef = useRef<HTMLDivElement>(null)
const [isMouseEntered, setIsMouseEntered] = useState(false) 
   const handleMousMove = (event: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return
        const { left, top, width, height } = event.currentTarget.getBoundingClientRect()
        const x = (event.clientX - left - width / 2) / 25
        const y = (event.clientY - top - height / 2) / 25
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
    }
    const handleMouseEnter = () => {
    setIsMouseEntered(true)
    if (!containerRef.current) return
    containerRef.current.style.transition = "transform 0.1s ease"
  }

  const handleMouseLeave = () => {
    if (!containerRef.current) return
    setIsMouseEntered(false)
    containerRef.current.style.transition = "transform 0.5s ease"
    containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)"
  }



    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div className={cn("flex items-center justify-center", containerclassName)}
                style={{ perspective: "1000px" }}>
                <div
                    ref={containerRef}
                    onMouseMove={handleMousMove}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                     className={cn("flex items-center justify-center relative transition-all duration-200 ease-in", className)}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    {children}

                </div>
            </div>
        </MouseEnterContext.Provider>

    )
}
export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn("h-full w-full [transform-style:preserve-3d] [backface-visibility:hidden]", className)}>
      {children}
    </div>
  )
}
export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  translateX?: number | string
  translateY?: number | string
  translateZ?: number | string
  rotateX?: number | string
  rotateY?: number | string
  rotateZ?: number | string
  [key: string]: any
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const [isMouseEntered] = useMouseEnter()

  useEffect(() => {
    if (!ref.current) return
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ])

  return (
    <Tag
      ref={ref}
      className={cn("w-fit transition duration-200 ease-linear", className)}
      {...rest}
      style={{
        transform: `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
    >
      {children}
    </Tag>
  )
}

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext)
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider")
  }
  return context
}
