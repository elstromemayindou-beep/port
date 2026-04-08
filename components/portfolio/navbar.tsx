"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#experience", label: "Expérience" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold text-primary hover:opacity-80 transition-opacity"
        >
          {"<VN />"}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                <span className="text-primary font-mono mr-1">0{index + 1}.</span>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/cv"
              className="border border-primary text-primary px-4 py-2 rounded text-sm hover:bg-primary/10 transition-colors duration-300"
            >
              CV
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  <span className="text-primary font-mono mr-2">0{index + 1}.</span>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/cv"
                className="border border-primary text-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors duration-300"
              >
                CV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
