import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

type Job = {
  title: string;
  company: string;
  location: string;
  duration: string;
  badge?: { label: string };
  note?: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    title: "Junior Full Stack Developer",
    company: "Travel360",
    location: "Remote · Client registered in Dubai",
    duration: "March 2026 – May 2026",
    badge: { label: "Contract · via Incube" },
    note: 'An independent contract engagement routed through Incube Innovation Incubator LLP. Travel360 was an early-stage startup building "the world\'s first atomic travel marketplace" — pre-launch during the contract (public site was a waitlist landing page).',
    bullets: [
      "Engaged at pre-launch to help build the first-phase MVP of an early-stage travel marketplace.",
      "Built backend services with Node.js and Hono.js — a lightweight, TypeScript-first web framework — and the client with React.",
      "Added Node.js and TypeScript alongside an existing Java/Spring Boot + Flutter skill set — the Node/TypeScript stack suited the startup's faster-iteration MVP phase.",
      "Early-stage ownership — contributed to MVP shape and core feature work rather than narrow ticket-level tasks.",
    ],
  },
  {
    title: "Junior Full Stack Developer",
    company: "Incube Innovation Incubator LLP",
    location: "Hyderabad, India",
    duration: "July 2024 – May 2026",
    badge: { label: "Promoted from Trainee" },
    note: "Promoted to Junior Full Stack Developer in August 2025 after a 1-year trainee program. Most recent primary employer — delivered product work and an independent client contract (Travel360).",
    bullets: [
      "Shipped the Peninsula football academy app on the Apple App Store (iOS + Android) for an international client in Saudi Arabia — owned both the Flutter client and the Spring Boot backend (October 2024 – February 2026).",
      "Designed and built 50+ REST API endpoints on Spring Boot backed by MySQL and Hibernate, with token-based authentication and clean schema design.",
      "Integrated Amazon S3 for media storage and Firebase Cloud Messaging for push notifications across iOS and Android; built the Flutter client with provider-based state management.",
      "Managed cloud deployments across AWS, Hostinger, and Contabo; ran code reviews and coordinated with UI designers and QA for on-schedule releases.",
      "Contributed to a WhatsApp Business API integration and a companion mobile application as part of ongoing product work at Incube.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl sm:text-5xl font-bold mb-4 tracking-tight gradient-text"
            data-testid="heading-experience"
          >
            Work Experience
          </h2>
          <div className="w-24 gradient-divider mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {jobs.map((job, jIndex) => (
            <Card
              key={jIndex}
              className="p-8 hover-elevate"
              data-testid={`card-experience-${jIndex}`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <div>
                  <h3
                    className="text-2xl font-semibold text-foreground mb-2"
                    data-testid={`text-job-title-${jIndex}`}
                  >
                    {job.title}
                  </h3>
                  <h4
                    className="text-lg text-primary font-medium mb-2"
                    data-testid={`text-company-name-${jIndex}`}
                  >
                    {job.company}
                  </h4>
                  <div className="flex items-center gap-4 text-muted-foreground flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span data-testid={`text-location-${jIndex}`}>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span data-testid={`text-duration-${jIndex}`}>{job.duration}</span>
                    </div>
                  </div>
                </div>
                {job.badge && (
                  <div className="mt-4 md:mt-0">
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1"
                      data-testid={`badge-job-${jIndex}`}
                    >
                      <TrendingUp className="h-3 w-3" />
                      {job.badge.label}
                    </Badge>
                  </div>
                )}
              </div>

              {job.note && (
                <div className="mb-6">
                  <p
                    className="text-muted-foreground mb-4"
                    data-testid={`text-note-${jIndex}`}
                  >
                    {job.note}
                  </p>
                </div>
              )}

              <div className="space-y-3">
                <h5
                  className="font-semibold text-foreground mb-3"
                  data-testid={`heading-responsibilities-${jIndex}`}
                >
                  Key Responsibilities &amp; Achievements:
                </h5>
                <ul className="space-y-2 text-muted-foreground">
                  {job.bullets.map((bullet, bIndex) => (
                    <li
                      key={bIndex}
                      className="flex items-start gap-2"
                      data-testid={`text-responsibility-${jIndex}-${bIndex}`}
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
