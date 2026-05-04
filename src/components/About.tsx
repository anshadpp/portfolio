import { Card } from "@/components/ui/card";
import { Code, Database, Smartphone, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Backend Expertise",
    description: "Strong expertise in Java and Spring Boot for building robust REST APIs and microservices."
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Intermediate skills in Flutter & Dart for cross-platform mobile app development."
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Experience with MySQL database design, optimization, and data-driven applications."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Working knowledge of AWS and Firebase for scalable cloud deployments."
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight gradient-text" data-testid="heading-about">
            About Me
          </h2>
          <div className="w-24 gradient-divider mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Summary */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="heading-profile-summary">
              Profile Summary
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-profile-summary">
                Full Stack Developer with nearly 2 years building production
                systems in Java, Spring Boot, and Flutter. Designed and deployed
                the backend for Peninsula — a cross-platform football academy
                app live on the Apple App Store — serving an international
                client in Saudi Arabia. The backend exposes 50+ REST endpoints
                on Spring Boot + MySQL with token-based authentication, S3
                media storage, and Firebase push.
              </p>
              <p data-testid="text-profile-additional">
                Most recently was Junior Full Stack Developer at Incube
                Innovation Incubator LLP (Hyderabad), promoted from Trainee
                after delivering the Peninsula app. Also held an independent
                contract routed via Incube with Travel360 (Dubai) — building
                the first-phase MVP of an early-stage travel marketplace on
                Node.js + Hono.js + React, which added TypeScript and the
                Node ecosystem alongside the core Java/Spring/Flutter skill
                set. Comfortable across the stack — REST API design, MySQL
                schema, Flutter state management, AWS/Firebase/S3. Currently
                open to remote opportunities worldwide; remote-first, flexible
                with timezone.
              </p>
            </div>
          </div>
          
          {/* Key Highlights */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6" data-testid="heading-key-highlights">
              Key Highlights
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-highlight-${index}`}>
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1" data-testid={`text-highlight-title-${index}`}>
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground" data-testid={`text-highlight-desc-${index}`}>
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}