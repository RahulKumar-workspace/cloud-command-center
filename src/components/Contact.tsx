import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, Calendar } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:rahulkumar.workspace@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="section-spacing">
      <div className="section-container">
        <SectionHeading label="Let's Connect" sub="Contact" />

        <div className="grid md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
          {/* Info */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to new opportunities, collaborations, and conversations about cloud engineering and technology.
            </p>

            <div className="space-y-4">
              <a href="mailto:rahulkumar.workspace@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" /> rahulkumar.workspace@gmail.com
              </a>
              <a href="https://github.com/RahulKumar-workspace" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} className="text-primary" /> github.com/RahulKumar-workspace
              </a>
              <a href="https://linkedin.com/in/rahul-kumar2025" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} className="text-primary" /> linkedin.com/in/rahul-kumar2025
              </a>
            </div>

            <Button variant="gold-outline" size="sm" asChild>
              <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer">
                <Calendar size={14} /> Book a Meeting
              </a>
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <Button variant="gold" type="submit" className="w-full">
              <Send size={16} /> Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
