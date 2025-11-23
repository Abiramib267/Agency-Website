import React from "react";
import footer from "../assets/footer.png";
import "../styles/FooterDesign.css";

export default function FooterDesign() {
  return (
    <section className="footer-design">
      <div className="image">
        <img src={footer} alt="Footer design" />
      </div>
      <div className="text">
        <h2>How to design your site footer like we did</h2>
        <p>
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
          augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
          elit erat a magna.
        </p>
        <button className="learn-btn">Learn More</button>
      </div>
    </section>
  );
}
