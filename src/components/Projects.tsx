import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Star } from "lucide-react";

const technologies = [
  "Spring Boot", "MySQL", "Hibernate", "AWS", "Firebase", 
  "Amazon S3", "Flutter", "REST APIs", "Hostinger", "Contabo"
];

const achievements = [
  "Designed and deployed backend for cross-platform football academy management app",
  "Developed robust REST APIs with Spring Boot and MySQL integration",
  "Managed cloud databases across AWS, Hostinger, and Contabo platforms",
  "Integrated Amazon S3 for storage and Firebase for push notifications",
  "Collaborated with UI designers ensuring quality assurance and timely delivery"
];

export function Projects() {
  const openAppStore = () => {
    window.open("https://apps.apple.com/us/app/peninsula/id6740138988", "_blank");
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-projects">
            Featured Project
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-projects-description">
            Showcasing my latest work in full-stack development and mobile application architecture.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate" data-testid="card-project-peninsula">
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-semibold text-foreground" data-testid="text-project-title">
                    Peninsula Football Academy
                  </h3>
                  <Badge variant="default" className="flex items-center gap-1" data-testid="badge-featured">
                    <Star className="h-3 w-3" />
                    Featured
                  </Badge>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span data-testid="text-client-location">Client: Saudi Arabia</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-project-duration">October 2024 – Present</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed" data-testid="text-project-description">
                  A comprehensive football academy management application supporting both Android and iOS platforms. 
                  The project involved designing and deploying a complete backend infrastructure with robust API 
                  architecture and cloud-based solutions.
                </p>
              </div>
              
              <div className="mt-4 md:mt-0 md:ml-6">
                <Button 
                  onClick={openAppStore}
                  variant="outline" 
                  className="flex items-center gap-2"
                  data-testid="button-view-app-store"
                >
                  <ExternalLink className="h-4 w-4" />
                  View on App Store
                </Button>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold text-foreground mb-4" data-testid="heading-achievements">
                  Key Achievements
                </h4>
                <ul className="space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground" data-testid={`text-achievement-${index}`}>
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold text-foreground mb-4" data-testid="heading-technologies">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-tech-${index}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}