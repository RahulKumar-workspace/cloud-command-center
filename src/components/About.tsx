import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="section-spacing">
    <div className="section-container">
      <SectionHeading label="About Me" />
      <div className="max-w-3xl mx-auto mt-8 space-y-4 text-muted-foreground leading-relaxed text-center">
        <p>
          I'm a Computer Science undergraduate at Lovely Professional University with a deep interest in{" "}
          <span className="text-foreground font-medium">cloud systems</span> and{" "}
          <span className="text-foreground font-medium">backend development</span>.
        </p>
        <p>
          I enjoy designing scalable architectures, working with AWS services, and building applications
          that solve real problems. My goal is to become a skilled Cloud Engineer who can architect and
          deploy resilient, production-grade infrastructure.
        </p>
        <p>
          Beyond engineering, I bring leadership experience from{" "}
          <span className="text-primary font-medium">AIESEC</span>, where I managed cross-functional teams
          and coordinated with global stakeholders — skills that complement my technical foundation.
        </p>
      </div>
    </div>
  </section>
);

export default About;
