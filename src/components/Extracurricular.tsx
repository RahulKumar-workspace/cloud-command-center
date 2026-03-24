import SectionHeading from "./SectionHeading";
import { Users, Heart, Eye } from "lucide-react";
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
    fileHref: "/aiesec-experience.pdf",
    fileName: "Experience Letter - Rahul Kumar.pdf",
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
    fileHref: "/sarayu-certificate.jpg",
    fileName: "Sarayu Certificate - Rahul Kumar.jpg",
  },
];

const Extracurricular = () => {
  const openInNewTab = (item: (typeof items)[number]) => {
    window.open(item.fileHref, "_blank");
  };

  return (
    <section id="extracurricular" className="section-spacing">
      <div className="section-container">
        <SectionHeading label="Leadership & Extracurricular" />
        <div className="grid md:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.org}
              className="bg-card border border-border rounded-xl overflow-hidden flex flex-col card-hover cursor-pointer"
              role="button"
              tabIndex={0}
              onClick={() => openInNewTab(item)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openInNewTab(item);
                }
              }}
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
                  className="self-start"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    openViewer(item);
                  }}
                >
                  <Eye size={14} /> View / Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <DocumentViewer
        open={Boolean(activeItem)}
        onClose={() => setActiveItem(null)}
        src={activeItem?.fileHref || ""}
        title={activeItem?.loeTitle || "Document"}
        downloadName={activeItem?.fileName || "document"}
      />
    </section>
  );
};

export default Extracurricular;
