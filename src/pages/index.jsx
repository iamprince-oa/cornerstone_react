import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import Footer from "../components/Footer";
import "../styles/home.css";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!data) return <p className="loading">Loading...</p>;

  return (
    <>
      <title>{data.title}</title>

      {/* Logo & Hero */}
      <section className="logo-bar">
        <img src={logo} alt="Cornerstone Logo" className="logo-small" />

        <section className="hero-clean">
          <h1>{data.welcome}</h1>
        </section>
      </section>

      {/* Main Content */}
      <main className="home-content">
        <section className="info-card">
          <h2>Our Vision</h2>
          <p>{data.vision}</p>
        </section>

        <section className="info-card">
          <h2>Our Mission</h2>
          <p>{data.mission}</p>
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
      </main>

      <Footer />
    </>
  );
}

export default Home;
