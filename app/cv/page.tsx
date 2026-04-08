"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  ArrowLeft, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Github,
  Calendar,
  GraduationCap,
  Briefcase,
  Languages,
  Code2,
  Cpu
} from "lucide-react"
import Link from "next/link"

const personalInfo = {
  name: "MAYINDOU Marco ezechiel",
  title: "Développeur Full-Stack & Solutions IoT\nSpécialisé dans la transformation numérique des secteurs clés au Congo.",
  email: "elstromemayindou@gmail.com",
  phone: "+242066770959",
  location: "CONGO, Brazzaville",
  github: "github.com/elstromemayindou-bip",
  summary: "Etudiant en 3e annee de genie logiciel avec une experience pratique dans le developpement d'applications mobiles, web et backend. J'ai realise plusieurs projets complets integrant interface utilisateur, logique metier et base de donnees. Profil polyvalent maitrisant le Mobile, Web, Backend, Base de donnees et systemes embarques."
}

const experiences = [
  {
    title: "AGRITECH Congo (Web & Stratégie)",
    type: "Projet : Plateforme vitrine moderne pour entreprise d'innovation agricole",
    period: "2024",
    responsibilities: [
      "Situation : Conception d'une plateforme vitrine pour une entreprise agricole innovante nécessitant un site ultra-rapide fonctionnant sur connexions mobiles instables avec gestion de contenu dynamique.",
      "Tâche : Développer un site web moderne capable de gérer du contenu dynamique tout en optimisant les performances pour les connexions mobiles limitées.",
      "Action : Utilisation de Next.js 15 pour le SEO et la vitesse de chargement grâce au rendu statique ; intégration de Supabase pour la scalabilité immédiate et la gestion sécurisée des données sans serveur complexe ; implémentation de Tailwind CSS pour un design responsive ; déploiement sur Vercel avec ISR pour des performances optimales.",
      "Résultat : Plateforme ultra-rapide avec CMS léger permettant au client de publier ses projets sans intervention technique, améliorant significativement la visibilité et l'engagement client."
    ]
  },
  {
    title: "Système de Gestion d'Irrigation Intelligent (IoT & Simulation)",
    type: "Projet : Prototype d'automate de contrôle pour agriculture connectée",
    period: "2023 - 2024",
    responsibilities: [
      "Situation : Développement d'un système de contrôle pour l'agriculture connectée nécessitant une gestion précise des vannes d'irrigation simulées par des LED.",
      "Tâche : Créer un automate contrôlant une séquence d'allumage précise des LED représentant les vannes d'irrigation.",
      "Action : Programmation en C++ avec Arduino pour la logique de contrôle ; utilisation de Proteus 9 Professional pour réduire les coûts de prototypage en validant la logique du circuit avant soudure ; optimisation de la consommation électrique et gestion des entrées/sorties analogiques.",
      "Résultat : Prototype fonctionnel avec simulation complète, démontrant l'efficacité du système d'irrigation intelligent et permettant une transition fluide vers le déploiement matériel."
    ]
  },
  {
    title: "Maintenance & Support Technique Avancé (Hardware/Software)",
    type: "Projet : Récupération de données et contrôle à distance de périphériques mobiles endommagés",
    period: "2023 - Present",
    responsibilities: [
      "Situation : Récupération de données critiques sur un périphérique mobile avec écran brisé nécessitant un accès d'urgence aux flux de données.",
      "Tâche : Contourner l'écran défaillant pour accéder et récupérer les données importantes.",
      "Action : Utilisation de protocoles ADB (Android Debug Bridge) et de l'outil Scrcpy pour établir un contrôle à distance et extraire les données sans interface physique.",
      "Résultat : Récupération réussie des données critiques, démontrant une capacité à trouver des solutions techniques de contournement dans des situations d'urgence."
    ]
  }
]

const education = [
  {
    degree: "Licence en Genie Logiciel (3e annee)",
    school: "Votre Universite",
    location: "Votre Ville, Pays",
    period: "2022 - Present",
    details: "Specialisation en developpement d'applications et systemes informatiques"
  }
]

