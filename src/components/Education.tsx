import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-education">
            Education
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 hover-elevate" data-testid="card-education">
            <div className="flex flex-col md:flex-row md:items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground" data-testid="text-degree">
                      B.Tech in Computer Science and Engineering
                    </h3>
                  </div>
                </div>
                
                <h4 className="text-lg text-primary font-medium mb-4" data-testid="text-institution">
                  MGMCEPS Valanchery
                </h4>
                
                <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span data-testid="text-institution-location">Kerala, India</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span data-testid="text-education-duration">2020 – 2024</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h5 className="font-semibold text-foreground" data-testid="heading-academic-focus">
                    Academic Focus:
                  </h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2" data-testid="text-focus-1">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Core computer science fundamentals including data structures, algorithms, and software engineering principles
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-focus-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Specialized coursework in database management, web technologies, and mobile application development
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-focus-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Hands-on experience with programming languages including Java, Python, and C
                    </li>
                    <li className="flex items-start gap-2" data-testid="text-focus-4">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Project-based learning focused on real-world software development practices
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 md:mt-0 md:ml-6">
                <Badge variant="outline" className="text-sm" data-testid="badge-degree-status">
                  Graduated 2024
                </Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}