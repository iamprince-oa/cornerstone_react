import React, { useEffect, useState, lazy, Suspense } from "react";
import logo from "../assets/logo.jpeg";
import "../styles/home.css";
import "../styles/loading.css";
import { Helmet } from "react-helmet";

const Footer = lazy(() => import("../components/Footer"));
const CTA = lazy(() => import("../components/cta"));

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
      <div className="loading-wrapper" role="status" aria-live="polite">
        <div className="spinner" aria-hidden="true"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );

  return (
    <>
      {/* SEO and Social Meta */}
      <Helmet>
        <title>{data.title}</title>
        <meta
          name="description"
          content={data.description || "Cornerstone Development & Construction"}
        />
        <meta
          name="keywords"
          content="Construction, Real Estate, Land, Buildings, Apartments"
        />
        <meta name="author" content="Cornerstone Development" />
        <link rel="canonical" href="https://cornerstone.com/" />

        {/* Open Graph / Social */}
        <meta property="og:title" content={data.title} />
        <meta
          property="og:description"
          content={data.description || data.welcome}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={data.ogImage || "/default-og.jpg"} />
        <meta property="og:url" content="https://cornerstone.com/" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Cornerstone Development",
            url: "https://cornerstone.com/",
            logo: "https://cornerstone.com/logo.jpeg",
            sameAs: [
              "https://www.facebook.com/cornerstone",
              "https://www.twitter.com/cornerstone",
            ],
          })}
        </script>
      </Helmet>

      {/* Header / Hero */}
      <header className="header-hero">
        <div className="logo-bar">
          <img
            src={logo}
            alt="Cornerstone Development Logo"
            className="logo-small"
            loading="lazy"
          />
        </div>
        <section className="hero-clean">
          <h1>{data.welcome}</h1>
          {data.heroSubtitle && <p>{data.heroSubtitle}</p>}
        </section>
      </header>

      {/* Main Content */}
      <main className="home-content">
        <section className="info-card" aria-labelledby="vision-title">
          <h2 id="vision-title">Our Vision</h2>
          <p>{data.vision}</p>
        </section>

        <section className="info-card" aria-labelledby="mission-title">
          <h2 id="mission-title">Our Mission</h2>
          <p>{data.mission}</p>
        </section>

        <Suspense fallback={<div>Loading call-to-action...</div>}>
          <CTA />
        </Suspense>
      </main>

      <Suspense fallback={<div>Loading footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
