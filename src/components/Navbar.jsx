import React from "react";
import logo from "../assets/man.png";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Nav">
        <h3>Nexcent</h3>
        <nav>
          <a href="#Home">Home</a>
          <a href="#Service">Service</a>
          <a href="#Features">Features</a>
          <a href="#Product">Product</a>
          <a href="#Testimonial">Testimonial</a>
          <a href="#FAQ">FAQ</a>
        </nav>
        <h6>Login</h6>
        <button>Sign up</button>
      </div>

      <div className="Nav_content">
        <div className="text-content">
          <h1>
            Lessons and insights <br />
            <span>from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <button>Register</button>
        </div>

      
        <div className="image-content">
          <img src={logo} alt="man" />
        </div>
      </div>
    </>
  );
}
