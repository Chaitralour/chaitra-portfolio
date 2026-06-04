import "./Experience.css";

function Experience() {
  return (
    <section>
      <h2>Experience</h2>

      <div className="experience-grid">

        <div className="experience-card">
          <h3>Web Development Intern | InternPE</h3>
          <span>Jul 2024 - Aug 2024</span>

          <p>
            Built responsive web applications including a Portfolio Website,
            To-Do List, and Calculator using HTML, CSS, and JavaScript.
          </p>
        </div>

        <div className="experience-card">
          <h3>Python Developer Intern | StaxTech</h3>
          <span>Jun 2024 - Jul 2024</span>

          <p>
            Engineered React.js applications using reusable components and
            modern front-end development practices.
          </p>
        </div>

        <div className="experience-card">
          <h3>Data Science Intern | CodSoft</h3>
          <span>Jul 2024 - Aug 2024</span>

          <p>
            Implemented machine learning projects including Iris
            Classification, Titanic Survival Prediction, and Fraud Detection.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;