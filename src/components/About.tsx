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
                Software Developer with over 2 years of experience building enterprise
                applications, backend services and cross-platform apps. Currently working
                at Zabnix Private Limited on pharmaceutical retail and wholesale ERP
                software with Flutter, Dart, NestJS and PostgreSQL.
              </p>
              <p data-testid="text-profile-additional">
                Previously developed 50+ Java Spring Boot REST APIs and Flutter features
                at Incube Innovation Incubator LLP, and contributed to a Travel360 MVP
                through Incube. Experienced in Python/Django API development, debugging,
                database integration and performance improvements. Exploring C and C++ fundamentals.
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