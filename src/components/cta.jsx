import React from "react";
import "../styles/cta.css";

function CTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="info-card cta-card">
        <h2>Get in Touch</h2>
        <p>
          Have a project in mind or want to reach out for a consultation? We’d
          love to hear from you.
        </p>
        <a href="/contact" className="cta-btn">
          Contact Us
        </a>

        {/* Social Buttons */}
        <div className="social-buttons">
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn whatsapp"
            title="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="mailto:cornerstonedevelopmentcon@gmail.com"
            className="social-btn email"
            title="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
          <a
            href="https://instagram.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn instagram"
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn facebook"
            title="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default CTA;
