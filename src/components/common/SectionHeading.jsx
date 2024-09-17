import React from "react";

const SectionHeading = ({ secTitle, subTitle , specialText }) => {
  return (
    <div className="section-heading">
      <h2 className="services-heading">{secTitle} {specialText && <span className="sp-text">{specialText}</span>}</h2>
      <p className="services-subheading">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
