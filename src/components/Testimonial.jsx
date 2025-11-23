import React from "react";
import teslaLogo from "../assets/logos/tesla.jpg";
import "../styles/Testimonial.css";

export default function Testimonial() {
  return (
    <section className="testimonial">
      <img src={teslaLogo} alt="Tesla" className="testimonial-logo" />
      <p>
        Maecenas dignissim justo eget nulla rutrum molestie. Morbi blandit erat
        class aptent taciti sociosqu.
      </p>
      <h3>Tim Smith</h3>
      <span>British Dragon Boat Racing Association</span>
    </section>
  );
}
