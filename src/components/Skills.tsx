import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Java", "Dart", "Python", "JavaScript", "C"]
  },
  {
    category: "Backend Development",
    skills: ["Spring Boot", "Django"]
  },
  {
    category: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "AJAX", "jQuery", "JSP"]
  },
  {
    category: "Mobile Development",
    skills: ["Flutter", "Dart", "API Integration", "State Management", "Providers"]
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Firebase", "Git", "GitHub", "REST APIs"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "Hibernate"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-skills">
            Technical Skills
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-skills-description">
            A comprehensive overview of my technical expertise across various domains of software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-skill-category-${index}`}>
              <h3 className="text-lg font-semibold text-foreground mb-4" data-testid={`heading-category-${index}`}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="text-xs"
                    data-testid={`badge-skill-${index}-${skillIndex}`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}