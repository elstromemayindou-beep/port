"use client"

const skills = {
  mobile: ["React Native", "Expo", "Firebase", "Navigation"],
  web: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  backend: ["Node.js", "API REST", "Oracle", "SQL"],
  tools: ["Git", "VS Code", "Android Studio", "Arduino"],
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
          <span className="text-primary font-mono text-xl">01.</span>
          A propos de moi
          <span className="h-px bg-border flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Etudiant en 3e annee de genie logiciel, passionne par le developpement 
              depuis plusieurs annees. Je me specialise dans la creation 
              d&apos;applications mobiles et web modernes, avec une approche full-stack.
            </p>
            <p>
              Mon parcours m&apos;a permis de travailler sur divers projets complets, 
              des applications mobiles avec React Native aux systemes backend avec 
              Node.js et Oracle. J&apos;ai egalement de l&apos;experience en systemes 
              embarques avec Arduino.
            </p>
            <p>
              Ce qui me rend unique, c&apos;est mon profil polyvalent :
              <span className="text-primary"> Mobile + Web + Backend + Base de donnees + Hardware</span>.
              Je suis capable de gerer des projets complets de A a Z, de la conception
              a la mise en production.
            </p>
            <p>
              Actuellement, je me concentre sur le developpement 
              <span className="text-primary"> d&apos;applications mobiles cross-platform </span>
              avec React Native et l&apos;integration de 
              <span className="text-primary"> Firebase pour le temps reel</span>.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                Mobile
              </h3>
              <ul className="space-y-2">
                {skills.mobile.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                Web
              </h3>
              <ul className="space-y-2">
                {skills.web.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                Backend
              </h3>
              <ul className="space-y-2">
                {skills.backend.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-foreground font-semibold mb-3 text-sm uppercase tracking-wider">
                Outils
              </h3>
              <ul className="space-y-2">
                {skills.tools.map((skill) => (
                  <li key={skill} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="text-primary">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
