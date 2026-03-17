import SectionHeading from "./SectionHeading";
import { Users, Heart, Download } from "lucide-react";

const items = [
  {
    icon: <Users size={22} />,
    org: "AIESEC in Jalandhar",
    role: "Senior Manager – Team Leader",
    details: [
      "Managed a team of 10+ members while coordinating recruitment, onboarding, and international partnership operations.",
      "Worked with 30+ global entities and stakeholders.",
    ],
    downloadLabel: "Experience Letter - Rahul Kumar",
    downloadHref: "/aiesec-experience.pdf",
    downloadFilename: "Experience Letter - Rahul Kumar.pdf",
  },
  {
    icon: <Heart size={22} />,
    org: "Sarayu Foundation Public Charitable Trust",
    role: "Volunteer",
    details: [
      "Supported teaching initiatives for children and helped with WordPress-based digital updates for the foundation.",
    ],
    downloadLabel: "Certificate - Rahul Kumar",
    downloadHref: "/sarayu-certificate.jpg",
    downloadFilename: "Sarayu Certificate - Rahul Kumar.jpg",
  },
];

const Extracurricular = () => (
  <section id="extracurricular" className="section-spacing">
    <div className="section-container">
      <SectionHeading label="Leadership & Extracurricular" />
      <div className="grid md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
        {items.map((item) => (
          <div
            key={item.org}
            className="bg-card border border-border rounded-xl p-7 card-hover"
          >
            <div className="flex items-center gap-3 mb-1 text-primary">
              {item.icon}
              <h3 className="font-heading font-semibold text-base text-foreground">{item.org}</h3>
            </div>
            <p className="text-sm text-primary font-medium mb-3">{item.role}</p>
            <ul className="space-y-2 mb-4">
              {item.details.map((d, i) => (
                <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                  • {d}
                </li>
              ))}
            </ul>
            <a
              href={item.downloadHref}
              download={item.downloadFilename}
              className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/5"
            >
              <Download size={14} />
              {item.downloadLabel}
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Extracurricular;
