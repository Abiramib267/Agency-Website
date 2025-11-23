import React from "react";
import "../styles/Stats.css";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stat">
        <h2>2,245,341</h2>
        <p>Members</p>
      </div>
      <div className="stat">
        <h2>46,328</h2>
        <p>Clubs</p>
      </div>
      <div className="stat">
        <h2>828,867</h2>
        <p>Event Bookings</p>
      </div>
      <div className="stat">
        <h2>1,926,436</h2>
        <p>Payments</p>
      </div>
    </section>
  );
}
