import React from "react";
import { FaPhoneAlt, FaClipboardList, FaRegFileAlt } from "react-icons/fa";
import SectionHeading from "./common/SectionHeading";

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <SectionHeading secTitle="How It Works ?" />
        <div className="steps-container">
          <div className="step">
            <div className="step-icon">
              <FaPhoneAlt />
            </div>
            <h3>1. Contact Us for a Consultation</h3>
            <p>
              Reach out to us through phone, email, or our website form. We’ll
              schedule a consultation to discuss your needs and how we can
              assist you.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">
              <FaClipboardList />
            </div>
            <h3>2. We Handle Your Bookkeeping</h3>
            <p>
              Our experts will take over your bookkeeping tasks, ensuring all
              your financial transactions are accurately recorded and managed.
            </p>
          </div>
          <div className="step">
            <div className="step-icon">
              <FaRegFileAlt />
            </div>
            <h3>3. Receive Regular Financial Reports</h3>
            <p>
              Get regular, detailed financial reports that help you track your
              business’s performance and make informed decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
