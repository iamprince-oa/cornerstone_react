import React from "react";
import "../styles/footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {year}{" "}
          <strong>Cornerstone Development and Construction</strong>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
