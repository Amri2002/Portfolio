"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"

export const ContactSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setIsSubmitting(false);

    if (res.ok) {
      toast({
        title: "✅ Message sent!",
        description: "Your message has been sent successfully.",
        variant: "default",
      });
      form.reset();
    } else {
      toast({
        title: "❌ Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" ref={ref} className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-500 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-20">
            <Badge variant="outline" className="mb-4 border-green-500/30 text-green-400">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to turn your ideas into reality? Let's discuss your next project
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always excited to work on new projects and collaborate with talented individuals. Whether you have
                  a specific project in mind or just want to explore possibilities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">muhammedamri2002@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                    <Phone className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-gray-400 mb-4">Follow me on social media</p>
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
                    <a href="https://twitter.com/muhammed_amri" target="_blank" rel="noopener noreferrer">
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}