import React from "react";
import SectionHeading from "./common/SectionHeading";
const PrivacyPolicy = () => {
  return (
    <>
      <div className="privacy-policy">
        <SectionHeading secTitle="Privacy Policy" />
        <p className="mb-20 text-light">
          Bookkeeper.com focuses on implementing fair information practices that
          are designed to protect your privacy.
        </p>
        <p className="mb-20 text-light">
          You may have some concerns about the confidentiality of the
          information you provide to this office. It is our policy to keep your
          personal and business matters confidential to the extent permitted by
          law.
        </p>
        <p className="mb-20">
          Client Information, Privacy Policies and Notice Regarding
          Advisor-Client Privileged Communications
        </p>

        <p className="mb-20 text-light">
          The Federal Trade Commission has issued regulations that require tax
          preparation firms to provide an annual statement of firm privacy
          policies. Here is our policy:
        </p>

        <p className="mb-20 text-light">
          We handle all information you provide us with the utmost
          confidentiality. Your personal information will only be shared with
          members of our firm who need to know this information in order to
          complete the work you have hired our firm to do. We will not disclose
          your personal information to anyone outside our firm without your
          express written permission to do so, or unless we are legally required
          to do so. For example, if a mortgage lender contacts our office for a
          copy of your return or information about it, we will ask that you
          provide written permission prior to our responding to that request.
        </p>
        <p className="mb-20 text-light">
          You should also be aware that anything you tell us during the
          interview for the preparation of your tax return is confidential, but
          not protected from the IRS. Privileged communications (those that are
          protected from IRS authority to compel our testimony) are limited to
          non-criminal tax advice on matters before the IRS or non-criminal tax
          proceedings in federal courts. Although we consider any information
          you provide us as confidential, return preparation engagements are not
          covered by advisor-client privilege
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
