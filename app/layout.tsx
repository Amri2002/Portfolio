import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Muhammed Amri - Senior Software Developer",
  description:
    "Senior Software Developer specializing in React, .NET, and Laravel. Building scalable applications with modern technologies.",
  keywords: ["Software Developer", "React", "Next.js", "ASP.NET", "Laravel", "Full Stack"],
  authors: [{ name: "Muhammed Amri" }],
  creator: "Muhammed Amri",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muhammedamri.dev",
    title: "Muhammed Amri - Senior Software Developer",
    description:
      "Senior Software Developer specializing in React, .NET, and Laravel. Building scalable applications with modern technologies.",
    siteName: "Muhammed Amri Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Amri - Senior Software Developer",
    description:
      "Senior Software Developer specializing in React, .NET, and Laravel. Building scalable applications with modern technologies.",
    creator: "@muhammed_amri",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
