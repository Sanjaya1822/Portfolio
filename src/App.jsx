import { useEffect, useRef, useState } from 'react';
import './index.css';
import About from './components/About';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Java',
  'Python (Basic)',
  'PostgreSQL'
];

const projects = [
  {
    title: 'Campus Exchange',
    desc: 'Campus-based web platform for buying, selling, renting, and donating items using Java Servlets, JSP, and JDBC.',
    badge: 'Completed',
    badgeType: 'completed',
    features: [
      'User authentication and authorization',
      'Buy, sell, rent, and donate workflows',
      'Item listing and management',
      'Secure database operations'
    ],
    tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Skill Swap – Peer Learning Platform',
    desc: 'A full-stack web application where users can offer and request skill-based learning sessions. It includes user authentication, session booking, and efficient data handling.',
    badge: 'Full Stack',
    badgeType: 'fullstack',
    features: [
      'User authentication system',
      'Skill offering and requesting system',
      'Session booking functionality',
      'REST API integration',
      'Responsive UI'
    ],
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: '#'
  }
];

const certifications = [
  {
    title: 'HTML and CSS',
    issuer: 'Coursera',
    icon: '🌐',
    color: 'cert-blue'
  },
  {
    title: 'Introduction to Software Engineering',
    issuer: 'Coursera',
    icon: '💻',
    color: 'cert-purple'
  },
  {
    title: 'UI/UX Designing',
    issuer: 'Udemy',
    icon: '🎨',
    color: 'cert-pink'
  },
  {
    title: 'Java Programming',
    issuer: 'NPTEL',
    badge: '🥇 Gold',
    icon: '☕',
    color: 'cert-gold'
  }
];


function App() {
  const [visible, setVisible] = useState({});
  const sectionsRef = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.25 }
    );

    Object.values(sectionsRef.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
        <h1>Sanjaya M</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="hero"
        ref={(el) => (sectionsRef.current.hero = el)}
        className={`section hero ${visible.hero ? 'visible' : ''}`}
      >
        <span className="hero-badge">Hello, Everyone 👋</span>

        <h1 className="hero-title">Sanjaya M</h1>

        <h2 className="hero-subtitle">
          Frontend Developer. Modern Web, Simplified.
        </h2>

        <p className="hero-desc">
          I am an Information Technology student focused on building clean,
          responsive, and modern web applications using React.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn">Contact Me</a>
        </div>
      </section>

      {/* ABOUT (CONNECTED COMPONENT) */}
      <About />

      {/* SKILLS */}
      <section
        id="skills"
        ref={(el) => (sectionsRef.current.skills = el)}
        className={`section ${visible.skills ? 'visible' : ''}`}
      >
        <h2 className="section-title">Technical Skills</h2>
        <div className="cards-grid">
          {skills.map((skill, i) => (
            <div key={i} className="card">
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        ref={(el) => (sectionsRef.current.projects = el)}
        className={`section ${visible.projects ? 'visible' : ''}`}
      >
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A highlight of my academic and practical development work
        </p>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <div key={i} className={`project-card project-card-anim`} style={{ animationDelay: `${i * 0.15}s` }}>

              {/* IMAGE PLACEHOLDER */}
              <div className="project-image-placeholder">
                <span className="project-placeholder-icon">
                  {proj.tech.includes('React') ? '⚛️' : '🏫'}
                </span>
                <span className={`project-badge ${proj.badgeType}`}>{proj.badge}</span>
              </div>

              {/* CONTENT */}
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>

                <h4 className="project-subheading">Key Features</h4>
                <ul className="project-features">
                  {proj.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                <h4 className="project-subheading">Tech Stack</h4>
                <div className="tech-stack">
                  {proj.tech.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <a href={proj.link} className="project-btn" target="_blank" rel="noreferrer">
                    View Project →
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>



      {/* CERTIFICATIONS */}
      <section
        id="certifications"
        ref={(el) => (sectionsRef.current.certifications = el)}
        className={`section ${visible.certifications ? 'visible' : ''}`}
      >
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Credentials earned through dedicated learning and coursework
        </p>

        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <div key={i} className={`cert-card ${cert.color}`} style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <span className="cert-issuer">{cert.issuer}</span>
                {cert.badge && <span className="cert-gold-badge">{cert.badge}</span>}
              </div>
              <div className="cert-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
<section
  id="contact"
  ref={(el) => (sectionsRef.current.contact = el)}
  className={`section ${visible.contact ? 'visible' : ''}`}
>
  <h2 className="section-title">Contact</h2>
  <p className="section-subtitle">
    Let’s connect and build something meaningful
  </p>

  <div className="contact-card">
    <div className="contact-item">
      <span className="contact-label">Email</span>
      <a href="mailto:san9345420@gmail.com">
        san9345420@gmail.com
      </a>
    </div>

    <div className="contact-item">
      <span className="contact-label">LinkedIn</span>
      <a
        href="https://www.linkedin.com/in/sanjaya-m-085738349/"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/sanjaya-m
      </a>
    </div>

    <div className="contact-actions">
      <a href="mailto:san9345420@gmail.com" className="btn primary">
        Send Email
      </a>
      <a
        href="https://www.linkedin.com/in/sanjaya-m-085738349/"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        LinkedIn
      </a>
    </div>
  </div>
</section>

    </>
  );
}

export default App;
