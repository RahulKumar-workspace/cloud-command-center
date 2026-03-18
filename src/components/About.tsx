import SectionHeading from "./SectionHeading";

const About = () => (
  <section id="about" className="section-spacing">
    
    
    {/* <div className="section-container">
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
    </div> */}

    {/* <div className="max-w-3xl mx-auto mt-8 space-y-4 text-muted-foreground leading-relaxed text-center">
  <p>
    I'm a prefinal-year Computer Science student at Lovely Professional University with a growing interest in{" "}
    <span className="text-foreground font-medium">cloud computing</span> and{" "}
    <span className="text-foreground font-medium">backend systems</span>.
  </p>
  <p>
    I’m currently learning by building projects and exploring how applications are
    deployed and scaled in real-world environments. I enjoy understanding how systems
    work behind the scenes rather than just using them.
  </p>
  <p>
    I focus on improving step by step - learning by doing, experimenting, and building
    consistently instead of just following theory.
  </p>
  <p>
    Beyond tech, I’ve gained experience through{" "}
    <span className="text-primary font-medium">AIESEC</span>, where I worked with teams,
    handled responsibilities, and developed communication and leadership skills that
    support my technical journey.
  </p>
</div> */}


      <div className="max-w-3xl mx-auto mt-8 space-y-4 text-muted-foreground leading-relaxed text-center">
  <p>
    I'm a prefinal-year Computer Science student at Lovely Professional University with a growing interest in{" "}
    <span className="text-foreground font-medium">cloud computing</span> and{" "}
    <span className="text-foreground font-medium">backend systems</span>, and how they power real-world applications.
  </p>
  <p>
    I’m currently learning by building projects and exploring how applications are deployed,
    managed, and scaled in real-world environments. I enjoy understanding how systems work
    behind the scenes rather than just using them at a surface level.
  </p>
  <p>
    My approach is simple - I focus on improving step by step by learning through hands-on
    practice, experimenting with ideas, and consistently building projects instead of relying
    only on theory.
  </p>
  <p>
    Beyond tech, I’ve gained valuable experience through{" "}
    <button onClick={() => document.querySelector('#extracurricular')?.scrollIntoView({ behavior: 'smooth' })} className="text-primary font-medium hover:underline cursor-pointer">AIESEC</button>, where I worked with teams,
    handled responsibilities, and developed strong communication and leadership skills
    that support my overall growth.
  </p>
</div>

  </section>
);

export default About;
