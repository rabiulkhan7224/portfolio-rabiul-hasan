"use client"

import { useEffect, useState } from "react"
import { motion } from 'motion/react';


export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="relative flex flex-col items-center">
        {/* Logo animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-4xl font-bold text-primary"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">RH</span>
        </motion.div>

        {/* Progress bar */}
        <div className="h-1 w-48 bg-muted overflow-hidden rounded-full">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-4 text-muted-foreground"
        >
          <LoadingText />
        </motion.div>
      </div>
    </div>
  )
}

function LoadingText() {
  const [dots, setDots] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."))
    }, 300)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center w-48 h-6">
      <span>Loading{dots}</span>
    </div>
  )
}
