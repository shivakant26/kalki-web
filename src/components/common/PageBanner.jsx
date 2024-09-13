import React from "react";
const PageBanner = ({bannerTitle}) => {
  return (
    <div className="page-banner">
      <div className="center-wr">
        <div className="banner-text">
          <h1>{bannerTitle}</h1>
          <p>
            Have questions? Click the link below for our contact form or call us
            at 123654021 and let us show you how our expertise can save you
            money in the long run.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
