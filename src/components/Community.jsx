import React from "react";
import FeatureCard from "./FeatureCard";
import "../App.css"
export default function Community() {
  return (
    <section className="community-section">
      <h2>Manage your entire community in a single system</h2>
      <p>Who is Nexcent suitable for?</p>

      <div className="cards">
        <FeatureCard
          icon="👥"
          title="Membership Organisations"
          description="Our membership management software provides full automation of membership renewals and payments."
        />
        <FeatureCard
          icon="🏛️"
          title="National Associations"
          description="Our membership management software provides full automation of membership renewals and payments."
        />
        <FeatureCard
          icon="🎯"
          title="Clubs and Groups"
          description="Our membership management software provides full automation of membership renewals and payments."
        />
      </div>
    </section>
  );
}
