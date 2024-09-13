import React from "react";
import { servicesData } from "../utils/constant";
import SectionHeading from "../components/common/SectionHeading";
import HowItWorks from "../components/HowItWork";
import CallToAction from "../components/CalltoAction";

const HomePage = () => {
  return (
    <>
      <section class="banner-section">
        <div className="center-wr">
          <div class="hero-content">
            <h1>Your Finances, Our Priority</h1>
            <p>
              At Kalki Solution, we offer reliable bookkeeping, payroll
              management, tax solutions, and bill payment services to ensure
              your business runs smoothly and profitably. Let us handle the
              numbers while you focus on growth.
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="overlay"></div>
        </div>
      </section>
      {/* end banner section */}
      <section className="services-section">
        <div className="center-wr">
          <SectionHeading
            secTitle="Our Services"
            subTitle="We offer a range of financial solutions tailored to your business needs."
          />
          <div className="services-cards">
            {servicesData?.map((service, index) => (
              <div key={index} className="service-card">
                <div className="icon">
                  <service.icons />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href={service.link} className="learn-more">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* end service section */}
      <section className="why-choose-us-section">
        <div className="center-wr">
          {/* Section Heading */}
          <SectionHeading
            secTitle="Why Choose Us?"
            subTitle="Trusted Expertise in Financial Management"
          />
          <ul className="why-choose-us-list">
            <li>
              <span className="highlight">Experienced Professionals:</span>
              Our team consists of highly qualified accountants with years of
              experience in bookkeeping, payroll, and tax services.
            </li>
            <li>
              <span className="highlight">Accurate and Timely Reports:</span>
              We ensure timely delivery of financial reports with 100% accuracy,
              helping you make informed decisions.
            </li>
            <li>
              <span className="highlight">Cost-Effective Solutions:</span>
              Get high-quality services at competitive prices, ensuring value
              for your money.
            </li>
            <li>
              <span className="highlight">Client-Centric Approach:</span>
              We tailor our services to meet your specific financial needs,
              offering personalized consultations and support.
            </li>
            <li>
              <span className="highlight">Comprehensive Services:</span>
              From bookkeeping to bill payment, we manage all aspects of your
              finances so you can focus on growing your business.
            </li>
          </ul>
          <button className="read-more-button">Read More</button>
        </div>
      </section>
      {/* end why choose */}
      <section>
        <HowItWorks />
      </section>
      <section>
        <CallToAction />
      </section>
    </>
  );
};

export default HomePage;
