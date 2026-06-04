import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Chaitra </h1>

      <h2>Software Developer | Computer Science Student</h2>

      <p>
        Computer Science Engineering student with hands-on experience in web development, machine learning, and software development through internships and academic projects.
      </p>

      <div className="hero-buttons">
        <a href="#projects">
  <button>View Projects</button>
</a>
        <a href="/resume/chaitrafinal.pdf" target="_blank" rel="noreferrer">
  <button>Resume</button>
</a>
        <a
  href="https://github.com/Chaitralour"
  target="_blank"
  rel="noreferrer"
>
  <button>GitHub</button>
</a>
      </div>
    </section>
  );
}

export default Hero;