const skills = {
  web: ["JavaScript (ES6+)", "React", "Next.js", "HTML5/CSS3 (Tailwind)"],
  backend: ["Supabase (PostgreSQL)", "Vercel (CI/CD)", "API REST"],
  embedded: ["Programmation Arduino", "Architecture ATMega328P", "Simulation Proteus"],
  tools: ["Git/GitHub", "Rédaction de Cahier des Charges (CdC)", "Scrcpy/ADB", "Fritzing"]
}

const languages = [
  { name: "Francais", level: "Natif" },
  { name: "Anglais", level: "Intermediaire" }
]

export default function CVPage() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header Actions */}
      <div className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Retour au portfolio
            </Button>
          </Link>
          <Button 
            onClick={handlePrint}
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Download className="h-4 w-4" />
            Telecharger PDF
          </Button>
        </div>
      </div>

      {/* CV Content */}
      <main className="container mx-auto max-w-4xl px-4 py-8">
        <Card className="overflow-hidden border-border bg-card">
          <CardContent className="p-0">
            {/* Header Section */}
            <div className="bg-secondary/50 p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                    {personalInfo.name}
                  </h1>
                  <p className="text-lg text-primary font-medium">
                    {personalInfo.title}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    {personalInfo.email}
                  </a>
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    {personalInfo.phone}
                  </a>
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {personalInfo.location}
                  </span>
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
              
              {/* Summary */}
              <div className="mt-6">
                <p className="text-foreground/80 leading-relaxed">
                  {personalInfo.summary}
                </p>
              </div>
            </div>

            <div className="p-8 space-y-8">
              {/* Experience Section */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Experience en Developpement</h2>
                </div>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-border">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                      <div className="space-y-2">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {exp.period}
                          </span>
                        </div>
                        <p className="text-primary font-medium text-sm">{exp.type}</p>
                        <ul className="mt-2 space-y-1">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="text-sm text-foreground/80 flex items-start gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Education Section */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Formation</h2>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-border">
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                      <div className="space-y-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                          <span className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {edu.period}
                          </span>
                        </div>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground">{edu.location}</p>
                        <p className="text-sm text-foreground/70">{edu.details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <Separator />

              {/* Skills Section */}
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Competences Techniques</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Développement Web</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.web.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Backend & Cloud</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Systèmes Embarqués</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.embedded.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-medium text-muted-foreground">Outils & Méthodes</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <Separator />

              {/* Business Approach */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Approche Business</h2>
                </div>
                <div className="space-y-3">
                  <p className="text-foreground/80 leading-relaxed">
                    Expertise en audit numérique : Identification des besoins digitaux pour les PME et restaurants à Brazzaville (étude de marché sur la visibilité web locale).
                  </p>
                  <p className="text-foreground/80 leading-relaxed">
                    Capacité à analyser le marché local et proposer des solutions adaptées aux réalités congolaises, en tenant compte des contraintes techniques et budgétaires.
                  </p>
                </div>
              </section>

              <Separator />

              {/* Languages */}
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Languages className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Langues</h2>
                </div>
                <div className="space-y-2">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{lang.name}</span>
                      <Badge variant="outline" className="text-xs">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-semibold text-foreground">Points Forts</h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span>
                    Profil polyvalent : Mobile + Web + Backend
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span>
                    Base de donnees Oracle
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span>
                    Temps reel avec Firebase
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span>
                    Hardware avec Arduino
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span>
                    Capacite d&apos;apprentissage autonome
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground/80">
                    <span className="text-primary">✓</span>
                    Gestion de projets complets de A a Z
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* Print Note */}
        <p className="mt-4 text-center text-sm text-muted-foreground print:hidden">
          Cette page est optimisee pour l&apos;impression. Utilisez Ctrl+P (ou Cmd+P sur Mac) pour imprimer ou sauvegarder en PDF.
        </p>
      </main>
    </div>
  )
}
