import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

import certPromptEng from "@/assets/cert-prompt-engineering.png";
import certNetworking from "@/assets/cert-networking.png";
import certHardware from "@/assets/cert-hardware.png";
import certTechSupport from "@/assets/cert-technical-support.png";

const certs = [
  {
    name: "Prompt Engineering for ChatGPT",
    url: "https://www.coursera.org/account/accomplishments/verify/Z9ULRK0680Z0",
    image: certPromptEng,
    issuer: "Vanderbilt University",
  },
  {
    name: "The Bits and Bytes of Computer Networking",
    url: "https://www.coursera.org/account/accomplishments/verify/LZGB31CPULVA",
    image: certNetworking,
    issuer: "Google",
  },
  {
    name: "Introduction to Hardware and Operating Systems",
    url: "https://www.coursera.org/account/accomplishments/verify/72N8O7Z50CJ3",
    image: certHardware,
    issuer: "IBM",
  },
  {
    name: "Technical Support Fundamentals",
    url: "https://www.coursera.org/account/accomplishments/verify/9WYFNWB5AZLU",
    image: certTechSupport,
    issuer: "Google",
  },
];

const Certifications = () => (
  <section id="certifications" className="section-spacing bg-surface/30">
    <div className="section-container">
      <SectionHeading label="Certificates" />

      <div className="grid sm:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
        {certs.map((c) => (
          <a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card border border-border rounded-xl overflow-hidden card-hover group cursor-pointer"
          >
            <div className="relative overflow-hidden">
              <img
                src={c.image}
                alt={c.name}
                className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                <span className="text-xs font-medium text-primary flex items-center gap-1">
                  <ExternalLink size={14} /> View Certificate
                </span>
              </div>
            </div>
            <div className="p-5">
              <p className="text-xs text-primary font-medium mb-1">{c.issuer}</p>
              <h3 className="text-sm font-semibold leading-snug">{c.name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;