import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpeg";
import Footer from "../components/Footer";
import "../styles/home.css";
import "../styles/loading.css";
import CTA from "../components/cta";

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

  if (!data)
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );

  return (
    <>
      <title>{data.title}</title>

      {/* Logo & Hero */}
      <header className="header-hero">
        {/* LOGO BAR */}
        <div className="logo-bar">
          <img src={logo} alt="Cornerstone Logo" className="logo-small" />
        </div>

        {/* HERO SECTION */}
        <section className="hero-clean">
          <h1>{data.welcome}</h1>
        </section>
      </header>

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

        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default Home;
