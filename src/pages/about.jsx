import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "../styles/about.css";

function About() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/about/")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error(err));
  }, []);

  if (!data) return <p className="loading">Loading...</p>;

  return (
    <>
      <title>{data.title}</title>

      <span className="about-hero">
        <h1>About Cornerstone Development and Construction</h1>
        <p>{data.subtitle}</p>
      </span>

      <div className="about-content">
        <section className="info-card">
          <h2>Who We Are</h2>
          <p>
            <b>Cornerstone Development and Construction</b> is a property and
            building company focused on delivering genuine lands, quality homes,
            and reliable construction services. We support clients who want to
            invest, build, or settle with confidence.
          </p>
        </section>

        <section className="info-card">
          <h2>What We Do</h2>
          <p>
            Our work covers land sales in safe and well planned areas, sales of
            completed buildings, and full construction services from start to
            finish. We guide every client with clarity and honesty. Our team
            verifies all documents, handles site planning, and ensures that
            every project meets strong standards.
          </p>
        </section>

        <section className="info-card">
          <h2>Our Approach</h2>
          <p>
            Whether someone is buying land, choosing a home, or starting a
            building project, we keep the entire process simple and stress free.
            <b> Cornerstone Development and Construction</b> is built on trust,
            good service, and long term value.
          </p>
        </section>

        <section className="info-card">
          <h2>Our Goal</h2>
          <p>
            Our goal is to help families and businesses secure property that can
            grow with them for years to come.
          </p>
        </section>

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
      </div>

      <Footer />
    </>
  );
}

export default About;
