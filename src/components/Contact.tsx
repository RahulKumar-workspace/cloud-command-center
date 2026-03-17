import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Send, Calendar, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_zfv9aip",
        "template_a4kys8j",
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "Zmv0UDzM3k9wTP-rq"
      );

      toast({
        title: "✨ Message Sent",
        description: "Thanks for reaching out. I'll get back to you soon.",
        className: "bg-card border-primary/30 text-foreground shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]",
      });

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast({
        title: "Failed to send",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
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
              <a href="https://mail.google.com/mail/?view=cm&to=rahulkumar.workspace@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" /> rahulkumar.workspace@gmail.com
              </a>
              <a href="https://github.com/RahulKumar-workspace" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Github size={18} className="text-primary" /> github.com/RahulKumar-workspace
              </a>
              <a href="https://www.linkedin.com/in/108rahul-kumar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
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
            <input
              type="text"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
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
            <Button variant="gold" type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending..." : <><Send size={16} /> Send Message</>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
