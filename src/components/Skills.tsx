import SectionHeading from "./SectionHeading";
import { Code, Cloud, Wrench, Users } from "lucide-react";
import type { ReactNode } from "react";

interface SkillGroup {
  icon: ReactNode;
  title: string;
  skills: string[];
}

const groups: SkillGroup[] = [
  {
    icon: <Code size={20} />,
    title: "Programming Languages",
    skills: ["C++", "Java", "Kotlin", "SQL", "Bash"],
  },
  {
    icon: <Cloud size={20} />,
    title: "Cloud & DevOps",
    skills: ["AWS Cloud Services", "Microsoft Azure", "Docker"],
  },
  {
    icon: <Wrench size={20} />,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux Terminal", "macOS Terminal", "Android Studio", "MySQL", "AWS Console"],
  },
  {
    icon: <Users size={20} />,
    title: "Soft Skills",
    skills: ["Leadership", "Team Management", "Coordination", "Adaptability", "Communication"],
  },
];

const Skills = () => (
  <section id="skills" className="section-spacing bg-surface/30">
    <div className="section-container">
      <SectionHeading label="Skills" sub="Tech Stack" />
      <div className="grid sm:grid-cols-2 gap-6 mt-12">
        {groups.map((g) => (
          <div
            key={g.title}
            className="bg-card border border-border rounded-xl p-6 card-hover"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary">{g.icon}</span>
              <h3 className="font-heading font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span key={s} className="tech-tag">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
