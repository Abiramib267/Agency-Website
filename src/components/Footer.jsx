import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h3>Nexcent</h3>
        <p>Copyright © 2020 Nexcent</p>
      </div>
      <div className="footer-links">
        <a href="#">About us</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">Careers</a>
      </div>
      <div className="footer-newsletter">
        <h4>Stay up to date</h4>
        <input type="email" placeholder="Your email address" />
      </div>
    </footer>
  );
}
