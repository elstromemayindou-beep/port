"use client"

import { Github, Mail, ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 relative">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">
          Bonjour, je suis
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          MAYINDOU Marco Ezechiel
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-8 text-balance">
          Développeur Mobile & Web
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
          Je conçois et développe des applications mobiles et web performantes, 
          avec une attention particulière à l&apos;expérience utilisateur et aux 
          meilleures pratiques de développement.
        </p>
        
        <div className="flex items-center gap-6 mb-16">
          <Link 
            href="https://github.com/elstromemayindou-bip" 
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link 
            href="mailto:elstromemayindou@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        aria-label="Scroll vers le bas"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  )
}
