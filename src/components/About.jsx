function About() {
  return (
    <section id="about" className="section about-section visible">

      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Passionate developer with a love for creating amazing digital experiences
      </p>

      <div className="about-grid">
        {/* LEFT PROFILE CARD */}
        <div className="about-card profile-card">
          <div className="profile-header">
            <div className="avatar">S</div>
            <div>
              <h3>Sanjaya M</h3>
              <span className="role">Frontend Developer</span>
              <span className="status">● Available for projects</span>
            </div>
          </div>

          <p className="profile-text">
            I'm passionate about writing clean, efficient code and staying
            up-to-date with modern web technologies. I enjoy building responsive,
            user-friendly applications and continuously improving my skills.
          </p>
        </div>

        {/* RIGHT FEATURE CARDS */}
        <div className="feature-cards">
          <div className="about-card feature-card">
            <div className="icon">{"</>"}</div>
            <h4>Clean Code</h4>
            <p>
              Writing maintainable, scalable code using best practices and
              modern patterns.
            </p>
          </div>

          <div className="about-card feature-card">
            <div className="icon">🎨</div>
            <h4>UI/UX Design</h4>
            <p>
              Creating beautiful, user-centered digital experiences that feel
              intuitive and modern.
            </p>
          </div>
        </div>

        {/* SOCIAL CARD */}
        <div className="about-card social-card">
          <h4>Find me on</h4>
          <div className="social-icons">
            <a href="#">🐙</a>
            <a href="#">💼</a>
            <a href="#">📸</a>
            <a href="#">✈️</a>
            <a href="#">💬</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
