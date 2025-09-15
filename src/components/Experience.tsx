import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-experience">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate" data-testid="card-experience-current">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-job-title">
                  Junior Full Stack Developer
                </h3>
                <h4 className="text-lg text-primary font-medium mb-2" data-testid="text-company-name">
                  Incube Innovation Incubator LLP
                </h4>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span data-testid="text-location">Hyderabad, India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-duration">July 2024 – Present</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <Badge variant="outline" className="flex items-center gap-1" data-testid="badge-promotion">
                  <TrendingUp className="h-3 w-3" />
                  Promoted from Trainee
                </Badge>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-muted-foreground mb-4" data-testid="text-promotion-note">
                Promoted to Junior Full Stack Developer in August 2025 after successful 
                completion of 1-year trainee program.
              </p>
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold text-foreground mb-3" data-testid="heading-responsibilities">
                Key Responsibilities & Achievements:
              </h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2" data-testid="text-responsibility-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Lead the development of a cross-platform mobile application using Flutter and Dart, 
                  implementing best practices in Flutter architecture and efficient state management.
                </li>
                <li className="flex items-start gap-2" data-testid="text-responsibility-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Integrated third-party APIs and utilized provider packages to ensure dynamic 
                  and reliable data connectivity.
                </li>
                <li className="flex items-start gap-2" data-testid="text-responsibility-3">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Collaborated with cross-functional teams to address real-world challenges and 
                  deliver a high-performance mobile experience.
                </li>
                <li className="flex items-start gap-2" data-testid="text-responsibility-4">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Implemented secure token-based user verification and conducted rigorous code 
                  reviews to maintain high quality standards.
                </li>
                <li className="flex items-start gap-2" data-testid="text-responsibility-5">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  Deployed cloud solutions using AWS and Firebase, enhancing application 
                  scalability and reliability.
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}