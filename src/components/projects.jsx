import "./Projects.css";

function Projects() {
  return (
  <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        <div className="project-card">
          <h3>SkyBook - Airline Booking System</h3>
          <p className="tech-stack">
            Java • JSP • Servlets • MySQL
          </p>

          <p>
            Built a full-stack airline booking platform with authentication,
            booking management, CRUD operations, and database integration.
          </p>
        </div>

        <div className="project-card">
          <h3>AI-Based Face & Emotion Recognition</h3>
          <p className="tech-stack">
            Python • OpenCV • Machine Learning
          </p>

          <p>
            Developed a real-time face detection and emotion classification
            system using computer vision techniques.
          </p>
        </div>

        <div className="project-card">
          <h3>Smart Study Planner</h3>
          <p className="tech-stack">
            React.js • JavaScript • HTML • CSS
          </p>

          <p>
            Designed a task management platform with categorization,
            priority tracking, and local storage support.
          </p>
        </div>

        <div className="project-card">
          <h3>Tyre Pressure Monitoring System</h3>
          <p className="tech-stack">
            Arduino • Embedded Systems
          </p>

          <p>
            Built a real-time monitoring solution with sensor integration
            and automated alert mechanisms.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;