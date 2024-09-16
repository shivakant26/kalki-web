import React from "react";
import PageBanner from "../components/common/banners/PageBanner";
const Carear = () => {
  return (
    <>
      <PageBanner bannerTitle="Careers" />
      <div className="career">
        <div className="center-wr">
          <h1 className="mb-20">Job Opportunity</h1>
          <p className="mb-20">
            Would you like to start a career with a firm that values teamwork
            and works to help clients reach their financial potential?
          </p>
          <p className="mb-20">
            Kalki Group is a fast-growing tax, accounting, and consulting
            firm that was founded, in 2024, with the purpose of helping
            individuals and small businesses reach their financial needs.
            Kalki Group values their employees and is committed to helping
            them reach their professional goals.
          </p>

          <p className="mb-20">
            If you are interested in joining our incredible team, please fill
            out the short application below. We look forward to hearing from
            you.
          </p>
          <p className="mb-20">Current Available Positions:</p>
        </div>
      </div>
    </>
  );
};

export default Carear;
