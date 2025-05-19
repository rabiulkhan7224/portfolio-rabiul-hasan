"use client"

import { useEffect, useState, Suspense, type ReactNode } from "react"
import { useRef } from "react"
import { useInView } from 'motion/react';

interface LazyComponentProps {
  children: ReactNode
  fallback?: ReactNode
  threshold?: number
}

export function LazyComponent({ children, fallback, threshold = 0.1 }: LazyComponentProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (isInView) {
      setShouldRender(true)
    }
  }, [isInView])

  return (
    <div ref={ref}>
      {shouldRender ? (
        <Suspense fallback={fallback || <div className="min-h-[100px] bg-muted/20 animate-pulse rounded-md" />}>
          {children}
        </Suspense>
      ) : (
        fallback || <div className="min-h-[100px] bg-muted/20 animate-pulse rounded-md" />
      )}
    </div>
  )
}
