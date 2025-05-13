"use client"
import { cn } from '@/lib/utils';
import { ReactNode, useEffect, useRef, useState } from 'react'

export default function BackgroundBeams({ className, children }: {
    className?: string;
    children?: ReactNode
}) {

    const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
    const beamsRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleMousMove = (event: MouseEvent) => {
            if (!beamsRef.current) return
            const rect = beamsRef.current.getBoundingClientRect()
            const x = event.clientX - rect.left
            const y = event.clientY - rect.top
            setMousePosition({ x, y })
        }
        window.addEventListener("mousemove", handleMousMove)

        return () => {
            window.removeEventListener("mousemove", handleMousMove)
        }
    }, [])
    return (
        <div className={cn("h-full w-full overflow-hidden rounded-md", className)} ref={beamsRef}>
            <div className="pointer-events-none absolute inset-0 z-10" style={{
                background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100, 100, 255, 0.15),transparent 40%)`
            }}>
                <div className="relative z-20">
                    {children}
                </div>

            </div>
        </div>
    )
}
