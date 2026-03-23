import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, Award, ExternalLink } from "lucide-react";

import fitsnapImg from "@/assets/fitsnap.jpeg";
import educaImg from "@/assets/educa.png";
import cpuImg from "@/assets/cpu-scheduling.png";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  badge?: string;
  live?: string;
  timeline: string;
  image: string;
}

const projects: Project[] = [
  {
    title: "FitSnap – Health Tracker App",
    description:
      "Android application that helps users track daily health habits such as water intake, BMI, and activity metrics. Built using Kotlin and XML layouts with structured UI components and local data storage.",
    tech: ["Kotlin", "XML", "Firebase", "Android SDK"],
    github: "https://github.com/RahulKumar-workspace/FitSnap",
    timeline: "October 2025 - November 2025",
    image: fitsnapImg,
  },
  {
    title: "EDUCA – Online Learning Platform",
    description:
      "Prototype education platform developed during a 24-hour hackathon featuring course listings and video learning modules with authentication functionality.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/RahulKumar-workspace/Educa",
    badge: "Top 50 out of 1300 teams – Coding Ninjas Hackathon",
    timeline: "March 2025",
    image: educaImg,
  },
  {
    title: "CPU Scheduling Simulator",
    description:
      "A browser-based academic tool designed to help students visualise how different CPU scheduling algorithms work in real time. Implements five algorithms - FCFS, SJF, SRTF, Priority, and Round Robin.",
    tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
    github:
      "https://github.com/RahulKumar-workspace/CPU-Scheduling-Simulator---PEP",
    live: "https://rahulkumar-workspace.github.io/CPU-Scheduling-Simulator---PEP/",
    timeline: "February 2026",
    image: cpuImg,
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
            className="bg-card border border-border rounded-xl overflow-hidden flex flex-col card-hover relative"
          >
            {/* Project Image */}
            <a
              href={p.live || p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden block cursor-pointer"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-44 object-cover object-[center_20%] transition-transform duration-300 hover:scale-105"
              />
            </a>

            <div className="p-8 pt-5 flex flex-col flex-1">
              {/* Timeline */}
              <div className="text-xs text-muted-foreground font-medium mb-3">
                {p.timeline}
              </div>

              {p.badge && (
                <div className="flex items-center gap-2 mb-4 text-sm text-primary font-medium">
                  <Award size={16} />
                  {p.badge}
                </div>
              )}

              <h3 className="font-heading font-semibold text-xl mb-3">
                {p.title}
              </h3>

              <p className="text-base text-muted-foreground leading-relaxed flex-1 mb-5">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button
                  variant="gold-outline"
                  size="sm"
                  asChild
                  className="self-start"
                >
                  <a href={p.github} target="_blank" rel="noopener noreferrer">
                    <Github size={14} /> GitHub
                  </a>
                </Button>

                {p.live && (
                  <Button
                    variant="gold-outline"
                    size="sm"
                    asChild
                    className="self-start"
                  >
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} /> Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
