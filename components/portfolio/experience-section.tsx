"use client"

import { useState } from "react"

const experiences = [
  {
    company: "Apps Mobile",
    role: "Developpeur Mobile (React Native)",
    period: "2023 - Present",
    description: [
      "Conception et developpement d'applications mobiles avec React Native (Expo)",
      "Mise en place d'interfaces modernes avec navigation par onglets",
      "Implementation de systemes d'authentification utilisateurs avec Firebase",
      "Developpement de fonctionnalites de messagerie en temps reel",
      "Gestion des etats et interactions utilisateur",
    ],
    technologies: ["React Native", "Expo", "Firebase", "JavaScript"],
  },
  {
    company: "Location App",
    role: "Developpeur Full Stack",
    period: "2023",
    description: [
      "Developpement d'une application mobile de location de maisons",
      "Conception et gestion de base de donnees avec Oracle",
      "Creation d'API REST avec Node.js",
      "Implementation de fonctionnalites de reservation",
      "Gestion des profils utilisateurs et donnees dynamiques",
    ],
    technologies: ["React Native", "Node.js", "Oracle", "API REST"],
  },
  {
    company: "Delivery App",
    role: "Developpeur Application de Livraison",
    period: "2023",
    description: [
      "Conception d'un systeme multi-utilisateurs (client, admin, livreur)",
      "Gestion complete du cycle de commande (commande → livraison → confirmation)",
      "Integration de Firebase pour l'authentification",
      "Implementation d'un systeme de messagerie entre utilisateurs",
      "Simulation d'un systeme reel de livraison type Uber Eats",
    ],
    technologies: ["React Native", "Firebase", "Node.js", "Real-time"],
  },
  {
    company: "Web Dev",
    role: "Developpeur Web Frontend",
    period: "2022 - Present",
    description: [
      "Creation de sites web dynamiques en HTML, CSS, JavaScript",
      "Mise en place d'interfaces modernes avec animations (scroll, hover, transitions)",
      "Conception de pages responsives (adaptees mobile et desktop)",
      "Amelioration de l'experience utilisateur (UI/UX)",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Responsive"],
  },
  {
    company: "Backend",
    role: "Developpeur Backend & BDD",
    period: "2022 - Present",
    description: [
      "Creation de serveurs avec Node.js",
      "Mise en place d'API REST (GET, POST, PUT, DELETE)",
      "Modelisation de bases de donnees relationnelles",
      "Creation de tables avec Oracle 21c XE",
      "Optimisation des requetes SQL",
    ],
    technologies: ["Node.js", "Express", "Oracle", "SQL"],
  },
  {
    company: "Arduino",
    role: "Developpeur Systemes Embarques",
    period: "2022 - 2023",
    description: [
      "Conception de systemes automatises (refroidissement, gestion d'eau)",
      "Utilisation de capteurs et actionneurs",
      "Programmation Arduino pour automatisation",
      "Integration materiel + logiciel",
    ],
    technologies: ["Arduino", "C++", "Capteurs", "Electronique"],
  },
]

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6 lg:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl">02.</span>
          Experience
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 text-sm font-mono whitespace-nowrap text-left transition-all duration-300 ${
                  activeTab === index
                    ? "text-primary bg-primary/10 md:border-l-2 md:border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 min-h-[320px]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                {experiences[activeTab].role}{" "}
                <span className="text-primary">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className="text-muted-foreground font-mono text-sm">
                {experiences[activeTab].period}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li key={index} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-4">
                {experiences[activeTab].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
