"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

export function HeroSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" ref={ref} className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
              Available for new opportunities
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
              Muhammed Amri
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">Senior Software Developer</p>

          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            I craft exceptional digital experiences with modern technologies like{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-purple-400 font-medium">.NET</span>, and{" "}
            <span className="text-green-400 font-medium">Laravel</span>. Passionate about clean code, scalable
            architecture, and innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              View My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="https://github.com/muhammed-amri" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="https://linkedin.com/in/muhammed-amri" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent"
                asChild
              >
                <a href="mailto:muhammed.amri@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse opacity-50" />
      </div>
    </section>
  )
}
