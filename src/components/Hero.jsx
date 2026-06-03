import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Chaitra </h1>

      <h2>Aspiring Software Engineer</h2>

      <p>
        Computer Science Engineering student passionate about software
        development, AI, and building impactful technology solutions.
      </p>

      <div className="hero-buttons">
        <button>View Projects</button>
        <button>Resume</button>
        <button>GitHub</button>
      </div>
    </section>
  );
}

export default Hero;