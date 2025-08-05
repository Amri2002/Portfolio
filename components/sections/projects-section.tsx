"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Github, ExternalLink, Star } from "lucide-react"
import Link from "next/link"

interface Project {
  name: string
  description: string
  longDescription: string
  tech: string[]
  github: string
  demo: string
  featured: boolean
  stars?: number
  image: string
}

const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription:
      "A comprehensive e-commerce platform built with modern technologies, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
    tech: ["React", "Next.js", "ASP.NET Core", "SQL Server", "Stripe"],
    github: "#",
    demo: "#",
    featured: true,
    stars: 124,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Task Management System",
    description: "Collaborative project management tool with real-time features",
    longDescription:
      "A sophisticated task management application with real-time collaboration, advanced filtering, team analytics, and integration with popular development tools.",
    tech: ["React", "Laravel", "MySQL", "Socket.io", "Redis"],
    github: "#",
    demo: "#",
    featured: true,
    stars: 89,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "AI-Powered Analytics",
    description: "Business intelligence dashboard with machine learning insights",
    longDescription:
      "An advanced analytics platform that leverages machine learning to provide actionable business insights, predictive analytics, and automated reporting.",
    tech: ["Next.js", "Python", "TensorFlow", "PostgreSQL", "D3.js"],
    github: "#",
    demo: "#",
    featured: true,
    stars: 156,
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    name: "Real-time Chat Application",
    description: "Scalable messaging platform with video calling",
    longDescription:
      "A modern chat application supporting real-time messaging, file sharing, video calls, and team channels with end-to-end encryption.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github: "#",
    demo: "#",
    featured: false,
    stars: 67,
    image: "/placeholder.svg?height=300&width=500",
  },
]

export function ProjectsSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section id="projects" ref={ref} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-purple-500/30 text-purple-400">
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Projects That Matter
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work, from concept to deployment
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 overflow-hidden ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
              >
                <div className={`${project.featured ? "md:flex" : ""}`}>
                  <div className={`${project.featured ? "md:w-1/2" : ""} relative overflow-hidden`}>
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10" />
                      <div className="absolute top-4 right-4 z-20">
                        {project.stars && (
                          <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-sm text-white">{project.stars}</span>
                          </div>
                        )}
                      </div>
                      {/* Placeholder for project image */}
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                            <ExternalLink className="w-8 h-8 text-blue-400" />
                          </div>
                          <p className="text-sm">Project Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${project.featured ? "md:w-1/2" : ""} p-6`}>
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {project.featured ? project.longDescription : project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="p-0">
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-blue-500/10 text-blue-300 border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent"
                          asChild
                        >
                          <Link href={project.github}>
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-purple-400 hover:text-purple-400 transition-all duration-300 bg-transparent"
                          asChild
                        >
                          <Link href={project.demo}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-300 hover:bg-white/5 hover:border-blue-400 hover:text-blue-400 transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="https://github.com/muhammed-amri">
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
