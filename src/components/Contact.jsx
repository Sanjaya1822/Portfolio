function Contact({ visible, sectionsRef }) {
  return (
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
  );
}

export default Contact;
