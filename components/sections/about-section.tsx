"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Code2, Rocket, Users, Zap } from "lucide-react"
import Image from "next/image"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code Advocate",
    description: "Writing maintainable, scalable, and well-documented code",
  },
  {
    icon: Rocket,
    title: "Performance Focused",
    description: "Optimizing applications for speed and user experience",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Leading teams and mentoring junior developers",
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "Staying ahead with cutting-edge technologies",
  },
]

export function AboutSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section id="about" ref={ref} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-blue-500/30 text-blue-400">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Crafting Digital Excellence
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about building scalable solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1 space-y-6">
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a <span className="text-blue-400 font-semibold">senior software developer</span> with over 5 years
                  of experience building robust, scalable applications. My journey began with curiosity about how things
                  work under the hood, and has evolved into a deep passion for creating innovative solutions that solve
                  real-world problems.
                </p>
                <p>
                  I specialize in <span className="text-purple-400 font-semibold">full-stack development</span>, with
                  expertise in modern frontend frameworks like React and Next.js, coupled with powerful backend
                  technologies including ASP.NET and Laravel. I believe in writing clean, maintainable code that stands
                  the test of time.
                </p>
                <p>
                  When I'm not coding, you'll find me{" "}
                  <span className="text-green-400 font-semibold">mentoring junior developers</span>, contributing to
                  open-source projects, or exploring the latest in AI and machine learning. I'm always eager to learn
                  and share knowledge with the developer community.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {["React", "TypeScript", "Node.js", "ASP.NET", "Laravel", "AWS"].map((tech) => (
                  <Badge
                    key={tech}
                    className="bg-blue-500/10 text-blue-400 border-blue-500/30 hover:bg-blue-500/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />
                <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-800 to-gray-900">
                  <Image
                    src="/placeholder.svg?height=320&width=320"
                    alt="Muhammed Amri"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="mb-4">
                    <highlight.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
