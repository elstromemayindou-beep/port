"use client"

import { Github, ExternalLink, Smartphone, Globe, Cpu } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "Application de Livraison",
    description:
      "Application mobile complete type Uber Eats avec systeme multi-utilisateurs (client, admin, livreur). Gestion complete du cycle de commande, authentification Firebase et messagerie temps reel entre utilisateurs.",
    technologies: ["React Native", "Expo", "Firebase", "Node.js", "Real-time"],
    github: "https://github.com",
    type: "mobile",
  },
  {
    title: "Application de Location de Maisons",
    description:
      "Application mobile full-stack connectee a un backend Node.js avec base de donnees Oracle. Fonctionnalites de reservation, gestion des profils utilisateurs et donnees dynamiques.",
    technologies: ["React Native", "Node.js", "Oracle", "API REST", "SQL"],
    github: "https://github.com",
    type: "mobile",
  },
  {
    title: "Systeme de Messagerie Temps Reel",
    description:
      "Implementation d'un systeme de chat en temps reel avec Firebase. Authentification utilisateurs, envoi de messages instantanes et notifications push.",
    technologies: ["React Native", "Firebase", "Authentication", "Realtime DB"],
    github: "https://github.com",
    type: "mobile",
  },
]

const otherProjects = [
  {
    title: "API REST Node.js",
    description: "API backend complete avec endpoints CRUD, connexion Oracle et logique metier.",
    technologies: ["Node.js", "Express", "Oracle", "SQL"],
    github: "https://github.com",
  },
  {
    title: "Sites Web Responsives",
    description: "Collection de sites web dynamiques avec animations modernes et design responsive.",
    technologies: ["HTML", "CSS", "JavaScript", "Animations"],
    github: "https://github.com",
  },
  {
    title: "Systeme de Refroidissement Arduino",
    description: "Systeme automatise de refroidissement avec capteurs de temperature et actionneurs.",
    technologies: ["Arduino", "C++", "Capteurs", "Electronique"],
    github: "https://github.com",
  },
  {
    title: "Gestion d'Eau Automatisee",
    description: "Systeme embarque pour la gestion automatique de l'eau avec Arduino.",
    technologies: ["Arduino", "Capteurs", "Automatisation"],
    github: "https://github.com",
  },
  {
    title: "Base de Donnees Oracle",
    description: "Modelisation et implementation de bases de donnees relationnelles complexes.",
    technologies: ["Oracle 21c XE", "SQL", "PL/SQL", "Modelisation"],
    github: "https://github.com",
  },
  {
    title: "Diagrammes UML",
    description: "Conception d'architectures logicielles avec diagrammes de cas d'utilisation et classes.",
    technologies: ["UML", "Architecture", "Conception"],
    github: "https://github.com",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl">03.</span>
          Mes Projets
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 items-center gap-4 ${
                index % 2 === 0 ? "" : "md:text-right"
              }`}
            >
              {/* Project Image */}
              <div
                className={`md:col-span-7 relative aspect-video bg-card rounded-lg overflow-hidden group ${
                  index % 2 === 0 ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                  {project.type === "mobile" ? (
                    <Smartphone className="w-20 h-20 text-muted-foreground/30" />
                  ) : project.type === "embedded" ? (
                    <Cpu className="w-20 h-20 text-muted-foreground/30" />
                  ) : (
                    <Globe className="w-20 h-20 text-muted-foreground/30" />
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 md:row-start-1 relative z-10 ${
                  index % 2 === 0
                    ? "md:col-start-6 md:text-right"
                    : "md:col-start-1 md:text-left"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">Projet Vedette</p>
                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                <div className="bg-card p-6 rounded-lg shadow-xl mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-muted-foreground font-mono text-sm mb-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label="Voir le code sur GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-center text-2xl font-bold text-foreground mb-4">
            Autres Projets
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Voir plus de projets sur mon{" "}
            <Link
              href="https://github.com"
              target="_blank"
              className="text-primary hover:underline"
            >
              GitHub
            </Link>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="bg-card p-6 rounded-lg hover:-translate-y-2 transition-transform duration-300 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={project.github}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Voir le code sur GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <ul className="flex flex-wrap gap-2 text-muted-foreground font-mono text-xs">
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
