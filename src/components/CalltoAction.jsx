import React from 'react';

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Section Heading */}
        <h2 className="cta-heading">Get Started with Your Bookkeeping</h2>
        
        {/* CTA Button */}
        <a href="/schedule-call" className="cta-button">Schedule a Call</a>
      </div>
    </section>
  );
};

export default CallToAction;
