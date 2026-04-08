"use client"

import { Github, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-20 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/elstromemayindou-bip"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:elstromemayindou@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-muted-foreground text-sm font-mono">
          Conçu & Développé par{"Marco ezechiel "}
          <span className="text-primary">Marco ezechiel</span>
        </p>

        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Tous droits réservés
        </p>
      </div>
    </footer>
  )
}
