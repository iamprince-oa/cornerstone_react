import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const location = useLocation();

  // DARK MODE
  useEffect(() => {
    if (isDark) document.body.classList.add("dark-mode");
    else document.body.classList.remove("dark-mode");
  }, [isDark]);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("darkMode", newDark);
    document.body.classList.toggle("dark-mode", newDark);
  };

  // AUTO-CLOSE MOBILE MENU ON RESIZE
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false); // Close burger when entering desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo-container">
          <Link to="/" className="logo-text">
            Cornerstone
            <span className="logo-subtitle">Development & Construction</span>
          </Link>
        </div>

        {/* Desktop Links + Toggle */}
        <div className="nav-right">
          <ul className="nav-links">
            <li>
              <Link to="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className={isActive("/about") ? "active" : ""}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={isActive("/services") ? "active" : ""}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={isActive("/contact") ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>

          <button
            onClick={toggleDarkMode}
            className="dark-toggle"
            aria-label="Toggle dark mode"
          >
            {isDark ? "Sun" : "Moon"}
          </button>
        </div>

        {/* Mobile Burger */}
        <button
          className={`burger ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <button onClick={toggleDarkMode} className="mobile-dark-toggle">
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
