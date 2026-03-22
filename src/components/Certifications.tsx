import SectionHeading from "./SectionHeading";
import { ExternalLink, Download } from "lucide-react";

import certPromptEng from "@/assets/cert-prompt-engineering.png";
import certNetworking from "@/assets/cert-networking.png";
import certHardware from "@/assets/cert-hardware.png";
import certTechSupport from "@/assets/cert-technical-support.png";
import loeAiesec from "@/assets/loe-aiesec.png";
import loeSarayu from "@/assets/loe-sarayu.png";

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

const loes = [
  {
    name: "AIESEC Letter of Experience",
    org: "AIESEC in Jalandhar",
    image: loeAiesec,
    downloadHref: "/aiesec-experience.pdf",
    downloadFilename: "Experience Letter - Rahul Kumar.pdf",
  },
  {
    name: "Sarayu Foundation Certificate",
    org: "Sarayu Foundation Public Charitable Trust",
    image: loeSarayu,
    downloadHref: "/sarayu-certificate.jpg",
    downloadFilename: "Sarayu Certificate - Rahul Kumar.jpg",
  },
];

const Certifications = () => (
  <section id="certifications" className="section-spacing bg-surface/30">
    <div className="section-container">
      <SectionHeading label="Certificates" />

      {/* Course Certificates */}
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

      {/* Letters of Experience */}
      <h3 className="text-xl font-heading font-semibold text-center mt-16 mb-8">
        Letters of Experience
      </h3>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {loes.map((l) => (
          <div
            key={l.name}
            className="bg-card border border-border rounded-xl overflow-hidden card-hover group"
          >
            <div className="relative overflow-hidden">
              <img
                src={l.image}
                alt={l.name}
                className="w-full h-48 object-cover object-top transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-primary font-medium mb-1">{l.org}</p>
                <h3 className="text-sm font-semibold leading-snug">{l.name}</h3>
              </div>
              <a
                href={l.downloadHref}
                download={l.downloadFilename}
                className="flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors border border-primary/30 rounded-lg px-3 py-2 hover:bg-primary/5"
              >
                <Download size={14} />
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
