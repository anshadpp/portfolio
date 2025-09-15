import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/image.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-location">Kerala, India</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              <span data-testid="text-name">Anshad P P</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary mb-6">
              <span data-testid="text-title">Full Stack Developer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
              <span data-testid="text-subtitle">
                Specialized in Java, Spring Boot, and Flutter development. 
                Building robust backend services and cross-platform mobile applications.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                onClick={scrollToProjects}
                size="lg"
                data-testid="button-view-projects"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={scrollToContact}
                size="lg"
                data-testid="button-get-in-touch"
              >
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <a 
                href="mailto:anshad.pp36@gmail.com" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a 
                href="tel:+919746449827" 
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </a>
              <a 
                href="https://github.com/anshadpp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/anshad-p-p" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          {/* Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-border">
                <img 
                  src={heroImage} 
                  alt="Anshad P P - Full Stack Developer" 
                  className="w-full h-full object-cover"
                  data-testid="img-hero-profile"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-background/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}