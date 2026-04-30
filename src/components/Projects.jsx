<div className="projects-grid">
  <div className="project-card">

    {/* IMAGE */}
    <div className="project-image">
      <img src="/project1.jpg" alt="Campus Exchange Project" />
      <span className="project-badge completed">Completed</span>
    </div>

    {/* CONTENT */}
    <div className="project-content">
      <h3 className="project-title">Campus Exchange</h3>

      <p className="project-desc">
        Campus-based web platform for buying, selling, renting, and donating
        items, built for students with secure authentication and item
        management.
      </p>

      {/* FEATURES */}
      <h4 className="project-subheading">Key Features</h4>
      <ul className="project-features">
        <li>User authentication & authorization</li>
        <li>Buy, sell, rent & donate workflows</li>
        <li>Item listing and management</li>
        <li>Secure database operations</li>
      </ul>

      {/* TECH STACK */}
      <h4 className="project-subheading">Tech Stack</h4>
      <div className="tech-stack">
        <span className="tech-badge">Java</span>
        <span className="tech-badge">JSP</span>
        <span className="tech-badge">Servlets</span>
        <span className="tech-badge">JDBC</span>
        <span className="tech-badge">PostgreSQL</span>
      </div>

      {/* ACTION */}
      <div className="project-footer">
        <a
          href="#"
          className="project-btn"
          target="_blank"
          rel="noreferrer"
        >
          View Project →
        </a>
      </div>
    </div>
  </div>
</div>
