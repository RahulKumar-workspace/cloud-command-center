import SectionHeading from "./SectionHeading";
import { BadgeCheck } from "lucide-react";

const certs = [
  "Prompt Engineering for ChatGPT",
  "The Bits and Bytes of Computer Networking",
  "Introduction to Hardware and Operating Systems",
  "Technical Support Fundamentals",
];

const Certifications = () => (
  <section id="certifications" className="section-spacing bg-surface/30">
    <div className="section-container">
      <SectionHeading label="Certifications" />
      <div className="grid sm:grid-cols-2 gap-4 mt-12 max-w-3xl mx-auto">
        {certs.map((c) => (
          <div
            key={c}
            className="flex items-start gap-3 bg-card border border-border rounded-xl p-5 card-hover"
          >
            <BadgeCheck size={20} className="text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm font-medium">{c}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
