import React from "react";
import PageBanner from "./common/PageBanner";
import PayrollImage from "../assets/images/work-togather.avif";
const Payroll = () => {
  return (
    <>
      <PageBanner bannerTitle="Pay Roll" />
      <div className="payroll">
        {/* <div className="center-wr"> */}
        <img src={PayrollImage} className="round" alt="payroll" />
          <p className="mb-20 text-light">
            Managing payroll may not seem like a critical task until something
            goes wrong. It can be time-consuming, but, more importantly, it
            requires a good knowledge of the tax laws and deposit rules.
          </p>
          <p className="mb-20 text-light">
            As a small business, it can be challenging to keep up with all of
            these tasks. In addition to paychecks, a professional payroll
            service can help generate the payroll forms that you require, file
            your payroll tax returns and more in order to help you keep your
            business running smoothly.
          </p>
          <h3 className="mb-20">Comprehensive Payroll Solutions</h3>
          <p className="mb-20 text-light">
            At kalki Group, our payroll services are designed to provide you
            with a comprehensive solution for managing your payroll duties. With
            our services, you will only need to provide your employee data, such
            as the hours that have been worked, employee address information and
            other related details. Once we receive the data, we'll handle the
            rest.
          </p>
          <p className="mb-20 text-light">
            Using a payroll service might not seem necessary for managing your
            payroll, until there is a problem. Correcting issues with payroll
            can be time-consuming and also requires a thorough understanding of
            the tax laws and deposit rules.
          </p>
          <p className="mb-20 text-light">
            Using a professional service like Kalki Group can take the headaches
            out of doing your payroll. We'll also monitor all applicable
            federal, state and local laws that may affect your tax filings.
            We’ll stay on top of these updates so that you will never have to
            worry about being left behind.
          </p>
          <h3 className="mb-20">Security and Compliance</h3>
          <p className="mb-20 text-light">
            When you work with us, you will also have the assurance of knowing
            that your data is secure. We adhere to the data security regulations
            as required by federal compliance agencies. These regulations ensure
            that your data is securely maintained and transmitted to the
            appropriate tax agencies
          </p>
        {/* </div> */}
      </div>
    </>
  );
};

export default Payroll;
