import { Button } from "@/components/ui/button";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import heroImage from "@/assets/image.png";
import { HeroParticles } from "@/components/HeroParticles";

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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Futuristic grid backdrop */}
      <div className="grid-bg absolute inset-0 opacity-30 pointer-events-none" aria-hidden="true" />

      {/* Particle network overlay */}
      <HeroParticles />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4 text-muted-foreground hero-stagger hero-delay-1">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-location">Kerala, India</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight hero-stagger hero-delay-2">
              <span data-testid="text-name" className="gradient-text-animated">
                Anshad P P
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground/90 mb-6 hero-stagger hero-delay-3">
              <span data-testid="text-title">Full Stack Developer</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 hero-stagger hero-delay-4">
              <span data-testid="text-subtitle">
                Backend-leaning Full Stack Developer. Shipped a cross-platform
                football academy app on the Apple App Store for an international
                client — 50+ REST endpoints in Spring Boot, Flutter on the client,
                AWS & Firebase in the cloud. Open to remote roles worldwide.
              </span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 hero-stagger hero-delay-5">
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
            
            <div className="flex items-center justify-center lg:justify-start gap-6 hero-stagger hero-delay-6">
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
          <div className="flex justify-center lg:justify-end hero-stagger-image hero-delay-3">
            <div className="relative">
              {/* Outer rotating conic glow */}
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-60 pointer-events-none spin-slow"
                style={{
                  background:
                    "conic-gradient(from 0deg, hsl(var(--accent-1) / 0.5), hsl(var(--accent-2) / 0.5), hsl(var(--accent-1) / 0.5))",
                }}
                aria-hidden="true"
              />
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden glow-ring pulse-glow">
                <img
                  src={heroImage}
                  alt="Anshad P P - Full Stack Developer"
                  className="w-full h-full object-cover"
                  data-testid="img-hero-profile"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-background/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}