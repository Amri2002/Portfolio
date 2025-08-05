"use client"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { SkillsSection } from "@/components/sections/skills-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Navigation } from "@/components/navigation/navigation"
import { FluidBackground } from "@/components/ui/fluid-background"
import { Footer } from "@/components/layout/footer"

const projects = [
  {
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and admin dashboard",
    tech: ["React", "Next.js", "ASP.NET", "SQL Server"],
    github: "#",
    demo: "#",
  },
  {
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features",
    tech: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
  {
    name: "Portfolio Website",
    description: "Responsive portfolio website with modern design and smooth animations",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    github: "#",
    demo: "#",
  },
  {
    name: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and data visualization",
    tech: ["JavaScript", "React", "MongoDB", "Chart.js"],
    github: "#",
    demo: "#",
  },
]

const skills = {
  Languages: ["JavaScript", "Java", "C", "C#", "SQL"],
  "Frameworks & Tools": ["React", "Next.js", "ASP.NET", "Laravel", "Tailwind CSS"],
  Databases: ["MySQL", "SQL Server", "MongoDB"],
}

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <FluidBackground />
      <Navigation />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection projects={projects} />
        <SkillsSection skills={skills} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
