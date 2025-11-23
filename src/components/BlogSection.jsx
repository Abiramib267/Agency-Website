import React from "react";
import blog1 from "../assets/blogs/blog1.png";
import blog2 from "../assets/blogs/blog2.jpg";
import blog3 from "../assets/blogs/blog3.jpg";
import "../styles/BlogSection.css";

export default function BlogSection() {
  return (
    <section className="blog-section">
      <h2>Caring is the new marketing</h2>
      <div className="blogs">
        <div className="blog-card">
          <img src={blog1} alt="Blog 1" />
          <h3>Creating Streamlined Safeguarding Processes</h3>
          <button>Readmore →</button>
        </div>
        <div className="blog-card">
          <img src={blog2} alt="Blog 2" />
          <h3>What are your safeguarding responsibilities?</h3>
          <button>Readmore →</button>
        </div>
        <div className="blog-card">
          <img src={blog3} alt="Blog 3" />
          <h3>Revamping the Membership Model</h3>
          <button>Readmore →</button>
        </div>
      </div>
    </section>
  );
}
