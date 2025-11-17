import React, { useEffect, useState } from "react";
import ServiceCarousel from "../components/ServicesCarousel.jsx";
import "../styles/services.css";
import Footer from "../components/Footer";
import CTA from "../components/cta";
import "../styles/loading.css";
import * as Images from "../assets";

function Services() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/services/")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  if (!data)
    return (
      <div className="loading-wrapper">
        <div className="spinner"></div>
        <p className="loading-text">Loading services...</p>
      </div>
    );

  // Multiple images for each service
  const imageSets = {
    "Selling of lands": [Images.land4, Images.land5, Images.land6],
    "Selling of homes": [
      "/images/building1.jpg",
      "/images/building2.jpg",
      "/images/building3.jpg",
    ],
    "Renting of apartments": [
      "/images/apartment1.jpg",
      "/images/apartment2.jpg",
      "/images/apartment3.jpg",
    ],
    Construction: [Images.construc1, Images.land9, Images.land10],
  };

  return (
    <>
      <div className="services-page">
        <h1 className="services-title">Our Services</h1>

        <div className="services-grid">
          {data.services.map((service, index) => (
            <div className="service-card" key={index}>
              {/* Carousel */}
              <ServiceCarousel images={imageSets[service]} />

              <h2 className="service-name">{service}</h2>
              <p className="service-text">
                We offer expert help in {service.toLowerCase()} with full
                transparency and guidance.
              </p>
            </div>
          ))}
        </div>
        <CTA />
      </div>
      <Footer />
    </>
  );
}

export default Services;
