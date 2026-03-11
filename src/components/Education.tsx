import SectionHeading from "./SectionHeading";
import { GraduationCap } from "lucide-react";

const edu = [
  {
    school: "Lovely Professional University",
    location: "Punjab",
    degree: "Bachelor of Technology – Computer Science and Engineering",
    period: "Aug 2023 – Present",
    score: "CGPA: 7.66",
  },
  {
    school: "Birla School, Pilani",
    location: "Pilani, Rajasthan",
    degree: "Intermediate",
    period: "Apr 2021 – Mar 2022",
    score: "Percentage: 71.2%",
  },
  {
    school: "Birla School, Pilani",
    location: "Pilani, Rajasthan",
    degree: "Matriculation",
    period: "Apr 2019 – Mar 2020",
    score: "Percentage: 67.3%",
  },
];

const Education = () => (
  <section id="education" className="section-spacing bg-surface/30">
    <div className="section-container">
      <SectionHeading label="Education" />
      <div className="max-w-2xl mx-auto mt-12 relative">
        {/* Timeline line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {edu.map((e, i) => (
            <div key={i} className="relative pl-14">
              {/* Dot */}
              <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />

              <div className="bg-card border border-border rounded-xl p-5 card-hover">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h3 className="font-heading font-semibold text-base flex items-center gap-2">
                      <GraduationCap size={16} className="text-primary" />
                      {e.school}
                    </h3>
                    <p className="text-xs text-muted-foreground">{e.location}</p>
                  </div>
                  <span className="text-xs text-primary font-medium whitespace-nowrap">{e.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{e.degree}</p>
                <p className="text-sm text-foreground font-medium mt-1">{e.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;
