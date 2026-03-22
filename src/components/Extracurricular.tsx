import SectionHeading from "./SectionHeading";
import { Users, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

import loeAiesec from "@/assets/loe-aiesec.png";
import loeSarayu from "@/assets/loe-sarayu.png";

const items = [
  {
    icon: <Users size={22} />,
    org: "AIESEC in Jalandhar",
    role: "Senior Manager – Team Leader",
    timeline: "August 2024 to August 2025",
    details: [
      "Managed a team of 10+ members while coordinating recruitment, onboarding, and international partnership operations.",
      "Worked with 30+ global entities and stakeholders.",
    ],
    loeImage: loeAiesec,
    loeTitle: "AIESEC Letter of Experience",
    downloadHref: "/aiesec-experience.pdf",
    downloadFilename: "Experience Letter - Rahul Kumar.pdf",
  },
  {
    icon: <Heart size={22} />,
    org: "Sarayu Foundation Public Charitable Trust",
    role: "Volunteer",
    timeline: "June 2024",
    details: [
      "Supported teaching initiatives for children and helped with WordPress-based digital updates for the foundation.",
    ],
    loeImage: loeSarayu,
    loeTitle: "Sarayu Foundation Certificate",
    downloadHref: "/sarayu-certificate.jpg",
    downloadFilename: "Sarayu Certificate - Rahul Kumar.jpg",
  },
];

const Extracurricular = () => (
  <section id="extracurricular" className="section-spacing">
    <div className="section-container">
      <SectionHeading label="Leadership & Extracurricular" />
      <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
        {items.map((item) => (
          <div
            key={item.org}
            className="bg-card border border-border rounded-xl overflow-hidden flex flex-col card-hover"
          >
            {/* Document Preview Image */}
            <div className="relative overflow-hidden">
              <img
                src={item.loeImage}
                alt={item.loeTitle}
                className="w-full h-44 object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-8 pt-5 flex flex-col flex-1">
              {/* Timeline */}
              <div className="text-xs text-muted-foreground font-medium mb-3">
                {item.timeline}
              </div>

              <div className="flex items-center gap-3 mb-1 text-primary">
                {item.icon}
                <h3 className="font-heading font-semibold text-base text-foreground">
                  {item.org}
                </h3>
              </div>

              <p className="text-sm text-primary font-medium mb-3">
                {item.role}
              </p>

              <ul className="space-y-2 mb-5 flex-1">
                {item.details.map((d, i) => (
                  <li
                    key={i}
                    className="text-sm text-muted-foreground leading-relaxed"
                  >
                    • {d}
                  </li>
                ))}
              </ul>

              <Button
                variant="gold-outline"
                size="sm"
                asChild
                className="self-start"
              >
                <a
                  href={item.downloadHref}
                  download={item.downloadFilename}
                >
                  <Download size={14} /> {item.loeTitle}
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Extracurricular;