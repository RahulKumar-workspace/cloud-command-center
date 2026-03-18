import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download, ArrowDown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import profileImg from "@/assets/profile-placeholder.png";

const Hero = () => {
  const { toast } = useToast();

  const handlePhone = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = "tel:+916378965600";
    } else {
      navigator.clipboard.writeText("+91 6378965600");
      toast({ title: "📋 Copied", description: "+91 6378965600" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      {/* Gold ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />

      <div className="section-container relative z-10">
        {/* <div className="grid md:grid-cols-2 gap-12 items-center"> */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left – Text */}
          <div className="order-2 md:order-1 space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/40 text-primary text-xs font-medium tracking-wide animate-fade-up">
              ✦ Open to Opportunities
            </span>

            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-muted-foreground font-medium animate-fade-up" style={{ animationDelay: "0.1s" }}>
                Hi, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-up" style={{ animationDelay: "0.2s" }}>
                RAHUL <span className="gradient-text">KUMAR</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl font-heading font-semibold text-primary animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Aspiring Cloud & Android Developer
            </p>

            
            {/* <p className="text-muted-foreground max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
              CSE undergraduate building real-world projects in{" "}
              <span className="text-primary">Cloud &amp; DevOps</span>. Strong
              problem-solver with a passion for writing and communicating
              technical ideas clearly.
            </p>  */}

            <p className="text-muted-foreground max-w-md leading-relaxed animate-fade-up" style={{ animationDelay: "0.4s" }}>
              Prefinal-year Computer Science student exploring{" "}
              <span className="text-primary">Cloud &amp; DevOps</span>. I enjoy building
              projects to understand how real-world systems are designed and scaled.
            </p>



            {/* CTA */}
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              <Button variant="gold" size="lg" asChild>
                <a href="/resume.pdf" download="Resume - Rahul Kumar.pdf">
                  <Download size={16} /> Download Resume
                </a>
              </Button>
              <Button
                variant="gold-outline"
                size="lg"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects <ArrowDown size={16} />
              </Button>
            </div>

            {/* Social */}
            <div className="flex gap-3 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              <Button variant="social" size="icon" asChild>
                <a href="https://github.com/RahulKumar-workspace" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </Button>
              <Button variant="social" size="icon" onClick={handlePhone} aria-label="Phone">
                <Phone size={18} />
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://www.linkedin.com/in/108rahul-kumar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </Button>
              <Button variant="social" size="icon" asChild>
                <a href="https://mail.google.com/mail/?view=cm&to=rahulkumar.workspace@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                  <Mail size={18} />
                </a>
              </Button>
            </div>
          </div>



          {/* Right – Image */}
          <div className="order-1 md:order-2 flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            {/* Reduced max-width from 320px/420px to 240px/320px */}
            <div className="relative w-full max-w-[260px] md:max-w-[340px] aspect-[3/5] rounded-3xl overflow-hidden border border-primary/20 bg-card shadow-2xl transition-transform hover:scale-[1.05] duration-500">
              <img
                src={profileImg}
                alt="Rahul Kumar – Aspiring Cloud Engineer"
                // object-top ensures your head is visible, h-full/w-full keeps it from distorting
                className="w-full h-full object-cover object-top"
              />
              {/* Overlay glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/20 pointer-events-none" />
            </div>
          </div>


          
        </div>
      </div>
    </section>
  );
};

export default Hero;
