import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import Footer from "../components/Footer";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // initialize navigate

  // Auto-clear response after 5 seconds
  useEffect(() => {
    if (response) {
      const timer = setTimeout(() => setResponse(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [response]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        // Redirect to Thank You page with submission state
        navigate("/thank-you", { state: { submission: data.submission } });
      } else {
        setResponse(data.message || data.warning || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setResponse("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <title>Contact Us – Cornerstone</title>

      <main className="contact-page">
        <div className="contact-container">
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Have a project in mind or want to reach out for a consultation? We'd
            love to hear from you.
          </p>

          <form onSubmit={handleSubmit} className="contact-form" noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Project Inquiry"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                disabled={loading}
              />
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {response && (
            <p
              className={`response-msg ${
                response.includes("Thanks") ? "success" : "error"
              }`}
            >
              {response}
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
