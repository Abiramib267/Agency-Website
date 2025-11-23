import React from "react";
import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import "../styles/Clients.css"

export default function Clients() {
  return (
    <section className="clients-section">
      <h2>Our Clients</h2>
      <p>We have been working with some Fortune 500+ clients</p>
      <div className="logos">
        <img className="client-logo" src={logo1} alt="client 1" />
        <img className="client-logo" src={logo2} alt="client 2" />
        <img className="client-logo" src={logo3} alt="client 3" />
        <img className="client-logo" src={logo4} alt="client 4" />
        <img className="client-logo" src={logo5} alt="client 5" />
        <img className="client-logo" src={logo6} alt="client 6" />
      </div>
    </section>
  );
}
