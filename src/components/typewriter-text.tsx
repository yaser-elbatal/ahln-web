"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"

interface TypewriterTextProps {
  text: string
  className?: string
  delay?: number
  showCursor?: boolean
}

export default function TypewriterText({ text, className, delay = 0, showCursor = false }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [startAnimation, setStartAnimation] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  // Reset animation when element comes into view again
  useEffect(() => {
    if (isInView) {
      setDisplayedText("")
      setCurrentIndex(0)
      setStartAnimation(false)

      const startTimeout = setTimeout(() => {
        setStartAnimation(true)
      }, delay * 1000)

      return () => clearTimeout(startTimeout)
    }
  }, [isInView, delay])

  useEffect(() => {
    if (!startAnimation) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, 100) // Speed of typing

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, startAnimation])

  return (
    <h2 ref={ref} className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[0.1em] h-[1em] bg-current ml-1 align-middle"
        />
      )}
    </h2>
  )
}
