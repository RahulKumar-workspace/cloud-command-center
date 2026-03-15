import SectionHeading from "./SectionHeading";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certs = [
  { name: "Prompt Engineering for ChatGPT", url: "https://www.coursera.org/account/accomplishments/verify/Z9ULRK0680Z0" },
  { name: "The Bits and Bytes of Computer Networking", url: "https://www.coursera.org/account/accomplishments/verify/LZGB31CPULVA" },
  { name: "Introduction to Hardware and Operating Systems", url: "https://www.coursera.org/account/accomplishments/verify/72N8O7Z50CJ3" },
  { name: "Technical Support Fundamentals", url: "https://www.coursera.org/account/accomplishments/verify/9WYFNWB5AZLU" },
];

const Certifications = () => (
  <section id="certifications" className="section-spacing bg-surface/30">
    <div className="section-container">
      <SectionHeading label="Certificates" />
      <div className="grid sm:grid-cols-2 gap-5 mt-14 max-w-3xl mx-auto">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-3 bg-card border border-border rounded-xl p-6 card-hover group cursor-pointer"
          >
            <BadgeCheck size={22} className="text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm font-medium flex-1">{c.name}</span>
            <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5" />
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
