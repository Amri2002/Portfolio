"use client"

import { useEffect, useRef } from "react"

export function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (x: number, y: number, radius: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, "rgba(59, 130, 246, 0.15)")
      gradient.addColorStop(0.5, "rgba(147, 51, 234, 0.1)")
      gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
      return gradient
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.005

      // Create multiple floating orbs
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * 0.5 + Math.sin(time + i * 2) * (canvas.width * 0.3)
        const y = canvas.height * 0.5 + Math.cos(time * 0.8 + i * 1.5) * (canvas.height * 0.2)
        const radius = 200 + Math.sin(time * 2 + i) * 50

        ctx.fillStyle = createGradient(x, y, radius)
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Add mesh gradient overlay
      const meshGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      meshGradient.addColorStop(0, "rgba(16, 185, 129, 0.03)")
      meshGradient.addColorStop(0.5, "rgba(59, 130, 246, 0.05)")
      meshGradient.addColorStop(1, "rgba(147, 51, 234, 0.03)")

      ctx.fillStyle = meshGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
