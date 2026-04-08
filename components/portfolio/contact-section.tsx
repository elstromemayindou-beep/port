"use client"

import { Mail, Github, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 lg:px-20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">04. Et ensuite ?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Travaillons Ensemble
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          Je suis actuellement ouvert à de nouvelles opportunités. Que vous ayez 
          une question, un projet en tête, ou simplement envie de discuter, 
          n&apos;hésitez pas à me contacter !
        </p>

        <Link
          href="mailto:elstromemayindou@gmail.com"
          className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded text-lg font-medium hover:bg-primary/10 transition-colors duration-300"
        >
          <Mail className="w-5 h-5" />
          Me Contacter
        </Link>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            <span>Brazzaville,CONGO </span>
          </div>
          <Link 
            href="https://github.com/elstromemayindou-bip" 
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
