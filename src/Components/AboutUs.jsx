import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-container">
      <h2 className="about-us-heading">About Paradise Nursery</h2>
      <p className="about-us-tagline">Where Greenery Meets Serenity</p>
      <div className="about-us-content">
        <p>
          Welcome to <strong>Paradise Nursery</strong>, your trusted haven for healthy, vibrant houseplants. 
          Founded by plant enthusiasts, our mission is to bring the calming presence and life-enriching benefits of nature into every home, apartment, and workspace.
        </p>
        <p>
          We believe that surrounding yourself with greenery enhances productivity, reduces daily stress, and improves indoor air quality. Our carefully curated selection includes air-purifying champions, fragrant culinary and aromatic herbs, and effortless low-maintenance succulents suited for plant parents of all experience levels.
        </p>
        <p>
          Every houseplant in our collection is sustainably cultivated and inspected by our expert horticulturalists to ensure robust root systems and pristine foliage before arriving at your door. Start your green journey with Paradise Nursery today and cultivate your personal urban oasis!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
