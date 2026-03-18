import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, Award, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  badge?: string;
  live?: string;
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
    title: "CPU Scheduling Simulator",
    description:
      "A browser-based academic tool designed to help students visualise how different CPU scheduling algorithms work in real time. Implements five algorithms - FCFS, SJF, SRTF, Priority, and Round Robin",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    github: "https://github.com/RahulKumar-workspace/CPU-Scheduling-Simulator---PEP",
  },
];

const Projects = () => (
  <section id="projects" className="section-spacing">
    <div className="section-container">
      <SectionHeading label="Projects" sub="Featured Work" />
      <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-card border border-border rounded-xl p-8 flex flex-col card-hover"
          >
            {p.badge && (
              <div className="flex items-center gap-2 mb-4 text-sm text-primary font-medium">
                <Award size={16} />
                {p.badge}
              </div>
            )}
            <h3 className="font-heading font-semibold text-xl mb-3">{p.title}</h3>
            <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-5">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button variant="gold-outline" size="sm" asChild className="self-start">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Github size={14} /> GitHub
                </a>
              </Button>
              {p.live && (
                <Button variant="gold-outline" size="sm" asChild className="self-start">
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} /> Live
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
