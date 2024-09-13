import React from "react";

const SectionHeading = ({ secTitle, subTitle }) => {
  return (
    <div className="section-heading">
      <h2 className="services-heading">{secTitle}</h2>
      <p className="services-subheading">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
