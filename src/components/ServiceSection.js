import React from 'react';
// import './ServiceSection.css';

const ServiceSection = () => {
  return (
    <section className="services">
      
      <h2>We Provide</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Web Design</h3>
          <p>Service description goes here.</p>
        </div>
        <div className="service-card">
          <h3>UI/UX Design</h3>
          <p>Service description goes here.</p>
        </div>
        <div className="service-card">
          <h3>SEO Marketing</h3>
          <p>Service description goes here.</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;