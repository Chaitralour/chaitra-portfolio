import "./Skills.css";

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming</h3>
          <p>Python, Java, C++</p>
        </div>

        <div className="skill-card">
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React.js</p>
        </div>

        <div className="skill-card">
          <h3>Core CS</h3>
          <p>DSA, OOP, DBMS, OS, CN</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, MySQL, VS Code</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;