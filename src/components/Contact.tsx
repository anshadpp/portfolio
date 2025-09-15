import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "anshad.pp36@gmail.com",
    href: "mailto:anshad.pp36@gmail.com",
    description: "Send me an email for project inquiries"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9746449827",
    href: "tel:+919746449827",
    description: "Call or message for quick discussions"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kerala, India",
    href: null,
    description: "Currently based in Kerala"
  }
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    username: "anshadpp",
    href: "https://github.com/anshadpp",
    description: "View my code repositories"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    username: "anshad-p-p",
    href: "https://linkedin.com/in/anshad-p-p",
    description: "Connect with me professionally"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="heading-contact">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology. Let's connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="heading-contact-methods">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-contact-${index}`}>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground" data-testid={`text-contact-label-${index}`}>
                          {method.label}
                        </h4>
                        <p className="text-muted-foreground" data-testid={`text-contact-value-${index}`}>
                          {method.value}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-contact-desc-${index}`}>
                          {method.description}
                        </p>
                      </div>
                      {method.href && (
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => window.open(method.href!, '_blank')}
                          data-testid={`button-contact-${index}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6" data-testid="heading-social-links">
              Social Profiles
            </h3>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Card key={index} className="p-4 hover-elevate" data-testid={`card-social-${index}`}>
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground" data-testid={`text-social-label-${index}`}>
                          {social.label}
                        </h4>
                        <p className="text-muted-foreground" data-testid={`text-social-username-${index}`}>
                          @{social.username}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-social-desc-${index}`}>
                          {social.description}
                        </p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => window.open(social.href, '_blank')}
                        data-testid={`button-social-${index}`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>
            
            {/* Call to Action */}
            <div className="mt-8">
              <Card className="p-6 text-center" data-testid="card-cta">
                <h4 className="text-lg font-semibold text-foreground mb-2" data-testid="heading-cta">
                  Ready to Work Together?
                </h4>
                <p className="text-muted-foreground mb-4" data-testid="text-cta-description">
                  Let's discuss how I can help bring your ideas to life.
                </p>
                <Button 
                  onClick={() => window.open('mailto:anshad.pp36@gmail.com', '_blank')}
                  data-testid="button-cta-email"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}