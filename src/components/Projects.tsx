import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, Award } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  badge?: string;
}

const projects: Project[] = [
  {
    title: "FitSnap – Health Tracker App",
    description:
      "Android application that helps users track daily health habits such as water intake, BMI, and activity metrics. Built using Kotlin and XML layouts with structured UI components and local data storage.",
    tech: ["Kotlin", "XML", "Firebase", "Android SDK"],
    github: "https://github.com/RahulKumar-workspace/FitSnap",
  },
  {
    title: "EDUCA – Online Learning Platform",
    description:
      "Prototype education platform developed during a 24-hour hackathon featuring course listings and video learning modules with authentication functionality.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/RahulKumar-workspace/Educa",
    badge: "Top 50 / 1300 teams – Coding Ninjas Hackathon",
  },
  {
    title: "CloudTasker – Serverless Task API",
    description:
      "Serverless backend system designed to manage tasks using scalable cloud architecture with event-driven execution. Demonstrates cloud architecture and backend design skills.",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB", "IAM"],
    github: "#",
  },
];

const Projects = () => (
  <section id="projects" className="section-spacing">
    <div className="section-container">
      <SectionHeading label="Projects" sub="Featured Work" />
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-card border border-border rounded-xl p-6 flex flex-col card-hover"
          >
            {p.badge && (
              <div className="flex items-center gap-2 mb-3 text-xs text-primary font-medium">
                <Award size={14} />
                {p.badge}
              </div>
            )}
            <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <Button variant="gold-outline" size="sm" asChild className="self-start">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                <Github size={14} /> GitHub
              </a>
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
