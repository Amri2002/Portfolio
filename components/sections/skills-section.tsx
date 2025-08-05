"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Code, Database, Globe, Wrench } from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ComponentType<{ className?: string }>
  skills: Array<{
    name: string
    level: number
    color: string
  }>
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "JavaScript", level: 95, color: "from-yellow-400 to-yellow-600" },
      { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600" },
      { name: "C#", level: 88, color: "from-purple-400 to-purple-600" },
      { name: "Java", level: 82, color: "from-red-400 to-red-600" },
      { name: "Python", level: 75, color: "from-green-400 to-green-600" },
      { name: "SQL", level: 85, color: "from-indigo-400 to-indigo-600" },
    ],
  },
  {
    title: "Frontend",
    icon: Globe,
    skills: [
      { name: "React", level: 95, color: "from-cyan-400 to-cyan-600" },
      { name: "Next.js", level: 90, color: "from-gray-400 to-gray-600" },
      { name: "Vue.js", level: 80, color: "from-green-400 to-green-600" },
      { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-teal-600" },
      { name: "SASS/SCSS", level: 85, color: "from-pink-400 to-pink-600" },
    ],
  },
  {
    title: "Backend",
    icon: Wrench,
    skills: [
      { name: "ASP.NET Core", level: 90, color: "from-purple-400 to-purple-600" },
      { name: "Laravel", level: 85, color: "from-red-400 to-red-600" },
      { name: "Node.js", level: 88, color: "from-green-400 to-green-600" },
      { name: "Express.js", level: 82, color: "from-gray-400 to-gray-600" },
      { name: "GraphQL", level: 75, color: "from-pink-400 to-pink-600" },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    skills: [
      { name: "SQL Server", level: 88, color: "from-blue-400 to-blue-600" },
      { name: "MySQL", level: 85, color: "from-orange-400 to-orange-600" },
      { name: "MongoDB", level: 80, color: "from-green-400 to-green-600" },
      { name: "Redis", level: 75, color: "from-red-400 to-red-600" },
      { name: "Docker", level: 82, color: "from-blue-400 to-blue-600" },
      { name: "AWS", level: 78, color: "from-yellow-400 to-yellow-600" },
    ],
  },
]

export function SkillsSection() {
  const { ref, isIntersecting } = useIntersectionObserver()

  return (
    <section id="skills" ref={ref} className="py-32 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-400 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400">
              Technical Expertise
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A comprehensive toolkit for building modern applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                      <category.icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                    <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isIntersecting ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
