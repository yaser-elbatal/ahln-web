"use client"

import { useEffect, useRef } from "react"

interface Line {
  startX: number
  startY: number
  endX: number
  endY: number
  width: number
  speed: number
  progress: number
  color: string
  opacity: number
}

interface Bubble {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Lines and bubbles arrays
    let lines: Line[] = []
    let bubbles: Bubble[] = []

    // Initialize lines and bubbles
    function initElements() {
      // Clear existing arrays
      lines = []
      bubbles = []

      // Create lines
      const lineCount = Math.floor(window.innerWidth / 200) // Adjust line density

      for (let i = 0; i < lineCount; i++) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const angle = Math.random() * Math.PI * 2
        const length = 100 + Math.random() * 200
        const endX = startX + Math.cos(angle) * length
        const endY = startY + Math.sin(angle) * length

        lines.push({
          startX,
          startY,
          endX,
          endY,
          width: Math.random() * 1 + 0.5, // Line width between 0.5 and 1.5
          speed: 0.002 + Math.random() * 0.003, // Animation speed
          progress: 0, // Animation progress (0 to 1)
          color: `rgba(0, 180, 216, ${Math.random() * 0.3 + 0.1})`, // Cyan with random opacity
          opacity: Math.random() * 0.3 + 0.1, // Line opacity
        })
      }

      // Create bubbles
      const bubbleCount = Math.floor(window.innerWidth / 300) // Adjust bubble density

      for (let i = 0; i < bubbleCount; i++) {
        bubbles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 40 + 10, // Size between 10 and 50
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.15 + 0.05, // Opacity between 0.05 and 0.2
        })
      }
    }

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Recreate lines and bubbles when resizing
      initElements()
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent black to create trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update lines
      lines.forEach((line) => {
        // Update line progress
        line.progress += line.speed
        if (line.progress >= 1) {
          // Reset line when animation completes
          line.progress = 0
          line.startX = Math.random() * canvas.width
          line.startY = Math.random() * canvas.height
          const angle = Math.random() * Math.PI * 2
          const length = 100 + Math.random() * 200
          line.endX = line.startX + Math.cos(angle) * length
          line.endY = line.startY + Math.sin(angle) * length
          line.opacity = Math.random() * 0.3 + 0.1
        }

        // Calculate current point along the line
        const currentX = line.startX + (line.endX - line.startX) * line.progress
        const currentY = line.startY + (line.endY - line.startY) * line.progress

        // Draw line
        ctx.beginPath()
        ctx.moveTo(line.startX, line.startY)
        ctx.lineTo(currentX, currentY)
        ctx.strokeStyle = line.color
        ctx.lineWidth = line.width
        ctx.stroke()

        // Draw glow effect at the end of the line
        const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, 10)
        gradient.addColorStop(0, `rgba(0, 180, 216, ${line.opacity * 2})`)
        gradient.addColorStop(1, "rgba(0, 180, 216, 0)")

        ctx.beginPath()
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      // Draw and update bubbles
      bubbles.forEach((bubble) => {
        // Move bubble
        bubble.x += bubble.speedX
        bubble.y += bubble.speedY

        // Bounce off edges
        if (bubble.x < 0 || bubble.x > canvas.width) bubble.speedX *= -1
        if (bubble.y < 0 || bubble.y > canvas.height) bubble.speedY *= -1

        // Draw bubble
        ctx.beginPath()
        ctx.arc(bubble.x, bubble.y, bubble.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 180, 216, ${bubble.opacity})`
        ctx.fill()

        // Draw bubble outline
        ctx.strokeStyle = `rgba(255, 255, 255, ${bubble.opacity * 0.5})`
        ctx.lineWidth = 1
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    // Start animation
    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />
}
