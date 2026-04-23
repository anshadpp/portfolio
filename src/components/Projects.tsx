import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, MapPin, Star, Github } from "lucide-react";

type ProjectLink = {
  label: string;
  url: string;
  icon: "external" | "github";
};

type Project = {
  title: string;
  featured?: boolean;
  clientLabel: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
  link: ProjectLink;
};

const projects: Project[] = [
  {
    title: "Peninsula Football Academy",
    featured: true,
    clientLabel: "Client: Saudi Arabia",
    duration: "October 2024 – February 2026",
    description:
      "A comprehensive football academy management application supporting both Android and iOS platforms. Designed and deployed a complete backend infrastructure with robust API architecture and cloud-based solutions.",
    achievements: [
      "Designed and deployed 50+ REST API endpoints powering a cross-platform football academy app live on the Apple App Store",
      "Built Spring Boot + MySQL + Hibernate backend with clean schema design and token-based authentication",
      "Integrated Amazon S3 for media storage and Firebase Cloud Messaging for push notifications",
      "Managed cloud deployments across AWS, Hostinger, and Contabo",
      "Delivered to an international client in Saudi Arabia, coordinating with UI designers and QA for on-time releases",
    ],
    technologies: [
      "Java",
      "Spring Boot",
      "MySQL",
      "Hibernate",
      "AWS",
      "Firebase",
      "Amazon S3",
      "Flutter",
      "REST APIs",
    ],
    link: {
      label: "View on App Store",
      url: "https://apps.apple.com/us/app/peninsula/id6740138988",
      icon: "external",
    },
  },
  {
    title: "Daily Tracker",
    clientLabel: "Personal Project",
    duration: "April 2026",
    description:
      "An Android daily-routine tracker built in Flutter — fully offline, no backend. Tracks a 13-block daily schedule with local notifications, SQLite-backed history, and streak statistics. A small, self-contained productivity tool built for my own use.",
    achievements: [
      "Designed a 13-block daily checklist with current-block highlighting",
      "Built a 30-day history view with per-day completion percentages",
      "Added a statistics dashboard with 7/14/30-day trends and streak tracking",
      "Implemented customizable block scheduling with optional local reminders",
      "Fully offline: SQLite storage on-device, no network calls, no accounts",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "SQLite",
      "Android",
      "Local Notifications",
    ],
    link: {
      label: "View on GitHub",
      url: "https://github.com/anshadpp/daily-tracking",
      icon: "github",
    },
  },
  {
    title: "WebSocket Broadcast Chat",
    clientLabel: "Personal Project",
    duration: "November 2024",
    description:
      "A real-time chat backend built with Java WebSockets demonstrating broadcast networking patterns — multi-client connections, concurrent message delivery, and clean session handling.",
    achievements: [
      "Implemented a WebSocket server that broadcasts incoming messages to all connected clients in real time",
      "Handled concurrent client sessions with thread-safe message delivery",
      "Practiced low-level networking and Java concurrency primitives",
      "Open-source reference for realtime backend patterns",
    ],
    technologies: ["Java", "WebSockets", "Networking", "Concurrency", "Git"],
    link: {
      label: "View on GitHub",
      url: "https://github.com/anshadpp/chat",
      icon: "github",
    },
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight gradient-text"
            data-testid="heading-projects"
          >
            Featured Projects
          </h2>
          <div className="w-24 gradient-divider mx-auto mb-8"></div>
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-projects-description"
          >
            Selected work across full-stack development, mobile apps, and backend
            systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, pIndex) => {
            const LinkIcon =
              project.link.icon === "github" ? Github : ExternalLink;
            return (
              <Card
                key={pIndex}
                className="p-8 hover-elevate"
                data-testid={`card-project-${pIndex}`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <h3
                        className="text-2xl font-semibold text-foreground"
                        data-testid={`text-project-title-${pIndex}`}
                      >
                        {project.title}
                      </h3>
                      {project.featured && (
                        <Badge
                          variant="default"
                          className="flex items-center gap-1"
                          data-testid={`badge-featured-${pIndex}`}
                        >
                          <Star className="h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span data-testid={`text-client-${pIndex}`}>
                          {project.clientLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span data-testid={`text-duration-${pIndex}`}>
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    <p
                      className="text-muted-foreground mb-6 leading-relaxed"
                      data-testid={`text-project-description-${pIndex}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button
                      onClick={() =>
                        window.open(project.link.url, "_blank", "noopener,noreferrer")
                      }
                      variant="outline"
                      className="flex items-center gap-2"
                      data-testid={`button-project-link-${pIndex}`}
                    >
                      <LinkIcon className="h-4 w-4" />
                      {project.link.label}
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4
                      className="font-semibold text-foreground mb-4"
                      data-testid={`heading-achievements-${pIndex}`}
                    >
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, aIndex) => (
                        <li
                          key={aIndex}
                          className="flex items-start gap-2 text-muted-foreground"
                          data-testid={`text-achievement-${pIndex}-${aIndex}`}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4
                      className="font-semibold text-foreground mb-4"
                      data-testid={`heading-technologies-${pIndex}`}
                    >
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <Badge
                          key={tIndex}
                          variant="secondary"
                          className="text-xs"
                          data-testid={`badge-tech-${pIndex}-${tIndex}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
